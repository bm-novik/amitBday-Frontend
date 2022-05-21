import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import {useRsvpGetData} from "../hooks/useRSVPData";
import {
    Alert,
    Box,
    Button,
    CircularProgress,
    Divider,
    Snackbar,
    Stack,
    TextField,
    Typography,
    useTheme
} from "@mui/material";
import {useState} from "react";

const columns = [
    {
        id: 'name',
        label: 'שם מלא',
        minWidth: 170,
        align: 'right',
    },
    {
        id: 'plus_one',
        label: 'מגיע.ה עם בן.ת זוג',
        minWidth: 100,
        align: 'right',
        format: (value) => value.toLocaleString('en-US'),
    },
    {
        id: 'gust_name',
        label: 'שם בן.ת הזוג',
        minWidth: 170,
        align: 'right',
        format: (value) => value.toLocaleString('en-US'),
    },
    {
        id: 'song',
        label: 'שיר שתבצע.י',
        minWidth: 170,
        align: 'right',
        format: (value) => value.toLocaleString('en-US'),
    },
    {
        id: 'comment',
        label: 'הערה',
        minWidth: 170,
        align: 'right',
        format: (value) => value.toFixed(2),
    },
];


export const RsvpPage = () => {
    const [authentication, setAuthenticayion] = useState(false)
    const [code, setCode] = useState('')
    const [openAlert, setOpenAlert] = useState(false);

    const {isSuccess, isLoading, data} = useRsvpGetData()
    const theme = useTheme()

    // const handleClick = () => {
    //     console.log(code)
    //     if (code === 'kingAmit') {
    //         setAuthenticayion(true)
    //         refetch()
    //     } else {
    //         setOpenAlert(true)
    //         setCode('')
    //     }
    // }
    //
    // const handleCloseAlert = (event, reason) => {
    //     if (reason === 'clickaway') {
    //         return;
    //     }
    //
    //     setOpenAlert(false);
    // };


    return (
        <>
            <Typography
                variant={'h3'}
                sx={{
                    color: '#f64171',
                    justifyContent: 'center',
                    display: 'flex',
                    [theme.breakpoints.down("sm")]: {fontSize: '3ch'},
                }}
            >
                AMITMULEDET RSVP LIST
            </Typography>
            <Divider/>

            {/*{!authentication &&*/}
            {/*    <Box*/}
            {/*    sx={{*/}
            {/*        display: 'flex',*/}
            {/*        flexDirection: 'column',*/}
            {/*        justifyContent: 'center',*/}
            {/*        alignItems: 'stretch',*/}
            {/*        width: '40%',*/}
            {/*        margin: 'auto'*/}

            {/*    }}>*/}
            {/*    <TextField*/}
            {/*        id="standard-password-input"*/}
            {/*        label="Password"*/}
            {/*        type="password"*/}
            {/*        autoComplete="current-password"*/}
            {/*        variant="standard"*/}
            {/*        value={code}*/}
            {/*        onChange={(e) => setCode(e.target.value)}*/}
            {/*        onKeyUp={(e) => e.key === 'Enter' ? handleClick() : null}*/}
            {/*    />*/}
            {/*        <Button style={{marginTop: '2ch'}} onClick={handleClick} variant="outlined">Submit</Button>*/}
            {/*        <Snackbar open={openAlert} autoHideDuration={6000} onClose={handleCloseAlert}>*/}
            {/*            <Alert onClose={handleCloseAlert} severity="error" sx={{ width: '100%' }}>*/}
            {/*                Wrong Password try again*/}
            {/*            </Alert>*/}
            {/*        </Snackbar>*/}
            {/*    </Box>*/}
            {/*}*/}

            {isLoading &&
                <Stack sx={{color: 'grey.500'}} spacing={2} direction="row">
                    <CircularProgress color="secondary"/>
                    <CircularProgress color="success"/>
                    <CircularProgress color="inherit"/>
                </Stack>
            }
            {isSuccess &&
                <Paper sx={{width: '100%', overflow: 'hidden'}}>
                    <TableContainer
                        sx={{
                            // maxHeight: 440
                            height: "100%"
                        }}>
                        <Table stickyHeader aria-label="sticky table">
                            <TableHead>
                                <TableRow>
                                    {columns.map((column) => (
                                        <TableCell
                                            key={column.id}
                                            align={column.align}
                                            style={{minWidth: column.minWidth}}
                                        >
                                            {column.label}
                                        </TableCell>
                                    ))}
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {data?.data.map((row) => (
                                    <TableRow
                                        key={row.name}
                                        sx={{'&:last-child td, &:last-child th': {border: 0}}}
                                    >
                                        <TableCell align="right" component="th" scope="row">
                                            {row.name}
                                        </TableCell>
                                        <TableCell align="right">{row.plus_one ? "כן" : "לא"}</TableCell>
                                        <TableCell align="right">{row.guest_name}</TableCell>
                                        <TableCell align="right">{row.song}</TableCell>
                                        <TableCell align="right">{row.comment}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Paper>
            }
        </>
    );
}
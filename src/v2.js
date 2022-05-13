import Image from "mui-image";
import {BdayCountdown} from "./hooks/BdayCountdown";
import {Box, Container, Paper, Typography, useTheme} from "@mui/material";
import {Text} from "./components/text/Text";
import {Form} from "./components/Form";


export const VersionTwo = () => {
    const theme = useTheme();
    return (
        <>

            <Image src={`${'wide-after-crop.jpeg'}?w=293&h=293&fit=crop&auto=format`}/>
            <Paper
                sx={{
                    display: 'flex',
                    backgroundColor: '#231f20',
                    maxHeight: '29ch',
                    borderRadius: 0,
                    justifyContent: "center",
                    justifyItem: "center",
                    fontSize: '10vw',
                    color: '#63efce',
                    fontFamily: 'Koulen',
                    fontWeight: 500,
                }}>
                <BdayCountdown/>
            </Paper>
            <Box
                sx={{
                    backgroundColor: '#ffffff',
                    padding: '6ch'
                }}
            >
                <Box
                sx={{position: 'relative',
                top: '3.5ch',
                // [theme.breakpoints.down("md")]: {top: '2.5ch'},
                    [theme.breakpoints.down("sm")]: {top: '1ch'},
                }}
                >
                    <Typography
                        variant="h1"
                        sx={{
                            whiteSpace: 'pre-line',
                            fontFamily: 'Secular One',
                            fontSize: '6vw',
                            color: '#4dccae',
                            display: 'flex',
                            justifyContent: 'center',
                            marginBottom: '1ch',
                            [theme.breakpoints.down("sm")]: {fontSize: '5vw'},
                        }}>
                        ליידיס אנד ג'נטלמנס יקרים שלי!
                    </Typography>
                    <Typography
                        variant="h1"
                        style={{
                            whiteSpace: 'pre-line',
                            fontFamily: 'Secular One',
                            fontSize: '5vw',
                            color: '#4dccae',
                            display: 'flex',
                            justifyContent: 'center',
                        }}>
                        ✨✨הללויה! ✨✨
                    </Typography>
                </Box>
                <Container
                    sx={{
                        backgroundColor: '#effefb',
                        paddingTop: '3ch',
                        paddingBottom: '3ch',
                    }}
                >
                    <Text/>
                </Container>
            </Box>
            <Box
                sx={{
                    backgroundImage: 'url(\'background.webp\')',
                    padding: '12ch',
                    display: 'flex',
                    justifyContent: 'center',
                    [theme.breakpoints.down("sm")]: {paddingRight: 0, paddingLeft: 0},

                }}>

                <Box
                    sx={{
                        backgroundColor: '#8db6c5',
                        maxWidth: '100ch',
                        padding: '0.5ch',
                    }}>

                    <Box
                        sx={{
                            border: '0.25ch',
                            borderStyle: 'solid',
                            borderColor: 'white',
                            padding: '3ch',
                        }}>
                        <Form/>
                    </Box>
                </Box>
            </Box>
        </>


    );
};

// #4dccae
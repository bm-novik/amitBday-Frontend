import Box from '@mui/material/Box';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import SportsScoreIcon from '@mui/icons-material/SportsScore';
import AppRegistrationRoundedIcon from '@mui/icons-material/AppRegistrationRounded';
import {useNavigate} from "react-router-dom";
import TableRowsIcon from '@mui/icons-material/TableRows';
import LoginIcon from '@mui/icons-material/Login';
import {useRecoilValue,} from "recoil";
import {authSelector} from "../../recoil/atomStore";
import QuestionMarkSharpIcon from '@mui/icons-material/QuestionMarkSharp';


export const SpeedDialNavigator = () => {
    const navigate = useNavigate()
    const auth = useRecoilValue(authSelector)

    const actions = [
        { icon: <AppRegistrationRoundedIcon />, name: 'admin' },
        { icon: <LoginIcon />, name: 'login' },
        { icon: <TableRowsIcon />, name: 'rsvp' },
        { icon: <SportsScoreIcon />, name: 'score' },
        { icon: <QuestionMarkSharpIcon />, name: 'authState' },
    ];

    return (
        <Box sx={{width:'100%', transform: 'translateZ(0px)', flexGrow: 1 }}>
            <SpeedDial
                ariaLabel="SpeedDial navigation"
                sx={{ position: 'absolute', bottom: 16, left: 16 }}
                icon={<SpeedDialIcon />}
            >
                {actions.map((action) => (
                    <SpeedDialAction
                        key={action.name}
                        icon={action.icon}
                        tooltipTitle={action.name}
                        onClick={() => action.name==='authState' ?  console.log(auth) : navigate(`${action.name}`)}
                    />
                ))}
            </SpeedDial>
        </Box>
    );
}

import {styled} from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import {MY_TURQUOISE} from "../../utils/config";


const StyledEventConfirmTypography = styled(Typography)(({theme}) => ({
    fontFamily: 'Secular One',
    alignContent: 'center',
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center',
    color: 'white',
}));

export const StyledEventInfoTypography = styled(StyledEventConfirmTypography)(({theme}) => ({
    [theme.breakpoints.down("sm")]: {fontSize: '1.3ch'}
}));

export const StyledConfirmTitleTypography = styled(StyledEventConfirmTypography)(({theme}) => ({
    fontSize: '5vw',
}));

export const StyledEventConfirmListItemTypography = styled(Typography)(({theme}) => ({
    fontFamily: 'Secular One',
    alignContent: 'center',
    alignItems: 'center',
    '&. MuiTypography-root': {
        [theme.breakpoints.down("sm")]: {fontSize: '4.5vw'}
    },
}));

export const StyledTextTypography = styled(Typography)(({theme}) => ({
    whiteSpace: 'pre-line',
    fontFamily: 'Secular One',
    color: MY_TURQUOISE,
    display: 'flex',
    justifyContent: 'center',
}));

export const StyledTextHeaderTypography = styled(StyledTextTypography)(({theme}) => ({
    marginBottom: '1ch',
    fontSize: '6vw',
    [theme.breakpoints.down("sm")]: {fontSize: '5vw'},
}));

export const StyledTextSecondaryHeaderTypography = styled(StyledTextTypography)(({theme}) => ({
    fontSize: '5vw',
}));

export const StyledCardMediaHeaderTypography = styled(Typography)(({theme}) => ({
    fontFamily: "'Sen', sans-serif",
    fontWeight: 800,
    color: '#fff',
    [theme.breakpoints.up(1375)]: {top: "380px", fontSize: '2rem'},
    [theme.breakpoints.down(1375)]: {top: "380px", fontSize: '2rem'},
    [theme.breakpoints.down(990)]: {top: "320px", fontSize: '1.5rem'},
    [theme.breakpoints.down(800)]: {top: "250px", fontSize: '1.5rem'},
    [theme.breakpoints.down(595)]: {top: "190px", fontSize: '1rem'},
    [theme.breakpoints.down(400)]: {top: "120px", fontSize: '1rem'},
    position: 'absolute',
    direction: 'ltr',
    zIndex: 1,
}));

import {styled} from "@mui/material/styles";
import Box from "@mui/material/Box";


export const StyledTextAreaBox = styled(Box)(({theme}) => (
    {
        backgroundColor: '#ffffff',
        padding: '6ch'
    }
));

export const StyledHeaderAreaBox = styled(Box)(({theme}) => (
    {
        position: 'relative',
        top: '3.5ch',
        [theme.breakpoints.down("sm")]: {top: '1ch'},
    }
));

export const StyledPlusBackgroundBox = styled(Box)(({theme}) => (
    {
        backgroundImage: 'url(\'background.webp\')',
        padding: '12ch',
        display: 'flex',
        justifyContent: 'center',
        [theme.breakpoints.down("sm")]: {paddingRight: 0, paddingLeft: 0},
    }
));

export const StyledOuterConfirmationBox = styled(Box)(({theme}) => (
    {
        backgroundColor: '#8db6c5',
        maxWidth: '100ch',
        padding: '0.5ch',

    }
));

export const StyledInnerConfirmationBox = styled(Box)(({theme}) => (
    {
        border: '0.25ch',
        borderStyle: 'solid',
        borderColor: 'white',
        padding: '3ch',
    }
));

export const StyledCardBox = styled(Box)(({theme}) => (
    {
        overflow: 'hidden',
        borderTopLeftRadius: '1.5rem',
        borderTopRightRadius: '1.5rem',
        zIndex: 1,
        '&:after': {
            content: '""',
            position: 'absolute',
            display: 'block',
            width: '100%',
            height: '90%',
            background: 'linear-gradient(to top,  hsl(205deg 22% 85%), hsl(205deg 24% 63%), hwb(0deg 100% 0%), hsl(205deg 22% 85%))',
            [theme.breakpoints.up(1375)]: {top: "420px", },
            [theme.breakpoints.down(1375)]: {top: "420px", },
            [theme.breakpoints.down(990)]: {top: "350px", },
            [theme.breakpoints.down(800)]: {top: "280px", },
            [theme.breakpoints.down(595)]: {top: "210px", },
            [theme.breakpoints.down(400)]: {top: "140px",},
        },
    }
));

export const StyledFormBox = styled(Box)(({theme}) => (
    {
        // marginTop: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '80%',

        [theme.breakpoints.down(595)]: {width: '100%' },

    }
));
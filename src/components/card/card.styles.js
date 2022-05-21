import {styled} from "@mui/material/styles";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";


export const StyledRatingListCard = styled(Card)(({theme}) => (
    {
        margin: 'auto',
        minWidth: 320,
        position: 'relative',
        boxShadow: '0 8px 24px 0 rgba(0,0,0,0.12)',
        overflow: 'visible',
        borderRadius: '1.5rem',
        transition: '0.4s',
        '&:hover': {
            transform: 'translateY(-2px)',
            '& $shadow': {
                bottom: '-1.5rem',
            },
            '& $shadow2': {
                bottom: '-2.5rem',
            },
        },
        '&:before': {
            content: '""',
            position: 'absolute',
            zIndex: 0,
            display: 'block',
            width: '100%',
            bottom: -1,
            height: '100%',
            borderRadius: '1.5rem',
            backgroundColor: 'rgba(0,0,0,0.08)',
        },
    }
));

export const StyledRatingMediaHeaderCard = styled(CardMedia)(({theme}) => (
    {
        [theme.breakpoints.up(1375)]: {height: "420px"},
        [theme.breakpoints.down(1375)]: {height: "420px"},
        [theme.breakpoints.down(990)]: {height: "350px"},
        [theme.breakpoints.down(800)]: {height: "280px"},
        [theme.breakpoints.down(595)]: {height: "210px"},
        [theme.breakpoints.down(400)]: {height: "140px"},
    }
));


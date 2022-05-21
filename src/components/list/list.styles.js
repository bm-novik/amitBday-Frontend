import {styled} from "@mui/material/styles";
import List from '@mui/material/List';


export const StyledRatingList = styled(List)(({theme}) => (
    {
        width: '100%',
        maxWidth: 360,
        bgcolor: '#fff'
    }
));
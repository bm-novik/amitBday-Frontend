import {styled} from "@mui/material/styles";
import Avatar from "@mui/material/Avatar";


export const StyledScoreAvatar = styled(Avatar)(({theme}) => (
    {
        background: '#ffffff',
        color: '#000',
        borderColor: '#e31010',
        fontFamily: 'Assistant',
        border: 'groove',
    }
));

export const StyledScoreSmallAvatar = styled(StyledScoreAvatar)(({theme}) => (
    {
            border: '0.25ch',
            width: 32,
            height: 32,

    }
));


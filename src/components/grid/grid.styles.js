import {styled} from "@mui/material/styles";
import {Grid} from "@mui/material";


export const StyledRowAvatarGridContainer = styled(Grid)(({theme}) => ({
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "flex-end"
    }
));

export const StyledAvatarWithTextGridItem = styled(Grid)(({theme}) => ({
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    }
));


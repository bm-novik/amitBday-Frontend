import {styled} from "@mui/material/styles";
import {TextField} from "@mui/material";
import {MY_PINK} from "../../utils/config";


export const styledConfirmFormTextField = styled(TextField)(() => ({
    '& .MuiInputBase-input': {
        color: 'white',
    }, '& label.Mui-focused': {
        color: 'white',
    },
    '& MuiFormLabel-root-MuiInputLabel-root': {
        color: 'white',
    },
    '& .MuiInput-underline:after': {
        borderBottomColor: 'white',
    },
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
            borderColor: 'white',
        },
        '&:hover fieldset': {
            borderColor: 'white',
        },
        '&.Mui-focused fieldset': {
            borderColor: MY_PINK,
        },
    },
}));

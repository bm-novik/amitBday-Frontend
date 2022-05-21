
import Button from "@material-ui/core/Button";
import {styled} from "@mui/material/styles";


export const FormSubmitButton = styled(Button)(({theme}) => ({
    fontFamily: 'Secular One',
    marginTop: '2ch',
    backgroundColor: '#231f20',
    color: 'white',
    width: '100%',
    fontSize: '3ch',
    ":hover": { backgroundColor: "white", color: '#231f20'}
}));
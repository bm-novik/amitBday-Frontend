
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

export const ReviewDirectButton = styled(Button)(({theme}) => ({
    fontFamily: 'Secular One',
    backgroundColor: '#231f20',
    color: 'white',
    width: '100%',
    fontSize: '3ch',
    zIndex: 1,
    borderRadius: 0,
    borderTop: 'solid',
    borderBottom: 'solid',
    borderColor: '#fff',
    boxShadow: 2,
    ":hover": { backgroundColor: "white", color: '#231f20'}
}));

export const ScoreDirectButton = styled(FormSubmitButton)(({theme}) => ({
    marginTop: 0,
    marginBottom: '1.25ch',
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderTop: 'solid',
    borderColor: '#fff',
    borderTopWidth: 'medium'
}));
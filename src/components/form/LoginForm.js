import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import {useState} from "react";
import {MY_PINK} from "../../utils/config";
import {useLoginData} from "../../hooks/useRSVPData";
import {StyledFormBox} from "../box/box.styles";


export const Login = () => {
    const [password, setPassword] = useState('')

    const {mutate} = useLoginData()

    const handleSubmit = (event) => {
        event.preventDefault();
        if (password) {
            mutate({password: password})
        }
    }

    return (
        <StyledFormBox >

            <Box
                component="form"
                onSubmit={handleSubmit}
                sx={{
                    mt: 1,
                    direction: 'ltr',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'stretch',
                    alignContent: 'stretch',
                    width: '100%',
                }}>
                <TextField
                    sx={{backgroundColor: '#fff'}}
                    margin="normal"
                    fullWidth
                    value={password}
                    name="password"
                    label="What is your Phone number ?"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                    onChange={(e) => setPassword(e.target.value)}
                />
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{
                        mt: 3, mb: 2, direction: 'ltr', backgroundColor: MY_PINK,
                        '&: hover': {backgroundColor: MY_PINK,}
                    }}
                >
                    Start ranking !
                </Button>

            </Box>
        </StyledFormBox>

    );
}
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import {MY_PINK} from "../../utils/config";
import {useSignupData} from "../../hooks/useRSVPData";
import {useFormik} from "formik";
import {StyledFormBox} from "../box/box.styles";


export const Signup = () => {

    const onSuccess = () => {
        formik.resetForm()
    }

    const {mutate} = useSignupData (onSuccess)

    const initialValues = {
        first_name: '',
        last_name: '',
        password: '',

    }

    const onSubmit = (values) => {
        mutate(values)
    }

    const formik = useFormik({
        initialValues: initialValues,
        onSubmit,
    });

    return (
        <StyledFormBox>

            <Box component="form" onSubmit={formik.handleSubmit} sx={{mt: 1, direction: 'ltr'}}>
                <TextField
                    margin="normal"
                    fullWidth
                    value={formik.values.first_name}
                    name="first_name"
                    label="What is your first name ?"
                    type="text"
                    id="password"
                    autoComplete="current-password"
                    onChange={formik.handleChange}

                />
                <TextField
                    margin="normal"
                    fullWidth
                    value={formik.values.last_name}
                    name="last_name"
                    label="And last name ?"
                    type="text"
                    id="last_name"
                    onChange={formik.handleChange}

                />
                <TextField
                    margin="normal"
                    fullWidth
                    value={formik.values.password}
                    name="password"
                    label="Phone number and we are done."
                    type="text"
                    id="password"
                    onChange={formik.handleChange}

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
                    SINGUP NOW !
                </Button>

            </Box>
        </StyledFormBox>
    )
}
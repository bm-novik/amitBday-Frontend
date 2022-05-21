import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import {MY_PINK} from "../../utils/config";
import {useAddSongData} from "../../hooks/useRSVPData";
import {useFormik} from "formik";
import {StyledFormBox} from "../box/box.styles";


export const AddSong = () => {

    const onSuccess = () => {
        formik.resetForm()
    }

    const {mutate} = useAddSongData (onSuccess)

    const initialValues = {
        singer: '',
        song: '',
    }

    const onSubmit = (values) => {
        // console.log(values)
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
                    value={formik.values.singer}
                    name="singer"
                    label="Who is going to sing ?"
                    type="text"
                    id="singer"
                    onChange={formik.handleChange}

                />
                <TextField
                    margin="normal"
                    fullWidth
                    value={formik.values.song}
                    name="song"
                    label="Song name ?"
                    type="text"
                    id="song"
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
                    THE STAGE IS YOURS !
                </Button>

            </Box>
        </StyledFormBox>
    )
}
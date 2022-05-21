import { FormControlLabel, Grid, Radio, RadioGroup, TextField } from "@mui/material";
import { useFormik } from "formik";
import { styled } from "@mui/material/styles";
import { useRsvpData } from "../../hooks/useRSVPData";
import { MY_PINK } from "../../utils/config";
import { StyledEventInfoTypography,
    StyledConfirmTitleTypography,
    StyledEventConfirmListItemTypography
 } from "../typography/TypographyControl";
import { FormSubmitButton } from "../button/ButtonControl";


const MyTextField = styled(TextField)({
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
});



export const RsvpForm = ({setConfirm}) => {

    const onSuccess = () => {
        formik.resetForm()
        setConfirm(true)
    }

    const {mutate} = useRsvpData (onSuccess)

    const initialValues = {
        name: '',
        plus_one: 'alone',
        song: '',
        comment: '',
        guest_name: '',
    }

    const onSubmit = (values) => {
        const data = {
            "name": formik.values.name,
            "plus_one": formik.values.plus_one !== 'alone' ,
            "song": formik.values.song,
            "comment": formik.values.comment,
            "guest_name": formik.values.guest_name,
        }
        mutate(data)
    }


    const formik = useFormik({
        initialValues: initialValues,
        onSubmit,
    });

    return (
        <Grid container component='form' autoComplete="off" onSubmit={formik.handleSubmit}>
            <Grid container>
                <Grid item sx={{width: '100%'}} >
                    <StyledEventInfoTypography>
                        - יום שני, 23.5.22|בשעה 20:00 |במיאון דה מייק, נמל תל אביב -
                    </StyledEventInfoTypography>
                </Grid>
            </Grid>

            <Grid container>
                <Grid item sx={{width: '100%'}} >
                    <StyledConfirmTitleTypography>
                         אישור הגעה
                    </StyledConfirmTitleTypography>
                </Grid>
            </Grid>

            <Grid container
            sx={{marginBottom: '1ch'}}
            >
                <Grid item xs={2}>
                    <StyledEventConfirmListItemTypography>
                        שם מלא
                    </StyledEventConfirmListItemTypography>
                </Grid>

                <Grid item xs={6}>
                    <MyTextField
                        fullWidth
                        id="name"
                        name="name"
                        value={formik.values.name}
                        onChange={formik.handleChange}
                        sx={{fontFamily: 'Secular One', width: '160%'}}
                    />
                </Grid>
            </Grid>


            <Grid container>
                <Grid item xs={2}>
                    <StyledEventConfirmListItemTypography>
                        שיר שתבצע
                    </StyledEventConfirmListItemTypography>
                </Grid>

                <Grid item xs={6}>
                    <MyTextField
                        fullWidth
                        id="song"
                        name="song"
                        value={formik.values.song}
                        onChange={formik.handleChange}
                        sx={{fontFamily: 'Secular One', width: '160%'}}
                    />
                </Grid>
            </Grid>

            <Grid container>
                <Grid item xs={3} />

                <Grid item xs={6}>
                    <RadioGroup
                        aria-labelledby="demo-controlled-radio-buttons-group"
                        name="controlled-radio-buttons-group"

                        value={formik.values.plus_one}
                        onChange={(event) => formik.setFieldValue('plus_one', event.target.value)}
                        sx={{
                            '& .MuiTypography-root': {direction: 'rtl', color: 'white'},
                            '& .MuiButtonBase-root': {direction: 'rtl', color: 'white'},
                            '& .MuiRadio-root.Mui-checked': {direction: 'rtl', color: MY_PINK},
                        }}
                    >
                        <FormControlLabel sx={{marginRight: 0}} value="alone" control={<Radio/>} label="מגיע.ה לבד"/>
                        <FormControlLabel sx={{marginRight: 0}} value="+1" control={<Radio/>} label="מגיע.ה עם בן/ת זוג"/>
                    </RadioGroup>

                </Grid>
            </Grid>
            {formik.values.plus_one === 'alone' ? null :
                <Grid container
                      sx={{marginBottom: '1ch'}}
                >
                    <Grid item item xs={2}>
                        <StyledEventConfirmListItemTypography>
                            שם בן הזוג
                        </StyledEventConfirmListItemTypography>
                    </Grid>

                    <Grid item xs={6}>
                        <MyTextField
                            fullWidth
                            id="guest_name"
                            name="guest_name"
                            value={formik.values.guest_name}
                            onChange={formik.handleChange}
                            sx={{fontFamily: 'Secular One', width: '160%'}}
                        />
                    </Grid>
                </Grid>
            }
            <Grid container>
                <Grid item xs={3}>
                    <StyledEventConfirmListItemTypography>
                        הערות/שאלות/בקשות/מחמאות/אחר:
                    </StyledEventConfirmListItemTypography>
                </Grid>
            </Grid>

            <Grid container>
                <Grid item xs={6}>
                    <MyTextField
                        id="comment"
                        name="comment"
                        fullWidth
                        multiline
                        rows={2}
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        sx={{fontFamily: 'Secular One', width: '194%'}}
                    />
                </Grid>
            </Grid>
            <FormSubmitButton
                type='submit'
            >
                אישור
            </FormSubmitButton>
        </Grid>
    )
}


import Image from "mui-image";
import {AddSong, Login, Signup} from "../components/form/FormControl";
import {Divider, Typography} from "@mui/material";


export const AdminFormsPage = () => {
    return (
        <>
            <Image src={`${'narrow.jpeg'}?w=293&h=293&fit=crop&auto=format`}/>
            <Typography sx={{display:'flex', justifyContent: 'center', marginTop: 1,}} variant={'h3'}>Login</Typography>
            <Login />
            <Divider variant="fullWidth"  />
            <Typography sx={{display:'flex', justifyContent: 'center', marginTop: 1,}} variant={'h3'}>Add Song</Typography>
            <AddSong />
            <Divider variant="fullWidth" />
            <Typography sx={{display:'flex', justifyContent: 'center', marginTop: 1,}} variant={'h3'}>Singup</Typography>
            <Signup />

        </>
    );
};

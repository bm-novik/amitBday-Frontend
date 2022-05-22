import Image from "mui-image";
import {AddSong, Login, Signup} from "../components/form/FormControl";
import {Divider, Switch, Typography} from "@mui/material";
import {useChangePermissionData, useViewPermissionData} from "../hooks/useRSVPData";
import {useState} from "react";


export const AdminFormsPage = () => {
    const [checked, setChecked] = useState(false)

    const onSuccess = (data) => {
        setChecked(permissionData?.data[0]?.permission)
    }

    const {data: permissionData} = useViewPermissionData(onSuccess)
    const {mutate} = useChangePermissionData()



    const handleChange = () => {
        setChecked(!checked)
        mutate({permission: !checked})

    };

    return (
        <>
            <Image src={`${'narrow.jpeg'}?w=293&h=293&fit=crop&auto=format`}/>
            <Switch
                checked={checked}
                onChange={handleChange}
                inputProps={{ 'aria-label': 'controlled' }}
            />
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

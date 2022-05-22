import Image from "mui-image";
import {AddSong, Login, Signup} from "../components/form/FormControl";
import {Divider, Switch, Typography} from "@mui/material";
import {useChangePermissionData, useViewPermissionData} from "../hooks/useRSVPData";
import {useState} from "react";


export const AdminFormsPage = () => {
    const {data: permissionData} = useViewPermissionData()
    const {mutate} = useChangePermissionData()

    const [checked, setChecked] = useState(permissionData?.data?.permission || false)

    const handleChange = () => {
        console.log('in handle')
        setChecked(!checked)
        mutate({permission: !checked})

    };
    console.log(permissionData?.data[0]?.permission)
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

import {Routes, Route} from "react-router-dom"
import {VersionTwo} from "./pages/MainV2.page"
import {RsvpPage} from "./pages/Rsvp.page";
import {useTheme} from "@mui/material";
import {ThemeProvider} from '@material-ui/core'
import {RatingPage} from "./pages/Rating.page";
import {Login} from "./components/form/LoginForm";
import Box from "@material-ui/core/Box";
import {AuthenticationCheck} from "./PathControl";
import {AdminFormsPage} from "./pages/AdminForms.page";
import {Calculation} from "./pages/Calculation.page";
import {useRecoilState} from "recoil";
import {authSelector} from "./recoil/atomStore";
import {SpeedDialNavigator} from "./components/speedDial/SpeedDial";

function App() {
    const [auth, setAuth] = useRecoilState(authSelector)
    const theme = useTheme();

    return (
        <ThemeProvider theme={theme}>
            <Box>

                <Routes>
                    <Route path="/" element={<VersionTwo/>}/>
                    <Route path="login" element={<Login/>}/>

                    <Route path="admin" element={
                        <AuthenticationCheck superUserOnly={true}>
                            <AdminFormsPage/>
                        </ AuthenticationCheck>}/>

                    <Route path="rsvp" element={
                        <AuthenticationCheck superUserOnly={true}>
                            <RsvpPage/>
                        </ AuthenticationCheck>}/>

                    <Route path="rating" element={
                        <AuthenticationCheck>
                            <RatingPage/>
                        </ AuthenticationCheck>}/>

                    <Route path="score" element={
                        <AuthenticationCheck>
                            <Calculation/>
                        </ AuthenticationCheck>}/>
                </Routes>
                {auth.superUser && <SpeedDialNavigator/>}
            </Box>
        </ThemeProvider>
    );
}

export default App;

import {Routes, Route} from "react-router-dom"
import {VersionTwo} from "./pages/MainV2.page"
import {RsvpPage} from "./pages/Rsvp.page";
import {useTheme} from "@mui/material";
import {ThemeProvider} from '@material-ui/core'
import {RatingPage} from "./pages/Rating.page";
import {SpeedDialNavigator} from "./components/speedDial/SpeedDial";
import {Login} from "./components/form/LoginForm";
import Box from "@material-ui/core/Box";
import {AuthenticationCheck} from "./PathControl";
import {AdminFormsPage} from "./pages/AdminForms.page";
import {Calculation} from "./pages/Calculation.page";

function App() {
    const theme = useTheme();
    return (
        <ThemeProvider theme={theme}>
            <Box sx={{}}>
                <Routes>
                    <Route path="/" element={<VersionTwo/>}/>
                    <Route path="Admin" element={<AdminFormsPage/>}/>
                    <Route path="login" element={<Login/>}/>
                    <Route path="rsvp" element={<RsvpPage/>}/>
                    <Route path="rating" element={
                        <AuthenticationCheck>
                            <RatingPage/>
                        </ AuthenticationCheck>}/>
                    <Route path="score" element={<Calculation/>}/>
                </Routes>
                <SpeedDialNavigator/>
            </Box>
        </ThemeProvider>
    );
}

export default App;

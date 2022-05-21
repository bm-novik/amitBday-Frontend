import {useState} from "react";
import Image from "mui-image";
import { Container } from "@mui/material";
import {Text} from "../components/text/Text";
import {RsvpForm} from "../components/form/RsvpForm";
import {BdayCountDown} from "../components/countDown/BdayCountDown";
import {CounterPaper} from "../components/paper/PaperControl";
import {StyledTextAreaBox,
    StyledHeaderAreaBox,
    StyledOuterConfirmationBox,
    StyledInnerConfirmationBox,
    StyledPlusBackgroundBox
} from "../components/box/BoxControl";
import {MY_GREEN_TURQUOISE} from "../utils/config";
import {StyledTextHeaderTypography, StyledTextSecondaryHeaderTypography} from "../components/typography/TypographyControl";



export const VersionTwo = () => {
    const [confirm, setConfirm] = useState(false)

    return (
        <>
            <Image src={`${'wide-after-crop.jpeg'}?w=293&h=293&fit=crop&auto=format`}/>
            <CounterPaper>
                <BdayCountDown/>
            </CounterPaper>
            <StyledTextAreaBox>
                <StyledHeaderAreaBox>
                    <StyledTextHeaderTypography
                        variant="h1"
                        >
                        ליידיס אנד ג'נטלמנס יקרים שלי!
                    </StyledTextHeaderTypography>
                    <StyledTextSecondaryHeaderTypography
                        variant="h1"
                        >
                        ✨✨הללויה! ✨✨
                    </StyledTextSecondaryHeaderTypography>
                </StyledHeaderAreaBox>
                <Container
                    sx={{
                        backgroundColor: MY_GREEN_TURQUOISE,
                        paddingTop: '3ch',
                        paddingBottom: '3ch',
                    }}
                >
                    <Text/>
                </Container>
            </StyledTextAreaBox>
            <StyledPlusBackgroundBox >
                <StyledOuterConfirmationBox>
                    <StyledInnerConfirmationBox>
                        {confirm ?  <Image src={`${'confirm.jpeg'}?w=293&h=293&fit=crop&auto=format`}/> : <RsvpForm setConfirm={setConfirm}/> }
                    </StyledInnerConfirmationBox>
                </StyledOuterConfirmationBox>
            </StyledPlusBackgroundBox>
        </>
    );
};

// #4dccae
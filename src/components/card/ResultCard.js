import CardContent from '@mui/material/CardContent';
import {Grid} from "@mui/material";
import {StyledScoreAvatar, StyledScoreSmallAvatar} from "../avatar/AvatarControl";
import {
    StyledResultSingerNameTypography,
    StyledResultSongNameTypography
} from "../typography/TypographyControl";
import {StyledResultCardDivider} from "../divider/DividerControl";
import {StyledRowAvatarGridContainer} from "../grid/GridControl";
import {StyledResultCard} from "./CardControl";


export const ResultCard = ({result, index}) => {
    return (
        <StyledResultCard
            sx={(index === 0) ?
                {border: 'outset', borderColor: '#ffd700'} :
                (index === 1) ?
                    {border: 'outset', borderColor: '#c0c0c0'} :
                    (index === 2) ?
                        {border: 'outset', borderColor: '#CD7F32'} : {}
            }
        >
            <CardContent
                sx={{width: '35ch'}}
            >
                <StyledResultSingerNameTypography gutterBottom>
                    {result?.singer}
                </StyledResultSingerNameTypography>

                <StyledResultSongNameTypography
                    variant="h5"
                    component="div"
                >
                    {result?.song_name}
                </StyledResultSongNameTypography>
                <StyledResultCardDivider variant="middle"/>
                <StyledRowAvatarGridContainer
                    container
                    spacing={2}
                >
                    <Grid item>
                        <StyledScoreSmallAvatar sx={{borderLeft: 'groove'}}>
                            {result?.judges_score}
                        </StyledScoreSmallAvatar>
                    </Grid>

                    <Grid item>
                        <StyledScoreAvatar>
                            {result?.overall_score}
                        </StyledScoreAvatar>
                    </Grid>

                    <Grid item>
                        <StyledScoreSmallAvatar sx={{borderRight: 'groove'}}>
                            {result?.audience_score}
                        </StyledScoreSmallAvatar>
                    </Grid>
                </StyledRowAvatarGridContainer>
            </CardContent>
        </StyledResultCard>
    );
};

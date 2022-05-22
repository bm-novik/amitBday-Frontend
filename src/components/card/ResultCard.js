import CardContent from '@mui/material/CardContent';
import {StyledScoreAvatar, StyledScoreSmallAvatar} from "../avatar/AvatarControl";
import {
    StyledAvatarInfoTypography,
    StyledResultSingerNameTypography,
    StyledResultSongNameTypography
} from "../typography/TypographyControl";
import {StyledResultCardDivider} from "../divider/DividerControl";
import {StyledAvatarWithTextGridItem, StyledRowAvatarGridContainer} from "../grid/GridControl";
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
                sx={{width: '25ch'}}
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
                    <StyledAvatarWithTextGridItem item>
                        <StyledScoreSmallAvatar sx={{borderLeft: 'groove'}}>
                            {result?.judges_score}
                        </StyledScoreSmallAvatar>
                        <StyledAvatarInfoTypography>
                            דירוג השופטים
                        </StyledAvatarInfoTypography>
                    </StyledAvatarWithTextGridItem>

                    <StyledAvatarWithTextGridItem item>
                        <StyledScoreAvatar>
                            {result?.overall_score}
                        </StyledScoreAvatar>
                        <StyledAvatarInfoTypography>
                            תוצאה סופית
                        </StyledAvatarInfoTypography>
                    </StyledAvatarWithTextGridItem>

                    <StyledAvatarWithTextGridItem item
                          sx={{
                              display: 'flex',
                              flexDirection: 'column',
                              alignItems: 'center',
                          }}>
                        <StyledScoreSmallAvatar sx={{borderRight: 'groove'}}>
                            {result?.audience_score}
                        </StyledScoreSmallAvatar>
                        <StyledAvatarInfoTypography>
                            דירוג הצופים
                        </StyledAvatarInfoTypography>
                    </StyledAvatarWithTextGridItem>
                </StyledRowAvatarGridContainer>
            </CardContent>
        </StyledResultCard>
    );
};

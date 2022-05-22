import {Fragment, useEffect, useState} from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import {StyledRatingList} from "./ListControl";
import {lightGreen, red, green, yellow} from "@mui/material/colors";
import {StarRating} from "../rating/StarRating";
import {Divider, Stack} from "@mui/material";
import {RatingCountDown} from "../countDown/RatingCountDown";
import {useAddRatingData} from "../../hooks/useRSVPData";


const avatarColor = {
    1: red['A700'],
    2: red['A400'],
    3: red['A200'],
    4: red['A100'],
    5: green['A100'],
    6: lightGreen['A100'],
    7: green['A200'],
    8: lightGreen['A200'],
    10: green['A400'],
    12: '#ffd700'
}

export const AlignItemsList = ({song}) => {
    const [avatarText, setAvatarText] = useState('?')
    const [startTimer, setStartTimer] = useState(false)
    const [lockRating, setLockRating] = useState(false)

    useEffect(() => {
        if (song.was_rated) {
            setAvatarText(song.was_rated)
            setLockRating(true)
        }
    }, []);

    const onSettled = (data) => {console.log(data)}
    const {mutate} = useAddRatingData(onSettled)



    const getScore = (score) => {
        if (score) {
            score = (score === 10) ? 12 : (score === 9) ? 10 : score
            setAvatarText(score)

        }
    }

    return (
        <StyledRatingList>
            <ListItem alignItems="flex-start">

                <ListItemAvatar sx={{minWidth: '45px', marginLeft: '1ch', marginBottom: '4ch'}}>
                    {startTimer ?
                        <RatingCountDown start={startTimer}
                                         setStartTimer={setStartTimer}
                                         setLockRating={setLockRating}
                                         mutate={mutate}
                                         avatarText={avatarText}
                                         songId={song.id}
                        />
                        :
                        <Avatar sx={{bgcolor: avatarColor[avatarText]}}>{avatarText}</Avatar>
                    }

                </ListItemAvatar>

                <Stack>
                    <ListItemText
                        sx={{
                            display: 'flex',
                            alignItems: 'flex-start',
                            flexDirection: 'column',
                        }}
                        primary={song.song}
                        secondary={
                            <Fragment>
                                <Typography
                                    sx={{display: 'flex', justifyContent: 'flexStart'}}
                                    component="span"
                                    variant="body2"
                                    color="text.primary"
                                >
                                    {song.singer}
                                </Typography>

                            </Fragment>
                        }
                    />
                    <StarRating getScore={getScore}
                                setStartTimer={setStartTimer}
                                lockRating={lockRating}
                                initialValue={song.was_rated ? song.was_rated : null}
                    />
                </Stack>
            </ListItem>
            <Divider variant="inset" component="li" />
        </StyledRatingList>
    );
}
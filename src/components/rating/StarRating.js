import Rating from '@mui/material/Rating';
import Box from '@mui/material/Box';
import StarIcon from '@mui/icons-material/Star';
import {useState} from "react";

const labels = {
    1: 'Un Point',
    2: 'Deux Points',
    3: 'Trois Points',
    4: 'quatre Points',
    5: 'cinq Points',
    6: 'six Points',
    7: 'sept Points',
    8: 'huit Points',
    9: 'dix Points',
    10: 'Douze Points !',
};

const getLabelText = (value) => {
    return `${value} Point${value !== 1 ? 's' : ''}, ${labels[value]}`;
}

export const StarRating = ({getScore, setStartTimer, lockRating, initialValue=null}) => {
    const [value, setValue] = useState(initialValue);
    const [hover, setHover] = useState(-1);

    const handleChange = (event, newValue) => {
        if (!lockRating) {
            if (!initialValue) setStartTimer(true)

            if (newValue !== null) {
                getScore(newValue)
                setValue(newValue)
            }
        }
    }

    return (
        <Box
            sx={{
                width: 200,
                display: 'flex',
                alignItems: 'center',
                flexDirection: 'row-reverse',
                flexWrap: 'wrap'
            }}
        >
            <Rating
                name="hover-feedback"
                value={value}
                precision={1}
                max={10}
                getLabelText={getLabelText}
                sx={{flexDirection: 'row-reverse',}}
                onChange={handleChange}
                onChangeActive={(event, newHover) => {
                if (!lockRating) setHover(newHover);
                }}
                emptyIcon={<StarIcon style={{opacity: 0.55}} fontSize="inherit"/>}
            />
            {value !== null && (
                <Box sx={{ml: 2, direction: 'ltr',}}>{labels[hover !== -1 ? hover : value]}</Box>
            )}
        </Box>
    );
}
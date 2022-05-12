import Countdown from "react-countdown";

import {zeroPad} from 'react-countdown';


export const BdayCountdown = () => {
    const Completion = () => <span>You are good to go!</span>;

    const renderer = ({days, hours, minutes, seconds, completed}) => {
        if (completed) {
            // Render a complete state
            return <Completion/>;
        } else {
            return <span> {zeroPad(days)}:{zeroPad(hours)}:{zeroPad(minutes)}:{zeroPad(seconds)}</span>
        }
    }

    const bDay = Date.parse(new Date(2022, 4, 23, 8,0, 0))
    console.log(new Date(2022, 4, 23))
    return (
        <Countdown
            date={bDay}
            intervalDelay={0}
            precision={3}
            renderer={renderer}
        />
    );
};



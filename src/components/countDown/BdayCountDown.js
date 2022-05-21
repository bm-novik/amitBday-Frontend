import Countdown from "react-countdown";

import {zeroPad} from 'react-countdown';
import {Login} from "../form/LoginForm";


export const BdayCountDown = () => {
    const Completion = () => <Login />;

    const renderer = ({days, hours, minutes, seconds, completed}) => {
        if (completed) {
            // Render a complete state
            return <Completion />;
        } else {
            return <span> {zeroPad(days)}:{zeroPad(hours)}:{zeroPad(minutes)}:{zeroPad(seconds)}</span>
        }
    }

    const bDay = Date.parse(new Date(2022, 4, 23, 20,0, 0))
    return (
        <Countdown
            date={bDay}
            intervalDelay={0}
            precision={3}
            renderer={renderer}
        />
    );
};



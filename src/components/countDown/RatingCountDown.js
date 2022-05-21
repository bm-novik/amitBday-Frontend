import {CountdownCircleTimer} from "react-countdown-circle-timer";


const renderTime = ({remainingTime}) => {
    if (remainingTime === 0) {
        return <div style={{fontSize: "1.5ch", textAlign: 'center', direction: 'ltr'}}>Too lale...</div>;
    }

    return (
        <div style={{textAlign: 'center'}}>
            <div style={{fontSize: "3ch"}}>{remainingTime}</div>
        </div>
    );
};

export const RatingCountDown = ({start, setStartTimer, setLockRating, mutate, avatarText, songId}) => {

    const handleComplete = () => {
        setLockRating(true)
        setStartTimer(false)
        mutate({
            song: songId,
            rating: avatarText
        })
    }

    return (
        <CountdownCircleTimer
            isPlaying={start}
            duration={10}
            size={50}
            strokeWidth={4}
            colors={["#087700", "#f7f301", "#ffbb76", "#A30000"]}
            colorsTime={[10, 6, 3, 0]}
            onComplete={handleComplete}
        >
            {renderTime}
        </CountdownCircleTimer>
    );
}

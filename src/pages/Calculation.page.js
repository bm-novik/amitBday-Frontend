import {useCalcData} from "../hooks/useRSVPData";
import {ResultCard} from "../components/card/ResultCard";
import Image from "mui-image";
import {ScoreDirectButton} from "../components/button/button.styles";
import {useNavigate} from "react-router-dom";

export const Calculation = () => {
    const navigate = useNavigate()
    const {data} = useCalcData()

    return (
        <>
                <Image src={`${'nerrow-after-crop2.jpeg'}?w=293&h=293&fit=crop&auto=format`}/>
            <ScoreDirectButton
                onClick={() => navigate('/rating')}
            >אני רוצה לחזור לדרג</ScoreDirectButton>

            {data?.data?.map((result, index) => (
                <ResultCard key={result.song_id}
                            result={result}
                            index={index}/>
            ))}
        </>
    );
}
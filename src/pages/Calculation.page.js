import {useCalcData} from "../hooks/useRSVPData";
import {ResultCard} from "../components/card/ResultCard";
import Image from "mui-image";

export const Calculation = () => {

    const {data} = useCalcData()
    return (
        <>
                <Image  sx={{marginBottom: '1.25ch'}}
                       src={`${'nerrow-after-crop2.jpeg'}?w=293&h=293&fit=crop&auto=format`}/>

            {data?.data?.map((result, index) => (
                <ResultCard key={result.song_id}
                            result={result}
                            index={index}/>
            ))}
        </>
    );
}
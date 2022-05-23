import {useSignupData} from "./hooks/useRSVPData";

const dataSet = [
    {
        first_name: "מירית",
        last_name: "אטיאס",
        password: "0535225244"
    },
    {
        first_name: "רעות",
        last_name: "הלל",
        password: "0546977556"
    },
    {
        first_name: "איציק",
        last_name: "בן משולם",
        password: "0545724939"
    },
    {
        first_name: "אדם",
        last_name: "יוסף",
        password: "0544856444"
    },
    {
        first_name: "אדם",
        last_name: "זוארץ",
        password: "0528085229"
    },
    {
        first_name: "לירון",
        last_name: "בונן",
        password: "0524414935"
    },
    {
        first_name: "שיר",
        last_name: "לרנר חג'אג",
        password: "0502290122"
    },
    {
        first_name: "יוסי",
        last_name: "חג'אג",
        password: "0547295986"
    },
    {
        first_name: "שירלי",
        last_name: "רחמוט",
        password: "0522905016"
    },
    {
        first_name: "ניר",
        last_name: "יפת",
        password: "0506767784"
    },
    {
        first_name: "לינור",
        last_name: "יפת",
        password: "0507775227"
    },
    {
        first_name: "הדס",
        last_name: "אבישי",
        password: "0506496811"
    },
    {
        first_name: "כפיר",
        last_name: "אבישי",
        password: "0543332169"
    },
    {
        first_name: "אורית",
        last_name: "גרנשטיין",
        password: "0506999002"
    },
    {
        first_name: "אריק",
        last_name: "גרנשטיין",
        password: "0545800918"
    },
    {
        first_name: "גליה",
        last_name: "לוי",
        password: "0543026868"
    },
    {
        first_name: "רינת",
        last_name: "עטריאן",
        password: "0505919872"
    },
    {
        first_name: "רוני",
        last_name: "וגנר",
        password: "0523170030"
    },
    {
        first_name: "תום",
        last_name: "לוי",
        password: "0543242424"
    },
    {
        first_name: "שני",
        last_name: "גל שוקרון",
        password: "0549370584"
    },
    {
        first_name: "ניר",
        last_name: "שוקרון",
        password: "0523333334"
    },
    {
        first_name: "קורין",
        last_name: "שרעבי",
        password: "0547103616"
    },
    {
        first_name: "אופיר",
        last_name: "שרעבי",
        password: "0507212994"
    },
    {
        first_name: "אוראל",
        last_name: "שרעבי",
        password: "0543551066"
    },
    {
        first_name: "מורן",
        last_name: "שריג",
        password: "0506691423"
    },
    {
        first_name: "אהוד",
        last_name: "שגב",
        password: "0524883883"
    },
    {
        first_name: "קובי",
        last_name: "יחיה",
        password: "0545941166"
    },
    {
        first_name: "טלי",
        last_name: "שחם",
        password: "0524617879"
    },
    {
        first_name: "מור",
        last_name: "קורן",
        password: "0545740733"
    },
    {
        first_name: "טליה",
        last_name: "דמארי",
        password: "0506565097"
    },
    {
        first_name: "גלעד",
        last_name: "ליפשיץ",
        password: "0523818296"
    },
    {
        first_name: "ענבל",
        last_name: "בן יעקב",
        password: "0545882602"
    },
    {
        first_name: "מעין",
        last_name: "דורי",
        password: "0525756959"
    },
    {
        first_name: "מוריה",
        last_name: "באבי",
        password: "0504443502"
    },
    {
        first_name: "מאיה",
        last_name: "אהרון",
        password: "6289991037"
    }
]
export const Test = () => {

    const handleClick = () => {
        for (let data of dataSet) {
            mutate(data)
        }
    }

    const {mutate, isSuccess, isError, isLoading, error} = useSignupData()

    return (
        <div>
            <div>
                {isLoading ? (
                    'Adding Contacts...'
                ) : (
                    <>
                        {isError ? (
                            <div>An error occurred: {error.message}</div>
                        ) : null}

                        {isSuccess ? <div>Contact added!</div> : null}

                        <button
                            onClick={handleClick}
                        >
                            Send Contacts
                        </button>
                    </>
                )}
            </div>
        </div>
    );
};


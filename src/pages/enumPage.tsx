import { useState } from "react"

enum Activity {
    Both = 'Both',
    Indoor = 'Indoor',
    Outdoor = 'Outdoor',
}

export default function EnumPage(){

    const [currentWeather, setCurrentWeather] = useState(Activity.Both);

    return(
        <>
            {
                Activity.Indoor && <p>Indoor Activity</p>
            }

            {
                Activity.Outdoor && <p>Outdoor Activity</p>
            }

            {currentWeather === Activity.Indoor && <p>You should stay inside today!</p>}
            {currentWeather === Activity.Outdoor && <p>Go outside today!</p>}
        </>
    )
}
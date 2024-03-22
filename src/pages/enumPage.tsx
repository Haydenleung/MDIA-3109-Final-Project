import { useState } from "react";
import { Activity, WeatherContext } from "@/context/WeatherContext";
import router from "next/router";


export default function EnumPage() {
    const [currentWeather, setCurrentWeather] = useState(Activity.Both);

    const handleClick = () => {
        if (currentWeather === Activity.Both) {
            setCurrentWeather(Activity.Indoor);
        } else if (currentWeather === Activity.Indoor) {
            setCurrentWeather(Activity.Outdoor);
        } else {
            setCurrentWeather(Activity.Both);
        }
    };

    return (
        <>
            {currentWeather === Activity.Indoor && (
                <p>You should stay inside today!</p>
            )}
            {currentWeather === Activity.Outdoor && (
                <p>Go outside today!</p>
            )}
            <button onClick={handleClick}>What should I do today?</button>
            <button onClick={() => router.push("/")}> GO HOME!</button>
        </>
    );
}

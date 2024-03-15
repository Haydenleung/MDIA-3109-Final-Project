import React from "react";
import Header from "../components/Header";
import PrimaryButton from "@/components/Buttons/primaryButton";
import Link from "next/link";
import { useState, useEffect } from "react";
import Weather from "@/components/Weather";
import { useRouter } from 'next/router'
import Image from "next/image";


export default function Main() {
    const router = useRouter()
    const { location } = router.query
    const [temp, setTemp] = useState<string>("");

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTemp(event.target.value);
    };

    const onFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setTemp("");
    };

    const [apiDone, getApiDone] = useState<boolean>(false);

    const handleFromWeather = (data: boolean) => {
        getApiDone(data);
    };

    useEffect(() => {
        console.log(apiDone);
    }, [apiDone]);

    return (
        <main className={"page"}>

            <Header />

            <div className={"weather-homepage"}>

                <div className={"weather-main"}>

                    <Weather 
                        location={location} 
                        getWeather={handleFromWeather} 
                    />

                    {apiDone ? <div className="question-container">
                        <h3 className="question-heading">You are looking for:</h3>
                        <Link href={`/outdoor?prop1=${location}`} className={"link"}>
                            <Image src={'/images/outdoor.png'} className="iconL" width={24} height={24} alt="searchIcon" />
                            <PrimaryButton title="Outdoor Activities" />
                        </Link>
                        <Link href={`/indoor?prop1=${location}`} className={"link"}>
                            <Image src={'/images/indoor.png'} className="iconL" width={24} height={24} alt="searchIcon" />
                            <PrimaryButton title="Restaurants" />
                        </Link>
                    </div> : ""}

                </div>

            </div>

        </main>
    );
}

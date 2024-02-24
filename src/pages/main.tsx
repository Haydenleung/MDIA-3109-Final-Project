import React from "react";
import Header from "../components/Header";
import PrimaryButton from "@/components/Buttons/primaryButton";
import Link from "next/link";
import { useState } from "react";
import Weather from "@/components/Weather";
import { useRouter } from 'next/router'
import Image from "next/image";
import vector from "../../public/images/vector_sunny.svg"
import outdoor from "../../public/images/outdoor.svg"
import indoor from "../../public/images/indoor.svg"

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

    return (
        <main className={"page"}>
            <Header />
            <div className={"weather-homepage"}>
                <div className={"vector-container"}>
                    <Image 
                        className={"vector"} 
                        src={vector} 
                        width={500} 
                        height={500} 
                        alt="welcome" 
                    />
                </div>
                <div className={"weather-main"}>
                    <Weather location={location} />
                    <div className="question-container">
                        <h3 className="question-heading">Are you looking for:</h3>
                        <Link href={`/outdoor?prop1=${location}`} className={"link"}>
                            <Image src={outdoor} className="iconL" width={18} height={18} alt="searchIcon" />
                            <PrimaryButton title="Outdoor Activities" />
                        </Link>
                        <Link href={`/indoor?prop1=${location}`} className={"link"}>
                            <Image src={indoor} className="iconL" width={18} height={18} alt="searchIcon" />
                            <PrimaryButton title="Indoor Activities" />
                        </Link>
                    </div>
                </div>

            </div>
        </main>
    );
}

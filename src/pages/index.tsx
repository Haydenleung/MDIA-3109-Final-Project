import React from "react";
import Header from "../components/Header";
import PrimaryButton from "@/components/Buttons/primaryButton";
import Link from "next/link";
import { useState } from "react";
import Weather from "@/components/Weather";

export default function Home() {
  const [temp, setTemp] = useState<string>("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTemp(event.target.value);
  };

  const onFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setTemp("");
  };

  return (
    <main className={`flex min-h-screen flex-col p-8`}>
      <Header />

      <div>
        <h2 className="weather-homepage">
          It's currently
          <div>
            <Weather />
          </div>
          <br />
          <br />
          in Vancouver, BC
        </h2>
      </div>

      <div className="question-container">
        <h3 className="question-homepage">What are you planning for today?</h3>

        <form onSubmit={onFormSubmit} className={"searchForm"}>
          <input
            type="text"
            onChange={handleChange}
            value={temp}
            className={"search"}
            placeholder={"City, country, or any location..."}
          />
          <button type="submit" className={"button"} />
        </form>

        <Link href={`/indoor?prop1=${temp}`}>
          <PrimaryButton title="Indoor Activities" />
        </Link>

        <Link href={`/outdoor?prop1=${temp}`}>
          <PrimaryButton title="Outdoor Activities" />
        </Link>
      </div>
    </main>
  );
}

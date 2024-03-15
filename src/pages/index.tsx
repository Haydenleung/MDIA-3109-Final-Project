import React from "react";
import Header from "../components/Header";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import vector from "../../public/images/vector_1.svg"
import search from "../../public/images/search.svg"
import { useRouter } from 'next/router'


export default function Home() {
  const router = useRouter()
  const [location, setLocation] = useState<string>("")

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLocation(event.target.value);
  };

  const onFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLocation("");
    router.push({
      pathname: "/main",
      query: { location: location },
    })
  };

  return (
    <main className={"page"}>

      <Header />

      <section className={"search"}>
        <h1>WHERE DO YOU WANT TO GO? </h1>
        <form onSubmit={onFormSubmit} className={"searchForm"}>
          <Image src={search} className="icon" width={18} height={18} alt="searchIcon" />
          <input
            type="text"
            onChange={handleChange}
            value={location}
            className={"searchInput"}
            placeholder={"Search for City in Metro Vancouver"}
          />
          <button type="submit" className={"button"} />
        </form>
      </section>

      <div className={"landing"}>
        <div className={"text"}>
          <p className={"landingHeading"}>BE PREPARED FOR YOUR NEXT ADVENTURE</p>
          <p className={"landingBody"}>Let us know where you want to go and leave the rest to us. We've got you covered!</p>
        </div>
        <div className={"vector-container"}>
          <Image className={"vector"} src={vector} width={500} height={500} alt="welcome" />
        </div>
      </div>

      {/* <CurrentWeather /> */}
      {/* <FiveDayWeather /> */}
    </main>
  );
}

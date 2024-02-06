import Image from "next/image";
import Header from '../components/Header'
import TertiaryButton from "@/components/Buttons/tertiaryButton";
import Card from "@/components/Card/card";

export default function Home() {
  return (
    <main className={`flex min-h-screen flex-col p-8`}>
      <Header/>

      <div>
        {/* Dynamic Text */}
        <h2 className="head-activities">Indoor Activities</h2>
      </div>

      <div>
        <p className="current-weather-text">Current weater for [dynamic date]</p>
        <div>
            {/* dynamic illustration  */}
            {/* dynamic weather information  */}
        </div>
        <div>
            {/* dynamic weather prediction for 5 days  */}
        </div>
      </div>

      <hr/>

      <div>
        <div>
          {/* Search Bar */}
          <TertiaryButton/>
        </div>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
      </div>
      
    </main>
  );
}

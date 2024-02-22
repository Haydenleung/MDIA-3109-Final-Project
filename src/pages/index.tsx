import React from 'react';
import Header from '../components/Header';
import PrimaryButton from "@/components/Buttons/primaryButton";
import Link from "next/link";

export default function Home() {
  return (
    <main className={`flex min-h-screen flex-col p-8`}>
      <Header/>

      <div>
        <h2 className="weather-homepage">
          It's currently <br/> 
           <br/>
          in Vancouver, BC
        </h2>
      </div>

      <div>
        {/* dynamic illustration  */}
        {/* dynamic weather information  */}
      </div>

      <div className="question-container">
        <h3 className="question-homepage">What are you planning for today?</h3>
        
        <Link href="/indoor">
          <PrimaryButton title="Indoor Activities" /> 
        </Link>
      
        <Link href="/outdoor">
          <PrimaryButton title="Outdoor Activities" />
        </Link>
      </div>
    </main>
  );
}
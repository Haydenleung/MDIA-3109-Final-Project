import Image from "next/image";
import Header from '../components/Header'
import PrimaryButton from "@/components/Buttons/primaryButton";

export default function Home() {
  return (
    <main className={`flex min-h-screen flex-col p-8`}>
      <Header/>

      <div>
        <h2 className="weather-homepage">
          It's currently <br/> 
           <br/>
          in Vancouver,BC
        </h2>
      </div>

      <div>
        {/* dynamic illustration  */}
        {/* dynamic weather information  */}
      </div>

      <div className="question-container">
        <h3 className="question-homepage">What are you planning for today?</h3>
        <PrimaryButton/>
        <PrimaryButton/>
      </div>

    </main>
  );
}

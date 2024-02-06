import Image from "next/image";
import Header from '../components/Header'
import SecondaryButton from "@/components/Buttons/secondaryButton";
import TertiaryButton from "@/components/Buttons/tertiaryButton";

export default function Home() {
  return (
    <main className={`flex min-h-screen flex-col p-8`}>
      <Header/>

      <div>
        {/* Dynamic Text */}
        <h1 className="head-activity">[Activity Name]</h1>
        <div className="info-activity">
            <p>[Activity address]</p>
            <p>[Activity rating]</p>
        </div>
      </div>

      <div>
        {/* Dynamic Image  */}
        {/* <Image
            src={}
            width={}
            height={}
            alt={}
        /> */}
      </div>

      <div>
        <h2 className="h2-activity">About</h2>

        {/* Dynamic Info  */}
        <p>
            [dynamic information about activity]
        </p>
        <SecondaryButton/>
      </div>

      <div>
        <h2 className="h2-activity">Reviews</h2>
        <div>
            {/* Search Bar */}
            <TertiaryButton/>
        </div>

        {/* Review */}
        <hr/>
        {/* Review */}
        <hr/>
        {/* Review */}
        <hr/>
        {/* Review */}
        <hr/>
        {/* Review */}
      </div>
      
    </main>
  );
}
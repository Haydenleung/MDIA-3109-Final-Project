import Image from "next/image";

export default function Card() {
    return(
        <div className="activities-card">
            <div>
                {/* Dynamic Image  */}
                {/* <Image
                    src={}
                    width={}
                    height={}
                    alt={}
                /> */}
            </div>

            <div className="bottom-card">
                <div>
                    {/* Dynamic Location  */}
                    <h3>[dynamic location]</h3>

                    {/* Trip Advisor Rating  */}
                </div>

                <div>
                    {/* Dynamic Address  */}
                    <p>[dynamic address]</p>
                </div>
            </div>
        </div>
    )
}
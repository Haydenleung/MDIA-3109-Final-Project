import styles from "./Card.module.css"
import Image from "next/image";
import temp_image from "../../../public/images/attraction.png"

interface ITravel {
    location_id: string;
    name: string;
    address_obj: {
        address_string: string;
    };
}

interface CardProps {
    locations: ITravel[];
}

const Card = ({ locations }: CardProps) => {
    return (
        <div className={styles.container}>
            {locations.slice(0, 5).map(location => (
                <div key={location.location_id} className={styles.location_card}>
                    {/* <h2>Location ID: {location.location_id}</h2> */}
                    <Image src={temp_image} width={100} height={100} alt="attraction" className={styles.image} />
                    <div className={styles.info}>
                        <div className={styles.title}>{location.name}</div>
                        <div className={styles.address}>{location.address_obj.address_string}</div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Card;
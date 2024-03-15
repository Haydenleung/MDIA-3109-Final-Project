import styles from "./Card.module.css"
import Image from "next/image";
import temp_image from "../../../public/images/attraction.png"
import { ITravel, CardProps } from "../../../typings";
import { useRouter } from "next/router";
import { useState } from "react";

import WeatherForecast from "../WeatherForecast";

const Card = ({ locations, locaImage, locaDetail, locaReview, show, handleShow, city }: CardProps) => {

    const [cardNumber, setCardNumber] = useState<number>(0);

    const router = useRouter()

    const handleClick = (i: number) => {
        handleShow(true);
        setCardNumber(i);
    };

    const [apiDone, getApiDone] = useState<boolean>(false);

    const handleFromWeather = (data: boolean) => {
        getApiDone(data);
    };

    return (
        !show ?
            <div className={styles.container}>
                <WeatherForecast
                    location={city}
                    getWeather={handleFromWeather}
                />
                {locations.slice(0, 5).map((location, i) => (
                    <div onClick={() => handleClick(i)} key={location.location_id} className={styles.location_card}>
                        <Image src={locaImage[i][0].images.original.url} width={1000} height={1000} alt="attraction" className={styles.image} />
                        <div className={styles.info}>
                            <div className={styles.title}>{location.name}</div>
                            <div>
                                <Image src={locaDetail[i].rating_image_url} width={100} height={100} alt="rating" className={styles.ratingImage} />
                                {locaDetail[i].num_reviews}
                            </div>
                            <div className={styles.address}>{location.address_obj.address_string}</div>
                        </div>
                    </div>
                ))}
            </div> :

            <div className="container-reviews">
                <div>
                    {locaImage[cardNumber].map((image, i) => (
                        image && image.images && image.images.original && (
                            <Image
                                src={image.images.original.url}
                                width={1000}
                                height={1000}
                                alt="attraction"
                                className={styles.carousell}
                            />
                        )
                    ))}
                </div>
                <div>{locations[cardNumber].name}</div>
                <div>{locations[cardNumber].address_obj.address_string}</div>
                <div>
                    <Image
                        src={locaDetail[cardNumber].rating_image_url}
                        width={100}
                        height={100}
                        alt="photo"
                        className={styles.ratingImage}
                    />
                    {locaDetail[cardNumber].num_reviews}
                </div>

                <div>About</div>
                <div>
                    {locaDetail[cardNumber].description}
                </div>

                <div>Reviews</div>
                <div>
                    {locaReview[cardNumber].map((review, i) => (
                        <div>
                            <Image
                                src={review.user.avatar.original}
                                width={100}
                                height={100}
                                alt="avatar"
                                className={styles.avatar}
                            />

                            <div>{review.user.username}</div>

                            <Image
                                src={review.rating_image_url}
                                width={100}
                                height={100}
                                alt="rating"
                                className={styles.ratingImage}
                            />

                            <div>{review.published_date}</div>
                            <div>{review.rating}</div>
                            <div>{review.text}</div>
                        </div>
                    ))}
                </div>
            </div>
    );
};

export default Card;
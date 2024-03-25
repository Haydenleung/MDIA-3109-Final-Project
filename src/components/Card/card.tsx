import styles from "./Card.module.css"
import Image from "next/image";
import temp_image from "../../../public/images/attraction.png"
import { ITravel, CardProps } from "../../../typings";
import { useRouter } from "next/router";
import { useState } from "react";
import Carousel from "../Carousel";

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

  const logoImage = '/logo.svg';

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
          <Carousel images={locaImage[cardNumber]} />


        </div>
        <div style={{ display: 'flex', marginBottom: '10px' }}></div>
        <div>

        </div>
        <div>
          <div className={styles.addressImageContainer}>
            <div className={styles.addressInfo}>
              <h1>{locations[cardNumber].name}</h1>
              <div><h3>{locations[cardNumber].address_obj.address_string}</h3></div>
            </div>
            <div>
              <Image
                src={locaDetail[cardNumber].rating_image_url}
                width={250}
                height={100}
                alt="photo"
                className={styles.ratingImage}
              />
            </div>
          </div>

        </div>

        <div className="aboutBox"><h2>About</h2></div>
        <div>
          {locaDetail[cardNumber].description}
        </div>

        <div><h2>Reviews</h2></div>
        <div className={styles.reviewContainer}>

          <div>
            {locaReview[cardNumber].map((review, i) => (
              <div className={styles.reviewItem} key={i}>
                <Image
                  src={review.user.avatar.original || logoImage}
                  width={100}
                  height={100}
                  alt="avatar"
                  className={styles.avatar}
                />

                <div className="reviewBox">
                  <div style={{ marginBottom: '10px' }}><h3>{review.user.username}</h3></div>

                  <Image
                    src={review.rating_image_url}
                    width={100}
                    height={100}
                    alt="rating"
                    className={styles.ratingImage}
                  />
                  <div style={{ marginBottom: '20px' }} />
                  <div style={{ marginBottom: '20px' }}>{review.published_date}</div>

                  <div >{review.text}</div>
                </div>
              </div>

            ))}
          </div>
        </div>
      </div>
  );
};

export default Card;


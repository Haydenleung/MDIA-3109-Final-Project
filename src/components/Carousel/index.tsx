import React, { useState } from 'react';
import styles from './Carousel.module.css';
import { CarouselProps } from "../../../typings";


const Carousel: React.FC<CarouselProps> = ({ images }: CarouselProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);

  const nextSlide = () => {
    setCurrentImageIndex(prevIndex =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentImageIndex(prevIndex =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className={styles.carousel}>
      <button className={styles.prevButton} onClick={prevSlide}>
        <img src="./arrowLeft.png" alt="arrow" width={50} height={50} />
      </button>
      <img
        src={images[currentImageIndex].images.original.url}
        alt="attraction"
        className={styles.image}


      />
      <button className={styles.nextButton} onClick={nextSlide}>
        <img src="./arrowRight.png" alt="arrow" width={50} height={50} />
      </button>
    </div>
  );
};

export default Carousel;
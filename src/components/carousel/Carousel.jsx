import  { useState } from 'react';
import CarouselImage from './CarouselImage';
import CarouselButtons from './CarouselButtons';
import CarouselBullets from './CarouselBullets';
import styles from './Carousel.module.css';

const Carousel = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className={styles.carousel}>
      <CarouselButtons direction="prev" onClick={prevSlide} />
      <div className={styles.carouselInner} style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {slides.map((slide, index) => (
          <CarouselImage key={index} slide={slide} />
        ))}
      </div>
      <CarouselButtons direction="next" onClick={nextSlide} />
      <CarouselBullets slides={slides} currentIndex={currentIndex} goToSlide={goToSlide} />
    </div>
  );
};

export default Carousel;

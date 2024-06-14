import styles from './Carousel.module.css';

const CarouselImage = ({ slide }) => {
  return (
    <div className={styles.slide}>
      <img src={slide.image} alt={slide.text} className={styles.image} />
      <p className={styles.text}>{slide.text}</p>
    </div>
  );
};

export default CarouselImage;

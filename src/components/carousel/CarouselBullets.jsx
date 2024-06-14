import styles from './Carousel.module.css';

const CarouselBullets = ({ slides, currentIndex, goToSlide }) => {
  return (
    <div className={styles.carouselBullets}>
      {slides.map((_, index) => (
        <button
          key={index}
          className={`${styles.carouselBullet} ${index === currentIndex ? styles.active : ''}`}
          onClick={() => goToSlide(index)}
        />
      ))}
    </div>
  );
};

export default CarouselBullets;

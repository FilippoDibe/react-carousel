import styles from './Carousel.module.css';

const CarouselButtons = ({ direction, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`${styles.carouselButton} ${styles[direction]}`}
    >
      {direction === 'prev' ? '❮' : '❯'}
    </button>
  );
};

export default CarouselButtons;


import React from 'react';
import styles from './Dots.module.scss';

interface DotsProps {
  slides: string [],
  activeIndex: number,
}

function Dots({slides, activeIndex} : DotsProps): React.ReactElement {
  function getColor(i: number) {
    if (activeIndex === i) {
      return `${styles.dot} ${styles.active}`;
    }
    return styles.dot;
  }

  return (
    <div className={styles.dots}>
      {slides.map((slide, i) => (
        <span key={slide} className={getColor(i)} />
      ))}
    </div>
  );
}

export default Dots;

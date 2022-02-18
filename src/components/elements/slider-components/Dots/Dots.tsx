import React from 'react';
import styles from './Dots.module.scss';
import {Slide} from '../../../../utils/types';

interface DotsProps {
  slides: Slide [],
  activeIndex: number,
  click: (i: number) => void,
  tap: (e:React.KeyboardEvent<HTMLSpanElement>, i: number) => void,
}

function Dots(
  {
    slides, activeIndex, click, tap,
  }: DotsProps,
): React.ReactElement {
  function getColor(i: number) {
    if (activeIndex === i) {
      return `${styles.dot} ${styles.active}`;
    }
    return styles.dot;
  }

  return (
    <div className={styles.dots}>
      {slides.map((slide, i) => (
        <span
          role="button"
          tabIndex={0}
          key={slide.src}
          className={getColor(i)}
          onClick={() => click(i)}
          onKeyDown={(e) => tap(e, i)}
        />
      ))}
    </div>
  );
}

export default Dots;

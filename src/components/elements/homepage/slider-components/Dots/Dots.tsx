import React from 'react';
import styles from './Dots.module.scss';
import {ISlide} from '../../../../pages/Homepage/slides';

interface DotsProps {
  slides: ISlide [],
  activeIndex: number,
  click: (i: number) => void,
  tap: (e:React.KeyboardEvent<HTMLSpanElement>, i: number) => void,
}

function Dots(props: DotsProps): React.ReactElement {
  const {
    slides, activeIndex, click, tap,
  } = props;

  return (
    <div className={styles.dots}>
      {slides.map((slide, i) => (
        <span
          role="button"
          tabIndex={0}
          aria-label="Choose slide"
          key={slide.src}
          className={`${styles.dot} ${activeIndex === i ? styles.active : ''}`}
          onClick={() => click(i)}
          onKeyDown={(e) => tap(e, i)}
        />
      ))}
    </div>
  );
}

export default Dots;

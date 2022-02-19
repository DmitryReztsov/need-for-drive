import React from 'react';
import styles from './Slide.module.scss';
import {Slide as ISlide} from '../../../../utils/types';
import getButtonColor from '../../../../utils/common';

interface SlideProps {
  slide: ISlide,
}

function Slide({slide}: SlideProps): React.ReactElement {
  const {
    src, title, text, color,
  } = slide;
  return (
    <div className={styles.slide} style={{backgroundImage: `url(${src}),linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 100%)`}}>
      <div className={styles.body}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.text}>{text}</p>
        <button type="submit" className={`${styles.button} ${getButtonColor(color)}`}>Подробнее</button>
      </div>
    </div>
  );
}

export default Slide;

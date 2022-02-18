import React from 'react';
import styles from './Slide.module.scss';
import {Slide as ISlide} from '../../../../utils/types';

interface SlideProps {
  slide: ISlide,
}

function Slide({slide}: SlideProps): React.ReactElement {
  const {src, title, text} = slide;
  return (
    <div className={styles.slide} style={{backgroundImage: `url(${src})`}}>
      <div className={styles.body}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.text}>{text}</p>
        <button type="submit" className={`${styles.button} button`}>Подробнее</button>
      </div>
    </div>
  );
}

export default Slide;

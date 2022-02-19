import React from 'react';
import styles from './Slide.module.scss';
import {Slide as ISlide} from '../../../../utils/types';
import getButtonColor from '../../../../utils/common';

interface SlideProps {
  slide: ISlide,
}
// Пока думаю, как можно совместить переменную и фон для добавления в класс компонента
const fade = 'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 100%)';

function Slide({slide}: SlideProps): React.ReactElement {
  const {
    src, title, text, color,
  } = slide;
  return (
    <div className={styles.slide} style={{backgroundImage: `url(${src}),${fade}`}}>
      <div className={styles.body}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.text}>{text}</p>
        <button type="submit" className={`${styles.button} ${getButtonColor(color)}`}>Подробнее</button>
      </div>
    </div>
  );
}

export default Slide;

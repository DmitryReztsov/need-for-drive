import React from 'react';
import styles from './Slide.module.scss';
import Button from '../../Button/Button';
import {ISlide} from '../../../pages/Homepage/slides';

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
        <Button className={styles.button} color={color}>Подробнее</Button>
      </div>
    </div>
  );
}

export default Slide;

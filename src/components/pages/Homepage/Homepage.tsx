import React from 'react';
import Slider from '../../elements/slider-components/Slider/Slider';
import styles from './Homepage.module.scss';
import Start from '../../elements/Start/Start';
import parking from '../../../content/slider-img/parking.png';
import insurance from '../../../content/slider-img/insurance.png';
import fuel from '../../../content/slider-img/fuel.png';
import service from '../../../content/slider-img/service.png';

export interface ISlide {
  src: string,
  title: string,
  text: string,
  color: string,
}

const slides: ISlide [] = [
  {
    src: parking, title: 'Бесплатная парковка', text: 'Оставляйте машину на платных городских парковках и разрешенных местах, не нарушая ПДД, а также в аэропортах.', color: 'forest',
  },
  {
    src: insurance, title: 'Страховка', text: 'Полная страховка страховка автомобиля', color: 'sea',
  },
  {
    src: fuel, title: 'Бензин', text: 'Полный бак на любой заправке города за наш счёт', color: 'magenta',
  },
  {
    src: service, title: 'Обслуживание', text: 'Автомобиль проходит еженедельное ТО', color: 'purple',
  },
];

function Homepage() {
  return (
    <main className={styles.homepage}>
      <Start />
      <Slider slides={slides} />
    </main>
  );
}

export default Homepage;

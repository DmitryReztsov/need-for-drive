import React from 'react';
import Slider from '../../elements/slider-components/Slider/Slider';
import styles from './Homepage.module.scss';
import Start from '../../elements/Start/Start';
import parking from '../../../content/slider-img/parking.png';
import insurance from '../../../content/slider-img/insurance.png';
import fuel from '../../../content/slider-img/fuel.png';
import service from '../../../content/slider-img/service.png';

const slides = [
  parking,
  insurance,
  fuel,
  service,
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

import React from 'react';
import Slider from '../../elements/homepage/slider-components/Slider/Slider';
import styles from './Homepage.module.scss';
import Start from '../../elements/homepage/Start/Start';
import slides from './slides';

function Homepage() {
  return (
    <main className={styles.homepage}>
      <Start />
      <Slider slides={slides} />
    </main>
  );
}

export default Homepage;

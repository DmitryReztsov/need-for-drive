import React from 'react';
import Slider from './components/slider-components/Slider/Slider';
import styles from './Homepage.module.scss';
import Start from './components/Start/Start';
import slides from './slides';

function Homepage() {
  return (
    <div className={styles.homepage}>
      <Start />
      <Slider slides={slides} />
    </div>
  );
}

export default Homepage;

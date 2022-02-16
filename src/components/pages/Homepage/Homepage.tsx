import React from 'react';
import Slider from '../../elements/Slider/Slider';
import styles from './Homepage.module.scss';
import Start from '../../elements/Start/Start';

function Homepage() {
  return (
    <main className={styles.homepage}>
      <Start />
      <Slider />
    </main>
  );
}

export default Homepage;

import React from 'react';
import Slider from '../../elements/slider-components/Slider/Slider';
import styles from './Homepage.module.scss';
import Start from '../../elements/Start/Start';
import {slides} from '../../../utils/slides';

function Homepage() {
  return (
    <main className={styles.homepage}>
      <Start />
      <Slider slides={slides} />
    </main>
  );
}

export default Homepage;

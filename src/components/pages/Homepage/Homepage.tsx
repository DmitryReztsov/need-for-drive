import React, {useEffect} from 'react';
import Slider from './components/slider-components/Slider/Slider';
import styles from './Homepage.module.scss';
import Start from './components/Start/Start';
import slides from './slides';
import useClearOrder from '../../../hooks/useClearOrder';

function Homepage() {
  // Костыль, необходимо подумать, как при размонтировании Order очищать форму
  const clearOrder = useClearOrder();
  useEffect(() => {
    clearOrder(0);
  }, []);
  return (
    <div className={styles.homepage}>
      <Start />
      <Slider slides={slides} />
    </div>
  );
}

export default Homepage;

import React, {useEffect} from 'react';
import Slider from './components/slider-components/Slider/Slider';
import styles from './Homepage.module.scss';
import Start from './components/Start/Start';
import slides from './slides';
import useClearForm from '../../../hooks/useClearForm';

function Homepage() {
  // Костыль, необходимо подумать, как при размонтировании Order очищать форму
  const clearForm = useClearForm();
  useEffect(() => {
    clearForm();
  }, []);
  return (
    <div className={styles.homepage}>
      <Start />
      <Slider slides={slides} />
    </div>
  );
}

export default Homepage;

import React, {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import Slider from './components/slider-components/Slider/Slider';
import styles from './Homepage.module.scss';
import Start from './components/Start/Start';
import slides from './slides';
import useClearForm from '../../../hooks/useClearForm';
import {clearOrder} from '../../../store/api/order/actionCreators';

function Homepage() {
  // Костыль, необходимо подумать, как при размонтировании Order очищать форму
  const clearForm = useClearForm();
  const dispatch = useDispatch();
  useEffect(() => {
    clearForm(0);
    dispatch(clearOrder());
  }, []);
  return (
    <div className={styles.homepage}>
      <Start />
      <Slider slides={slides} />
    </div>
  );
}

export default Homepage;

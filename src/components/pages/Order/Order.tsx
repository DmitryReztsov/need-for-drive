import React, {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import Main from './components/Main/Main';
import Header from '../../common/Header/Header';
import styles from './Order.module.scss';
import getCity from '../../../store/api/city/actions';
import getPoint from '../../../store/api/point/actions';
import getCar from '../../../store/api/car/actions';
import useTypedSelector from '../../../store/selectors';

function Order() {
  const dispatch = useDispatch();
  const {loading, error} = useTypedSelector((state) => state.car);

  useEffect(() => {
    dispatch(getCity());
    dispatch(getPoint());
    dispatch(getCar());
  }, []);
  if (loading) {
    return <div>Загрузка...</div>;
  }
  if (error) {
    return <div>Возникла ошибка</div>;
  }
  return (
    <div className={styles.order}>
      <Header padding={styles.container} />
      <Main />
    </div>
  );
}

export default Order;

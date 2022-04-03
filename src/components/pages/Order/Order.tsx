import React, {useEffect} from 'react';
import {useParams} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import Main from './components/Main/Main';
import Header from '../../common/Header/Header';
import styles from './Order.module.scss';
import getCity from '../../../store/api/city/actions';
import getPoint from '../../../store/api/point/actions';
import getCar from '../../../store/api/car/actions';
import useTypedSelector from '../../../store/selectors';
import Loading from '../../common/Loading/Loading';
import getRate from '../../../store/api/rate/actions';
import {getOrder} from '../../../store/api/order/actions';

function Order() {
  const dispatch = useDispatch();
  const {id} = useParams();
  const {loading, error} = useTypedSelector((state) => state.car);

  useEffect(() => {
    if (id) {
      dispatch(getOrder(id));
    } else {
      dispatch(getCity());
      dispatch(getPoint());
      dispatch(getCar());
      dispatch(getRate());
    }
  }, []);
  if (loading) {
    return <Loading />;
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

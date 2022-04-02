import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import styles from './Total.module.scss';
import useTypedSelector from '../../../../../../../store/selectors';
import {formatDate} from '../../../../../../../utils/time';
import convertNumber from '../../../../../../../utils/convertNumber';

function Total() {
  const {id} = useParams();
  const {
    order: {
      carId, dateFrom, isFullTank, orderStatusId,
    },
  } = useTypedSelector((state) => state.order);
  const [number, setNumber] = useState<string>('');

  useEffect(() => {
    setNumber(convertNumber(carId ? carId.number : ''));
  }, [carId]);
  return (
    <div className={styles.total}>
      <div className={styles.info}>
        {id && (
        <div>
          Ваш заказ&nbsp;
          {orderStatusId ? orderStatusId.name : ''}
        </div>
        )}
        <p>{carId?.name}</p>
        <span className={styles.number}>{number}</span>
        <br />
        <span className={styles.tank}>
          <span>
            Топливо&nbsp;
          </span>
          {`${isFullTank || ((carId?.tank || 0) > 100) ? 100 : carId?.tank}%`}
        </span>
        <br />
        <span className={styles.date}>
          <span>
            Доступно с&nbsp;
          </span>
          {formatDate(dateFrom)}
        </span>
      </div>
      <img className={styles.picture} src={`${carId ? carId.thumbnail.path : ''}`} alt="car" />
    </div>
  );
}

export default Total;

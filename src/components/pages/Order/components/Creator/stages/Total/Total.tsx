import React from 'react';
import {useParams} from 'react-router-dom';
import styles from './Total.module.scss';
import useTypedSelector from '../../../../../../../store/selectors';
import {formatDate} from '../../../../../../../utils/time';

function Total() {
  const {id} = useParams();
  const {carId, dateFrom, isFullTank} = useTypedSelector((state) => state.form);
  const {cars} = useTypedSelector((state) => state.car);
  const {order} = useTypedSelector((state) => state.order);
  const car = cars.find((car) => car.id === carId?.id);
  const nums = car?.number || order['carId']['number'];
  const tank = car?.tank || order['carId']['tank'];
  const path = car?.path || order['carId']['thumbnail']['path'];
  const number = nums && nums.length === 6
    ? `${nums[0]} ${nums.slice(1, 4)} ${nums.slice(4)} 73`
    : `${nums![0]} ${nums!.slice(1, 4)} ${nums!.slice(4, 6)} ${nums!.slice(6)}`;

  return (
    <div className={styles.total}>
      <div className={styles.info}>
        {id && (
        <div>
          Ваш заказ&nbsp;
          {order['orderStatusId']['name']}
        </div>
        )}
        <p>{car?.name || order['carId']['name']}</p>
        <span className={styles.number}>{number}</span>
        <br />
        <span className={styles.tank}>
          <span>
            Топливо&nbsp;
          </span>
          {`${isFullTank || ((tank || 0) > 100) ? 100 : tank}%`}
        </span>
        <br />
        <span className={styles.date}>
          <span>
            Доступно с&nbsp;
          </span>
          {formatDate(dateFrom)}
        </span>
      </div>
      <img className={styles.picture} src={`${path}`} alt="car" />
    </div>
  );
}

export default Total;

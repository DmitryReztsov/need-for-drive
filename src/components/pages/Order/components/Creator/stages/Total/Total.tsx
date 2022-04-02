import React from 'react';
import {useParams} from 'react-router-dom';
import styles from './Total.module.scss';
import useTypedSelector from '../../../../../../../store/selectors';
import {formatDate} from '../../../../../../../utils/time';
import {ICar} from '../../../../../../../store/api/car/types';

function Total() {
  const {id} = useParams();
  const {
    order: {
      carId, dateFrom, isFullTank, orderStatusId,
    },
  } = useTypedSelector((state) => state.order);
  const {cars} = useTypedSelector((state) => state.car);
  const car = cars.find((car: ICar) => car.id === carId?.id) && carId;
  const nums = car?.number;
  const number = nums && nums.length === 6
    ? `${nums[0]} ${nums.slice(1, 4)} ${nums.slice(4)} 73`
    : `${nums![0]} ${nums!.slice(1, 4)} ${nums!.slice(4, 6)} ${nums!.slice(6)}`;

  return (
    <div className={styles.total}>
      <div className={styles.info}>
        {id && (
        <div>
          Ваш заказ&nbsp;
          {orderStatusId.name}
        </div>
        )}
        <p>{car?.name}</p>
        <span className={styles.number}>{number}</span>
        <br />
        <span className={styles.tank}>
          <span>
            Топливо&nbsp;
          </span>
          {`${isFullTank || ((car?.tank || 0) > 100) ? 100 : car?.tank}%`}
        </span>
        <br />
        <span className={styles.date}>
          <span>
            Доступно с&nbsp;
          </span>
          {formatDate(dateFrom)}
        </span>
      </div>
      <img className={styles.picture} src={`${car?.path}`} alt="car" />
    </div>
  );
}

export default Total;

import React from 'react';
import {useParams} from 'react-router-dom';
import styles from './Total.module.scss';
import useTypedSelector from '../../../../../../../store/selectors';
import {formatDate} from '../../../../../../../utils/time';

function Total() {
  const {id} = useParams();
  const {carId, dateFrom, fuel} = useTypedSelector((state) => state.form);
  const {cars} = useTypedSelector((state) => state.car);
  const car = cars.find((car) => car.id === carId?.id);
  const number = `${car?.number[0]} ${car?.number.slice(1, 4)} ${car?.number.slice(4)} 73`;

  return (
    <div className={styles.total}>
      {car
      && (
        <>
          <div className={styles.info}>
            {id && <div>Ваш заказ подтверждён</div>}
            <p>{car.name}</p>
            <span className={styles.number}>{number}</span>
            <br />
            <span className={styles.tank}>
              <span>
                Топливо&nbsp;
              </span>
              {`${fuel ? 100 : car.tank}%`}
            </span>
            <br />
            <span className={styles.date}>
              <span>
                Доступно с&nbsp;
              </span>
              {formatDate(dateFrom)}
            </span>
          </div>
          <img className={styles.picture} src={`${car.path}`} alt="car" />
        </>
      )}
    </div>
  );
}

export default Total;

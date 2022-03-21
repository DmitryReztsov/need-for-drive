import React from 'react';
import {useParams} from 'react-router-dom';
import styles from './Total.module.scss';
import useTypedSelector from '../../../../../../../store/selectors';
import {models} from '../../../../mocks';
import {formatDate} from '../../../../../../../utils/time';

function Total() {
  const {id} = useParams();
  const {model, dateFrom} = useTypedSelector((state) => state.form);
  const car = models.find((item) => item.name === model);
  const number = `${car?.number[0]} ${car?.number.slice(1, 4)} ${car?.number.slice(4)} 73`;

  return (
    <div className={styles.total}>
      {car
      && (
      <div className={styles.info} style={{backgroundImage: `url(${car.picture})`}}>
        {id && <div>Ваш заказ подтверждён</div>}
        <p>{car.name}</p>
        <span className={styles.number}>{number}</span>
        <br />
        <span className={styles.tank}>
          <span>
            Топливо&nbsp;
          </span>
          {`${car.tank}%`}
        </span>
        <br />
        <span className={styles.date}>
          <span>
            Доступно с&nbsp;
          </span>
          {formatDate(dateFrom)}
        </span>
      </div>
      )}
    </div>
  );
}

export default Total;

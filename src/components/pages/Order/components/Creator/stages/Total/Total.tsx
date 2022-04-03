import React from 'react';
import styles from './Total.module.scss';
import {formatDate} from '../../../../../../../utils/time';
import convertNumber from '../../../../../../../utils/convertNumber';
import {orderStatuses} from '../../../../mocks';
import Loading from '../../../../../../common/Loading/Loading';
import useTypedSelector from '../../../../../../../store/selectors';

function Total() {
  const {
    order: {
      carId, dateFrom, isFullTank, orderStatusId,
    }, loading,
  } = useTypedSelector((state) => state.order);
  if (loading) {
    return <Loading />;
  }
  return (
    <div className={styles.total}>
      <div className={styles.info}>
        {orderStatusId && (
        <div>
          Ваш заказ&nbsp;
          {orderStatuses.find((status) => status.id === orderStatusId.id)!.name}
        </div>
        )}
        <p>{carId?.name}</p>
        <span className={styles.number}>{convertNumber(carId?.number)}</span>
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
      <img className={styles.picture} src={`${carId.thumbnail.path}`} alt="car" />
    </div>
  );
}

export default Total;

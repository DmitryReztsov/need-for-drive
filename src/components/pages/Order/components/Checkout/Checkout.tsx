import React, {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {useParams} from 'react-router-dom';
import styles from './Checkout.module.scss';
import Button from '../../../../common/Button/Button';
import {IStage} from '../Main/Main';
import {generatePrice, generatePriceString, IFields} from '../../fields';
import {orderStatuses} from '../../mocks';
import {setOrderField} from '../../../../../store/api/order/actionCreators';

interface ICheckoutProps {
  click?: () => void,
  activeIndex: number,
  availableIndex: number,
  stages: IStage [],
  fields: IFields [],
  order: any,
  loading: boolean,
}

function Checkout({
  click, activeIndex, availableIndex, stages, fields, order, loading,
}: ICheckoutProps) {
  const {
    carId, dateFrom, dateTo, rateId, isFullTank, isNeedChildChair, isRightWheel, orderStatusId,
  } = order;
  const {id} = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setOrderField('price', generatePrice(order)));
  }, [carId, dateFrom, dateTo, rateId, isFullTank, isNeedChildChair, isRightWheel]);
  if (loading) {
    return null;
  }
  return (
    <div className={styles.checkout}>
      <h3 className={styles.header}>Ваш заказ:</h3>
      <ul className={styles.details}>
        {fields.map((field) => {
          // Если значение пустое - не отображаем
          return field.value && (
            <li key={field.label} className={styles.row}>
              <span className={styles.label}>{field.label}</span>
              <span />
              <span className={styles.value}>
                {field.label === 'Пункт выдачи'
                  ? (
                    <>
                      {/* делим на спаны из-за особенностей отрисовки адреса */}
                      <span>
                        {field.value.split(', ')[0]}
                      </span>
                      <br />
                      <span>
                        {field.value.split(', ').slice(1, 3).join(', ')}
                      </span>
                    </>
                  )
                  : field.value}
              </span>
            </li>
          );
        })}
      </ul>
      {carId?.priceMin && (
        <p className={styles.price}>
          Цена:
          <span>
            {generatePriceString(order.price, order)}
          </span>
        </p>
      )}
      {(orderStatusId && (orderStatusId.id === orderStatuses[1].id))
      || (
      <Button
        click={click}
        className={styles.button}
        color={(availableIndex !== 3) && (availableIndex <= activeIndex) && !id ? 'blocked' : id ? 'magenta' : ''}
        disabled={(availableIndex !== 3) && (availableIndex <= activeIndex) && !id}
      >
        {id ? 'Отменить' : stages[activeIndex].buttonLabel}
      </Button>
      )}
    </div>
  );
}

export default Checkout;

import React from 'react';
import styles from './Checkout.module.scss';
import Button from '../../../../common/Button/Button';
import {IFields} from '../Main/Main';
import useTypedSelector from '../../../../../store/selectors';

interface ICheckoutProps {
  click?: () => void,
  activeIndex: number,
  fields: IFields [],
}

function Checkout(props: ICheckoutProps) {
  const {click, activeIndex, fields} = props;
  const {price} = useTypedSelector((state) => state.form);

  return (
    <div className={styles.checkout}>
      <h3 className={styles.header}>Ваш заказ:</h3>
      <ul className={styles.details}>
        {fields.map((field, i) => {
          // Если значение пустое и не price - не отображаем
          return field.value && (i !== 3)
            ? (
              <li key={field.value} className={styles.row}>
                <span className={styles.label}>{field.label}</span>
                <span className={styles.value}>
                  {field.value}
                </span>
              </li>
            )
            : null;
        })}
      </ul>
      {price
        ? (
          <p className={styles.price}>
            Цена:
            <span>
              {price}
            </span>
          </p>
        )
        : null}
      <Button
        click={click}
        className={styles.button}
        color={fields[activeIndex].value ? '' : 'blocked'}
        disabled={fields[activeIndex].value === ''}
      >
        Выбрать модель
      </Button>
    </div>
  );
}

export default Checkout;

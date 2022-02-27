import React from 'react';
import styles from './Checkout.module.scss';
import useTypedSelector from '../../../../../store/selectors';
import Button from '../../../../common/Button/Button';

interface ICheckoutProps {
  click?: () => void,
  activeIndex: number,
}

function Checkout(props: ICheckoutProps) {
  const {click, activeIndex} = props;
  const {
    city, pickPoint, model, price,
  } = useTypedSelector((state) => state.form);

  // массив внутри, так как хук можно вызвать только внутри компонентов
  const fields = [
    {
      label: 'Пункт выдачи',
      value: (city && pickPoint) ? `${city}, ${pickPoint}` : '',
    },
    {
      label: 'Модель',
      value: (model) ? `${model}` : '',
    },
  ];
  return (
    <div className={styles.checkout}>
      <h3 className={styles.header}>Ваш заказ:</h3>
      <ul className={styles.details}>
        {fields.map((field) => {
          // Если значение пустое - не отображаем
          return field.value
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

import React from 'react';
import styles from './Checkout.module.scss';
import Button from '../../../../common/Button/Button';
import useTypedSelector from '../../../../../store/selectors';
import {IStage} from '../Main/Main';

export interface IFields {
  [key: string]: any,
}

interface ICheckoutProps {
  click?: () => void,
  activeIndex: number,
  stages: IStage [],
}

function Checkout(props: ICheckoutProps) {
  const {click, activeIndex, stages} = props;
  const {
    city, pickPoint, model, price, color, rentTime, tariff, fuel, babySeat, rightHandDrive,
  } = useTypedSelector((state) => state.form);

  // хардкодно, альтернатива - засунуть label в redux, но потеряем логику useAppendParams
  const fields : IFields [] = [
    {
      label: 'Пункт выдачи',
      value: (city && pickPoint) ? `${city}, ${pickPoint}` : '',
    },
    {
      label: 'Модель',
      value: model,
    },
    {
      label: 'Цвет',
      value: color,
    },
    {
      label: 'Длительность аренды',
      value: rentTime,
    },
    {
      label: 'Тариф',
      value: tariff,
    },
    {
      label: 'Полный бак',
      value: fuel,
    },
    {
      label: 'Детское кресло',
      value: babySeat,
    },
    {
      label: 'Правый руль',
      value: rightHandDrive,
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
                <span />
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
        color={stages[activeIndex].vars.includes('') ? 'blocked' : ''}
        disabled={stages[activeIndex].vars.includes('')}
      >
        {stages[activeIndex].buttonLabel}
      </Button>
    </div>
  );
}

export default Checkout;

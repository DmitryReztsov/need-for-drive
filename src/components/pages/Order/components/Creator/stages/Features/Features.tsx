import React from 'react';
import styles from './Features.module.scss';
import RadioGroup from '../../../../../../common/inputs/RadioGroup/RadioGroup';
import useTypedSelector from '../../../../../../../store/selectors';
import {bonuses} from '../../../../mocks';
import useAppendParams from '../../../../../../../hooks/useAppendParams';
import CheckBoxGroup from '../../../../../../common/inputs/CheckBoxGroup/CheckBoxGroup';
import DateChanger from './DateChanger/DateChanger';
import {IRate} from '../../../../../../../store/api/rate/types';

function Features() {
  const {
    carId, color, fuel, babySeat, rightHandDrive,
  } = useTypedSelector((state) => state.form);
  const {cars} = useTypedSelector((state) => state.car);
  const {rates} = useTypedSelector((state) => state.rate);
  const appendParams = useAppendParams();

  function getColors() {
    return cars.find((car) => car.id === carId?.id)!.colors;
  }

  function clickHandler(e: React.MouseEvent<HTMLInputElement>, field: string) {
    console.log(e.currentTarget.value);
    appendParams(field, e.currentTarget.value);
  }

  function enterHandler(e: React.KeyboardEvent<HTMLInputElement>, field: string) {
    if (e.code === 'Enter') {
      appendParams(field, e.currentTarget.value);
    }
  }

  function getRateString(rate: IRate) {
    return `${rate.rateTypeId.name}, ${rate.price}₽/${rate.rateTypeId.unit}`;
  }

  return (
    <div className={styles.features}>
      <div className={styles.block}>
        <p>Цвет</p>
        <RadioGroup
          list={getColors()}
          field="color"
          allTypes="Любой"
          defaultValue={color}
          click={(e) => clickHandler(e, 'color')}
          keyDown={(e) => enterHandler(e, 'color')}
        />
      </div>
      <div className={styles.block}>
        <p>Дата аренды</p>
        <DateChanger />
      </div>
      <div className={styles.block}>
        <p>Тариф</p>
        <RadioGroup
          list={rates.map((rate) => getRateString(rate))}
          field="rate"
          defaultValue={getRateString(rates[0])}
          click={(e) => clickHandler(e, 'rate')}
          keyDown={(e) => enterHandler(e, 'rate')}
          className={styles.rates}
        />
      </div>
      <div className={styles.block}>
        <p>Доп услуги</p>
        <CheckBoxGroup
          list={bonuses}
          defaultChecked={[fuel, babySeat, rightHandDrive]}
          click={(e) => clickHandler(e, e.currentTarget.name)}
          keyDown={(e) => enterHandler(e, e.currentTarget.name)}
          className={styles.bonuses}
        />
      </div>
    </div>
  );
}

export default Features;

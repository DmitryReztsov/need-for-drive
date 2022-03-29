import React from 'react';
import styles from './Features.module.scss';
import RadioGroup, {IRadioItem} from '../../../../../../common/inputs/RadioGroup/RadioGroup';
import useTypedSelector from '../../../../../../../store/selectors';
import {bonuses} from '../../../../mocks';
import useAppendParams from '../../../../../../../hooks/useAppendParams';
import CheckBoxGroup from '../../../../../../common/inputs/CheckBoxGroup/CheckBoxGroup';
import DateChanger from './DateChanger/DateChanger';

function Features() {
  const {
    carId, color, fuel, babySeat, rightHandDrive,
  } = useTypedSelector((state) => state.form);
  const {rates} = useTypedSelector((state) => state.rate);
  const appendParams = useAppendParams();

  function getColors() {
    const colors: IRadioItem [] = [];
    carId?.colors.forEach((color, i) => colors.push({id: i.toString(), name: color}));
    console.log(colors);
    return colors;
  }

  function getRates() {
    return rates.map((rate) => {
      return {id: rate.id, name: `${rate.rateTypeId.name}, ${rate.price}₽/${rate.rateTypeId.unit}`};
    });
  }

  function clickHandler(e: React.MouseEvent<HTMLInputElement>, field: string) {
    appendParams(field, e.currentTarget.value);
  }

  function enterHandler(e: React.KeyboardEvent<HTMLInputElement>, field: string) {
    if (e.code === 'Enter') {
      appendParams(field, e.currentTarget.value);
    }
  }

  return (
    <div className={styles.features}>
      <div className={styles.block}>
        <p>Цвет</p>
        <RadioGroup
          list={getColors()}
          field="color"
          allTypes={{id: 'Любой', name: 'Любой'}}
          defaultValue={color}
        />
      </div>
      <div className={styles.block}>
        <p>Дата аренды</p>
        <DateChanger />
      </div>
      <div className={styles.block}>
        <p>Тариф</p>
        <RadioGroup
          list={getRates()}
          field="rate"
          defaultValue={getRates()[0]}
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

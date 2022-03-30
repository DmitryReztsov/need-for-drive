import React from 'react';
import styles from './Features.module.scss';
import RadioGroup, {IRadioItem} from '../../../../../../common/inputs/RadioGroup/RadioGroup';
import useTypedSelector from '../../../../../../../store/selectors';
import {bonuses} from '../../../../mocks';
import useAppendParams from '../../../../../../../hooks/useAppendParams';
import CheckBoxGroup from '../../../../../../common/inputs/CheckBoxGroup/CheckBoxGroup';
import DateChanger from './DateChanger/DateChanger';
import {defaultColor} from '../../../../../../../store/form/reducer';
import {IExtendedRate} from '../../../../../../../store/api/rate/types';

function Features() {
  const {
    carId, color, rateId, isFullTank, isNeedChildChair, isRightWheel,
  } = useTypedSelector((state) => state.form);
  const {rates} = useTypedSelector((state) => state.rate);
  const appendParams = useAppendParams();

  function getColors() {
    const colors: IRadioItem [] = [];
    carId?.colors.forEach((color, i) => colors.push({id: i.toString(), name: color}));
    return colors;
  }

  function getRates() {
    return rates.map((rate) => {
      return {...rate, name: `${rate.rateTypeId.name}, ${rate.price}₽/${rate.rateTypeId.unit}`};
    });
  }
  return (
    <div className={styles.features}>
      <div className={styles.block}>
        <p>Цвет</p>
        <RadioGroup
          list={getColors()}
          field="color"
          allTypes={defaultColor}
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
          field="rateId"
          defaultValue={rateId as IExtendedRate}
          className={styles.rates}
        />
      </div>
      <div className={styles.block}>
        <p>Доп услуги</p>
        <CheckBoxGroup
          list={bonuses}
          defaultChecked={[isFullTank, isNeedChildChair, isRightWheel]}
          click={(e) => appendParams(e.currentTarget.name, e.currentTarget.value)}
          keyDown={(e) => e.code === 'Enter' && appendParams(e.currentTarget.name, e.currentTarget.value)}
          className={styles.bonuses}
        />
      </div>
    </div>
  );
}

export default Features;

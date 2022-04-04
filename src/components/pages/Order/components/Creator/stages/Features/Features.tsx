import React from 'react';
import styles from './Features.module.scss';
import RadioGroup, {IRadioItem} from '../../../../../../common/inputs/RadioGroup/RadioGroup';
import useTypedSelector from '../../../../../../../store/selectors';
import {bonuses} from '../../../../mocks';
import useAppendParams from '../../../../../../../hooks/useAppendParams';
import CheckBoxGroup from '../../../../../../common/inputs/CheckBoxGroup/CheckBoxGroup';
import DateChanger from './DateChanger/DateChanger';
import {IExtendedRate, IRate} from '../../../../../../../store/api/rate/types';
import {defaultColor} from '../../../../../../../store/api/order/reducer';

function Features() {
  const {
    order: {
      carId, color, rateId, isFullTank, isNeedChildChair, isRightWheel,
    },
  } = useTypedSelector((state) => state.order);
  const {rates} = useTypedSelector((state) => state.rate);
  const appendParams = useAppendParams();

  function getColors() {
    const colors: IRadioItem [] = [];
    carId?.colors.forEach((color: any, i: number) => colors.push({id: i.toString(), name: color}));
    return colors;
  }

  function getRates() {
    return rates.map((rate: IRate) => {
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

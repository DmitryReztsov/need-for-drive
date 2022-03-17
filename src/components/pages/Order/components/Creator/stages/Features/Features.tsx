import React from 'react';
import styles from './Features.module.scss';
import RadioGroup from '../../../../../../common/inputs/RadioGroup/RadioGroup';
import useTypedSelector from '../../../../../../../store/selectors';
import {models} from '../../../../mocks';
import useAppendParams from '../../../../../../../hooks/useAppendParams';
import {bonuses, tariffs} from './options';
import CheckBoxGroup from '../../../../../../common/inputs/CheckBoxGroup/CheckBoxGroup';

function Features() {
  const {model} = useTypedSelector((state) => state.form);
  const appendParams = useAppendParams();

  function getColors() {
    return models.find((item) => item.name === model)!.colors;
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
          allTypes="Любой"
          click={(e) => clickHandler(e, 'color')}
          keyDown={(e) => enterHandler(e, 'color')}
        />
      </div>
      <div className={styles.block}>
        <p>Дата аренды</p>

      </div>
      <div className={styles.block}>
        <p>Тариф</p>
        <RadioGroup
          list={tariffs}
          field="tariff"
          click={(e) => clickHandler(e, 'tariff')}
          keyDown={(e) => enterHandler(e, 'tariff')}
          className={styles.tariff}
        />
      </div>
      <div className={styles.block}>
        <p>Доп услуги</p>
        <CheckBoxGroup
          list={bonuses}
          click={(e) => clickHandler(e, e.currentTarget.name)}
          keyDown={(e) => enterHandler(e, e.currentTarget.name)}
          className={styles.bonuses}
        />
      </div>
    </div>
  );
}

export default Features;

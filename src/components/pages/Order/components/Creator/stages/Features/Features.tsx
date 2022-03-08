import React from 'react';
import styles from './Features.module.scss';
import RadioGroup from '../../../../../../common/inputs/RadioGroup/RadioGroup';
import useTypedSelector from '../../../../../../../store/selectors';
import {models} from '../../../../mocks';
import useAppendParams from '../../../../../../../hooks/useAppendParams';

function Features() {
  const {model} = useTypedSelector((state) => state.form);
  const appendParams = useAppendParams();

  function getColors() {
    return models.find((item) => item.name === model)!.colors;
  }

  function clickColor(e: React.MouseEvent<HTMLInputElement>) {
    appendParams('color', e.currentTarget.value);
  }

  function enterColor(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.code === 'Enter') {
      appendParams('color', e.currentTarget.value);
    }
  }

  return (
    <div className={styles.features}>
      <div className={styles.color}>
        <p>Цвет</p>
        <RadioGroup
          list={getColors()}
          field="color"
          allTypes="Любой"
          click={clickColor}
          keyDown={enterColor}
        />
      </div>
    </div>
  );
}

export default Features;

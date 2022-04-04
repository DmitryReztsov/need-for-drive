import React from 'react';
import styles from './RadioButton.module.scss';
import {IRadioItem} from '../RadioGroup';
import useAppendParams from '../../../../../hooks/useAppendParams';

interface IRadioButtonProps<T> {
  field: string,
  value: string,
  id: string,
  item: T,
  defaultValue?: boolean,
}

function RadioButton<T extends IRadioItem>(props: IRadioButtonProps<T>) {
  const {
    field, value, id, item, defaultValue,
  } = props;
  const appendParams = useAppendParams();
  return (
    <div className={styles.radio}>
      <input
        type="radio"
        tabIndex={0}
        id={id}
        name={field}
        value={value}
        className={styles.input}
        onClick={() => appendParams(field, item)}
        onKeyDown={(e) => e.code === 'Enter' && appendParams(field, item)}
        defaultChecked={defaultValue}
      />
      <label htmlFor={id}>
        {value}
      </label>
    </div>

  );
}

export default RadioButton;

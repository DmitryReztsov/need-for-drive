import React from 'react';
import styles from './RadioButton.module.scss';

interface IRadioButtonProps {
  field: string,
  value: string,
}

function RadioButton(props: IRadioButtonProps) {
  const {
    field, value,
  } = props;
  return (
    <label htmlFor={value} className={styles.label}>
      <input
        type="radio"
        tabIndex={0}
        id={value}
        name={field}
        value={value}
        className={styles.input}
      />
      {value}
    </label>
  );
}

export default RadioButton;

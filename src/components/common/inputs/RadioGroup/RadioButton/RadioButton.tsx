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
    <div className={styles.radio}>
      <input
        type="radio"
        tabIndex={0}
        id={value}
        name={field}
        value={value}
        className={styles.input}
      />
      <label htmlFor={value}>
        {value}
      </label>
    </div>

  );
}

export default RadioButton;

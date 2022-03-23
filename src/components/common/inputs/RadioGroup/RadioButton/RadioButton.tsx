import React from 'react';
import styles from './RadioButton.module.scss';

interface IRadioButtonProps {
  field: string,
  value: string,
  click: (e: React.MouseEvent<HTMLInputElement>) => void,
  keyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void,
  defaultValue?: boolean,
}

function RadioButton(props: IRadioButtonProps) {
  const {
    field, value, click, keyDown, defaultValue,
  } = props;
  return (
    <div className={styles.radio}>
      <input
        type="radio"
        tabIndex={0}
        id={value}
        name={field}
        value={defaultValue ? '' : value}
        className={styles.input}
        onClick={click}
        onKeyDown={keyDown}
        defaultChecked={defaultValue}
      />
      <label htmlFor={value}>
        {value}
      </label>
    </div>

  );
}

export default RadioButton;

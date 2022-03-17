import React, {useState} from 'react';
import styles from './CheckBox.module.scss';

interface IRadioButtonProps {
  field: string,
  value: string,
  click: (e: React.MouseEvent<HTMLInputElement>) => void,
  keyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void,
}

function CheckBox(props: IRadioButtonProps) {
  const {
    field, value, click, keyDown,
  } = props;
  const [checked, setChecked] = useState(false);

  return (
    <div className={styles.checkBox}>
      <input
        type="checkbox"
        tabIndex={0}
        id={value}
        name={field}
        value={checked ? '' : value}
        className={styles.input}
        onClick={click}
        onKeyDown={keyDown}
        onChange={() => setChecked(!checked)}
        checked={checked}
      />
      <label htmlFor={value}>
        {value}
      </label>
    </div>

  );
}

export default CheckBox;

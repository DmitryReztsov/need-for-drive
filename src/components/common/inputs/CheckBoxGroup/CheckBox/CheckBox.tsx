import React, {useState} from 'react';
import styles from './CheckBox.module.scss';

interface IRadioButtonProps {
  field: string,
  value: string,
  name: string,
  defaultChecked?: boolean,
  click: (e: React.MouseEvent<HTMLInputElement>) => void,
  keyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void,
}

function CheckBox(props: IRadioButtonProps) {
  const {
    field, value, name, defaultChecked, click, keyDown,
  } = props;
  const [checked, setChecked] = useState(defaultChecked);

  return (
    <div className={styles.checkBox}>
      <input
        type="checkbox"
        tabIndex={0}
        id={field}
        name={name}
        value={checked ? '' : value}
        className={styles.input}
        onClick={click}
        onKeyDown={keyDown}
        onChange={() => setChecked(!checked)}
        checked={defaultChecked}
      />
      <label htmlFor={field}>
        {field}
      </label>
    </div>

  );
}

export default CheckBox;

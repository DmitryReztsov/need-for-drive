import React from 'react';
import styles from './CheckBoxGroup.module.scss';
import CheckBox from './CheckBox/CheckBox';

interface IRadioGroupProps {
  list: {[key: string]: string},
  className?: string,
  click: (e: React.MouseEvent<HTMLInputElement>) => void,
  keyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void,
}

function CheckBoxGroup(props: IRadioGroupProps) {
  const {
    list, className, click, keyDown,
  } = props;
  return (
    <div className={`${styles.group} ${className}`}>
      {Object.entries(list).map((category) => {
        return (
          <CheckBox
            key={category[0]}
            field={category[0]}
            value={category[1]}
            click={click}
            keyDown={keyDown}
          />
        );
      })}
    </div>
  );
}

export default CheckBoxGroup;

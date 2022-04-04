import React from 'react';
import styles from './CheckBoxGroup.module.scss';
import CheckBox from './CheckBox/CheckBox';
import {IBonuses} from '../../../pages/Order/mocks';

interface IRadioGroupProps<T> {
  list: T [],
  defaultChecked: boolean [],
  className?: string,
  click: (e: React.MouseEvent<HTMLInputElement>) => void,
  keyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void,
}

function CheckBoxGroup<T extends IBonuses>({
  list, defaultChecked, className, click, keyDown,
}: IRadioGroupProps<T>) {
  return (
    <div className={`${styles.group} ${className}`}>
      {list.map((category, i) => {
        return (
          <CheckBox
            key={category.name}
            name={category.name}
            field={category.desc}
            value={category.cost.toString()}
            defaultChecked={defaultChecked[i]}
            click={click}
            keyDown={keyDown}
          />
        );
      })}
    </div>
  );
}

export default CheckBoxGroup;

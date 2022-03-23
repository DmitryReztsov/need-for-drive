import React from 'react';
import styles from './RadioGroup.module.scss';
import RadioButton from './RadioButton/RadioButton';

interface IRadioGroupProps {
  list: string [],
  field: string,
  allTypes?: string,
  defaultValue?: string,
  className?: string,
  click: (e: React.MouseEvent<HTMLInputElement>) => void,
  keyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void,
}

function RadioGroup(props: IRadioGroupProps) {
  const {
    list, field, allTypes, defaultValue, className, click, keyDown,
  } = props;
  return (
    <div className={`${styles.group} ${className}`}>
      {allTypes && (
        <RadioButton
          key={allTypes}
          field={field}
          value={allTypes}
          click={click}
          keyDown={keyDown}
          defaultValue
        />
      )}
      {list.map((category) => {
        return (
          <RadioButton
            key={category}
            field={field}
            value={category}
            click={click}
            keyDown={keyDown}
            defaultValue={defaultValue === category}
          />
        );
      })}
    </div>
  );
}

export default RadioGroup;

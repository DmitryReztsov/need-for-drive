import React from 'react';
import styles from './RadioGroup.module.scss';
import RadioButton from './RadioButton/RadioButton';

export interface IRadioItem {
  id: string,
  name: string,
}

interface IRadioGroupProps<T> {
  list: T [],
  field: string,
  allTypes?: T,
  defaultValue?: T | null,
  className?: string,
}

function RadioGroup<T extends IRadioItem>(props: IRadioGroupProps<T>) {
  const {
    list, field, allTypes, defaultValue, className,
  } = props;
  return (
    <div className={`${styles.group} ${className}`}>
      {allTypes && (
        <RadioButton
          key={allTypes.id}
          field={field}
          id={allTypes.id}
          item={allTypes}
          value={allTypes.name}
          defaultValue
        />
      )}
      {list.map((category) => {
        return (
          <RadioButton
            key={category.id}
            field={field}
            id={category.id}
            item={category}
            value={category.name}
            defaultValue={defaultValue?.id === category.id}
          />
        );
      })}
    </div>
  );
}

export default RadioGroup;

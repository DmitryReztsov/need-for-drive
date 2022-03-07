import React from 'react';
import styles from './RadioGroup.module.scss';
import RadioButton from './RadioButton/RadioButton';

interface IRadioGroupProps {
  list: string [],
  field: string,
  allTypes?: string,
  className?: string,
}

function RadioGroup(props: IRadioGroupProps) {
  const {
    list, field, allTypes, className,
  } = props;
  return (
    <div className={`${styles.group} ${className}`}>
      {allTypes && <RadioButton field={field} value={allTypes} />}
      {list.map((category) => {
        return <RadioButton field={field} value={category} />;
      })}
    </div>
  );
}

export default RadioGroup;

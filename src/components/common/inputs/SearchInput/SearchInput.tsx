import React from 'react';
import styles from './SearchInput.module.scss';

interface ISearchInputProps {
  field: string,
  label: string,
  value: string,
  placeholder?: string,
  changeHandler: (e: React.ChangeEvent<HTMLInputElement>) => void,
  keyDownHandler: (e: React.KeyboardEvent<HTMLInputElement>) => void,
}

function SearchInput(props: ISearchInputProps) {
  const {
    field, label, value, placeholder, changeHandler, keyDownHandler,
  } = props;

  return (
    <label htmlFor={field} className={styles.search}>
      {label}
      <input
        id={field}
        name={field}
        type="search"
        tabIndex={0}
        placeholder={placeholder}
        onChange={changeHandler}
        onKeyDown={keyDownHandler}
        value={value}
      />
    </label>
  );
}

export default SearchInput;

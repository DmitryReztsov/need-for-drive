import React from 'react';
import styles from './SearchInput.module.scss';

interface ISearchInputProps {
  field: string,
  label: string,
  value?: string,
  placeholder?: string,
  clickHandler: (e: React.MouseEvent<HTMLInputElement>) => void,
  changeHandler: (e: React.ChangeEvent<HTMLInputElement>) => void,
  keyDownHandler: (e: React.KeyboardEvent<HTMLInputElement>) => void,
  blurHandler: (e: React.FocusEvent<HTMLInputElement>) => void,
}

function SearchInput(props: ISearchInputProps) {
  const {
    field, label, value, placeholder, clickHandler, changeHandler, keyDownHandler, blurHandler,
  } = props;

  return (
    <label htmlFor={field} className={styles.label}>
      {label}
      <input
        id={field}
        name={field}
        type="search"
        tabIndex={0}
        placeholder={placeholder}
        onClick={clickHandler}
        onChange={changeHandler}
        onKeyDown={keyDownHandler}
        onBlur={blurHandler}
        value={value}
        className={styles.input}
      />
    </label>
  );
}

export default SearchInput;

import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {useSearchParams} from 'react-router-dom';
import styles from './Autocomplete.module.scss';
import SearchInput from '../inputs/SearchInput/SearchInput';
import setForm from '../../../store/form/actions';
import useAppendParams from '../../../hooks/useAppendParams';

interface IAutocompleteProps {
  list: string [],
  field: string,
  label: string,
  value: string,
  placeholder?: string,
}

function Autocomplete(props: IAutocompleteProps) {
  const {
    list, field, label, value, placeholder,
  } = props;

  const dispatch = useDispatch();
  const appendParams = useAppendParams;
  const [searchParams, setSearchParams] = useSearchParams();
  const [activeSuggestion, setActiveSuggestion] = useState<number>(0);
  const [filteredSuggestions, setFilteredSuggestions] = useState<string []>([]);
  const [showSuggestions, setShowSuggestions] = useState<boolean>(false);

  function handleChangeInput(e: React.ChangeEvent<HTMLInputElement>) {
    setFilteredSuggestions(list.filter(
      (suggestion) =>
        suggestion.toLowerCase().includes(e.currentTarget.value.toLowerCase()),
    ));
    setShowSuggestions(true);
    appendParams(field, e.currentTarget.value);
  }

  function handleClickOption(e:React.MouseEvent<HTMLLIElement>) {
    setFilteredSuggestions([]);
    setShowSuggestions(false);
    dispatch(setForm(field, e.currentTarget.innerText));
    searchParams.set(field, e.currentTarget.innerText);
    setSearchParams(searchParams);
  }

  function handleKeyInput(e:React.KeyboardEvent<HTMLInputElement>) {
    if (e.code === 'Enter') {
      setActiveSuggestion(0);
      setShowSuggestions(false);
      dispatch(setForm(field, filteredSuggestions[activeSuggestion]));
      searchParams.set(field, filteredSuggestions[activeSuggestion]);
      setSearchParams(searchParams);
    } else if (e.code === 'ArrowUp') {
      if (activeSuggestion === 0) {
        return;
      }
      setActiveSuggestion(activeSuggestion - 1);
    } else if (e.code === 'ArrowDown') {
      if (activeSuggestion - 1 === filteredSuggestions.length) {
        return;
      }
      setActiveSuggestion(activeSuggestion + 1);
    }
  }

  function handleKeyOption(e:React.KeyboardEvent<HTMLLIElement>) {
    if (e.code === 'Enter') {
      setFilteredSuggestions([]);
      setShowSuggestions(false);
      dispatch(setForm(field, e.currentTarget.innerText));
      searchParams.set(field, e.currentTarget.innerText);
      setSearchParams(searchParams);
    }
  }

  return (
    <div className={styles.autocomplete}>
      <SearchInput
        field={field}
        label={label}
        value={value}
        placeholder={placeholder}
        changeHandler={handleChangeInput}
        keyDownHandler={handleKeyInput}
      />
      {(showSuggestions && value)
        ? (filteredSuggestions.length
          ? (
            <ul
              role="menu"
              className={styles.suggestions}
            >
              {filteredSuggestions.map((suggestion, index) => (
                <li
                  role="menuitem"
                  tabIndex={0}
                  className={`${index === activeSuggestion ? styles.active : ''}`}
                  key={suggestion}
                  onClick={handleClickOption}
                  onKeyDown={handleKeyOption}
                >
                  {suggestion}
                </li>
              ))}
            </ul>
          )
          : (
            <div className={styles.no_suggestions}>
              Города не найдены
            </div>
          ))
        : null}
    </div>
  );
}

export default Autocomplete;

import React, {useRef, useState} from 'react';
import {useDispatch} from 'react-redux';
import {useSearchParams} from 'react-router-dom';
import styles from './Autocomplete.module.scss';
import SearchInput from '../inputs/SearchInput/SearchInput';
import useAppendParams from '../../../hooks/useAppendParams';
import useOutside from '../../../hooks/useOutsideAlerter';

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

  const wrapperRef = useRef(null);
  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();
  // Под вопросом реализация пользовательского хука
  const appendParams = useAppendParams(dispatch, searchParams, setSearchParams);
  const [activeSuggestion, setActiveSuggestion] = useState<number>(0);
  const [filteredSuggestions, setFilteredSuggestions] = useState<string []>([]);
  const [showSuggestions, setShowSuggestions] = useState<boolean>(false);
  useOutside(wrapperRef, setShowSuggestions);

  function handleChangeInput(e: React.ChangeEvent<HTMLInputElement>) {
    setFilteredSuggestions(list.filter(
      (suggestion) =>
        suggestion.toLowerCase().includes(e.currentTarget.value.toLowerCase()),
    ));
    setShowSuggestions(true);
    appendParams(field, e.currentTarget.value);
  }

  function handleClickInput(e: React.MouseEvent<HTMLInputElement>) {
    setFilteredSuggestions(list.filter(
      (suggestion) =>
        suggestion.toLowerCase().includes(e.currentTarget.value.toLowerCase()),
    ));
    setShowSuggestions(true);
  }

  function handleKeyInput(e:React.KeyboardEvent<HTMLInputElement>) {
    if (e.code === 'Enter') {
      setActiveSuggestion(0);
      setShowSuggestions(false);
      appendParams(field, e.currentTarget.innerText);
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
      appendParams(field, e.currentTarget.innerText);
    }
  }

  function handleClickOption(e:React.MouseEvent<HTMLLIElement>) {
    setFilteredSuggestions([]);
    setShowSuggestions(false);
    appendParams(field, e.currentTarget.innerText);
  }

  return (
    <div className={styles.autocomplete} ref={wrapperRef}>
      <SearchInput
        field={field}
        label={label}
        value={value}
        placeholder={placeholder}
        clickHandler={handleClickInput}
        changeHandler={handleChangeInput}
        keyDownHandler={handleKeyInput}
      />
      {(showSuggestions)
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

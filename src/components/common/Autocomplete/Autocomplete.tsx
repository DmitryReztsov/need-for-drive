import React, {useRef, useState} from 'react';
import styles from './Autocomplete.module.scss';
import SearchInput from '../inputs/SearchInput/SearchInput';
import useAppendParams from '../../../hooks/useAppendParams';
import useOutside from '../../../hooks/useOutsideAlerter';
import Suggestions from './Suggestions/Suggestions';

interface IAutocompleteProps {
  list: string [],
  field: string,
  label: string,
  value: string,
  placeholder?: string,
  resetField?: string,
  clickDropdown?: boolean,
}

function Autocomplete(props: IAutocompleteProps) {
  const {
    list, field, label, value, placeholder, resetField, clickDropdown,
  } = props;

  const wrapperRef = useRef<HTMLDivElement>(null);
  const [activeSuggestion, setActiveSuggestion] = useState<number>(0);
  const [filteredSuggestions, setFilteredSuggestions] = useState<string []>([]);
  const [showSuggestions, setShowSuggestions] = useState<boolean>(false);
  const appendParams = useAppendParams();

  function clearField() {
    if (resetField) appendParams(resetField, '');
  }

  function handleChangeInput(e: React.ChangeEvent<HTMLInputElement>) {
    setFilteredSuggestions(list.sort().filter(
      (suggestion) =>
        suggestion.toLowerCase().includes(e.currentTarget.value.toLowerCase()),
    ));
    setShowSuggestions(true);
    appendParams(field, e.currentTarget.value);
    clearField();
  }

  function handleClickInput(e: React.MouseEvent<HTMLInputElement>) {
    if (clickDropdown) {
      setFilteredSuggestions(list);
      setShowSuggestions(true);
    } else {
      setFilteredSuggestions(list.filter(
        (suggestion) =>
          suggestion.toLowerCase().includes(e.currentTarget.value.toLowerCase()),
      ));
      setShowSuggestions(true);
    }
  }

  function handleKeyInput(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.code === 'Enter') {
      setActiveSuggestion(0);
      setShowSuggestions(false);
      appendParams(field, filteredSuggestions[activeSuggestion]);
      clearField();
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

  function handleBlurInput(e: React.FocusEvent<HTMLInputElement>) {
    const buffer = filteredSuggestions.find((sugg) => sugg.includes(e.currentTarget.value));
    // Чтобы дать возможность сработать клику по меню, оставляем варианты когда
    // только одна опция или нет. Таким образом, мы автоподставляем нужно значение
    if (wrapperRef.current && !wrapperRef.current.contains(e.relatedTarget) && value) {
      setFilteredSuggestions([]);
      setShowSuggestions(false);
      appendParams(field, buffer || '');
    }
  }

  function handleKeyOption(e: React.KeyboardEvent<HTMLLIElement>) {
    if (e.code === 'Enter') {
      setFilteredSuggestions([]);
      setShowSuggestions(false);
      appendParams(field, e.currentTarget.innerText);
      clearField();
    }
  }

  function handleClickOption(e: React.MouseEvent<HTMLLIElement>) {
    setFilteredSuggestions([]);
    setShowSuggestions(false);
    appendParams(field, e.currentTarget.innerText);
    clearField();
  }

  // Обработка клика вне меню
  useOutside(wrapperRef, setShowSuggestions);

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
        blurHandler={handleBlurInput}
      />
      {showSuggestions
        ? (
          <Suggestions
            filteredSuggestions={filteredSuggestions}
            activeSuggestion={activeSuggestion}
            click={handleClickOption}
            keyDown={handleKeyOption}
          />
        )
        : null}
    </div>
  );
}

export default Autocomplete;

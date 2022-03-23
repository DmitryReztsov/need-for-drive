import React, {useRef} from 'react';
import styles from './Autocomplete.module.scss';
import SearchInput from '../inputs/SearchInput/SearchInput';
import Suggestions from './Suggestions/Suggestions';
import useAuto from './useAuto';

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

  const {
    showSuggestions,
    filteredSuggestions,
    activeSuggestion,
    handleChangeInput,
    handleClickInput,
    handleKeyInput,
    handleBlurInput,
    handleClickOption,
    handleKeyOption,
  } = useAuto({
    resetField, list, field, value, clickDropdown, wrapperRef,
  });

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
      {showSuggestions && (
        <Suggestions
          filteredSuggestions={filteredSuggestions}
          activeSuggestion={activeSuggestion}
          click={handleClickOption}
          keyDown={handleKeyOption}
        />
      )}
    </div>
  );
}

export default Autocomplete;

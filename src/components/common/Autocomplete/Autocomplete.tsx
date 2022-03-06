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

  const auto = useAuto({
    resetField, list, field, value, clickDropdown, wrapperRef,
  });

  return (
    <div className={styles.autocomplete} ref={wrapperRef}>
      <SearchInput
        field={field}
        label={label}
        value={value}
        placeholder={placeholder}
        clickHandler={auto.handleClickInput}
        changeHandler={auto.handleChangeInput}
        keyDownHandler={auto.handleKeyInput}
        blurHandler={auto.handleBlurInput}
      />
      {auto.showSuggestions && (
      <Suggestions
        filteredSuggestions={auto.filteredSuggestions}
        activeSuggestion={auto.activeSuggestion}
        click={auto.handleClickOption}
        keyDown={auto.handleKeyOption}
      />
      )}
    </div>
  );
}

export default Autocomplete;

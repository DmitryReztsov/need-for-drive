import React, {useState} from 'react';
import {useSearchParams} from 'react-router-dom';
import styles from './Geo.module.scss';

const cities = [
  'Ульяновск',
  'Москва',
  'Санкт-Петербург',
  'Краснодар',
];

interface IGeoProps {
  city: string,
  pickPoint: string,
}

function Geo(props: IGeoProps) {
  const {city, pickPoint} = props;
  const [searchParams, setSearchParams] = useSearchParams();
  const [activeSuggestion, setActiveSuggestion] = useState<number>(0);
  const [filteredSuggestions, setFilteredSuggestions] = useState<string []>([]);
  const [showSuggestions, setShowSuggestions] = useState<boolean>(false);

  function handleCityChange(e: React.ChangeEvent<HTMLInputElement>) {
    console.log(city, searchParams.get('city'));
    setFilteredSuggestions(cities.filter(
      (suggestion) =>
        suggestion.toLowerCase().includes(e.currentTarget.value.toLowerCase()),
    ));
    setShowSuggestions(true);
    setSearchParams({city: e.currentTarget.value});
  }

  function handleCityClick(e:React.MouseEvent<HTMLLIElement>) {
    setFilteredSuggestions([]);
    setShowSuggestions(false);
    setSearchParams({city: e.currentTarget.innerText});
  }

  function handleCityKey(e:React.KeyboardEvent<HTMLInputElement>
    | React.KeyboardEvent<HTMLLIElement>) {
    if (e.code === 'Enter') {
      setActiveSuggestion(0);
      setShowSuggestions(false);
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

  return (
    <div className={styles.geo}>
      <div className={styles.form}>
        <label htmlFor="city">
          Город
          <input
            id="city"
            name="city"
            type="search"
            tabIndex={0}
            placeholder="Начните вводить город ..."
            onChange={handleCityChange}
            value={city}
          />
        </label>
        {(showSuggestions && city)
          ? (filteredSuggestions.length
            ? (
              <ul
                role="menu"
                className={styles.suggestions}
              >
                {filteredSuggestions.map((suggestion, index) => (
                  <li
                    role="menuitem"
                    className={`${index === activeSuggestion ? styles.active : ''}`}
                    key={suggestion}
                    onClick={handleCityClick}
                    onKeyDown={handleCityKey}
                  >
                    {suggestion}
                  </li>
                ))}
              </ul>
            )
            : (
              <div className={styles.no_suggestion}>
                <em>No suggestions available.</em>
              </div>
            ))
          : null}
        <label htmlFor="pickPoint">
          Пункт выдачи
          <input
            id="pickPoint"
            name="pickPoint"
            type="search"
            tabIndex={0}
            placeholder="Начните вводить пункт ..."
            onChange={handleCityChange}
            onKeyDown={handleCityKey}
            value={pickPoint}
          />
        </label>
      </div>
    </div>
  );
}

export default Geo;

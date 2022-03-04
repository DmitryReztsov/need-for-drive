import React from 'react';
import styles from './Suggestions.module.scss';

interface ISuggestionsProps {
  filteredSuggestions: string [],
  activeSuggestion: number,
  click: (e: React.MouseEvent<HTMLLIElement>) => void,
  keyDown: (e: React.KeyboardEvent<HTMLLIElement>) => void,
}

function Suggestions(props: ISuggestionsProps) {
  const {
    filteredSuggestions, activeSuggestion, click, keyDown,
  } = props;

  if (!filteredSuggestions.length) {
    return <div className={styles.no_suggestions}>Опций не найдено</div>;
  }

  return (
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
          onClick={click}
          onKeyDown={keyDown}
        >
          {suggestion}
        </li>
      ))}
    </ul>
  );
}

export default Suggestions;

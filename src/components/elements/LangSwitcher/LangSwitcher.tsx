import React from 'react';
import styles from './LangSwitcher.module.scss';

interface ILangSwitcherProps {
  lang: string,
  className: string,
  click: () => void,
  keyDown: (e: React.KeyboardEvent<HTMLSpanElement>) => void,
}

function LangSwitcher(props: ILangSwitcherProps): React.ReactElement {
  const {
    lang, className, click, keyDown,
  } = props;

  return (
    <span
      className={`${styles.switcher} ${className}`}
      role="button"
      tabIndex={0}
      onClick={click}
      onKeyDown={keyDown}
    >
      {lang}
    </span>
  );
}

export default LangSwitcher;

import React, {useEffect, useState} from 'react';
import styles from './NavBar.module.scss';

function NavBar() {
  const [lang, setLang] = useState<string>('Рус');
  const [active, setActive] = useState<boolean>(false);

  function switcherClickHandler(): void {
    if (lang === 'Рус') {
      setLang('Eng');
    } else {
      setLang('Рус');
    }
  }

  function burgerClickHandler(): void {
    setActive(!active);
  }

  function switcherKeyDownHandler(e: React.KeyboardEvent<HTMLSpanElement>): void {
    if (e.code === 'Enter') {
      if (lang === 'Рус') {
        setLang('Eng');
      } else {
        setLang('Рус');
      }
    }
  }

  function burgerKeyDownHandler(e: React.KeyboardEvent<HTMLSpanElement>): void {
    if (e.code === 'Enter') {
      setActive(!active);
    }
  }

  function setStyle(): string {
    if (active) {
      return `${styles.nav__burger} ${styles.active}`;
    }
    return styles.nav__burger;
  }

  useEffect(() => {
    setStyle();
  }, [active]);
  return (
    <div className={styles.nav}>
      <span className={setStyle()} role="button" tabIndex={0} onClick={burgerClickHandler} onKeyDown={burgerKeyDownHandler}>
        <span />
        <span />
        <span />
      </span>
      <span className={styles.nav__switcher} role="button" tabIndex={0} onClick={switcherClickHandler} onKeyDown={switcherKeyDownHandler}>{lang}</span>
    </div>
  );
}

export default NavBar;

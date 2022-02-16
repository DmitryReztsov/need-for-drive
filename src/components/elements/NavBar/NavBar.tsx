import React, {useEffect, useState} from 'react';
import CustomLink from '../Link/CustomLink';
import styles from './NavBar.module.scss';
import {ReactComponent as FacebookIcon} from '../../../content/svg/facebook-brands.svg';
import {ReactComponent as TelegramIcon} from '../../../content/svg/telegram-brands.svg';
import {ReactComponent as InstagramIcon} from '../../../content/svg/instagram-brands.svg';

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
  function setStyleMenu(): string {
    if (active) {
      return `${styles.nav__menu} ${styles.active}`;
    }
    return styles.nav__menu;
  }

  useEffect(() => {
    setStyle();
    setStyleMenu();
  }, [active]);
  return (
    <div className={styles.nav}>
      <span
        className={setStyle()}
        role="button"
        tabIndex={0}
        onClick={burgerClickHandler}
        onKeyDown={burgerKeyDownHandler}
      >
        <span />
        <span />
        <span />
      </span>
      <span
        className={styles.nav__switcher}
        role="button"
        tabIndex={0}
        onClick={switcherClickHandler}
        onKeyDown={switcherKeyDownHandler}
      >
        {lang}
      </span>
      <div className={setStyleMenu()}>
        <div className={styles.nav__body}>
          <ul className={styles.nav__list}>
            <li>
              <CustomLink className={styles.nav__link}>ПАРКОВКА</CustomLink>
            </li>
            <li>
              <CustomLink className={styles.nav__link}>СТРАХОВАНИЕ</CustomLink>
            </li>
            <li>
              <CustomLink className={styles.nav__link}>БЕНЗИН</CustomLink>
            </li>
            <li>
              <CustomLink className={styles.nav__link}>ОБСЛУЖИВАНИЕ</CustomLink>
            </li>
          </ul>
          <ul className={styles.nav__social}>
            <li>
              <CustomLink><FacebookIcon className="logo" /></CustomLink>
            </li>
            <li>
              <CustomLink><TelegramIcon className="logo" /></CustomLink>
            </li>
            <li>
              <CustomLink><InstagramIcon className="logo" /></CustomLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default NavBar;

import React, {useEffect, useState} from 'react';
import CustomLink from '../Link/CustomLink';
import styles from './NavBar.module.scss';
import {ReactComponent as FacebookIcon} from '../../../content/svg/facebook-brands.svg';
import {ReactComponent as TelegramIcon} from '../../../content/svg/telegram-brands.svg';
import {ReactComponent as InstagramIcon} from '../../../content/svg/instagram-brands.svg';
import options from '../../../utils/lists';

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
      return `${styles.burger} ${styles.active}`;
    }
    return styles.burger;
  }

  function setStyleMenu(): string {
    if (active) {
      return `${styles.menu} ${styles.active}`;
    }
    return styles.menu;
  }

  // Для отмены прокрутки при открытом меню
  function toggleBodyOverflow() {
    const body = document.querySelector('body')!;
    if (active) {
      body.classList.add('active');
    } else {
      body.classList.remove('active');
    }
  }

  useEffect(() => {
    setStyle();
    setStyleMenu();
    toggleBodyOverflow();
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
        className={styles.switcher}
        role="button"
        tabIndex={0}
        onClick={switcherClickHandler}
        onKeyDown={switcherKeyDownHandler}
      >
        {lang}
      </span>
      <div className={setStyleMenu()}>
        <div className={styles.body}>
          <ul role="menu" tabIndex={0} className={styles.list}>
            {options.map((option) => (
              <li role="menuitem" tabIndex={0} onClick={burgerClickHandler} onKeyDown={burgerKeyDownHandler}>
                <CustomLink className={styles.link}>{option}</CustomLink>
              </li>
            ))}
          </ul>
          <ul className={styles.social}>
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
        <span
          className={styles.switcher}
          role="button"
          tabIndex={0}
          onClick={switcherClickHandler}
          onKeyDown={switcherKeyDownHandler}
        >
          {lang}
        </span>
      </div>
    </div>
  );
}

export default NavBar;

import React, {useEffect, useState} from 'react';
import CustomLink from '../Link/CustomLink';
import styles from './NavBar.module.scss';
import {ReactComponent as FacebookIcon} from '../../../content/svg/facebook-brands.svg';
import {ReactComponent as TelegramIcon} from '../../../content/svg/telegram-brands.svg';
import {ReactComponent as InstagramIcon} from '../../../content/svg/instagram-brands.svg';
import Burger from './Burger/Burger';
import LangSwitcher from './LangSwitcher/LangSwitcher';

const options = [
  'ПАРКОВКА',
  'СТРАХОВКА',
  'БЕНЗИН',
  'ОБСЛУЖИВАНИЕ',
];

function NavBar() {
  const [lang, setLang] = useState<string>('Рус');
  const [active, setActive] = useState<boolean>(false);

  function clickHandler(): void {
    setActive(!active);
  }

  function keyDownHandler(e: React.KeyboardEvent<HTMLSpanElement>): void {
    if (e.code === 'Enter') {
      setActive(!active);
    }
  }

  function switcherClickHandler(): void {
    setLang(lang === 'Рус' ? 'Eng' : 'Рус');
  }

  function switcherKeyDownHandler(e: React.KeyboardEvent<HTMLSpanElement>): void {
    if (e.code === 'Enter') {
      setLang(lang === 'Рус' ? 'Eng' : 'Рус');
    }
  }

  function setStyleMenu(): string {
    return active ? `${styles.menu} ${styles.active}` : styles.menu;
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
    toggleBodyOverflow();
  }, [active]);
  return (
    <div className={styles.nav}>
      <Burger
        className={styles.burger}
        active={active}
        click={clickHandler}
        keyDown={keyDownHandler}
      />
      <LangSwitcher
        lang={lang}
        className={styles.switcher}
        click={switcherClickHandler}
        keyDown={switcherKeyDownHandler}
      />
      <div className={setStyleMenu()}>
        <div className={styles.body}>
          <ul role="menu" tabIndex={0} className={styles.list}>
            {options.map((option) => (
              <li role="menuitem" tabIndex={0} key={option} onClick={clickHandler} onKeyDown={keyDownHandler}>
                <CustomLink className={styles.link}>{option}</CustomLink>
              </li>
            ))}
          </ul>
          <ul className={styles.social}>
            <li>
              <CustomLink><FacebookIcon className="logo"/></CustomLink>
            </li>
            <li>
              <CustomLink><TelegramIcon className="logo"/></CustomLink>
            </li>
            <li>
              <CustomLink><InstagramIcon className="logo"/></CustomLink>
            </li>
          </ul>
        </div>
        <div className={new URL(document.location.href).toString().includes('order') ? '' : styles.glass}/>
        <LangSwitcher
          lang={lang}
          className={styles.switcher}
          click={switcherClickHandler}
          keyDown={switcherKeyDownHandler}
        />
      </div>
    </div>
  );
}

export default NavBar;

import React, {useEffect, useState} from 'react';
import CustomLink from '../Link/CustomLink';
import styles from './NavBar.module.scss';
import {ReactComponent as TelegramIcon} from '../../../content/svg/telegram-brands.svg';
import Burger from './Burger/Burger';
import LangSwitcher from './LangSwitcher/LangSwitcher';
import toggleBodyOverflow from '../../../utils/helpers';

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

  useEffect(() => {
    toggleBodyOverflow(active);
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
              <CustomLink><TelegramIcon className="logo" /></CustomLink>
            </li>
          </ul>
        </div>
        <div className={new URL(document.location.href).toString().includes('order') ? '' : styles.glass} />
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

import React from 'react';
import styles from './Burger.module.scss';

interface IBurgerProps {
  active: boolean,
  className: string,
  click: () => void,
  keyDown: (e: React.KeyboardEvent<HTMLSpanElement>) => void,
}

function Burger(props: IBurgerProps): React.ReactElement {
  const {
    active, className, click, keyDown,
  } = props;

  return (
    <span
      className={`${styles.burger} ${active ? styles.active : ''} ${className}`}
      role="button"
      tabIndex={0}
      onClick={click}
      onKeyDown={keyDown}
    >
      <span/>
      <span/>
      <span/>
    </span>
  );
}

export default Burger;

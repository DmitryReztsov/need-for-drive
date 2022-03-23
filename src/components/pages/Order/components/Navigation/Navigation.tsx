import React from 'react';
import styles from './Navigation.module.scss';
import {IStage} from '../Main/Main';

interface INavigationProps {
  stages: IStage [],
  activeIndex: number,
  click: (id: number) => void,
  keyDown: (e: React.KeyboardEvent<HTMLLIElement>, id: number) => void,
}

function Navigation(props: INavigationProps) {
  const {
    stages, activeIndex, click, keyDown,
  } = props;
  return (
    <ul role="menu" tabIndex={0} className={styles.list}>
      {stages.map((stage, i) => (
        <li
          role="menuitem"
          tabIndex={0}
          key={stage.name}
          className={i === activeIndex ? styles.active : i < activeIndex ? styles.available : ''}
          onClick={() => click(i)}
          onKeyDown={(e) => keyDown(e, i)}
        >
          {stage.name}
        </li>
      ))}
    </ul>
  );
}

export default Navigation;

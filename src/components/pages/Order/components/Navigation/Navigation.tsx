import React from 'react';
import Container from '../../../../common/Container/Container';
import styles from './Navigation.module.scss';

interface INavigationProps {
  stages: string [],
  index: number,
  click: (id: number) => void,
  keyDown: (e: React.KeyboardEvent<HTMLLIElement>, id: number) => void,
}

function Navigation(props: INavigationProps) {
  const {
    stages, index, click, keyDown,
  } = props;
  return (
    <nav className={styles.navigation}>
      <Container>
        <ul role="menu" tabIndex={0} className={styles.list}>
          {stages.map((stage, i) => (
            <li
              role="menuitem"
              tabIndex={0}
              key={stage}
              className={i === index ? styles.active : ''}
              onClick={() => click(i)}
              onKeyDown={(e) => keyDown(e, i)}
            >
              {stage}
            </li>
          ))}
        </ul>
      </Container>
    </nav>
  );
}

export default Navigation;
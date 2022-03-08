import React from 'react';
import CustomLink from '../Link/CustomLink';
import styles from './Header.module.scss';
import {ReactComponent as GeoIcon} from '../../../content/svg/geo.svg';
import Container from '../Container/Container';

interface IHeaderProps {
  padding?: string,
}

function Header({padding}: IHeaderProps) {
  return (
    <header className={styles.header}>
      <Container className={padding}>
        <div className={styles.body}>
          <h1>Need for drive</h1>
          <CustomLink className={styles.geo}>
            <>
              <GeoIcon className="logo"/>
              <span>Ульяновск</span>
            </>
          </CustomLink>
        </div>
      </Container>
    </header>
  );
}

export default Header;

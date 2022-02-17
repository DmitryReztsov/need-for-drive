import React from 'react';
import CustomLink from '../Link/CustomLink';
import styles from './Header.module.scss';
import {ReactComponent as GeoIcon} from '../../../content/svg/geo.svg';

function Header() {
  return (
    <div className={styles.header}>
      <h1>Need for Drive</h1>
      <CustomLink className={styles.geo}>
        <>
          <GeoIcon className="logo" />
          <span>Ульяновск</span>
        </>
      </CustomLink>
    </div>
  );
}

export default Header;

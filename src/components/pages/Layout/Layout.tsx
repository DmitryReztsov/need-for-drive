import React from 'react';
import {Outlet} from 'react-router-dom';
import NavBar from '../../elements/NavBar/NavBar';
import styles from './Layout.module.scss';

function Layout() {
  return (
    <div className={styles.layout}>
      <NavBar />
      <Outlet />
    </div>
  );
}

export default Layout;

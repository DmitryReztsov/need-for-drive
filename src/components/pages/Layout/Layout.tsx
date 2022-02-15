import React from 'react';
import {Outlet} from 'react-router-dom';
import NavBar from '../../elements/NavBar/NavBar';

function Layout() {
  return (
    <div>
      <NavBar />
      <Outlet />
    </div>
  );
}

export default Layout;

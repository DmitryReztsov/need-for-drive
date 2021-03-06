import React from 'react';
import {Route, Routes} from 'react-router-dom';
import styles from './App.module.scss';
import Layout from '../Layout/Layout';
import Homepage from '../pages/Homepage/Homepage';
import Order from '../pages/Order/Order';

function App() {
  return (
    <div className={styles.app}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Homepage />} />
          <Route path="order" element={<Order />} />
          <Route path="order/:id" element={<Order />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;

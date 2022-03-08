import React from 'react';
import Main from './components/Main/Main';
import Header from '../../common/Header/Header';
import styles from './Order.module.scss';

function Order() {
  return (
    <div className={styles.order}>
      <Header padding={styles.container} />
      <Main />
    </div>
  );
}

export default Order;

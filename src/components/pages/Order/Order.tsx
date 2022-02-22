import React from 'react';
import OrderBody from './components/OrderBody/OrderBody';
import Header from '../../common/Header/Header';
import Container from '../../common/Container/Container';
import styles from './Order.module.scss';

function Order() {
  return (
    <div className={styles.order}>
      <Container>
        <Header />
        <OrderBody />
      </Container>
    </div>
  );
}

export default Order;

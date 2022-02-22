import React from 'react';
import OrderNavigation from '../OrderNavigation/OrderNavigation';
import styles from './OrderBody.module.scss';

function OrderBody() {
  return (
    <main className={styles.orderBody}>
      <OrderNavigation />
    </main>
  );
}

export default OrderBody;

import React from 'react';
import styles from './Checkout.module.scss';

function Checkout() {
  return (
    <div className={styles.checkout}>
      <button type="submit">Отправить</button>
    </div>
  );
}

export default Checkout;

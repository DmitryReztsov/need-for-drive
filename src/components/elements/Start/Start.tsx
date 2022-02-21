import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Main from '../Main/Main';
import styles from './Start.module.scss';

function Start() {
  return (
    <div className={styles.start}>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default Start;

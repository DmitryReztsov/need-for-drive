import React from 'react';
import Header from '../../common/Header/Header';
import Footer from '../../common/Footer/Footer';
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

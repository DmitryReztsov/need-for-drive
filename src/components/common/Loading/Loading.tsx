import React from 'react';
import styles from './Loading.module.scss';
import gif from '../../../content/gifs/loading.gif';

function Loading() {
  return (
    <div className={styles.loading}>
      <div className={styles.container}>
        <img className={styles.gif} src={gif} alt="loading icon" />
      </div>
    </div>
  );
}

export default Loading;

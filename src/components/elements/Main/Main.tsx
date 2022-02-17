import React from 'react';
import styles from './Main.module.scss';

function Main() {
  return (
    <div className={styles.main}>
      <h2 className={styles.title}>
        Каршеринг
        <br />
        <span className={styles.title_green}>Need for drive</span>
      </h2>
      <p className={styles.text}>Поминутная аренда авто твоего города</p>
      <button type="submit" className={`${styles.button} button button_big`}>Забронировать</button>
    </div>
  );
}

export default Main;

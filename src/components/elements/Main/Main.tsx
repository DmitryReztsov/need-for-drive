import React from 'react';
import styles from './Main.module.scss';
import CustomLink from '../Link/CustomLink';

function Main() {
  return (
    <div className={styles.main}>
      <h2 className={styles.title}>
        Каршеринг
        <br />
        <span className={styles.title_green}>Need for drive</span>
      </h2>
      <p className={styles.text}>Поминутная аренда авто твоего города</p>
      <CustomLink href="/order">
        <button type="submit" className={`${styles.button} button button_big`}>Забронировать</button>
      </CustomLink>
    </div>
  );
}

export default Main;
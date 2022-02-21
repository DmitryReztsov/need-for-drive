import React from 'react';
import styles from './Main.module.scss';
import CustomLink from '../Link/CustomLink';
import Button from '../Button/Button';

function Main() {
  return (
    <div className={styles.main}>
      <h2 className={styles.title}>
        <span>Каршеринг</span>
        <br />
        <span className={styles.title_green}>Need for drive</span>
      </h2>
      <p className={styles.text}>Поминутная аренда авто твоего города</p>
      <CustomLink href="/order">
        <Button className={styles.button}>Забронировать</Button>
      </CustomLink>
    </div>
  );
}

export default Main;

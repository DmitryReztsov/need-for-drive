import React from 'react';
import styles from './Main.module.scss';
import CustomLink from '../Link/CustomLink';
import Button from '../Button/Button';
import Container from '../Container/Container';

function Main() {
  return (
    <div className={styles.main}>
      <Container>
        <div className={styles.body}>
          <h2 className={styles.title}>
            <span>Каршеринг</span>
            <br />
            <span className={styles.title_green}>Need for drive</span>
          </h2>
          <p className={styles.text}>Поминутная аренда авто твоего города</p>
        </div>
      </Container>
      <CustomLink href="/order">
        <Button className={styles.button}>Забронировать</Button>
      </CustomLink>
    </div>
  );
}

export default Main;

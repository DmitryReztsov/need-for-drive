import React from 'react';
import Container from '../Container/Container';
import styles from './Footer.module.scss';

function Footer() {
  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.body}>
          <span>© 2016-2019 «Need for drive»</span>
          <a href="tel:84952342244">8 (495) 234-22-44</a>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;

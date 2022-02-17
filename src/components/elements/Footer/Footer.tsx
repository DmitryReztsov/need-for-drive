import React from 'react';
import styles from './Footer.module.scss';
import CustomLink from '../Link/CustomLink';

function Footer() {
  return (
    <footer className={styles.footer}>
      <span>© 2016-2019 «Need for drive»</span>
      <CustomLink className={styles.link}>8 (495) 234-22-44</CustomLink>
    </footer>
  );
}

export default Footer;

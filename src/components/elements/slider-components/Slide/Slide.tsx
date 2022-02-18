import React from 'react';
import styles from './Slide.module.scss';

interface SlideProps {
  src: string,
}

function Slide({src}: SlideProps): React.ReactElement {
  return (
    <div className={styles.slide} style={{backgroundImage: `url(${src})`}} />
  );
}

export default Slide;

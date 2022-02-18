import React from 'react';
import styles from './Slide.module.scss';

interface SlideProps {
  src: string,
  refProp: React.Ref<HTMLDivElement>,
}

function Slide({src, refProp}: SlideProps): React.ReactElement {
  return (
    <div ref={refProp} className={styles.slide} style={{backgroundImage: `url(${src})`}} />
  );
}

export default Slide;

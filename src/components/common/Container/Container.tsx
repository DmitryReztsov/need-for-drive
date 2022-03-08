import React from 'react';
import styles from './Container.module.scss';

interface IContainerProps {
  children: React.ReactNode,
  className?: string,
}

function Container({children, className}: IContainerProps) {
  return (
    <div
      className={`${styles.container} ${className}`}
    >
      {children}
    </div>
  );
}

export default Container;

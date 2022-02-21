import React from 'react';
import styles from './Button.module.scss';

interface IButtonProps {
  children: string,
  className?: string,
  color?: string,
  click?: () => void,
  keyDown?: (e: React.KeyboardEvent<HTMLButtonElement>) => void,
}

function Button(props: IButtonProps) {
  const {
    children, className, color = '', click, keyDown,
  } = props;

  return (
    <button
      type="button"
      className={`${styles.button} ${styles[color]} ${className}`}
      onClick={click}
      onKeyDown={keyDown}
    >
      {children}
    </button>
  );
}

export default Button;

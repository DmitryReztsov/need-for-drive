import React from 'react';
import styles from './Button.module.scss';

interface IButtonProps {
  children: string,
  className?: string,
  color?: string,
  disabled?: boolean,
  loading?: boolean,
  click?: () => void,
  keyDown?: (e: React.KeyboardEvent<HTMLButtonElement>) => void,
}

function Button(props: IButtonProps) {
  const {
    children, className, color = '', disabled, loading, click, keyDown,
  } = props;

  return (
    <button
      type="button"
      className={`${styles.button} ${styles[color]} ${loading && styles.loading} ${className}`}
      disabled={disabled}
      onClick={click}
      onKeyDown={keyDown}
    >
      {children}
    </button>
  );
}

export default Button;

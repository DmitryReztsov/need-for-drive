import React from 'react';
import {Link} from 'react-router-dom';
import styles from './CustomLink.module.scss';

interface LinkProps {
  children: string | React.ReactElement,
  href?: string,
  className?: string,
}

function CustomLink({children, href = '', className} : LinkProps) : React.ReactElement {
  return (
    <Link to={href} className={`${className} ${styles.link}`}>{children}</Link>
  );
}

export default CustomLink;

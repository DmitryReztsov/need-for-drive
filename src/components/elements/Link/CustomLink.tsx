import React from 'react';
import {Link} from 'react-router-dom';
import styles from './CustomLink.module.scss';

interface LinkProps {
  children: string | React.ReactElement,
  href?: string,
  className?: string,
}

function CustomLink(props: LinkProps) : React.ReactElement {
  const {children, href = '', className} = props;
  return (
    <Link to={href} className={`${styles.link} ${className}`}>{children}</Link>
  );
}

export default CustomLink;

import React from 'react';
import { Link } from 'react-router'

import styles from './styles.css';

function Header() {
  return (
    <div className={styles.container}>
      <Link to="/">
        <h1 className={styles.title}>Find a Farm Market</h1>
      </Link>
    </div>
  )
}

export default Header;

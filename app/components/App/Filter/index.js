import React from 'react';

import styles from './styles.css';

function Filter() {
  return (
    <div className={styles.container}>
      <form className={styles.form}>
        <input className={styles.input} type="text" placeholder="Search by state" />
        <button className={styles.button}>Get Food!</button>
      </form>
    </div>
  )
}

export default Filter;

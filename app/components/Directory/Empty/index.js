import React from 'react';

import styles from './styles.css';

export function Empty(props){
  const { location } = props;
  return (
    <div className={styles.empty}>
      <div className={styles.text}>Oops! There's no farms in {location}. Maybe you should start one...?</div>
    </div>
  )
}

export default Empty;

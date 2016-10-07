import React from 'react';

import styles from './styles.css';

export function Item(props){
  const {
    name,
    address,
    city,
    state,
    zip,
    action,
    index
  } = props;
  return (
    <div className={styles.item} onClick={action}>
      <div className={styles.number}>{index}</div>
      <div className={styles.address}>
        <div>{name}</div>
        <div>{address}</div>
        <div>{city}, {state} {zip}</div>
      </div>
    </div>
  )
}

export default Item;

import React from 'react';

import styles from './styles.css';

export function Detail(props){
  const { farm } = props;
  const {
    Market_Website,
    marketname,
    Location_ST,
    Location_City,
    Location_State,
    Location_Zip,
    ActivityList,
    FacilitiesList,
  } = farm;
  return (
    <div className={styles.item}>
      <div className={styles.address}>
        <a href={`http://${Market_Website}`} target="_blank" className={styles.link}>{marketname}</a>
        <div>{Location_ST}</div>
        <div>{Location_City}, {Location_State} {Location_Zip}</div>
        <div>Activities: {ActivityList}</div>
        <div>Facilities: {FacilitiesList}</div>
      </div>
    </div>
  )
}

export default Detail;

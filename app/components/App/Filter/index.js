import React, { Component } from 'react';
import { browserHistory } from 'react-router';

import styles from './styles.css';

export class Filter extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
    const { filter } = this.refs;
    if (filter.value.length > 0) {
      browserHistory.push({
        pathname: '/farms',
        state: { filter: filter.value },
      });
    }
  }

  render() {
    return (
      <div className={styles.container}>
        <form className={styles.form} onSubmit={this.handleSubmit}>
          <input className={styles.input} type="text" placeholder="Search by state" ref="filter"/>
          <button className={styles.button}>Get Food!</button>
        </form>
      </div>
    )
  }
}

export default Filter;

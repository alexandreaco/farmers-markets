import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router'

import Header from './Header';
import Filter from './Filter';

import styles from './styles.css';

class App extends Component {

  constructor() {
    super();
  }

  render() {
    return (
      <div className={styles.container}>
        <div className={styles.background}>
          <Header />
          <Filter />
        </div>

        {this.props.children}
      </div>
    )
  }
}

export default App;

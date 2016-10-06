import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router'

import Header from './Header';
import Filter from './Filter';

class App extends Component {

  constructor() {
    super();
  }

  render() {
    return (
      <div className="container">
        <Header />
        <Filter />

        {this.props.children}
      </div>
    )
  }
}

export default App;

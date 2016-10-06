import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router'

import Header from './Header';

class App extends Component {

  constructor() {
    super();
  }

  render() {
    return (
      <div className="container">
        <Header />
        <nav>
          <Link to="/">Home</Link>
          <Link to="/farms">Farms</Link>
        </nav>

        {this.props.children}
      </div>
    )
  }
}

export default App;

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import { getAll } from '../../actions';

class App extends Component {

  constructor() {
    super();
  }

  render() {
    return (
      <div className="container">
        <nav>
          <Link to="/">Home</Link>
        </nav>

        {this.props.children}
      </div>
    )
  }
}

export default connect()(App);

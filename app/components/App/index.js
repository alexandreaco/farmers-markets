import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router'

class App extends Component {

  constructor() {
    super();
  }

  render() {
    return (
      <div className="container">
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

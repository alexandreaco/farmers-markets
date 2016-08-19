import React, { Component } from 'react';
import { connect } from 'react-redux';

class App extends Component {

  constructor() {
    super();
  }

  render() {
    return (
      <div className="container">
        {this.props.children}
      </div>
    )
  }
}

export default App;

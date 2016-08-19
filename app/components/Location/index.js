import React, { Component } from 'react';
import { connect } from 'react-redux';

class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="container">
        <h1>{this.props.params.location}</h1>
      </div>
    )
  }
}

export default App;

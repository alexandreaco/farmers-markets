import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getAll } from '../../actions';

class Homepage extends Component {

  constructor() {
    super();
  }

  componentWillMount() {
    this.props.dispatch(getAll);
  }

  render() {
    return (
      <div className="container">
        <h1>Homepage</h1>
      </div>
    )
  }
}

export default connect()(Homepage);

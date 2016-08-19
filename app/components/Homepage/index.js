import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import { getAll } from '../../actions';

class Homepage extends Component {

  constructor() {
    super();
  }

  componentWillMount() {
    this.props.dispatch(getAll());
  }

  render() {
    const { locations } = this.props;
    console.log(this.props.locations);
    return (
      <div className="container">
        <h1>Homepage</h1>
        <ul>
        {
          locations.map(location => {
            const url = `/l/${location.OF_ID}`;
            return (
              <li key={location.OF_ID}>
                <Link to={url}>{location.marketname}</Link>
              </li>
            )
          })
        }
        </ul>
      </div>
    )
  }
}

export default connect(state => ({
  locations: state.app.locations,
}))(Homepage);

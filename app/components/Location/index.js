import React, { Component } from 'react';
import { connect } from 'react-redux';

class App extends Component {
  constructor() {
    super();
    this.newLocation = {}
  }

  componentWillMount() {
    const { locations } = this.props;
    this.newLocation = locations.filter(this.isCorrectLocation)[0];
    console.log(this.newLocation);
  }

  isCorrectLocation = (location) => {
    if (location.OF_ID == this.props.params.location) {
      return true;
    } else {
      return false;
    }
  }

  render() {
    const { Location_City, Location_ST, Location_State, Location_Zip } = this.newLocation;
    const { Market_Facebook, Market_Twitter, Market_Website } = this.newLocation
    const { marketname, season1_date, season1_time } = this.newLocation;
    return (
      <div className="location">
        <h1>{marketname}</h1>
        <h6>{season1_date} {season1_time}</h6>
        <a href={`http://${Market_Website}`} target="_blank">Website</a>
        <div className="location__contact">
          {Location_City} {Location_ST} {Location_State} {Location_Zip}
        </div>
      </div>
    )
  }
}

export default connect(state => ({
  locations: state.app.locations,
}))(App);

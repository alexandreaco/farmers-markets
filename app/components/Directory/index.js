import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
  getFarms
} from '../../actions';
import Item from './Item';

import styles from './styles.css';

class Directory extends Component {
  componentWillMount() {
    const { dispatch, location } = this.props;
    dispatch(getFarms({ state: location.state.filter || '' }));
  }

  componentWillReceiveProps(nextProps) {
    const { dispatch, location } = this.props;
    if (location !== nextProps.location) {
      dispatch(getFarms({ state: nextProps.location.state.filter }));
    }
  }

  render() {
    const { farms } = this.props;
    return (
      <div className={styles.background}>
        <div className={styles.container}>
          {
            farms.map((farm, i) => (
              <Item
                index={i+1}
                name={farm.marketname}
                address={farm.Location_ST}
                city={farm.Location_City}
                state={farm.Location_State}
                zip={farm.Location_Zip}
                key={i}
              />
            ))
          }
        </div>
      </div>
    )
  }
}

// Retrieve data from store as props
const  mapStateToProps = (state) => {
  return {
    farms: state.app.farms,
  };
}

export default connect(mapStateToProps)(Directory);

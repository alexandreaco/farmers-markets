import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
  getFarms
} from '../../actions';

import Item from './Item';
import Empty from './Empty';
import Detail from './Detail';

import styles from './styles.css';

class Directory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeItem: {},
    };
  }
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

  setActiveItem(index) {
    const { farms } = this.props;
    this.setState({
      activeItem: farms[index],
    });
  }

  render() {
    const { farms, location } = this.props;
    return (
      <div className={styles.background}>
        <div className={styles.container}>
          <div className={styles.list}>
            {
              farms.map((farm, i) => (
                <Item
                  index={i+1}
                  name={farm.marketname}
                  address={farm.Location_ST}
                  city={farm.Location_City}
                  state={farm.Location_State}
                  zip={farm.Location_Zip}
                  action={() => {this.setActiveItem(i)}}
                  key={i}
                />
              ))
            }
            {
              farms.length < 1 && <Empty location={location.state.filter || ''} />
            }
          </div>
          <div className={styles.detail}>
            {
              this.state.activeItem._id && <Detail farm={this.state.activeItem} />
            }
          </div>
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

import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom'
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import { Router, Route, IndexRoute, browserHistory } from 'react-router'

const store = configureStore();

var css = require("./scss/main.scss");

import App from './components/App';
import Homepage from './components/Homepage';
import Location from './components/Location';

render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Homepage}/>
        <Route path='/l/:location' component={Location} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('app')
)

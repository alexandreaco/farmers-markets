import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom'
import { Provider } from 'react-redux';
import App from './components/App';
import configureStore from './store/configureStore';
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'

const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store)

var css = require("./scss/main.scss");

render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('app')
)

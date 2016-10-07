import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom'
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import { Router, Route, IndexRoute, browserHistory } from 'react-router'

const store = configureStore();

var css = require("./styles/main.css");

import App from './components/App';
import Homepage from './components/Homepage';
import Directory from './components/Directory';

render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Homepage} />
        <Route path="/farms" component={Directory} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('app')
)

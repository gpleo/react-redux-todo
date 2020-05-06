import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux';
import promise from 'redux-promise-middleware';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import Todo from './containers/Todo';
import reducers from './reducers';

const composeStoreWithMiddleware = applyMiddleware(promise)(createStore);
const store = composeStoreWithMiddleware(reducers);

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Route path="/" component={App} exact />
      <Route path="/todo" component={Todo} />
    </Router>
  </Provider>,
  document.getElementById('root')
);

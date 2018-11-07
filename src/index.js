import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './ui/App';
import { BrowserRouter as Router } from 'react-router-dom';
import {
  createStore,
  applyMiddleware
} from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import promiseMiddleWare from 'redux-promise-middleware';
import reducer from './mainReducer/mainReducer';

const store = createStore(reducer,
  applyMiddleware(thunk, promiseMiddleWare()));
ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App/>
    </Router>
  </Provider>,
  document.getElementById('root')
);
// ReactDOM.render(
//   <Router>
//     <App/>
//   </Router>,
//   document.getElementById('root')
// );

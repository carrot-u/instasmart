import React from 'react';
import 'babel-polyfill';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import configureStore from './store/configureStore';
import {loadQuestions} from './actions/questionActions';
import './stylesheets/index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import '../node_modules/bootstrap/js/dist/*.js';
// import 'bootstrap/js/*.js';
// import 'bootstrap/dist/js/bootstrap.min.js';


const store = configureStore();
store.dispatch(loadQuestions());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, 
  document.getElementById('root'));
registerServiceWorker();


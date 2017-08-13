import React from 'react';
import 'babel-polyfill';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import configureStore from '../store/configureStore';
import '../stylesheets/index.css';
import App from './App';
import '../../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import '../../../../node_modules/font-awesome/css/font-awesome.min.css';
// import '../node_modules/bootstrap/js/dist/*.js';


const store = configureStore();

const Index = props => (
  <Provider store={store}>
    <App />
  </Provider>
)

export default Index;
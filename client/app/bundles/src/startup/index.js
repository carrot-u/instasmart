import React from 'react';
import 'babel-polyfill';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import configureStore from '../store/configureStore';
import '../stylesheets/index.scss';
import App from './App';
import '../../../../node_modules/bootstrap/dist/css/bootstrap.min.css';


const Index = props => (
  <Provider store={configureStore(props)}>
    <App />
  </Provider>
)

export default Index;


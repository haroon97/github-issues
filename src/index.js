import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Issues from './Issues';
import { Provider } from 'react-redux';
import store from './store/configureStore';
import './index.css';

const jsx = 
  <Provider store={store}>
    <Issues />
  </Provider>

ReactDOM.render(jsx, document.getElementById('root'));

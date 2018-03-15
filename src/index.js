import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './React';
import { Provider } from 'react-redux';
import store from './Redux';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
registerServiceWorker();

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import App from './App.jsx';
import * as serviceWorker from './serviceWorker';

import store from './store';

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);
serviceWorker.register();

window.addEventListener('beforeinstallprompt', (e) => {
  console.log('beforeinstallprompt event has fired')
  e.prompt()
});
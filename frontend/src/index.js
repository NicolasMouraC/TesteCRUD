import React from 'react';
import ReactDOM from 'react-dom/client';
import WebStack from './routes/WebStack.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
import Store from './redux/Store.js';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={Store}>
    <React.StrictMode>
      <WebStack />
    </React.StrictMode>
  </Provider>
);

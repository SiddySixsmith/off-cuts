import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.css";
import App from "./App";
import "./styles/pages.css";
import cartReducer from './components/cartReducer';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import * as serviceWorker from './serviceWorker';
const store = createStore(cartReducer);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorker.register();

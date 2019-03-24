import React from "react";
import ReactDOM from "react-dom";
import { HashRouter } from "react-router-dom";
import App from "./App";

import store from '../src/store/main';
import updateExpense from '../src/actions/action';
import { Provider } from "react-redux";

window.store = store;
window.updateExpense = updateExpense;

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
  <HashRouter>
    <App />
  </HashRouter>
  </Provider>,
  rootElement
);

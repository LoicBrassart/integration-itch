import React from "react";
import ReactDOM from "react-dom";
import { Reset } from "styled-reset";
import { Provider } from "react-redux";
import store from "@services/reducers";

import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Reset />
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

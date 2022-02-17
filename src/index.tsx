import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";

import storeFactory from "./components/redux/store";
import "./index.css";
import App from "./App";

const storeRedux = storeFactory();

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Provider store={storeRedux}>
        <App />
      </Provider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
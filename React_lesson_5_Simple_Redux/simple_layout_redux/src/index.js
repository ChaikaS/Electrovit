import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "./index.scss";
import App from "./Components/App/App";
import reportWebVitals from "./reportWebVitals";
import { Provider, useStore } from "react-redux";
import { store } from "./store/store";

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);

reportWebVitals();

// import logger from "redux-logger";

// export const store = createStore(allReducers, applyMiddleware(logger));
// console.log(store);

// console.log(store.getState());

// store.dispatch({
//   type: "Carsd ",
//   text: "Use Redux123132",
// });
// console.log(store.getState());

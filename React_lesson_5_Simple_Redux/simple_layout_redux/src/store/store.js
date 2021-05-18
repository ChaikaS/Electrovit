import { createStore, applyMiddleware } from "redux";
import allReducers from "./reducers/allRedusers";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
// import logger from "redux-logger";

// export const store = createStore(allReducers, applyMiddleware(logger));
// console.log(store);

// console.log(store.getState());

// store.dispatch({
//   type: "Carsd ",
//   text: "Use Redux123132",
// });
// console.log(store.getState());
export const store = createStore(allReducers, composeWithDevTools(applyMiddleware(thunk)));

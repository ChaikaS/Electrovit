import { combineReducers } from "redux";
import cards from "../reducers/cardsReducer";
import profile from "../reducers/profileReducer";
import loginPage from "../reducers/loginReducer";

const allReducers = combineReducers({
  cards,
  profile,
  loginPage,
});

export default allReducers;

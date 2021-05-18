import { combineReducers } from "redux";
import cardss from "../reducers/cardsReducer";
import profile from "../reducers/profileReducer";
import loginPage from "../reducers/loginReducer";

const allReducers = combineReducers({
  cardss,
  profile,
  loginPage,
});

export default allReducers;

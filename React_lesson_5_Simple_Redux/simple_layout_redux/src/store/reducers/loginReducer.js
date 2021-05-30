import { ADD_INFO_LOGIN_PAGE } from "../actions/loginActions";

const initialState = {
  loginPage: [],
};

export default function loginPage(state = initialState.loginPage, action) {
  switch (action.type) {
    case ADD_INFO_LOGIN_PAGE: {
      const { data } = action.payload;
      const newState = [...state];
      return (newState[data] = { ...data });
    }

    default:
      return state;
  }
}

import { ADD_PROFILE } from "../actions/profileAction";

const initialState = {
  profile: [],
};

export default function profile(state = initialState.profile, action) {
  switch (action.type) {
    case ADD_PROFILE: {
      const { data } = action.payload;
      const newState = [...state];
      return (newState[data] = { ...data });
    }

    default:
      return state;
  }
}

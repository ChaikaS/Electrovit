import { ADD_CARDS, REMOVE_CARDS, SHOW_CARDS } from "../actions/cardsActions";

const initialState = {
  cards: [],
};
export default function cards(state = initialState.cards, action) {
  switch (action.type) {
    case ADD_CARDS: {
      const newState = [...state];
      newState.push(action.payload.data);
      return newState;
    }
    case SHOW_CARDS: {
      const state1 = [...state];
      const state2 = action.payload.data;
      const newState = [...state1, ...state2];
      return newState;
    }

    case REMOVE_CARDS: {
      return state.filter(({ id }) => id !== action.payload.id);
    }
    default:
      return state;
  }
}

import { ADD_CARD, REMOVE_CARDS, ADD_CARDS_STORE } from "../actions/cardsActions";

const initialState = {
  cards: [],
};
export default function cards(state = initialState.cards, action) {
  switch (action.type) {
    case ADD_CARD: {
      return [...state, action.payload.data];
    }
    case ADD_CARDS_STORE: {
      return [...state, ...action.payload.data];
    }
    case REMOVE_CARDS: {
      return state.filter(({ id }) => id !== action.payload.id);
    }
    default:
      return state;
  }
}

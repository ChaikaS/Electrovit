import { ADD_CARDS, REMOVE_CARDS } from "../actions/cardsActions";

const initialState = {
  cards: [123, 456, 786],
};

export default function cards(state = initialState.cards, action) {
  console.log(cards);

  switch (action.type) {
    case ADD_CARDS: {
      // const { cards } = state;
      // return {
      //   ...state,
      //   cards: [...cards, action.payload.data],
      // };

      const newState = [...state];
      newState.push(action.payload.data);
      return newState;
      // state.push(...newState[action.payload.data]);

      // const newState = [...state];
      // const b = newState.concat(action.payload.data);
      // return b;
      // return [...state, action.payload.data];
      // return {
      //   ...state,
      //   cardss: [...state.cardss, action.payload],
      // };
    }

    case REMOVE_CARDS: {
      // const newState = [...state];
      // const id = action.payload.id;
      // newState.filter((item) => item.id !== id);
      // return newState;
      // newState.splice(action.payload.id, 1);
      // return { cardss: state.cardss.filter((item) => item !== action.payload) };
      // const newState = state.filter((item) => item.id !== action.payload.id);
      // return newState;
      return state.filter(({ id }) => id !== action.payload.id);
      // return state.filter((id) => action.payload.id !== id.id);
    }
    default:
      return state;
  }
}

export const ADD_CARD = "ADD_CARD";
export const REMOVE_CARDS = "REMOVE_CARDS";
export const ADD_CARDS_STORE = "ADD_CARDS_STORE";

export function createCards(data) {
  return {
    type: ADD_CARD,
    payload: {
      data,
    },
  };
}
export function addCardsStore(data) {
  return {
    type: ADD_CARDS_STORE,
    payload: {
      data,
    },
  };
}

export function removeCards(id) {
  return {
    type: REMOVE_CARDS,
    payload: {
      id,
    },
  };
}

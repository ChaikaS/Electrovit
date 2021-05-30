export const ADD_PROFILE = "ADD_PROFILE";

export function createProfile(data) {
  return {
    type: ADD_PROFILE,
    payload: {
      data,
    },
  };
}

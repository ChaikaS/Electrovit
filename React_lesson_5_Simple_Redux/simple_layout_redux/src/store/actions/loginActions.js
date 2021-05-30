export const ADD_INFO_LOGIN_PAGE = "ADD_INFO_LOGIN_PAGE";

export function createLoginPage(data) {
  return {
    type: ADD_INFO_LOGIN_PAGE,
    payload: {
      data,
    },
  };
}

export const ADD_INFO_LOGIN_PAGE = "ADD_INFO_LOGIN_PAGE";

function createLoginPage(data) {
  return {
    type: ADD_INFO_LOGIN_PAGE,
    payload: {
      data,
    },
  };
}

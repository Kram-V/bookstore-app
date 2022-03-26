export const loggedInUserReducer = (state = { userDetails: null }, action) => {
  switch (action.type) {
    case "USER_LOGIN_REQUEST":
      return { isLoading: true };
    case "USER_LOGIN_SUCCESS":
      return {
        ...state,
        isLoading: false,
        success: true,
        userDetails: action.payload,
      };
    case "USER_LOGOUT":
      return { userDetails: null };
    case "USER_LOGIN_RESET":
      return { ...state, success: false };
    case "USER_LOGIN_FAIL":
      return { ...state, isLoading: false, error: action.payload };
    default:
      return state;
  }
};

import {
  UserLoginSuccess,
  UserError,
  UserLogout,
  UserSignupStep1,
  UserSignupStep2
} from "../constants/User";

export const initialState = {
  is_authenticated: localStorage.getItem("is_authenticated") || false,
  errors: [],
  signup: {}
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case UserLoginSuccess:
      localStorage.setItem("is_authenticated", true);
      return { ...state, is_authenticated: true, errors: [] };

    case UserError:
      return {
        ...state,
        is_authenticated: false,
        errors: action.payload
      };

    case UserLogout:
      localStorage.removeItem("is_authenticated");
      return { ...state, is_authenticated: false, errors: [] };

    case UserSignupStep1:
      return {
        ...state,
        signup: { ...state.signup, ...action.payload },
        errors: []
      };

    case UserSignupStep2:
      localStorage.setItem("is_authenticated", true);
      return {
        ...state,
        is_authenticated: true,
        signup: { ...state.signup, ...action.payload },
        errors: []
      };

    default:
      return state;
  }
};

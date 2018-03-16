import Users from "../users.js";
import {
  UserLoginSuccess,
  UserError,
  UserLogout,
  UserSignupStep1,
  UserSignupStep2
} from "../constants/User";

export const login = ({ username, password }) => dispatch =>
  new Promise((resolve, reject) => {
    if (
      Users.filter(e => e.username === username && e.password === password)
        .length
    ) {
      dispatch({ type: UserLoginSuccess });
      resolve();
    } else {
      dispatch({ type: UserError, payload: ["User does not exist"] });
      reject();
    }
  });

export const logout = () => dispatch => {
  dispatch({ type: UserLogout });
};

export const signup = data => dispatch =>
  new Promise((resolve, reject) => {
    if (
      Users.filter(e => e.username === data.username || e.email === data.email)
        .length
    ) {
      dispatch({ type: UserError, payload: ["User already exists"] });
      reject();
    } else {
      dispatch({ type: UserSignupStep1, payload: data });
      resolve();
    }
  });

export const signup2 = data => dispatch =>
  new Promise((resolve, reject) => {
    dispatch({
      type: UserSignupStep2,
      payload: {
        ...data,
        newsletter: data["newsletter"] === "on"
      }
    });
    resolve();
  });

import { Types } from "./actionsTypes";
import store from "./Store";
export const logUserIn = (username, password) => {
  if (
    username === store.getState().loginCreds.username &&
    password === store.getState().loginCreds.password
  ) {
    return {
      type: Types.LOGIN,
      payload: { name: "SuperMan" },
    };
  } else {
    return "error"
  }
};

export const loginAction = {
  login: (user) => ({ type: Types.LOGIN, payload: { user } }),
  error: (user) => ({ type: Types.ERROR, payload: { user } }),
};

import { combineReducers } from "redux";

function counterReducer(state = 1, action = {}) {
  console.log(action);
  switch (action.type) {
    case "increment":
      return state + 1;
    default:
      return state;
      break;
  }
}

function setLoginInfoReducer(state = {}, action = {}) {
  switch (action.type) {
    case "loginSuccess":
      return { ...state, ...action.loginInfo };

    default:
      return state;
  }
}

const rootReducer = combineReducers({ loginInfo: setLoginInfoReducer });

export default rootReducer;

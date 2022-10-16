import { combineReducers } from "redux";

function counterReducer(state = 1, action = {}) {
    console.log(action)
  switch (action.type) {
    case "increment":
      return state + 1;
    default:
      return state;
      break;
  }
}

const rootReducer = combineReducers({ counter: counterReducer });

export default rootReducer;

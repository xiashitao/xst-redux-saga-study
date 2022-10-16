import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { applyMiddleware, legacy_createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

// 自定义模块的引入

import rootReducer from "./LearningSaga/reducer";
import rootSaga from "./LearningSaga/saga";

const sagaMiddleware = createSagaMiddleware();

const store = legacy_createStore(
  rootReducer,
  {},
  applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(rootSaga);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

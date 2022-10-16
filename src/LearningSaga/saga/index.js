import {
  all,
  call,
  delay,
  put,
  take,
  takeEvery,
  takeLatest,
  fork,
  putResolve,
} from "redux-saga/effects";
import { loginService } from "../service";

function* increment() {
  // 相当于：dispatch({type:'increment'})
  yield put({ type: "increment" });
}

function* incrementAsync() {
  // 延迟 1s
  yield delay(1000);
  // 1s 后，dispatch({type:'increment'})
  yield put({ type: "increment" });
}

function* watchIncrement() {
  // 监听类型为increment_saga的action,监听到启动increment
  yield takeEvery("increment_saga", increment);

  yield takeLatest("incrementAsync_saga", incrementAsync);
}

function* printSagaParams(...params) {
  console.log("Params", params);
}

function* say() {
  console.log(`${new Date().getSeconds()}：Hi ~`);
  yield delay(1000);
  console.log(`${new Date().getSeconds()}:I love u`);
  yield delay(1000);
}

function* watchPrintSagaParams() {
  yield takeLatest("*", printSagaParams, "hello", "world");
}

function* login(action) {
  try {
    const loginInfo = yield call(loginService, action.account);
    yield put({ type: "loginSuccess", loginInfo });
  } catch (error) {
    alert(error);
  }
}

function* loginOut() {
  yield put({
    type: "loginSuccess",
    loginInfo: {
      success: false,
      name: "",
      password: "",
    },
  });
}

function* watchLogin() {
  yield takeLatest("login", login);
//   yield takeLatest("loginOut", loginOut);
    yield take('loginOut')
    yield call(loginOut)
}

function* rootSaga() {
  // 启动watchIncrement
  //   yield all([watchIncrement(),watchPrintSagaParams()]);
//   yield call(say);
//   console.log(`${new Date().getSeconds()}:I love u too`);
    yield all([watchLogin()])
}

export default rootSaga;

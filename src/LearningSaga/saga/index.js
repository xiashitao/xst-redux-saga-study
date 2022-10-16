import { all, call, delay, put, take, takeEvery, takeLatest,fork, putResolve } from "redux-saga/effects";

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

  yield takeLatest('incrementAsync_saga',incrementAsync)
}

function* printSagaParams(...params){
    console.log('Params',params)
}

function* say() {
    console.log(`${new Date().getSeconds()}：Hi ~`);
    yield delay(1000)
    console.log(`${new Date().getSeconds()}:I love u`);
    yield delay(1000)
}

function* watchPrintSagaParams() {
    yield takeLatest('*',printSagaParams,'hello','world')
}

function* rootSaga() {
  // 启动watchIncrement
//   yield all([watchIncrement(),watchPrintSagaParams()]);
    yield call(say)
    console.log(`${new Date().getSeconds()}:I love u too`)
}

export default rootSaga;

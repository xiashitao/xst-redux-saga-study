import {all,put,takeEvery} from 'redux-saga/effects'

function* increment(){
    // 相当于：dispatch({type:'increment'})
    yield put({type:'increment'})
}

function* watchIncrement(){
    // 监听类型为increment_saga的action,监听到启动increment
    yield takeEvery('incremnet_saga',increment)
}

function* rootSaga(){
    // 启动watchIncrement
    yield all([watchIncrement()])
}

export default rootSaga
import {all, call, put, takeLatest } from 'redux-saga/effects'
import Axios from 'axios'
import {setTodos} from '../actions'

const BASE_URL = "http://localhost:5000"

function* helloSaga() {
    console.log('Hello Saga!')
}

function* getTodos() {
    try {
        const res = yield call(Axios.get, `${BASE_URL}/todos`)
        console.log("[Info][GET] todos - result: ", res.data)
        yield put(setTodos(res))
    } catch (e) {
        console.log("[Error][GET] todos - error: ", e)
    }
}

function* watchGetTodos() {
    yield takeLatest('GET_TODOS', getTodos)
}

export default function* () {
    yield all([
        helloSaga(),
        watchGetTodos()
    ])
}
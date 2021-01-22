import {all, call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import Axios from 'axios'

import {LOAD_TODOS, ADD_TODO, DELETE_TODO} from '../constants'
import {getTodosSuccess} from '../actions'

const BASE_URL = "http://localhost:5000"

function* getTodos() {
    try {
        const res = yield call(Axios.get, `${BASE_URL}/todos`)
        console.log("[Info][GET] todos - result: ", res.data)
        yield put(getTodosSuccess(res))
    } catch (e) {
        console.error("[GET] todos - error: ", e)
    }
}

function* watchGetTodos() {
    yield takeLatest(LOAD_TODOS.REQUEST, getTodos)
}

function* addTodoRequest(action) {
    console.log("---test TV")
    try {
        const formData = {
            "todo_description": action.data.description,
            "todo_responsible": action.data.responsible,
            "todo_priority": action.data.priority,
            "todo_completed": false
        }
        const res = yield call(Axios.post, `${BASE_URL}/todos/add`, formData)
        console.log("[Info][POST] todos - result: ", res.data)
        yield getTodos()
    } catch (e) {
        console.error("[POST] todos - ", e)
    }
}

function* deleteTodoRequest(action) {
    console.log("bingo!!")
    try {
        const id = action.data._id
        console.log("------delete", id, action.data)
        const res = yield call(Axios.post, `${BASE_URL}/todos/delete/${id}`)
        console.log("[Info][POST] todos - result: ", res.data)
        yield getTodos()
    } catch (e) {
        console.error("[POST] todos - ", e)
    }
}

function* watchAddTodo() {
    yield takeEvery(ADD_TODO.REQUEST, addTodoRequest)
}

function* watchDeleteTodo() {
    yield takeEvery(DELETE_TODO.REQUEST, deleteTodoRequest)
}

export default function* () {
    yield all([
        watchGetTodos(),
        watchAddTodo(),
        watchDeleteTodo(),
    ])
}
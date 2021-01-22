import {LOAD_TODOS, ADD_TODO, DELETE_TODO} from '../constants'

export const getTodos = () => ({
    type: LOAD_TODOS.REQUEST
})

export const getTodosSuccess = payload => ({
    type: LOAD_TODOS.SUCCESS,
    payload
})

export const getTodosFail= error => ({
    type: LOAD_TODOS.FAIL,
    error
})

export const addTodo = data => ({
    type: ADD_TODO.REQUEST,
    data
})

export const addTodoSuccess = (payload) => ({
    type: ADD_TODO.SUCCESS,
    payload
})

export const addTodoFail = error => ({
    type: ADD_TODO.FAIL,
    error
})

export const deleteTodo = data => ({
    type: DELETE_TODO.REQUEST,
    data
})

export const deleteTodoSuccess = (payload) => ({
    type: DELETE_TODO.SUCCESS,
    payload
})

export const deleteTodoFail = error => ({
    type: DELETE_TODO.FAIL,
    error
})

export default {
    getTodos,
    getTodosSuccess,
    getTodosFail,
    addTodo,
    addTodoSuccess,
    addTodoFail,
    deleteTodo,
    deleteTodoSuccess,
    deleteTodoFail,
}
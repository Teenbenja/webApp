import set from 'lodash/fp/set'
import {LOAD_TODOS} from '../constants'

const INITIALSTATE = {
    allTodos: []
}

function toDoReducer (state = INITIALSTATE, action) {
    switch (action.type) {
        case LOAD_TODOS.SUCCESS: {
            const {data} = action.payload
            return set('allTodos', data)(state)
        }
        default: {
            return state
        }
    }
}

export default toDoReducer
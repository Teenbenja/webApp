import {combineReducers} from 'redux'

import toDoReducer from './toDo'
import errorReducer from './errors'

const rootReducer = combineReducers({
    toDo: toDoReducer,
    errors: errorReducer
})

export default rootReducer
import set from 'lodash/fp/set'
import {LOAD_TODOS} from '../constants'


function errorsReducer (state = null, action) {
    switch (action.type) {
        case LOAD_TODOS.FAIL: 
            return set('getTodosError', action.error)(state)
        default: {
            return state
        }
    }
}

export default errorsReducer
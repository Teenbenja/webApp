import set from 'lodash/fp/set'

const INITIALSTATE = {
    allTodos: []
}

function rootReducer (state = INITIALSTATE, action) {
    switch (action.type) {
        case "SET_TODOS": {
            const {data} = action.payload
            return set('allTodos', data)(state)
        }
        default: {
            return state
        }
    }
}

export default rootReducer
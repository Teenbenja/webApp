import createSagaMiddleware from 'redux-saga'
import rootReducer from './../reducer'
import { compose, createStore, applyMiddleware } from 'redux'
import rootSaga from './../sagas'

const sagaMiddleware = createSagaMiddleware()
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const configStore = () => {
    const store = createStore(rootReducer, composeEnhancers(applyMiddleware(sagaMiddleware)))
    sagaMiddleware.run(rootSaga)

    return store
}

const store = configStore()
global.store = store

export { store }
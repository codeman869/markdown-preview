import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import RootReducer from './Reducers/RootReducer'

const middlewares = []

if(process.env.NODE_ENV === 'development') {
    const { logger } = require('redux-logger')    
    middlewares.push(logger)
}

middlewares.push(thunk)

export default function configureStore() {
    
        return createStore(RootReducer, applyMiddleware(...middlewares))
}
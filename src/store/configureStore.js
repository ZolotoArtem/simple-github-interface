import { createStore, applyMiddleware } from 'redux'
import { userReducer } from '../reducers/user'
import thunk from 'redux-thunk'

export const store = createStore(userReducer, applyMiddleware(thunk))
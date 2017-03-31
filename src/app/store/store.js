import { createStore, combineReducers, applyMiddleware } from 'redux'
import { createLogger } from 'redux-logger'
import userReducer from '../reducers/userReducer'
export default createStore(combineReducers({ userReducer }), {},applyMiddleware(createLogger()));

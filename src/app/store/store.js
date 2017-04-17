import { createStore, combineReducers, applyMiddleware } from 'redux'
import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk'
import userReducer from '../reducers/userReducer'
export default createStore(
    combineReducers({
        userReducer
    }),
    {},applyMiddleware(createLogger(),thunk));


// const myLogger = (store) => (next) => (action) => {
//     console.log("Logged action :", action);
//     next(action);
// }

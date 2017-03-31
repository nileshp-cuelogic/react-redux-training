import { createStore, combineReducers, applyMiddleware } from 'redux'
import { createLogger } from 'redux-logger'
import userReducer from '../reducers/userReducer'
export default createStore(
    combineReducers({
        userReducer
    }),
    {});


// const myLogger = (store) => (next) => (action) => {
//     console.log("Logged action :", action);
//     next(action);
// }

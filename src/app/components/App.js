import React from 'react'
import { render } from "react-dom"
import { Router, Route, browserHistory, IndexRoute } from "react-router"
import { Dashboard } from './Dashboard'
import  Login from '../containers/Login'
import { Register } from '../containers/Register'
import { Profile } from './Profile'
export const App = (props) => {
        return (
            <Router history={browserHistory}>
                <Route path={"/"} component={Dashboard} >
                    <IndexRoute component={Login} ></IndexRoute>
                    <Route path={"login"} component={Login} />
                    <Route path={"register"} component={Register} />
                </Route>
                <Route path={"profile/:name/:email"} component={Profile} />
            </Router>
        );
}
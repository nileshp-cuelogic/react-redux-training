import React from 'react'
import { render } from "react-dom"
import { Router, Route, browserHistory, IndexRoute } from "react-router"
import { Dashboard } from './components/Dashboard'
import { Login } from './containers/Login'
import { Register } from './containers/Register'
import { Profile } from './components/Profile'
import store from './store/store'
import { Provider } from 'react-redux'

class App extends React.Component {
    render() {
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
}

render(<Provider store={store}><App /></Provider>, document.getElementById('div-app'));
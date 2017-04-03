import React from 'react'
import { Link } from 'react-router'
import store from '../store/store'

export const Profile = (props) => {
    const state = store.getState();
    return (
        <div className="container">
            <div className="row">
                <div className="col-xs-10 col-xs-offset-1">
                    <h3>Profile</h3><Link to={"/"}>Logout</Link>
                </div>
            </div>
            <hr />
            <div className="row">
                <div className="col-xs-10 col-xs-offset-1">
                    <ul>
                        <li>Name : {state.userReducer.name}</li>
                        <li>EmailAddress : {state.userReducer.email}</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}


import React from 'react'
import { Link } from 'react-router'
export const Profile = (props) => {
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
                        <li>Name : {props.params.name}</li>
                        <li>EmailAddress : {props.params.email}</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}


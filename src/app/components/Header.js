import React from 'react'
import { Link } from 'react-router'
export const Header = (props) => {
    return (
        <nav>
            <div className="navbar navbar-default">

                <div className="container">
                    <div className="navbar-header">
                        <ul className="nav navbar-nav">
                            <li>
                                <Link activeStyle={{ "color": "red" }} to={"/login"}>Login</Link>
                            </li>
                            <li>
                                <Link activeStyle={{ "color": "red" }} to={"/register"}>Register</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
}
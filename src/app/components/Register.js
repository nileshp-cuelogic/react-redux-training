import React from 'react'

export const RegisterComponent = (props) => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-xs-10 col-xs-offset-1">
                    <div>Name : <input type="text" id="name" onChange={props.handleChange} required />  </div><br />
                    <div>Email : <input type="email" id="email" onChange={props.handleChange} required /></div> <br />
                    <div>Password : <input type="password" id="password" onChange={props.handleChange} required /></div> <br />
                    <button className="btn btn-primary" onClick={() => props.handleRegister()} >Register</button>  <button onClick={() => props.handleNavigateToLogin()} className="btn btn-primary">Cancel</button>
                </div>
            </div>
        </div>
    );

}
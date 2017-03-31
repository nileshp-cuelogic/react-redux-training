import React from 'react'

export class Register extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-xs-10 col-xs-offset-1">
                        <h3>Register</h3>
                    </div>
                </div>
                <hr />
                <div className="row">
                    <div className="col-xs-10 col-xs-offset-1">
                        <div>Name : <input type="text" id="name" required />  </div><br />
                        <div>Email : <input type="email" id="email" required /></div> <br />
                        <div>Password : <input type="password" id="password" required /></div> <br />
                        <button className="btn btn-primary">Register</button>  <button onClick={() => this.navigateToHome()} className="btn btn-primary">Cancel</button>
                    </div>
                </div>
            </div>
        );
    }
}
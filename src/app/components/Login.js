import React from 'react';
export const LoginComponent = (props) => {
    return (
        <div>

            <div className="container">
                <div className="row">
                    <div className="col-xs-10 col-xs-offset-1">
                        <h3>Login</h3>
                    </div>
                </div>
                <hr />
                <div className="row">
                    <div className="col-xs-10 col-xs-offset-1">
                        <div> Username : <input type="text" id="username" onChange={props.handleChange} required />  </div><br />
                        <div>Password : <input type="password" id="password" onChange={props.handleChange} required /></div> <br />
                        <button className="btn btn-primary" onClick={() => props.submitHandle()} > Sign In </button>
                        {/*<button onClick={() => this.navigateToHome()} className="btn btn-primary">Cancel</button>*/}
                    </div>
                </div>
            </div>

        </div>
    );

}


LoginComponent.propTypes = {
    submitHandle: React.PropTypes.func,
    handleChange: React.PropTypes.func
};




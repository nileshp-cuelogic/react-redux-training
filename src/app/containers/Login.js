import React from 'react'
//import { browserHistory } from 'react-router'
import { connect } from 'react-redux'
import { LoginComponent } from '../components/Login'
import { onLogin } from '../actions/userActions'
export class Login extends React.Component {

    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         user: {
    //             name: 'Nilesh',
    //             email: 'asdf',
    //             password: 'asdf'
    //         }
    //     };
    // }

    // navigateToHome() {
    //     browserHistory.push("/");
    // }
    navigateToProfile(props) {
        var username = document.getElementById('username').value;
        var password = document.getElementById('password').value;
        console.log(props)

        // if (username && password && this.state.user.email === username && this.state.user.password === password) {
        //     browserHistory.push("/profile/" + this.state.user.name + "/" + this.state.user.email);
        // } else {
        //     alert('Please provide valid Username or password');
        // }
    }

    handleSubmit = () => {
        // this.setState(
        //     Object.assign({}, this.state, {
        //         formErrors: {}
        //     })
        // )

        this.props.onLogin("dsad","dsadas");
    }

    render() {
        return (
            <div>
                <LoginComponent submitHandle={() => this.handleSubmit()} ></LoginComponent>
            </div>
        );
    }
}


const mapStateToProps = (state) => {
    return {
        user: state.userReducer
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onLogin: (email, password) => {
            dispatch(onLogin(email, password));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);

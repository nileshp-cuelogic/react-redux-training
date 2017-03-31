import React from 'react'
//import { browserHistory } from 'react-router'
import { connect } from 'react-redux'
import { LoginComponent } from '../components/Login'
import { onLogin } from '../actions/userActions'
class Login extends React.Component {
    handleSubmit = () => {
        this.props.onLogin("dsad", "dsadas");
    }

    render() {
        return (
            <div>
                <LoginComponent submitHandle={this.handleSubmit.bind(this)} ></LoginComponent>
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

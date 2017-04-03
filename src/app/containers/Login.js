import React from 'react'
import { connect } from 'react-redux'
import { LoginComponent } from '../components/Login'
import { onLogin } from '../actions/userActions'
class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            credentials: {
                username: "",
                password: ""
            }
        }
    }

    handleChange = (event) => {
        //if(event.target.id);

        const field = event.target.id;
        const credentials = this.state.credentials;
        credentials[field] = event.target.value;
        return this.setState({ credentials: credentials });

    }

    handleSubmit = (username, password) => {
        this.props.onLogin(this.state.credentials);
    }

    render() {
        return (
            <div>
                <LoginComponent handleChange={this.handleChange.bind(this)} submitHandle={this.handleSubmit.bind(this)} ></LoginComponent>
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
        onLogin: (credentials) => {
            dispatch(onLogin(credentials));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);

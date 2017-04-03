import React from 'react'
import { connect } from 'react-redux'
import { RegisterComponent } from '../components/Register'
import { onRegister } from '../actions/userActions'
import { browserHistory } from 'react-router'
class Register extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            userData: {
                name: "",
                email: "",
                password: ""
            }

        }
    }

    handleChange = (event) => {
        const field = event.target.id;
        
        const userData = this.state.userData;
        userData[field] = event.target.value;
        return this.setState({ userData: userData });

    }

    handleSubmit = () => {
        this.props.onRegister(this.state.userData);
    }

    handleNavigateToLogin = () => {
        browserHistory.push("/login");
    }

    render() {
        return (
            <div>
                <RegisterComponent 
                        handleChange={this.handleChange.bind(this)} 
                        handleRegister={this.handleSubmit.bind(this)} 
                        handleNavigateToLogin={this.handleNavigateToLogin.bind(this)} 
                />
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
        onRegister: (userData) => {
            dispatch(onRegister(userData));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Register);

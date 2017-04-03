import { browserHistory } from 'react-router'
let initialState = {
    name: '',
    email: '',
    password: ''
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case "USER-REGISTER":
            state = {
                ...state,
                name: action.payload.name,
                email: action.payload.email,
                password: action.payload.password
            };
            alert("registration successfull")
            browserHistory.push("/login");
            break;
        case "USER-LOGIN":
            if (action.payload.email != '' && action.payload.password != '' && state.email === action.payload.email && state.password === action.payload.password) {
                browserHistory.push("/profile");
            } else {
                alert('Invalid username or password');
            }
            break;
    }
    return state;
};

export default userReducer;
// let initialState = {
//     name: 'Nilesh',
//     email: 'asdf',
//     password: 'asdf'
// }

const userReducer = (state = {
    name: 'Nilesh',
    email: 'asdf',
    password: 'asdf'
}, action) => {
    switch (action.type) {
        // case "USER-REGISTER":
        //     state = {
        //         ...state,
        //         name: action.name,
        //         email: action.email,
        //         password: action.password
        //     };
        //     break;
        case "USER-LOGIN":
            state = {
                ...state,
                email: action.email,
                password: action.password
            };
            break;
    }
    return state;
};

export default userReducer;
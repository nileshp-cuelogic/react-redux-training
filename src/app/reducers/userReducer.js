let initialState = {
    name: 'Nilesh',
    email: 'asdf',
    password: 'asdf'
}

const userReducer = (state = initialState, action) => {
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
                email: action.payload.email,
                password: action.payload.password
            };
            break;
    }
    return state;
};

export default userReducer;
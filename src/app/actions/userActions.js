// export function Register(name, email, password) {
//     return {
//         type: "USER-REGISTER",
//         name: action.name,
//         email: action.email,
//         password: action.password
//     }
// }

export function onLogin(email, password) {
    return (dispatch, getState) => {
        console.log("nilesh",getState)
    }
    return {
        type: "USER-LOGIN",
        payload: {
            email: email,
            password: password
        }
    }
}
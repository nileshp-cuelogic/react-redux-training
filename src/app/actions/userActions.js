// export function Register(name, email, password) {
//     return {
//         type: "USER-REGISTER",
//         name: action.name,
//         email: action.email,
//         password: action.password
//     }
// }

export function onLogin(email, password) {
    return {
        type: "USER-LOGIN",
        email: email,
        password: password
    }
}
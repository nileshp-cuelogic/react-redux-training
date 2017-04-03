export function onRegister(userData) {
    return {
        type: "USER-REGISTER",
        payload: {
            name: userData.name,
            email: userData.email,
            password: userData.password
        }
    }
}

export function onLogin(credentials) {
    return {
        type: "USER-LOGIN",
        payload: {
            email: credentials.username,
            password: credentials.password
        }
    }
}
export const actionTypes = {
    GET_USER: "GET_USER",
    LOGIN: "LOGIN",
    LOGOUT: "LOGOUT",
};

export const GetUser = (user) => ({
    type: actionTypes.GET_USER,
    payload: user,
});

export const Login = (user) => ({
    type: actionTypes.LOGIN,
    payload: user,
});

export const Logout = () => ({
    type: actionTypes.LOGOUT,
});

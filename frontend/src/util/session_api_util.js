import axios from "axios";

export const setAuthToken = (token) => {
    if (token) {
        axios.defaults.headers.common["Authorization"] = token;
    } else {
        delete axios.defaults.headers.common["Authorization"];
    }
};

export const login = (user) => {
    // debugger
    return axios.post("/api/users/login", user)
}

export const register = (user) => {
    return axios.post("/api/users/register", user)
}


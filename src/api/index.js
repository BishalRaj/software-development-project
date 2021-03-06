import Axios from "./axios";

export const loginApi = (options) => {
    return Axios.post("/user/login", {
        ...options,
    });
};

export const registerApi = (options) => {
    return Axios.post("/user/register", {
        ...options,
    });
};

export const googleLoginApi = (options) => {
    return Axios.post("/user/googlelogin", {
        ...options
    })
}
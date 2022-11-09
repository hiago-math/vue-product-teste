import axios from "axios"
import Cookie from "js-cookie"

const api = axios.create({
    baseURL: "https://api-product-teste.herokuapp.com/api",
    headers: {
        'Content-Type': 'multipart/form-data; application/json',
        'Accept': 'application/json',
    },
})

api.interceptors.request.use(
    (config) => {
        config.headers.Authorization = `Bearer ${Cookie.get('_auth_app_token')}`;

        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default api
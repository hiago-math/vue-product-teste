import axios from "axios"
import Cookie from "js-cookie"

const api = axios.create({
    baseURL: "https://product.localhost/api",
    headers: {
        'Content-Type': 'multipart/form-data, application/json',
        'Acess': 'application/json',
        'Authorization': `Bearer ${Cookie.get('_auth_app_token')}`
    }
})

export default api
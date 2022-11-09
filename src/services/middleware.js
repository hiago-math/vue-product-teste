import Cookie from 'js-cookie'
import api from "@/router/api";

export default {

    auth(to, from, next) {
        api.get('/auth/hasToken')
            .catch(() => {
                Cookie.remove('_auth_app_token')
            })

        const token = Cookie.get('_auth_app_token');

        if (!token) {
            next('/')
        }

        next()
    },
}
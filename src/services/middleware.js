import Cookie from 'js-cookie'
import api from "@/router/api";

export default {

    auth(to, from, next) {
        api.get('/auth/hasToken')
            .catch((err) => {
                Cookie.remove('_auth_app_token')
                next('/')
            })

        const token = Cookie.get('_auth_app_token');

        if (!token) {
            next('/')
        }

        next()
    },

    redirectToList(to, from, next) {
        next('list')
    }
}
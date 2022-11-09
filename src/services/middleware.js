import Cookie from 'js-cookie'

export default {

    auth(to, from, next) {
        const token = Cookie.get('_auth_app_token');

        if (!token) {
            next('/')
        }

        next()
    },
}
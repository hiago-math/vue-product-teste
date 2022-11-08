import api from '@/router/api'

export default {

    auth(to, from, next) {
        api.get('/auth/hasToken')
            .then(res => {
                console.log(res)
                if (res.data === 1) {
                    next()
                }
                this.$router.push('login')
            })
            .catch(() => {
                next('/list')
            })
    },
}
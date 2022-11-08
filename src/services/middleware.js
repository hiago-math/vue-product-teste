import api from '@/router/api'

export default {

    auth(to, from, next) {
        api.get('/auth/hasToken')
            .then(res => {
                console.log(res)
                if (res.data === 1) {
                    this.$router.push('list')
                }
                this.$router.push('login')
            })
            .catch(() => {
                this.$router.push('list')
            })
    },
}
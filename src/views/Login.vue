<template>
  <section class="vh-100 gradient-custom">
    <div class="container py-5 h-100">
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col-12 col-md-8 col-lg-6 col-xl-5">
          <div class="card bg-dark text-white" style="border-radius: 1rem;">
            <div class="card-body p-5 text-center">

              <div class="mb-md-5 mt-md-4 pb-5">

                <h2 class="fw-bold mb-2 text-uppercase">Login</h2>
                <p class="text-white-50 mb-5">Entre com email e senha!</p>

                <div class="form-outline form-white mb-4">
                  <input v-model="email" type="email" id="typeEmailX" class="form-control form-control-lg" />
                  <label class="form-label" for="typeEmailX">Email</label>
                </div>

                <div class="form-outline form-white mb-4">
                  <input v-model="password" type="password" id="typePasswordX" class="form-control form-control-lg" />
                  <label class="form-label" for="typePasswordX">Password</label>
                </div>
                <button class="btn btn-outline-light btn-lg px-5" type="submit" @click="login">Login</button>

              </div>
              <b-modal ref="modalError" hide-footer title="Erro com o Login">
                <div class="d-block text-center">
                  Senha ou usuario incorreto
                </div>
                <div class="mt-3 d-flex justify-content-end">
                  <b-button variant="outline-secondary" class="mr-2" @click="hideModal">
                    Fechar
                  </b-button>
                </div>
              </b-modal>

            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import api from "@/router/api";
import Cookie from 'js-cookie'

export default {
  name: 'Login',

  data() {
    return {
      email: "",
      password: "",
    }
  },

  methods: {
    login() {
      const payload = {
        email: this.email,
        password: this.password
      }
      api
          .post('/auth/login', (payload))
          .then(resp => {
            Cookie.set('_auth_app_token', resp.data.access_token, { expires: resp.data.expire_in })
            this.$router.push('list')
          })
          .catch(() => {
            this.$refs.modalError.show();
          })
    },

    hideModal() {
      this.$refs.modalError.hide();
      location.reload()
    },
  },
}
</script>

<style>
.gradient-custom {
  /* fallback for old browsers */
  background: #d2d0d0;

  /* Chrome 10-25, Safari 5.1-6 */
  background: -webkit-linear-gradient(to right, rgb(163, 169, 169), rgb(53, 55, 58));

  /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  background: linear-gradient(to right, rgb(220, 220, 220), rgb(66, 66, 66))
}
</style>
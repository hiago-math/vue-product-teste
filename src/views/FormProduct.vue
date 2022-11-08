<template>
  <div class="gradient-custom">
    <b-navbar toggleable="lg" type="dark" variant="dark">
      <b-navbar-brand href="#">App Products</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>

          <b-nav-item-dropdown style="margin-left: auto">
            <!-- Using 'button-content' slot -->
            <template #button-content>
              <em>Ações</em>
            </template>
            <b-dropdown-item to="/list">Lista de Produtos</b-dropdown-item>
            <b-dropdown-item to="/create">Cadastro de Produtos</b-dropdown-item>
          </b-nav-item-dropdown>


          <b-nav-item-dropdown style="margin-left: auto">
            <!-- Using 'button-content' slot -->
            <template #button-content>
              <em>Usuario</em>
            </template>
            <b-dropdown-item @click="logout">Sign Out</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <b-card-header>
      <h1>Cadastro de produtos</h1>
    </b-card-header>
    <div class="container mt-2">
      <b-form>
        <b-form-group label="Nome:" label-for="name" class="mt-2" label-size="lg">
          <b-form-input
              id="name"
              v-model="form.name"
              type="text"
              placeholder="Ex.: Laranja pera"
              required
              autocomplete="off"
              size="lg"
          ></b-form-input>

          <b-form-invalid-feedback id="name-feedback">Campo obrigatório.</b-form-invalid-feedback>
        </b-form-group>

        <b-form-group label="Categoria:" label-for="category" class="mt-2" label-size="lg">
          <b-form-select v-model="form.category.selected" class="mb-2" style="width: 500px" select-size="6" required>
            <b-form-select-option :value="null" disabled>-- SELECIONE UM --</b-form-select-option>
            <option v-for="option in form.category.options" :value="option.id">{{ option.name }}</option>
          </b-form-select>
          <b-form-invalid-feedback id="image-feedback">Campo obrigatório.</b-form-invalid-feedback>
        </b-form-group>

        <b-form-group label="Imagem:" label-for="image" class="mt-2" label-size="lg">
          <b-form-file
              v-model="form.image"
              class="mt-1 mb-3"
              plain
              accept="image/*"
              enctype=”multipart/form-data”
              @change="onChange"
              size="lg"
          >
          </b-form-file>
        </b-form-group>

        <b-button
            type="submit"
            variant="outline-primary"
            @click="saveTask"
        > Salvar
        </b-button>
      </b-form>
    </div>
  </div>
</template>

<script>
import api from "@/router/api";
import ToastMixin from "@/mixins/toastMixin.js";
import {required, minLength} from "vuelidate/lib/validators";
import Cookie from "js-cookie";

export default {

  name: "Form",
  mixins: [ToastMixin],

  data() {
    return {
      form: {
        file: null,
        name: "",
        image: null,
        category: {
          selected: null,
          options: {}
        }
      },
      methodSave: "new"
    }
  },

  validations: {
    form: {
      subject: {
        required,
        minLength: minLength(5)
      }
    }
  },

  async created() {
    if (this.$route.params.id) {
      this.methodSave = "update";
      await api.get('product/' + this.$route.params.id)
          .then((res) => {
            this.form.name = res.data.response.name
            this.form.image = res.data.response.image
            this.form.category.selected = res.data.response.category_id
          });
    }
  },

  async mounted() {
    this.form.category.options = await this.getCategories()
  },

  methods: {
    saveTask() {
      let payload = {
        name: this.form.name,
        category_id: this.form.category.selected,
        image: this.form.image
      }

      if (this.methodSave === "update") {
        api.put('product/' + this.$route.params.id, (payload))
            .then(res => {
              console.log(res)
            })
            .catch(error => { console.log(error)})
        this.showToast("success", "Sucesso!", "Produto Atualizado com suceso");
      } else {
        api.post('product', (payload))
            .then(res => {
              console.log(res)
            })
            .catch(error => { console.log(error)})
        this.showToast("success", "Sucesso!", "Tarefa criada com suceso");
      }
    },

    async getCategories() {
      return await
          api
              .get('category/all')
              .then((res) => {
                return res.data.response
              }).catch((error) => {
            console.log(error)
          })
    },

    onChange() {
      let formData = new FormData();
      formData.append('image', this.form.image);
    },

    logout() {
      api
          .post('/auth/logout')
          .then(() => {
            Cookie.remove('_auth_app_token')
            this.$router.push({name: 'login'})
          })
          .catch(() => {
            location.reload()
          })
    },
  },

  computed: {
    getValidation() {
      if (this.$v.form.subject.$dirty === false) {
        return null;
      }

      return !this.$v.form.subject.$error;
    }
  }
}
</script>
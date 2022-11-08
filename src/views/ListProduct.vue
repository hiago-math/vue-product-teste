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
      <h1>Lista de produtos</h1>
    </b-card-header>
    <div class="container mt-2 ">
      <template v-if="isProductEmpty">
        <div class="empty-data mt-2">
          <!--        <img src="../assets/images/empty-data.svg" class="empty-data-image">-->
          <b-button
              variant="outline-primary"
              class="mt-2"
              size="lg"
              to="/form"
          > Criar produto
          </b-button>
        </div>
      </template>
      <template v-else>
        <div v-for="product in products" :key="product.id">
          <b-card :title="product.name" class="mb-2 mt-2">
            <div class="mb-2">
              <img
                  :src="product.image"
                  :alt="product.image"
                  style="
              max-width:200px;
              max-height:150px;
              width: auto;
              height: auto"
              />
            </div>

            <b-button
                variant="outline-secondary"
                @click="edit(product.id)"
                style="margin-right: 5px"
            >
              Editar
            </b-button>
            <b-button
                variant="outline-danger"
                @click="remove(product.id, product.name)"
                style="margin-right: 5px"
            >
              Excluir
            </b-button>
          </b-card>
        </div>
      </template>

      <b-modal ref="modalRemove" hide-footer title="Exclusão de produto">
        <div class="d-block text-center">
          Deseja realmente excluir esse produto? {{ productSelected.name }}
        </div>
        <div class="mt-3 d-flex justify-content-end">
          <b-button variant="outline-secondary" class="mr-2" @click="hideModal">
            Cancelar
          </b-button>
          <b-button
              variant="outline-danger"
              class="mr-2"
              @click="confirmRemoveProduct(productSelected.id)"
          >
            Excluir
          </b-button>
        </div>
      </b-modal>
    </div>
  </div>
</template>

<script>
import api from "@/router/api";
import Cookie from "js-cookie";

export default {
  name: "Products",

  data() {
    return {
      products: {},
      productSelected: [],
    };
  },

  async created() {
    this.products = await this.getProducts();
  },

  methods: {
    edit(id) {
      this.$router.push({name: "create", params: {id}});
    },

    logout() {
      api
          .post('/auth/logout')
          .then((res) => {
            if (res.status === 200) {
              Cookie.remove('_auth_app_token')
              this.$router.push('login')
            }
          })
          .catch(() => {
            location.reload()
          })
    },

    async getProducts() {
      return await
          api
              .get('product/all')
              .then((res) => {
                return res.data.response
              })
              .catch((error) => {
                location.reload()
                console.log(error)
              })
    },

    async remove(id, name) {
      this.productSelected = {
        name: name,
        id: id
      };

      this.$refs.modalRemove.show();
    },

    hideModal() {
      this.$refs.modalRemove.hide();
    },

    deleteUser(id) {
      api
          .delete("product/" + id).then((res) => {
        return res
      })
    },

    async confirmRemoveProduct(id) {
      this.deleteUser(id)
      this.products = await this.getProducts();
      this.hideModal();
      location.reload()
    },
  },

  computed: {
    isProductEmpty() {
      return this.products === [];
    },
  },
};
</script>

<style scoped>
.empty-data {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.gradient-custom {
  /* fallback for old browsers */
  background: #d2d0d0;

  /* Chrome 10-25, Safari 5.1-6 */
  background: -webkit-linear-gradient(to right, rgb(163, 169, 169), rgb(166, 181, 255));

  /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  background: linear-gradient(to right, rgb(220, 220, 220), rgb(166, 181, 255));
}
</style>

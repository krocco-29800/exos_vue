<script >
import MainLayout from './components/Layout/MainLayout.vue'
import MainNav from './components/Layout/MainNav.vue'
import ProductForm from "./components/Form/ProductForm.vue"
import ProductsTable from "./components/Product/ProductsTable.vue"

export default {
  name: 'App',
  components: {
    MainLayout,
    MainNav,
    ProductForm,
    ProductsTable
  },
  data() {
    return {
      userNavItemsArray : [
        {
          name: "Settings",
          link: "#",
          target: "_self"
        },
        {
          name: "Profile",
          link: "#",
          target: "_self"
        }
      ],
      navItemsArray : [
        {
          name: "Edit",
          link: "#",
          target: "_self",
          emit: [
            { event: "updatePage", value: {"EditPage": true}}
          ],
          class: "link-body-emphasis"
        },
        {
          name: "Preview",
          link: "#",
          emit: [
            { event: "updatePage", value: {"PreviewPage": true}}
          ],
          target: "_self",
          class: "link-body-emphasis"
        },
        {
          name: "Settings",
          link: "#",
          emit: [
            { event: "updatePage", value: {"settingsPage": true}}
          ],
          target: "_self",
          class: "link-body-emphasis"
        }
      ],
      products: [
        {
          id: 1,
          name: "biscuit",
          category: "sweet",
          description: "Oh qu'ils sont bon !!",
          price: 100,
          vta: 20
        }
      ]
    }
  },
  methods: {
    /* payload représente les donnée envoyé par l'événement */
    addProduct(payload) {
      this.products.push(payload)
    }
  }
}
</script>

<template>
  <!-- Monter les composants ici -->
  <main-layout>
    <template #header>
      <main-nav
        :navItems="navItemsArray"
        :userNavItems="userNavItemsArray"
        :showUserNav="true"
      />
    </template>

    <section class="d-flex wrap">
      <!-- insérer un écouter d'évènement personnalisé qui appel la focntion addProduct -->
      <product-form
        @addProduct="addProduct"
        class="col-6"
      />
      <products-table
        class="col-6"
        :products="products"  
      />
    </section>
  
  </main-layout>
</template>

<style scoped>
</style>

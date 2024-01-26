import { defineStore } from 'pinia'
/* Importation des données depuis un fichier json - La conversion est automatique */
/*import products from "../data/productList.json" revenir au dossier parent*/
/*import products from "@/data/productList.json" remonter tous les dossiers d'un coup*/
import products from "../data/productList.json"

export const useProductsStore = defineStore('products', {
    state: () => {
        return {
            products: products,
            editProductMode: false,
            productToEditId: null
        }
    },
    getters: {
        getProducts : (state) => state.products,
        getEditProductMode : (state) => state.editProductMode,
        getProductToEditId: (state) => state.productToEditId,
        getProductById: (state) => (id) => {
            return state.products.find(product => product.id === id)
        } 
    },
    actions :{
        addProduct(product) {
            this.products.push(product)
        },
        updateProduct(product) {
            const index = this.products.findIndex(el => {
                return el.id === product.id
            })
            this.products[index] = product
            this.resetEditionMode()
        },
        setEditProductMode(mode) {
            console.log("mode edition :",mode)
            this.editProductMode = mode
        },
        setProductToEditId(id) {
            console.log("Product Id", id)
            this.productToEditId = id
        },
        resetEditionMode() {
            this.productToEditId = null
            this.editProductMode = false
        }
    }
}) 
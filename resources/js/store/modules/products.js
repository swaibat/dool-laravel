import api from '../../api/products'
const productModules = {
    state: {
        products: [],
        theme:'doko'
    },
    getters: {
        allProducts: state => state.products
    },
    actions: {
        async getProducts({commit}){
            const res = await api.getAllProducts();
            commit('setProducts',res.data)
        }
    },
    mutations: {
        setProducts:(state,products)=>(state.products = products)
    },
}

export default productModules;

import api from '../../api/products'
const productModules = {
    state: {
        products: [],
        product: {}
    },
    getters: {
        allProducts: state => state.products,
        singleProduct: state => state.product
    },
    actions: {
        async getProducts({
            commit
        }) {
            const res = await api.getAllProducts();
            commit('setProducts', res.data)
        },
        async getProduct({
            commit
        }, slug) {
            const res = await api.getAllProduct(slug);
            commit('setProduct', res.data)
        }
    },
    mutations: {
        setProducts: (state, products) => (state.products = products),
        setProduct: (state, product) => (state.product = product)
    },
}

export default productModules;

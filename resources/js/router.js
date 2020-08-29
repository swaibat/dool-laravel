import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from './components/Home';
import Products from './components/Products';
import ProductView from './components/ProductView';
import ShippingAdress from './components/ShippingAdress';
import PaymentMethods from './components/PaymentMethods';
import Stores from './components/Stores';
import Cart from './components/Cart';
import Register from './components/Register';
import store from './store'
import Api from './api/stores'

let themez = store.state.themez()

const StoreView = {
    store: async () => {
        const theme = await themez
        return require(`./themes/${theme}/components/StoreView`).default
    },
    product: async () => {
        const theme = await themez
        require(`./themes/${theme}/components/Products`).default
    }
}

Vue.use(VueRouter);

export default new VueRouter({
    base: process.env.APP_URL,
    routes: [{
            path: '/',
            component: store.state.subdomain ? StoreView.store : Home,
        },
        {
            path: '/products',
            component: store.state.subdomain ? StoreView.product : Products,
        },
        {
            path: '/products/:slug',
            component: ProductView,
        },
        {
            path: '/shopping_cart',
            component: Cart,
        },
        {
            path: '/shipping_address',
            component: ShippingAdress,
        },
        {
            path: '/payment_methods',
            component: PaymentMethods,
        },
        {
            path: '/stores',
            component: Stores
        }, {
            path: '/categories/:slug',
            component: Stores
        },
        {
            path: '/register',
            component: Register,
        }
    ],

    mode: 'history',
});

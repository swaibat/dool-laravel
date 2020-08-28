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

const themeName = 'doko'
const StoreView = require(`./themes/${themeName}/components/StoreView`).default;
Vue.use(VueRouter);
window.subdomain = location.host.match(/^(http?:\/\/)?([^.])*/)[0];

const domain = location.host.startsWith(`${window.subdomain}.`)

export default new VueRouter({
    routes: [{
            path: '/',
            component: domain ? StoreView : Home,
        },
        {
            path: '/products',
            component: !domain && Products,
        },
        {
            path: '/products/:slug',
            component: !domain && ProductView,
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

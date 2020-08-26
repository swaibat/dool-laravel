import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from './components/Home';
import Products from './components/Products';
import ProductView from './components/ProductView';
import ShippingAdress from './components/ShippingAdress';
import PaymentMethods from './components/PaymentMethods';
import Stores from './components/Stores';
import StoreView from './components/StoreView';
import Cart from './components/Cart';
import Register from './components/Register';

Vue.use(VueRouter);
window.subdomain = location.host.match(/^(http?:\/\/)?([^.])*/)[0];

export default new VueRouter({
    routes: [{
            path: '/',
            component: location.host.startsWith(`${window.subdomain}.`) ? StoreView : Home,
        },
        {
            path: '/products',
            component: Products,
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
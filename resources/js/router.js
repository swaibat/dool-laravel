import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './components/App';
import Products from './components/Products';
import ProductView from './components/ProductView';
import ShippingAdress from './components/ShippingAdress';
import PaymentMethods from './components/PaymentMethods';
import Stores from './components/Stores';
import StoreView from './components/StoreView';
import Cart from './components/Cart';
Vue.use(VueRouter);

export default new VueRouter({
	routes: [
		{
			path: '/',
			component: App,
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
			component: Stores,
		},
		{
			path: '/stores/:slug',
			component: StoreView,
		}
	],
	mode: 'history',
});

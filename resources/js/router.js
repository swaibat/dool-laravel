import Vue from "vue";
import VueRouter from "vue-router";
import App from "./components/App";
import Products from "./components/Products";
import ProductView from "./components/ProductView";
import Cart from "./components/Cart";
Vue.use(VueRouter);

export default new VueRouter({
    routes: [{
            path: "/",
            component: App
        },
        {
            path: "/products",
            component: Products
        },
        {
            path: "/products/:slug",
            component: ProductView
        },
        {
            path: "/shopping_cart",
            component: Cart
        }
    ],
    mode: "history"
});

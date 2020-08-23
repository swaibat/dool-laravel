/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */
import Vue from "vue";
import router from "./router";
import App from "./components/App";
import Products from "./components/Products";
import ProductView from "./components/ProductView";
require("./bootstrap");

const app = new Vue({
    el: "#app",
    components: {
        App,
        Products,
        ProductView
    },
    router
});

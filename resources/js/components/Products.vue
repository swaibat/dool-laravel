<template>
    <div class="card">
        <div class="card-header">
            <h3>Products</h3>
        </div>
        <div class="card-body">
            <ul class="list-group list-group-flush">
                <li
                    class="list-group-item"
                    v-bind:key="product.id"
                    v-for="product in products"
                >
                    <Product v-bind:product="product" />
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import Product from "./Product";
export default {
    name: "Products",
    components: {
        Product
    },
    data() {
        return {
            msg: "Products",
            products: []
        };
    },
    mounted() {
        $.get("/api/products", res => (this.products = res.data));
    },
    methods: {}
};
</script>

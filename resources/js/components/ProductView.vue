<template>
    <div>
        <div class="card">
            <div class="card-header">
                <h3>{{ product.title }}</h3>
            </div>
            <div class="card-body">
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">Tittle: {{ product.title }}</li>
                    <li class="list-group-item">Price: {{ product.price }}</li>
                    <li class="list-group-item">Sku: {{ product.sku }}</li>
                    <li class="list-group-item">
                        Discount: {{ product.discount }}
                    </li>
                </ul>
            </div>
            <div class="card-footer d-flex justify-content-between">
                <router-link to="/products" class="btn btn-primary"
                    >continue Shopping</router-link
                >
                <button @click="addToCart" class="btn btn-primary ml-5">
                    add to cat
                </button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Product",
    // props: ["product"],
    data() {
        return {
            product: {},
            cartItems: [],
            newCat: null,
            width: ""
        };
    },
    mounted() {
        $.get(
            `/api/products/${this.$route.params.slug}`,
            res => (this.product = res.data)
        );
        // console.log(localStorage.getItem("cart-items"));
        this.catItems = JSON.parse(localStorage.getItem("cart-items"));

        // if (localStorage.getItem("cart-items")) {

        // }
    },
    methods: {
        addToCart() {
            console.log("hello");
            this.cartItems.push(this.product);
            // this.newCat = "";
            this.saveCartItem();
        },
        saveCartItem() {
            let parsed = JSON.stringify(this.cartItems);
            localStorage.setItem("cart-items", parsed);
        }
    }
};
</script>

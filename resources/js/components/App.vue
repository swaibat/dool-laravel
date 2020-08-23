<template>
    <div>
        <router-link to="/shopping_cart">Cart</router-link>
        <router-view />
    </div>
</template>

<script>
import Cart from "./Cart";
export default {
    name: "App",
    data() {
        return {
            width: ""
        };
    },
    components: {
        Cart
    },

    mounted() {
        console.log("Component mounted.");
    }
};
</script>

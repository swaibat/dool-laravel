<template>
    <router-link :to="'products/'+product.slug">{{ product.title }}</router-link>
</template>

<script>
export default {
    name: "Product",
    props: ["product"]
};
</script>

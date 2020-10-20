<template>
	<div class="d-flex">
		<img class="rounded border mr-3" width="50" :src="product.files[0].name" />
		<router-link :to="`/products/${product.slug}`">{{ product.title }}</router-link>
	</div>
</template>

<script>
export default {
	name: 'Product',
	props: ['product'],
};
</script>

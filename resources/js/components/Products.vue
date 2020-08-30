<template>
	<div class="card">
		<div class="card-header">
			<h3>Products</h3>
		</div>
		<div class="card-body">
			<ul class="list-group list-group-flush">
				<li class="list-group-item" v-bind:key="product.id" v-for="product in allProducts">
					<Product v-bind:product="product" />
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
import Product from './Product';
import { mapGetters, mapActions } from 'vuex';
export default {
	name: 'products',
	methods: {
		...mapActions(['getProducts']),
	},
	computed: mapGetters(['allProducts']),
	created() {
		this.getProducts();
	},
	components: {
		Product,
    },
    mounted(){
        console.log(this.$store);
    }
};
</script>

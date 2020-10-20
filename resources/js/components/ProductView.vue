<template>
	<div class="row">
		<div class="col-md-8">
			<div class="card">
				<div class="card-header">
					<h3>{{singleProduct.title }}</h3>
				</div>
				<div class="card-body">
					<ul class="list-group list-group-flush">
						<li class="list-group-item">Tittle: {{ singleProduct.title }}</li>
						<li class="list-group-item">Price: {{ singleProduct.price }}</li>
						<li class="list-group-item">Sku: {{ singleProduct.sku }}</li>
						<li class="list-group-item">Discount: {{ singleProduct.discount }}</li>
					</ul>
				</div>
				<div class="card-footer d-flex justify-content-between">
					<router-link to="/products" class="btn btn-outline-primary">continue Shopping</router-link>
					<button class="btn btn-primary">add to cart</button>
				</div>
			</div>
		</div>
		<div class="col-md-4">
			<div class="card">
				<div class="card-header">
					<h3>{{ singleProduct.store.name }}</h3>
				</div>
				<div class="card-body">
					<ul class="list-group list-group-flush">
						<li class="list-group-item">Address: {{ singleProduct.store.address }}</li>
						<li class="list-group-item">Contact: {{ singleProduct.store.support_phone }}</li>
					</ul>
				</div>
				<div class="card-footer d-flex justify-content-between">
					<router-link to="/products" class="btn btn-outline-primary">chat with agent</router-link>
					<router-link :to="'/stores/' + singleProduct.store.slug" class="btn btn-primary">Visit store</router-link>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
export default {
	name: 'products',
	methods: {
		...mapActions(['getProduct']),
	},
	computed: mapGetters(['singleProduct']),
	beforeMount() {
		this.getProduct(this.$route.params.slug);
	},
};
</script>

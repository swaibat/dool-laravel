<template>
	<div>
		<div class="card">
			<div class="card-header">
				<h3>{{ product.title }}</h3>
			</div>
			<div class="card-body">
				<ul class="list-group list-group-flush">
					<li class="list-group-item">
						<img width="200" :src="product.files[0] && product.files[0].name" :alt="product.title" />
					</li>
					<li class="list-group-item">Tittle: {{ product.title }}</li>
					<li class="list-group-item">Price: {{ product.price }}</li>
					<li class="list-group-item">Sku: {{ product.sku }}</li>
					<li class="list-group-item">Discount: {{ product.discount }}</li>
				</ul>
			</div>
			<div class="card-footer d-flex justify-content-between">
				<router-link to="/products" class="btn btn-outline-primary">continue Shopping</router-link>
				<button @click="addToCart" class="btn btn-primary">add to cart</button>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'Product',
	// props: ["product"],
	data() {
		return {
			product: {},
			cartItems: [],
			newCat: null,
			width: '',
		};
	},
	mounted() {
		$.get(`/api/products/${this.$route.params.slug}`, (res) => (this.product = res.data));
		// console.log(localStorage.getItem("cart-items"));
		this.catItems = JSON.parse(localStorage.getItem('cart-items'));

		// if (localStorage.getItem("cart-items")) {

		// }
	},
	methods: {
		addToCart() {
			this.cartItems.push(this.product);
			// this.newCat = "";
			this.saveCartItem();
		},
		saveCartItem() {
			const parsed = JSON.stringify(this.cartItems);
			localStorage.setItem('cart-items', parsed);
		},
	},
};
</script>

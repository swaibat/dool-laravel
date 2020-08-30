<template>
	<div class="row">
		<div class="col-md-8 pl-0">
			<ul class="list-group list-group-flush">
				<li class="list-group-item mb-3 rounded shadow-xs text-center">
					<h5 class="text-center">Adress Details</h5>
					<hr />
					<div class="pt-2">
						<h6>Rumbiiha Swaibu</h6>
						<p class="m-0">Kampala,Wakiso - Uganda</p>
						<p class="m-0">+257896638230</p>
						<p></p>
					</div>
				</li>
				<li class="list-group-item rounded shadow-xs">
					<div class="m-auto sadow-xs px-3 pb-4 w-100">
						<h5 class="text-center">Select payment Method</h5>
						<hr />
						<form class="d-flex btn-group-toggle m-auto">
							<div class="col-md-8 m-auto">
								<label>
									<input type="radio" name="payment-option" value="paypal" checked />
									<img src="/demo/checkout/static/img/paypal-mark.jpg" alt="Pay with PayPal" />
								</label>

								<label>
									<input type="radio" name="payment-option" value="card" />
									<img
										src="/demo/checkout/static/img/card-mark.png"
										alt="Accepting Visa, Mastercard, Discover and American Express"
									/>
								</label>
								<div id="paypal-button-container"></div>
								<div id="card-button-container" class="hidden"><button>Continue</button></div>
							</div>
						</form>
					</div>
				</li>
			</ul>
		</div>
		<div class="col-md-4 p-0">
			<div class="bg-white shadow-xs rounded p-3">
				<h6 class="text-center">
					Order Summary
				</h6>
				<hr />
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
		$.get(`/api/products/${this.$route.params.slug}`, res => (this.product = res.data));
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

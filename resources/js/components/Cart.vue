<template>
	<div>
		<!-- Product List -->
		<section class="container">
			<div v-if="products.length > 0">
				<table class="table">
					<thead>
						<tr>
							<th scope="col">#</th>
							<th scope="col">Image</th>
							<th scope="col">details</th>
							<th scope="col">Qty</th>
							<th scope="col">Act</th>
						</tr>
					</thead>
					<tbody>
						<tr v-bind:key="index" v-for="(product, index) in products">
							<th scope="row">1</th>
							<td>
								<a href="#">
									<img width="50" :src="product.files[0] && product.files[0].name" :alt="product.title" />
								</a>
							</td>
							<!-- <td><a href="#">dddd{{ product.name }}</a></td> -->
							<td>
								<div class="name">
									<a href="#">{{ product.title }}</a>
								</div>
								<div class="description">
									{{ product.description }}
								</div>
								<div class="price">
									{{ product.price | currencyFormatted }}
								</div>
							</td>
							<td>
								<div class="col right">
									<div class="quantity">
										<input
											type="number"
											class="quantity"
											step="1"
											:value="product.quantity"
											@input="updateQuantity(index, $event)"
											@blur="checkQuantity(index, $event)"
										/>
									</div>
								</div>
							</td>
							<td>
								<div class="remove">
									<i class="fas fa-times"></i>
								</div>
							</td>
						</tr>
					</tbody>
				</table>
			</div>
			<div v-else class="empty-product">
				<h3>There are no products in your cart.</h3>
				<button>Shopping now</button>
			</div>
		</section>
		<!-- End Product List -->

		<!-- Summary -->
		<section class="row  justify-content-between" v-if="products.length > 0">
			<div class="col-md-5">
				<label for="promo-code">Have A Promo Code?</label>
				<div class="d-flex">
					<input class="form-control" type="text" id="promo-code" v-model="promoCode" />
					<button class="btn btn-primary ml-2" type="button" @click="checkPromoCode">Add</button>
				</div>
			</div>

			<div class="col-md-3">
				<div class="d-flex flex-column justify-content-end">
					<ul class="list-group">
						<li class="list-group-item border-0 d-flex justify-content-between">
							Subtotal <span>{{ subTotal | currencyFormatted }}</span>
						</li>
						<li v-if="discount > 0" class="list-group-item border-0 d-flex justify-content-between">
							Discount
							<span>{{ discountPrice | currencyFormatted }}</span>
						</li>
						<li class="list-group-item border-0 d-flex justify-content-between">
							Tax <span>{{ tax | currencyFormatted }}</span>
						</li>
						<li class="total list-group-item border-0 d-flex justify-content-between">
							Total <span>{{ totalPrice | currencyFormatted }}</span>
						</li>
					</ul>
					<div class="checkout ml-auto mt-2">
						<router-link to="/shipping_address" class="btn btn-primary" type="button">Check Out</router-link>
					</div>
				</div>
			</div>
		</section>
		<!-- End Summary -->
	</div>
</template>

<script>
import Vue from 'vue';

export default {
	name: 'Products',
	components: {
		// Product
	},
	data() {
		return {
			msg: 'Cart',
			products: [],
			tax: 5,
			promotions: [
				{
					code: 'SUMMER',
					discount: '50%',
				},
				{
					code: 'AUTUMN',
					discount: '40%',
				},
				{
					code: 'WINTER',
					discount: '30%',
				},
			],
			promoCode: '',
			discount: 0,
		};
	},
	mounted() {
		$.get('/api/products', res => {
			console.log(res.data[1]);
			this.products = res.data;
		});
	},
	computed: {
		itemCount() {
			let count = 0;

			for (let i = 0; i < this.products.length; i++) {
				count += parseInt(this.products[i].quantity) || 0;
			}

			return count;
		},
		subTotal() {
			let subTotal = 0;

			for (let i = 0; i < this.products.length; i++) {
				subTotal += this.products[i].quantity * this.products[i].price;
			}

			return subTotal;
		},
		discountPrice() {
			return (this.subTotal * this.discount) / 100;
		},
		totalPrice() {
			return this.subTotal - this.discountPrice + this.tax;
		},
	},
	filters: {
		currencyFormatted(value) {
			return Number(value).toLocaleString('en-US', {
				style: 'currency',
				currency: 'USD',
			});
		},
	},
	methods: {
		updateQuantity(index, event) {
			const product = this.products[index];
			const { value } = event.target;
			const valueInt = parseInt(value);

			// Minimum quantity is 1, maximum quantity is 100, can left blank to input easily
			if (value === '') {
				product.quantity = value;
			} else if (valueInt > 0 && valueInt < 100) {
				product.quantity = valueInt;
			}

			this.$set(this.products, index, product);
		},
		checkQuantity(index, event) {
			// Update quantity to 1 if it is empty
			if (event.target.value === '') {
				const product = this.products[index];
				product.quantity = 1;
				this.$set(this.products, index, product);
			}
		},
		removeItem(index) {
			this.products.splice(index, 1);
		},
		checkPromoCode() {
			for (let i = 0; i < this.promotions.length; i++) {
				if (this.promoCode === this.promotions[i].code) {
					this.discount = parseFloat(this.promotions[i].discount.replace('%', ''));
					return;
				}
			}

			alert('Sorry, the Promotional code you entered is not valid!');
		},
	},
};
</script>

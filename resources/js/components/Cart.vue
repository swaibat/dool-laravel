<template>
    <div>
        <!-- Product List -->
        <section class="container">
            <div v-if="products.length > 0">
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <!-- <th scope="col">First</th> -->
                            <th scope="col">Last</th>
                            <th scope="col">Handle</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr
                            v-bind:key="index"
                            v-for="(product, index) in products"
                        >
                            <th scope="row">1</th>
                            <!-- <td>
                                <a href="#">
                                    <img
                                        :src="product.image"
                                        :alt="product.name"
                                    />
                                </a>
                            </td> -->
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

                            <div class="remove">X</div>
                        </div>
                            </td>
                            <td>

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
        <section class="container" v-if="products.length > 0">
            <div class="promotion">
                <label for="promo-code">Have A Promo Code?</label>
                <input type="text" id="promo-code" v-model="promoCode" />
                <button type="button" @click="checkPromoCode"></button>
            </div>

            <div class="summary">
                <ul>
                    <li>
                        Subtotal <span>{{ subTotal | currencyFormatted }}</span>
                    </li>
                    <li v-if="discount > 0">
                        Discount
                        <span>{{ discountPrice | currencyFormatted }}</span>
                    </li>
                    <li>
                        Tax <span>{{ tax | currencyFormatted }}</span>
                    </li>
                    <li class="total">
                        Total <span>{{ totalPrice | currencyFormatted }}</span>
                    </li>
                </ul>
            </div>

            <div class="checkout">
                <button type="button">Check Out</button>
            </div>
        </section>
        <!-- End Summary -->
    </div>
</template>

<script>
import Vue from "vue";
export default {
    name: "Products",
    components: {
        // Product
    },
    data() {
        return {
            msg: "Cart",
            products: [],
            tax: 5,
            promotions: [
                {
                    code: "SUMMER",
                    discount: "50%"
                },
                {
                    code: "AUTUMN",
                    discount: "40%"
                },
                {
                    code: "WINTER",
                    discount: "30%"
                }
            ],
            promoCode: "",
            discount: 0
        };
    },
    mounted() {
        $.get("/api/products", res => (this.products = res.data));
    },
    computed: {
        itemCount: function() {
            var count = 0;

            for (var i = 0; i < this.products.length; i++) {
                count += parseInt(this.products[i].quantity) || 0;
            }

            return count;
        },
        subTotal: function() {
            var subTotal = 0;

            for (var i = 0; i < this.products.length; i++) {
                subTotal += this.products[i].quantity * this.products[i].price;
            }

            return subTotal;
        },
        discountPrice: function() {
            return (this.subTotal * this.discount) / 100;
        },
        totalPrice: function() {
            return this.subTotal - this.discountPrice + this.tax;
        }
    },
    filters: {
        currencyFormatted: function(value) {
            return Number(value).toLocaleString("en-US", {
                style: "currency",
                currency: "USD"
            });
        }
    },
    methods: {
        updateQuantity: function(index, event) {
            var product = this.products[index];
            var value = event.target.value;
            var valueInt = parseInt(value);

            // Minimum quantity is 1, maximum quantity is 100, can left blank to input easily
            if (value === "") {
                product.quantity = value;
            } else if (valueInt > 0 && valueInt < 100) {
                product.quantity = valueInt;
            }

            this.$set(this.products, index, product);
        },
        checkQuantity: function(index, event) {
            // Update quantity to 1 if it is empty
            if (event.target.value === "") {
                var product = this.products[index];
                product.quantity = 1;
                this.$set(this.products, index, product);
            }
        },
        removeItem: function(index) {
            this.products.splice(index, 1);
        },
        checkPromoCode: function() {
            for (var i = 0; i < this.promotions.length; i++) {
                if (this.promoCode === this.promotions[i].code) {
                    this.discount = parseFloat(
                        this.promotions[i].discount.replace("%", "")
                    );
                    return;
                }
            }

            alert("Sorry, the Promotional code you entered is not valid!");
        }
    }
};
</script>

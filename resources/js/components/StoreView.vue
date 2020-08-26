<template>
	<div>
		<nav class="navbar navbar-expand-md navbar-light bg-white shadow-sm">
			<a class="navbar-brand" href="#">Fixed navbar</a>
			<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
				<span class="navbar-toggler-icon"></span>
			</button>
			<div class="collapse navbar-collapse" id="navbarCollapse">
				<ul class="navbar-nav mr-auto">
					<li class="nav-item active">
						<router-link class="nav-link" to="/">
							Home
							<span class="sr-only">(current)</span>
						</router-link>
					</li>
					<li class="nav-item">
						<router-link class="nav-link" to="/products">Products</router-link>
					</li>
					<li class="nav-item">
						<router-link class="nav-link" to="/stores">Stores</router-link>
					</li>
				</ul>
				<div class="d-flex mt-2 mt-md-0">
					<router-link class="btn btn-outline-success my-2 my-sm-0" to="/login">Login</router-link>
					<router-link class="btn btn-outline-success my-2 my-sm-0 ml-3" to="/register">Register</router-link>
					<router-link class="btn my-2 my-sm-0 ml-3" to="/shopping_cart"><i class="fas fa-shopping-cart"></i></router-link>
				</div>
			</div>
		</nav>
		<div class="container mt-3">
			<div class="row">
				<div class="col-md-3">
					<div class="card">
						<div class="card-header">
							<h3>{{ store.category.name }}</h3>
						</div>
						<div class="card-body">
							<ul class="list-group list-group-flush">
								<li v-bind:key="sub.id" v-for="sub in store.category.sub" class="list-group-item">
									<router-link :to="`categories/${sub.slug}`">{{ sub.name }}</router-link>
								</li>
							</ul>
						</div>
						<div class="card-footer d-flex justify-content-between"></div>
					</div>
				</div>
				<div class="col-md-9">
					<div v-if="!this.$route.query.category" class="card">
						<div class="card-header">
							<h3>{{ store.name }}</h3>
						</div>
						<div class="card-body">
							<ul class="list-group list-group-flush">
								<li class="list-group-item">Tittle: {{ store.name }}</li>
								<li class="list-group-item">Address: {{ store.address }}</li>
								<li class="list-group-item">contact: {{ store.support_phone }}</li>
								<li class="list-group-item">about: {{ store.about_text }}</li>
								<li class="list-group-item">
									<p>gallery</p>
									<div v-bind:key="gallery.id" v-for="gallery in store.gallery">
										{{ gallery.name }}
										<span v-if="gallery.files[0]">
											<img width="50" class="rounded ml-2" v-bind:key="file.id" v-for="file in gallery.files" :src="file.path" alt="" />
										</span>
									</div>
								</li>
							</ul>
						</div>
						<div class="card-footer d-flex justify-content-between">
							<router-link to="/stores" class="btn btn-outline-primary">Back to stores</router-link>
							<button class="btn btn-primary">add to cart</button>
						</div>
					</div>
					<!-- categories -->
					<div v-if="this.$route.query.category" class="card">
						<div class="card-header">
							<h3>{{ this.$route.query.category }}</h3>
						</div>
						<div class="card-body">
							<div></div>
						</div>
						<div class="card-footer d-flex justify-content-between">
							<router-link to="/stores" class="btn btn-outline-primary">Back to stores</router-link>
							<button class="btn btn-primary">add to cart</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import Vue from 'vue';
export default {
	name: 'Store',
	data() {
		return {
			store: {
				gallery: [],
				category: {},
			},
		};
	},
	mounted() {
		$.get(`/api/stores/${location.host.match(/^(http?:\/\/)?([^.])*/)[0]}`, res => (this.store = res.data));
	},
};
</script>

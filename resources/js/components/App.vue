<template>
	<div>
		<header>
			<!-- Fixed navbar -->
			<nav class="navbar navbar-expand-md navbar-light bg-white shadow-sm">
				<a class="navbar-brand" href="#">Fixed navbar</a>
				<button
					class="navbar-toggler"
					type="button"
					data-toggle="collapse"
					data-target="#navbarCollapse"
					aria-controls="navbarCollapse"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
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
		</header>
        <main class="container mt-3">
		<router-view />
        </main>
	</div>
</template>

<script>
import Cart from './Cart';
export default {
	name: 'App',
	data() {
		return {
			width: '',
		};
	},
	components: {
		Cart,
	},

	mounted() {
		console.log('Component mounted.');
	},
};
</script>

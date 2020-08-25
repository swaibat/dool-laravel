<template>
	<div>
		<div class="card">
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
						<div v-if="store.gallery">
							<div v-bind:key="gallery.id" v-for="gallery in store.gallery">
								{{ gallery.name }}
								<span v-if="gallery.files[0]">
									<img width="50" class="rounded ml-2" v-bind:key="file.id" v-for="file in gallery.files" :src="file.path" alt="" />
								</span>
							</div>
						</div>
					</li>
				</ul>
			</div>
			<div class="card-footer d-flex justify-content-between">
				<router-link to="/stores" class="btn btn-outline-primary">Back to stores</router-link>
				<button class="btn btn-primary">add to cart</button>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'Store',
	data() {
		return {
			store: {
				gallery: [],
			},
		};
	},
	mounted() {
		$.get(`/api/stores/${this.$route.params.slug}`, res => (this.store = res.data));
	},
};
</script>

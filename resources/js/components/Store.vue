<template>
	<div class="d-flex">
		<router-link :to="'stores/' + store.slug">{{ store.name }}</router-link>
	</div>
</template>

<script>
export default {
	name: 'Store',
	props: ['store'],
};
</script>

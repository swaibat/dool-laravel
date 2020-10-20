<template>
	<div class="d-flex">
		<a :href="`${host.replace(/^(http?:\/\/)(www\.)?([^.])*/, `$1$2${store.name}`)}.localhost:8000?`">{{ store.name }}</a>
	</div>
</template>

<script>
export default {
	name: 'Store',
	props: ['store'],
	data() {
		return {
			host: 'http://' + location.host,
		};
	},
};
</script>

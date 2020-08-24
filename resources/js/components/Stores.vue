<template>
    <div class="card">
        <div class="card-header">
            <h3>Stores</h3>
        </div>
        <div class="card-body">
            <ul class="list-group list-group-flush">
                <li
                    class="list-group-item"
                    v-bind:key="store.id"
                    v-for="store in stores"
                >
                    <Store v-bind:store="store" />
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import Store from "./Store";
export default {
    name: "Stores",
    components: {
        Store
    },
    data() {
        return {
            stores: []
        };
    },
    mounted() {
        $.get("/api/stores", res => (this.stores = res.data));
    },
    methods: {}
};
</script>

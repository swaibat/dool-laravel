<template>
    <div class="mt-5">
        <h2>{{msg}}</h2>
        <!-- <form action="" method="post">
            <input type="text" v-model="form.title" class="form-control">
        </form> -->
    </div>
</template>

<script>
    export default {
        data(){
            return {
                msg:'hello',
                form: new Form({
                    title:''
                })
            }
        },
        mounted() {
            console.log('Component mounted.')
        }
    }
</script>

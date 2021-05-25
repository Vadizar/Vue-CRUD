<template>
    <div class="card">
        <div class="card-header">
            <h3>{{ $route.name }} Item</h3>
        </div>
        <div class="card-body">
            <form @submit.prevent="postItem">
                <div class="p-2">
                    <label>Name:</label>
                    <input
                        type="text"
                        class="form-control"
                        v-model="item.name"
                        minlength="3"
                        maxlength="255"
                        required
                    >
                </div>
                <div class="p-2">
                    <label>Lastname:</label>
                    <input
                        type="text"
                        class="form-control"
                        v-model="item.lastname"
                        minlength="3"
                        maxlength="255"
                        required
                    >
                </div>
                <div class="p-2">
                    <label>Email:</label>
                    <input
                        type="email"
                        class="form-control"
                        v-model="item.email"
                        required
                    >
                </div>
                <div class="p-2">
                    <input type="submit" class="btn btn-primary" value="Save Item">
                </div>
            </form>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        item: {
            type: Object,
            default: () => ({})
        }
    },

    methods: {
        postItem() {
            let uri

            if (this.$route.params.id) { // is existing item
                uri = process.env.VUE_APP_URL + '/items/update/' + this.$route.params.id
            } else {
                uri = process.env.VUE_APP_URL + '/items/add'
            }

            this.axios.post(uri, this.item).then(() =>
                this.$router.push({name: 'Home'})
            )
        }
    }
}
</script>
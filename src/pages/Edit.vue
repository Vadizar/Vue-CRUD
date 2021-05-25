<template>
    <Form :item='item'></Form>
</template>

<script>
import Form from '../partials/Form'

export default {
    components: {
        Form,
    },

    data() {
        return {
            item: {}
        }
    },

    created() {
        this.getItem()
    },

    methods: {
        getItem() {
            const uri = process.env.VUE_APP_URL + '/items/edit/' + this.$route.params.id
            this.axios.get(uri).then(response =>
                this.item = response.data
            )
        },
    }
}
</script>
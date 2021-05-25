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
            if (this.$route.params.id) {
                const uri = 'http://localhost:4000/items/edit/' + this.$route.params.id
                this.axios.get(uri).then(response =>
                    this.item = response.data
                )
            }
        },
    }
}
</script>
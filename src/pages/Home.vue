<template>
    <div>
        <div class="d-flex align-items-center mb-2">
            <h1>{{ $route.name }}</h1>

            <button
                class="btn btn-primary ms-3"
                @click="exportToJSON(items, 'Users', 'json')"
            >
                Export
            </button>
        </div>

        <table class="table table-hover">
            <thead>
            <tr class="table-dark">
                <td>ID</td>
                <td>Name</td>
                <td>Lastname</td>
                <td>Email</td>
                <td></td>
            </tr>
            </thead>

            <tbody>
            <tr v-for="item in items" :key="item._id">
                <td class="align-middle">
                    {{ item._id }}
                </td>
                <td class="align-middle">
                    {{ item.name }}
                </td>
                <td class="align-middle">
                    {{ item.lastname }}
                </td>
                <td class="align-middle">
                    {{ item.email }}
                </td>
                <td class="text-end">
                    <router-link
                        :to="{name: 'Edit', params: { id: item._id }}"
                        class="btn btn-primary m-2"
                    >
                        Edit
                    </router-link>
                    <button
                        @click="deleteItem(item._id)"
                        class="btn btn-danger"
                    >
                        Delete
                    </button>
                </td>
            </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import exportFromJSON from 'export-from-json'

export default {
    data() {
        return {
            items: []
        }
    },

    created() {
        this.fetchItems()
    },

    methods: {
        fetchItems() {
            const uri = process.env.VUE_APP_URL + '/items'
            this.axios.get(uri).then(response =>
                this.items = response.data.reverse()
            )
        },
        deleteItem(id) {
            const uri = process.env.VUE_APP_URL + '/items/delete/' + id
            this.axios.get(uri).then(() =>
                this.items = this.items.filter(item => item._id !== id)
            )
        },
        exportToJSON(data, fileName, exportType) {
            exportFromJSON({
                data,
                fileName,
                exportType
            })
        }
    }
}
</script>

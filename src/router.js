import Router from 'vue-router'

Vue.use(Router)

const routes = [
    {
        name: 'Add',
        path: '/add',
        component: () => import('./pages/Add.vue'),
    },
    {
        name: 'Edit',
        path: '/edit/:id',
        component: () => import('./pages/Edit.vue'),
    },
    {
        name: 'Home',
        path: '/',
        component: () => import('./pages/Home.vue'),
    },
    {
        name: 'Not Found',
        path: '*',
        component: () => import('./pages/404.vue'),
    },
]

export default new Router({
    mode: 'history',
    routes,
    linkActiveClass: '',
    linkExactActiveClass: 'active'
})
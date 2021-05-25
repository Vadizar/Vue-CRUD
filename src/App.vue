<template>
    <div id="app" class="container">
        <nav class="navbar navbar-expand-sm bg-light mb-4">
            <router-link :to="{ name: 'Home' }" class="nav-link">
                Home
            </router-link>
            <router-link :to="{ name: 'Add' }" class="nav-link">
                Add Item
            </router-link>
        </nav>
        <router-view></router-view>
    </div>
</template>
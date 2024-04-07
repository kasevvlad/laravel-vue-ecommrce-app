<template>
    <div class="min-h-full flex">

        <Sidebar></Sidebar>

        <div class="flex-1">

            <header class="h-8 shadow bg-white">
                header
            </header>

            <main>
                <router-view></router-view>
            </main>
        </div>
    </div>
</template>

<script setup>

import Sidebar from "@/components/Sidebar.vue";
</script>

<style lang="scss" scoped>

</style>

<template>
    <div class="flex items-center justify-center min-h-full w-full min-w-full">
        <div class="text-indigo-600 text-5xl px-8 font-bold border-r pb-8">404</div>
        <div class="px-8">
            <h1 class="text-5xl font-bold mb-4">Page Not Found</h1>
            <p class="text-gray-600 mb-8">Please check the url in address bar and try again</p>
            <div>
                <router-link :to="{name: 'app.dashboard'}" class="text-indigo-500">Go back home</router-link>
            </div>
        </div>
    </div>
</template>

<script setup>

</script>

<style>

</style>

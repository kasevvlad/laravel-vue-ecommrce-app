<template>
    <div class="w-[200px] bg-indigo-700 text-white py-4 px-2">
        <router-link :to="{name: 'app.dashboard'}" class="flex items-center py-1 px-3 rounded transition-colors hover:bg-black/30 ">
            <span class="mr-2">
                <HomeIcon class="w-5"></HomeIcon>
            </span>
            <span>
                Dashboard
            </span>
        </router-link>
        <router-link :to="{name: 'app.dashboard'}" class="flex items-center py-1 px-3 rounded transition-colors hover:bg-black/30 ">
            <span class="mr-2">
                <ListBulletIcon class="w-5"></ListBulletIcon>
            </span>
            <span>
                Products
            </span>
        </router-link>
        <router-link :to="{name: 'app.dashboard'}" class="flex items-center py-1 px-3 rounded transition-colors hover:bg-black/30 ">
            <span class="mr-2">
                <UsersIcon class="w-5"></UsersIcon>
            </span>
            <span>
                Users
            </span>
        </router-link>
        <router-link :to="{name: 'app.dashboard'}" class="flex items-center py-1 px-3 rounded transition-colors hover:bg-black/30 ">
            <span class="mr-2">
                <ChartBarIcon class="w-5"></ChartBarIcon>
            </span>
            <span>
                Reports
            </span>
        </router-link>

    </div>
</template>

<script setup>
import {HomeIcon, ListBulletIcon, UsersIcon, ChartBarIcon} from "@heroicons/vue/24/outline/index.js";
</script>

<style>

</style>

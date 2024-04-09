<template>
    <div class="min-h-full bg-gray-200 flex">

        <Sidebar :class="{'-ml-[200px]' : !sidebarOpened}"></Sidebar>

        <div class="flex-1">

            <Navbar @toggle-sidebar="toggle_sidebar"></Navbar>

            <main class="p-6">
                <router-view></router-view>
            </main>
        </div>
    </div>
</template>

<script setup>
import {ref, onMounted, onUnmounted} from "vue";
import Sidebar from "@/components/Sidebar.vue";
import Navbar from "@/components/Navbar.vue";

const sidebarOpened = ref(true);

function toggle_sidebar()
{
    sidebarOpened.value = !sidebarOpened.value
}

onMounted(() => {
    handleSidebarOpened();
    window.addEventListener('resize', handleSidebarOpened)
})

onUnmounted(() => {
    window.removeEventListener('resize', handleSidebarOpened)
})

function handleSidebarOpened(){
    if (window.innerWidth <= 768){
        sidebarOpened.value = false;
    }else{
        sidebarOpened.value = true;
    }
}

</script>

<style lang="scss" scoped>

</style>

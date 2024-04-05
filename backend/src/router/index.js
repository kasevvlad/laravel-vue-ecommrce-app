import {createRouter, createWebHistory} from "vue-router";
import Login from "@/views/Login.vue";
import Dashboard from "@/views/Dashboard.vue";
import AppLayout from "@/components/AppLayout.vue";
import store from "@/store/index.js";

const routes = [
    {
        path: '/app',
        name: 'app',
        component: AppLayout,
        meta: {
            requiresAuth: true
        },
        children: [
            {
                path: '/dashboard',
                name: 'app.dashboard',
                component: Dashboard
            }
        ]
    },

    {
        path: '/login',
        name: 'login',
        component: Login
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes
})

router.beforeEach((to, from, next) => {
    if (to.meta.requiresAuth && !store.state.user.token){
        next({name: 'login'})
    }else if(to.meta.requiresGuest && store.state.user.token){
        next({name: 'app.dashboard'})
    }else{
        next();
    }
});

export default router

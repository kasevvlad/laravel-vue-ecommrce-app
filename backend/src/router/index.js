import {createRouter, createWebHistory} from "vue-router";
import Login from "@/views/Auth/Login.vue";
import Dashboard from "@/views/Dashboard.vue";
import AppLayout from "@/components/AppLayout.vue";
import store from "@/store/index.js";
import RequestPassword from "@/views/Auth/RequestPassword.vue";
import ResetPassword from "@/views/Auth/ResetPassword.vue";

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
                path: 'dashboard',
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
    {
        path: '/request_password',
        name: 'requestPassword',
        component: RequestPassword
    },
    {
        path: '/reset_password',
        name: 'resetPassword',
        component: ResetPassword
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

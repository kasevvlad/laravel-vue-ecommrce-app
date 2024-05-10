import {createRouter, createWebHistory} from "vue-router";
import store from "@/store/index.js";
import routes from "@/router/routes.js";


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

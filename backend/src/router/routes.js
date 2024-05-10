import AppLayout from "@/components/AppLayout.vue";
import Dashboard from "@/views/Dashboard.vue";
import Products from "@/views/Products.vue";
import Login from "@/views/Auth/Login.vue";
import RequestPassword from "@/views/Auth/RequestPassword.vue";
import ResetPassword from "@/views/Auth/ResetPassword.vue";
import NotFound from "@/views/NotFound.vue";

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
            },
            {
                path: 'products',
                name: 'app.products',
                component: Products
            },

        ]
    },

    {
        path: '/login',
        name: 'login',
        component: Login,
        meta: {
            requiresGuest: true
        }
    },
    {
        path: '/request_password',
        name: 'requestPassword',
        component: RequestPassword,
        meta: {
            requiresGuest: true
        }
    },
    {
        path: '/reset_password:token',
        name: 'resetPassword',
        component: ResetPassword,
        meta: {
            requiresGuest: true
        }
    },
    {
        path: '/:pathMatch(.*)',
        name: 'notfound',
        component: NotFound,
    },


];

export default routes

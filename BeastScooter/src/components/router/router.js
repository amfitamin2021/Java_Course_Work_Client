import UserPage from "../pages/UserPage.vue";
import Profil from "../pages/Profil.vue";
import Register from "../pages/Register.vue"
import {createRouter, createWebHistory} from "vue-router";


const routes = [
    {
        path: '',
        component: UserPage
    },
    {
        path: '/profil',
        component: Profil
    },
    {
        path: '/register',
        component: Register
    }
]

const router = createRouter({
    routes,
    history: createWebHistory()
})

export default router;
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
        path: "/",
        redirect: { name: 'Login' }
    },
    {
        path: "/login",
        name: "Login",
        component: () => import("../views/Login.vue")
    },
    {
        path: "/home",
        name: "Home",
        redirect: { name: 'Patients' },
        component: () => import("../views/Home.vue"),
        children: [
            {
                path: "patients",
                name: "Patients",
                component: () => import("../views/Patients.vue")
            },
            {
                path: "card",
                name: "Card",
                component: () => import("../views/Card.vue")
            },
            {
                path: "history",
                name: "History",
                component: () => import("../views/History.vue")
            }
        ]
    }
]

const router = new VueRouter({
    mode: "hash",
    routes
})

export default router;
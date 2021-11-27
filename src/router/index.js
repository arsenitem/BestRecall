import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
        path: "/",
        name: "Login",
        component: () => import("../views/Login.vue")
    },
    {
        path: "/home",
        name: "Home",
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
    mode: "history",
    routes
})

export default router;
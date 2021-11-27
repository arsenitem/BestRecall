import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
        path: "/",
        redirect: { name: 'Login' }
    },
    {
        path: "/BestRecall/login",
        name: "Login",
        component: () => import("../views/Login.vue")
    },
    {
        path: "/BestRecall/home",
        name: "Home",
        component: () => import("../views/Home.vue"),
        children: [
            {
                path: "/BestRecall/patients",
                name: "Patients",
                component: () => import("../views/Patients.vue")
            },
            {
                path: "/BestRecall/card",
                name: "Card",
                component: () => import("../views/Card.vue")
            },
            {
                path: "/BestRecall/history",
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
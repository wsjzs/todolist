import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        component: Home,
        redirect: '/todos',
        children: [{
                path: '/todos',
                component: () =>
                    import ('@v/Todos')
            },
            {
                path: '/todos/done',
                component: () =>
                    import ('@v/DoneTodos')
            },
            {
                path: '/todos/unfinished',
                component: () =>
                    import ('@v/NotDoneTodos')
            }
        ]
    },
    {
        path: '/search',
        component: () =>
            import ('@v/Search')
    }
]

const router = new VueRouter({
    routes
})

export default router
import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
    history: createWebHashHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: () => import('./views/home-view.vue')
        }, {
            path: '/',
            name: 'articles',
            component: () => import('./views/articles-view.vue')
        }, {
            path: '/',
            name: 'projects',
            component: () => import('./views/projects-view.vue')
        }, {
            path: '/',
            name: 'resources',
            component: () => import('./views/resources-view.vue')
        },
    ]
})

export default router

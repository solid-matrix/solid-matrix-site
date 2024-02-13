import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
    history: createWebHashHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: () => import('./views/home-view.vue')
        }, {
            path: '/articles',
            name: 'articles',
            component: () => import('./views/articles-view.vue')
        }, {
            path: '/projects',
            name: 'projects',
            component: () => import('./views/projects-view.vue')
        }, {
            path: '/resources',
            name: 'resources',
            component: () => import('./views/resources-view.vue')
        }, {
            path: '/article/:name',
            name: 'article',
            component: () => import('./views/article-view.vue')
        }
    ]
})

export default router

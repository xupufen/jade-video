import {createRouter, createWebHistory} from 'vue-router'
import video from '../view/video/index.vue'

const routes = [
    {
        path: '/',
        component: ()=> import('@/components/layout/index.vue')
    }
]

export const index = createRouter({
    history: createWebHistory(),
    routes,
})
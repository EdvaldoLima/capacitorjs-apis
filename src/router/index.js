import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import Geolocation from '@/views/geolocation/Geolocation.vue'

const routes = [
    { path: '/', component: Home },
    { path: '/geolocation', component: Geolocation }
]


const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
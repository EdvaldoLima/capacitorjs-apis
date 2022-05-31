import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import Geolocation from '@/views/geolocation/Geolocation.vue'
import Camera from '@/views/camera/Camera.vue'

const routes = [
    { path: '/', component: Home },
    { path: '/geolocation', component: Geolocation },
    { path: '/camera', component: Camera }
]


const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
import { App } from "vue";
import { createRouter, createWebHistory } from 'vue-router/auto'
import { routes } from 'vue-router/auto-routes'

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default function usePlugins(app: App){
  app.use(router)
}
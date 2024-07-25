import { createApp } from 'vue'
import './assets/scss/main.scss'
import App from './App.vue'
import usePlugins from './plugins'

const app = createApp(App)

usePlugins(app)

app.mount('#app')

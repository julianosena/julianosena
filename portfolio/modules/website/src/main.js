import { ViteSSG } from 'vite-ssg/single-page'
import App from './App.vue'
import './styles/portfolio.css'

export const createApp = ViteSSG(App)

import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// importacion de i18n para traducir
import { createI18n } from 'vue-i18n'
import es from '/locales/es.json'
import en from '/locales/en.json'

// Firebase
import { firebaseApp } from '@/config/firebaseConfig'
import { VueFire } from 'vuefire'

// Marquee
import Vue3Marquee from 'vue3-marquee'



const i18n = createI18n({
    legacy: false,
    locale: 'es',
    messages: {
        es,
        en,
    }
})

const app = createApp(App)


app.use(router)
app.use(i18n)

app.use(VueFire, {
    firebaseApp
})

app.use(Vue3Marquee)
// createApp(App).use(Vue3Marquee).mount('#app')
app.mount('#app')

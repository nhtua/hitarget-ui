require('@/assets/main.scss');
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueFinalModal from 'vue-final-modal'

(async ()=>{
  await store.dispatch('Config/fetchConfig')
  createApp(App)
    .use(store)
    .use(router)
    .use(VueFinalModal())
    .mount('#app')
})()

require('@/assets/main.scss');
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'


(async ()=>{
  await store.dispatch('Config/fetchConfig')
  createApp(App).use(store).use(router).mount('#app')
})()

import { createApp } from 'vue'
// import VueRouter from 'vue-router'
// import Vue from 'vue'
import App from './App.vue'
import './index.css'
import { router } from './router/index.js'


const app = createApp(App)
// Vue.config.productionTip = false

app.use(router);
app.mount('#app');

// new Vue({
//   router,
//   render: h => h(App)
// }).$mount('#app')
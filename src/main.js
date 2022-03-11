import  Vue  from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router'
import store from './store/store'
import axios from './plugins/axios'

Vue.config.productionTip = false;

new Vue({
    axios,
    vuetify,
    store,
    router,
    render: h => h(App)
}).$mount('#app');
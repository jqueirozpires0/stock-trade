import Vue from 'vue';
import axios from 'axios';

Vue.use({
    install(Vue){
        Vue.prototype.$http = axios.create({
            baseURL: 'https://stock-trade-23e6e-default-rtdb.firebaseio.com/'
        })
    }
})


export default{
    
}
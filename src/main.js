import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import {rutas} from './rutas.js'
import VueResource from 'vue-resource'
import firebase from 'firebase'
import VeeValidate from 'vee-validate'
import VueLocalStorage from 'vue-localstorage'
import VueGoodWizard from 'vue-good-wizard';

import VueCountdown from '@xkeshi/vue-countdown';
Vue.component(VueCountdown.name, VueCountdown);

Vue.use(VueGoodWizard);
export const EventBus = new Vue();
var VueEventBus = require('vue-event-bus')

Vue.use(VueLocalStorage);
Vue.use(VeeValidate);

Vue.use(VueEventBus)

Vue.use(VueRouter);
Vue.use(VueResource);


var config = {
    apiKey: "AIzaSyCxJZvYQkQYgMf9GRzJCXtq3RSMX_qjlLI",
    authDomain: "sd-rusia.firebaseapp.com",
    databaseURL: "https://sd-rusia.firebaseio.com",
    projectId: "sd-rusia",
    storageBucket: "sd-rusia.appspot.com",
    messagingSenderId: "828871986717"
  };
firebase.initializeApp(config);


const enrutador = new VueRouter({
    routes:rutas,
    
}
)

new Vue({
  el: '#app',
    router:enrutador,
     
  render: h => h(App)
})


enrutador.beforeEach((to, from, next) => {
  let currentUser = firebase.auth().currentUser;
  let requiresAuth = to.matched.some(record => record.meta.requiresAuth);
    
  if (requiresAuth && !currentUser) next('/*')
  
  else next()
})

export default enrutador





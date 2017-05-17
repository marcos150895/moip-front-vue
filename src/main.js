import Vue from 'vue';
import App from './App';
import VueRouter from 'vue-router';
import { routes } from './routes';

Vue.use(VueRouter);

Vue.config.productionTip = false;

const router = new VueRouter({
    routes: routes,
    mode: 'history'
});


new Vue({
    el: '#app',
    router: router,
    template: '<App/>',
    components: { App }
});
import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../../components/Home';
import StoreView from './components/StoreView';

Vue.use(VueRouter);
window.subdomain = location.host.match(/^(http?:\/\/)?([^.])*/)[0];

export default new VueRouter({
    routes: [{
        path: '/',
        component: location.host.startsWith(`${window.subdomain}.`) ? StoreView : Home,
    }, {
        path: '/productss',
        component: Home,
    }, ],
    mode: 'history',
});

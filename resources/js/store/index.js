import Vue from 'vue';
import Vuex from 'vuex'
import products from './modules/products'
import stores from './modules/stores'

import Api from '../api/stores'


Vue.use(Vuex)
const subHost = location.host.match(/^(http?:\/\/)?([^.])*/)[0]
export default new Vuex.Store({
    state: {
        themez: async () => {
            if (location.host.startsWith(`${subHost}.`)) {
                const res = await Api.getSingleStore(subHost)
                return res.data.theme.name;
            }
        },
        subdomain: location.host.startsWith(`${subHost}.`) ?
            subHost : false,
    },

    // state: {
    //     store:{}
    // },
    // getters: {
    //     store: state => state.store
    // },
    // actions: {
    //     async getStore({commit}){
    //         const res = await api.getSingleStore();
    //         commit('store',res.data)
    //     }
    // },
    // mutations: {
    //     store:(state,store)=>(state.store = store)
    // },
    modules: {
        products,
        stores,
    }
})

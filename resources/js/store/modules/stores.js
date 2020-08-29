import api from '../../api/stores'
const storeModules = {
    state: {
        stores: [],
        store:{}
    },
    getters: {
        allStores: state => state.stores,
        // singleStore: state => state.store
    },
    actions: {
        async getStores({commit}){
            const res = await api.getAllStores();
            commit('setStores',res.data)
        },
        // async getStore({commit},store){
        //     const res = await api.getAllStores(store);
        //     commit('setStores',res.data)
        // }
    },
    mutations: {
        setStores:(state,stores)=>(state.stores = stores)
    },
}

export default storeModules;

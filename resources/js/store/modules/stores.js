import api from '../../api/stores'
const storeModules = {
    state: {
        stores: [],
        store:{}
    },
    getters: {
        allStores: state => state.stores,
        singleStore: state => state.store
    },
    actions: {
        async getStores({commit}){
            const res = await api.getAllStores();
            commit('setStores',res.data)
        },
        async getStore({commit}){
            const res = await api.getSingleStore();
            commit('setStore',res.data)
        }
    },
    mutations: {
        setStores:(state,stores)=>(state.stores = stores),
        setStore:(state,store)=>(state.store = store)
    },
}

export default storeModules;

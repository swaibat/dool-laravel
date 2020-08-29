const BASE_URL = 'http://localhost:8000/api/v1'
import $ from 'jquery';

const Api = {
    getAllStores() {
        return $.get(`${BASE_URL}/stores`, res => res.data);
    },
    getSingleStore(store) {
        console.log('api', store)
        return $.get(`${BASE_URL}/stores/${store}`, res => res.data);
    }
}
export default Api;

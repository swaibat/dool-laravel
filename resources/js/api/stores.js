const BASE_URL = 'http://localhost:8000/api/v1';
const APP_URL = 'http://localhost:8000';
const subHost = location.host.match(/^(http?:\/\/)?([^.])*/)[0]

import $ from 'jquery';

const storeDomain = () => {
    if (location.host.match(`${subHost}.`) && !subHost.match(APP_URL)) {
        return subHost
    }
}
const Api = {
    getAllStores() {
        return $.get(`${BASE_URL}/stores`, res => res.data);
    },
    getSingleStore(store) {
        console.log('api', store)
        return $.get(`${BASE_URL}/stores/${storeDomain()}`, res => res.data);
    }
}


export default Api;

const BASE_URL = 'http://localhost:8000/api/v1'
import $ from 'jquery';
import axios from 'axios';

const Api = {
    getAllProducts() {
        return $.get(`${BASE_URL}/products`, res => res.data);
    },
    getAllProduct(slug) {
        return $.get(`${BASE_URL}/products/${slug}`, res => res.data);
    }
}
export default Api

const BASE_URL = 'http://localhost:8000/api/v1'
import $ from 'jquery';

const Api = {
    getAllProducts() {
        return $.get(`${BASE_URL}/products`, res => res.data);
    }
}
export default Api

import axios from 'axios';

class ApiService {
    constructor() {
        axios.defaults.headers = {
            'X-Requested-With': 'XMLHttpRequest'
        };
    }

    get(url, params = null) {
        return axios({
            method: 'GET',
            url: '/api/' + url,
            data: params
        }).catch(e => { throw e.response.data });
    }

    post(url, params = null) {
        return axios({
            method: 'POST',
            url: '/api/' + url,
            data: params
        }).catch(e => { throw e.response.data });
    }
}

export default new ApiService();

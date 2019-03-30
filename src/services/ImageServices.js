import axios from 'axios';

export default {
    getImages() {
        return axios
            .get('http://localhost:8080/json/sample.json');
    }
}
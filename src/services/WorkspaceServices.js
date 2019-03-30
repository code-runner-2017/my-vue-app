import axios from 'axios';

export default {
    getWorkspaces() {
        return axios
            .get('http://localhost:8080/json/workspaces.json');
    }
}
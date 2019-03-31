import axios from 'axios';

export default {
    getItems(options) {
        // var filters = options.filter;
        // etc.

        var datasetCount = 4;   // dataset-1.json, ...
        var id = Math.floor((Math.random() * datasetCount)+1);

        return axios
            .get('http://localhost:8080/json/dataset-'+ id+'.json');
    }
}
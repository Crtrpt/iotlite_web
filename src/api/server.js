const axios = require('axios');

const endpoint = process.env.VUE_APP_API;
const version = '';
const prefix = '';

console.log(process.env.VUE_APP_USER_NAME);
console.log('endpoint', endpoint);

const RequestPrefixUrl = endpoint + version + prefix;

const server = axios.create({
    baseURL: RequestPrefixUrl, // api的base_url
    timeout: 15000             // request timeout
});

server.interceptors.request.use(
    function (config) {
        config.headers.Authorization = `Bearer ${window.localStorage.token}`;
        return config;
    },
    function (error) {
        return Promise.reject(error);
    }
);

server.interceptors.response.use(
    function (response) {
        return response.data;
    },
    function (error) {
        return Promise.reject(error);
    }
);

export { server };

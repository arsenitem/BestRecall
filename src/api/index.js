import axios from "axios";
const instance = axios.create({
    baseURL: 'https://bestrecall.herokuapp.com/',
});

export default instance;
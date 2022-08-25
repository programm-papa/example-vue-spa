import axios from "axios";
// import store from '@/store';

const instance = axios.create({
    baseURL: 'https*********', //url on api
    withCredentials: false,
    headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
        'Content-Type': 'application/json',
        accept: 'aplication/json',
    }
});

instance.interceptors.response.use(response => {
    return response;
}, err => {
    // const {response: {status, data}} = err;
    // console.log(status);
    // console.log(data);
    // store.state.auth.isRefreshing = true;
    // console.log(store.state.auth.isRefreshing)
    // if(status == 401 && data.notificationType == 'userNotFound'){
    //     console.log('interceptors err => '+err);
    // }
    throw err;
})

export default instance
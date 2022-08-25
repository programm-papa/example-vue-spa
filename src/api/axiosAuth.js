// import store from '@/store'
export default function(instance) {
    return {
        signIn(payload) {
            // store.dispatch('updateLoadApp', true);
            return instance.post('login', payload);
        },
        authologin() {
            return instance.post('authologin');
        },
        // userData() {
        //     return instance.get('user/data');
        // },
        login(payload) {
            return instance.post('login', payload);
        },
    }
}
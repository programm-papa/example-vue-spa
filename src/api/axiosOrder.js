// import store from '@/store'
export default function(instance) {
    return {
        getOrderList() {
            // store.dispatch('updateLoadApp', true);
            return instance.get('orderList');
        },
        createOrderGraveImprovement(payload) {
            // store.dispatch('updateLoadApp', true);
            return instance.post('createOrder/graveImprovement', payload);
        },
    }
}
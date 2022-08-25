export default {
    actions: {
        changeConnectionStatus: (ctx, value) => {
            ctx.commit('newConnectionStatus', value)
        }
    },
    mutations: {
        newConnectionStatus: (state, newValue) => {
            state.onlineStatus = newValue;
        }
    },
    state: {
        onlineStatus: false,
    },
};
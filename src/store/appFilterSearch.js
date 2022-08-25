import { set } from "core-js/core/dict";

export default {
    actions: {
        clearSearchValue: (ctx)=>{
            ctx.commit('changeSearchValue', '');
        },
        updateSearchVakue: (ctx, value) => {
            ctx.commit('changeSearchValue', value);
        },
    },
    mutations: {
        changeSearchValue: (state, value)=>{
            state.searchValue = value;
        },
    },
    state: {
        searchValue: '',
    },
    getters: {
        getSearchValue: (state) => {
            return state.searchValue;
        }
    },
}
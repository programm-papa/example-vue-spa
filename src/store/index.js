import { createStore } from 'vuex';
import auth from '@/store/auth';
import ethernetConnection from '@/store/ethernetConnection';
import notification from '@/store/notification';
import gravelOrder from '@/store/gravelOrder';

export default createStore({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    auth, ethernetConnection, notification, gravelOrder
  },
});

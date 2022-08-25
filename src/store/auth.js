import api from "@/api";
import router from "../router";
import axios from "@/api/instance";
// import notification from "./notification";

/* eslint-disable */
export default {
    actions: {
        login: async (ctx, data) => {
            ctx.commit('changeTryLogin', true);
            if (data.login == "" || data.login == ' ') {
                ctx.commit('changeTryLogin', false);
                ctx.commit('addNotification', {
                    type: 'error',
                    icon: 'warning',
                    content: 'Поле login не может быть пустым.',
                    time: 5000,
                    notificationType: 'userNotFound'
                });
                ctx.commit('setNotificationType', 'userNotFound');
                return 0;
            } else if (data.password == "" || data.password == ' ') {
                ctx.commit('changeTryLogin', false);
                ctx.commit('addNotification', {
                    type: 'error',
                    icon: 'warning',
                    content: 'Поле пароль не может быть пустым.',
                    time: 5000,
                    notificationType: 'incorrectPassword'
                });
                ctx.commit('setNotificationType', 'incorrectPassword');
                return 0;
            } else {

                await api.auth.signIn({
                    login: data.login,
                    password: data.password
                }).then(async (resp) => {
                    ctx.commit('changeLoadApp', true);
                    ctx.commit('changeTryLogin', false);
                    //Записываем данные в store
                    await ctx.commit('setUserData', resp.data);
                    ctx.commit('removeAllNotificaticationList');
                    ctx.commit('addNotification', {
                        'type': 'sucsess',
                        'icon': 'sucsess',
                        'content': resp.data.message,
                        'time': 3000,
                    });
                    await ctx.dispatch('getUserInfo');
                    setTimeout(() => {
                        ctx.commit('changeLoadApp', false);
                    }, 600);
                    //Переход на главную стра
                    router.push('/');
                })
                    .catch((err) => {
                        ctx.commit('changeTryLogin', false);
                        if (err.response.status == 401) {
                            const errData = err.response.data;
                            if (errData.errorType == 'userNotFound') {
                                ctx.commit('setNotificationType', errData.errorType);
                                ctx.commit('addNotification', {
                                    'type': 'error',
                                    'icon': 'warning',
                                    'content': errData.message,
                                    'time': 10000,
                                    'notificationType': 'userNotFound',
                                });

                            }
                            if (errData.errorType == 'invalidPassword') {
                                ctx.commit('addNotification', {
                                    'type': 'error',
                                    'icon': 'warning',
                                    'content': errData.message,
                                    'time': 10000,
                                    'notificationType': 'invalidPassword',
                                });
                                ctx.commit('setNotificationType', errData.errorType);
                            }
                        }
                    })
            }
        },
        authologin: async (ctx, to) => {
            // await setTimeout(() => {
            //     console.log("authologin => " + true);
            //     ctx.state.authStatus = true;
            //     ctx.state.loadingStatus = false;
            //     ctx.state.needAuthologin = false;
            //     router.push(to);
            // }, 900);
            ctx.commit('changeTryLogin', true);
            await api.auth.authologin().then(async (resp) => {
                //Записываем данные в store
                await ctx.commit('setUserData', resp.data);
                ctx.commit('removeAllNotificaticationList');
                ctx.commit('addNotification', {
                    'type': 'sucsess',
                    'icon': 'sucsess',
                    'content': resp.data.message,
                    'time': 3000,
                });
                await ctx.dispatch('getUserInfo');
                ctx.state.needAuthologin = false;
                setTimeout(() => {
                    ctx.commit('changeTryLogin', false);
                    ctx.commit('changeLoadApp', false);
                }, 600);
                setTimeout(() => {
                    ctx.commit('changeTryLogin', false);
                    ctx.commit('changeLoadApp', false);
                }, 600);
                router.push(to);
            }).catch(async (err) => {
                ctx.commit('changeTryLogin', false);
                router.push('/login');
                ctx.state.authStatus = false;
                ctx.state.needAuthologin = false;
                setTimeout(() => {
                    ctx.commit('changeLoadApp', false);
                    ctx.commit('addNotification', {
                        'type': 'error',
                        'icon': 'warning',
                        'content': "Невозможно произвести автоматический вход. Попробуйте снова",
                        'time': 10000,
                    });
                }, 900)
            })
        },
        updateLoadApp(ctx, value) {
            ctx.commit('changeLoadApp', value);
        },
        updateTryLogin(ctx, value) {
            ctx.commit('changeTryLogin', value);
        },

        //Данные пользователя
        getUserInfo: async (ctx) => {
            await api.users.getUserInfo().then(resp => {
                const userInfo = resp.data.userInfo;
                if (userInfo) {
                    ctx.commit('setUserInfo', userInfo);
                }
            }).catch((err) => {
                if (err.response.status == 401) {
                    const errData = err.response.data;
                    if (errData.errorType == 'getUserInfo') {
                        ctx.commit('addNotification', {
                            'type': 'error',
                            'icon': 'warning',
                            'content': errData.message,
                            'time': 5000,
                            'notificationType': 'getUserInfo',
                        });
                        // ctx.commit('setNotificationType', 'userNotFound');
                    }
                }
            })
        },
        updateUserInfo: async (ctx, value) => {
            await api.users.updateUserInfo({
                infoType: value.infoType,
                newValue: value.newValue
            }).then(async () => {
                await ctx.dispatch('getUserInfo');
            }).catch((err) => {
                if (err.response.status == 401) {
                    const errData = err.response.data;
                    if (errData.errorType == 'updateUserInfo') {
                        ctx.commit('addNotification', {
                            'type': 'error',
                            'icon': 'warning',
                            'content': errData.message,
                            'time': 5000,
                            'notificationType': 'updateUserInfo',
                        });
                    }
                }
            })
        },
    },
    mutations: {
        setNotificationType: (state, error) => {
            state.notificationType = error;
        },
        setUserData: async (state, data) => {
            state.token = data.accessToken;
            state.userData.login = data.user.login;
            state.userData.id = data.user.id;
            state.userData.roles = data.user.roles;
            state.authStatus = true;

            axios.defaults.headers.common['Authorization'] = `Bearer ${state.token}`;
            //Записываем токен доступа в localeStorage
            localStorage.setItem('accessToken', data.accessToken);
        },
        setUserInfo: (state, data) => {
            state.userInfo = { ...data };
        },
        changeLoadApp(state, value) {
            state.loadingStatus = !!value; //Двойное отрицание для перевода любого значения в boolean
        },
        changeTryLogin(state, value) {
            state.tryLogin = !!value; //Двойное отрицание для перевода любого значения в boolean
        },

        //Данные пользователя
        changeUserInfo(state, value) {

        }
    },
    state: {
        authStatus: false,
        needAuthologin: false,
        loadingStatus: true,
        tryLogin: false,
        demoMode: false,
        userData: {
            login: '',
            id: '',
            roles: [],
        },
        userInfo: {
            fullName: "",
            contactEmail: "",
            phone: "",
            dateBirth: "",
        },
        token: '',
        notificationType: '',
        isRefreshing: false,
    },
    getters: {},
};
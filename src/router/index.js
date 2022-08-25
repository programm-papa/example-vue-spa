import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import store from '../store';

const routes = [{
        path: '/',
        name: 'Home',
        meta: { auth: true },
        component: Home,
    },
    {
        path: '/profile',
        name: 'Profile',
        meta: { auth: true },
        component: () =>
            import ('../views/Profile.vue'),
    },
    {
        path: '/order_list',
        name: 'Order',
        meta: { auth: true },
        component: () =>
            import ('../views/Orders.vue'),
    },
    {
        path: '/users',
        name: 'Users',
        meta: { auth: true, role: ['ADMIN', 'MANAGER'] },
        component: () =>
            import ('../views/Users.vue'),
    },
    //Страницы технические
    {
        path: '/about',
        name: 'About',
        meta: { auth: true },
        component: () =>
            import ('../views/About.vue'),
    },
    {
        path: '/settings',
        name: 'Settings',
        meta: { auth: true },
        component: () =>
            import ('../views/Settings.vue'),
    },
    //Страницы создания заказов
    {
        path: '/grave_improvement',
        name: 'Grave Improvement',
        meta: { auth: true },
        component: () =>
            import ('../views/GraveImprovement.vue'),
    },
    //Страницы входа приложения
    {
        path: '/login',
        name: 'Login',
        meta: { layout: "empty" },
        component: () =>
            import ('../views/Login.vue'),
    },
    {
        path: '/recovery',
        name: 'Recovery',
        meta: { layout: "empty" },
        component: () =>
            import ('../views/RecoveryPassword.vue'),
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

router.beforeEach((to, from, next) => {
    //Если при переходе по роутам нам необходимо произвести автологин, то мы вызываем функцию автологина из store.
    if (store.state.auth.needAuthologin) {
        store.dispatch('authologin', to.fullPath);
        next();
    } else { //Иначе мы обрабатываем переходы по страницам с редиректом в случае отсутствия авторизации
        const authStatus = store.state.auth.authStatus;
        const requireAuth = to.matched.some(record => record.meta.auth);
        if (!authStatus && requireAuth) {
            next('/login');
        } else {
            if ((to.href == '/login' || to.href == '/recovery') && authStatus) {
                next('/');
            } else {
                next();
            }
        }
    }
});

export default router;
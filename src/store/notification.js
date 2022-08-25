export default {
    actions: {
        createNewNotification(ctx, notificationObj) {
            const newNotification = {
                'type': notificationObj.type,
                'icon': notificationObj.icon,
                'content': notificationObj.content,
                'time': notificationObj.time || "infinitely",
                'notificationType': notificationObj.notificationType,
            }
            ctx.commit('addNotification', newNotification);
        },
        removeOldNotification(ctx, id) {
            ctx.commit('removeNotification', id);
        },
        removeOldNotificationByType(ctx, notificationType) {
            ctx.commit('removeNotificationByNotificationType', notificationType);
        },
        removeAllNotificatication(ctx) {
            ctx.commit('removeAllNotificaticationList');
        }

    },
    mutations: {
        addNotification(state, notificationObj) {
            if (state.notificationList.length > 10) {
                this.commit('removeNotification', state.notificationList[0].id);
            }
            state.notificationList.forEach((element, index) => {
                    if (element.content == notificationObj.content) {
                        this.commit('instantRemoveNotification', state.notificationList[index].id);
                    }
                })
                //Даем id для уведомления
            notificationObj.id = Date.now() + Math.random();
            if (notificationObj.time !== 'infinitely') {
                const timer = setTimeout(() => {
                    this.commit('removeNotification', notificationObj.id);
                }, notificationObj.time)
                notificationObj.timer = timer;
            }
            state.notificationList.push(notificationObj)
        },
        removeNotificationByNotificationType(state, notificationType) {
            const notificationTypeFilteredArr = state.notificationList.map((el) => el.notificationType); //поиск id елемента по его типу
            notificationTypeFilteredArr.forEach((element, index) => {
                if (element == notificationType) {
                    this.commit('removeNotification', state.notificationList[index].id);
                }
            })

        },
        removeNotification(state, id) {
            const index = state.notificationList.map((el) => el.id).indexOf(id); //поиск по id
            if (state.notificationList[index].timer) {
                clearTimeout(state.notificationList[index].timer);
            }
            state.notificationList[index]['addedClass'] = 'remove';
            setTimeout(() => {
                state.notificationList.splice(state.notificationList.map((el) => el.id).indexOf(id), 1);
            }, 500);
        },
        instantRemoveNotification(state, id) {
            const index = state.notificationList.map((el) => el.id).indexOf(id); //поиск по id
            if (state.notificationList[index].timer) {
                clearTimeout(state.notificationList[index].timer);
            }
            state.notificationList.splice(state.notificationList.map((el) => el.id).indexOf(id), 1);
        },
        removeAllNotificaticationList(state) {
            state.notificationList.forEach((element) => {
                if (element.timer) {
                    clearTimeout(element.timer);
                }
            })

            state.notificationList = [];
        }
    },
    state: {
        notificationList: [],
    },
}
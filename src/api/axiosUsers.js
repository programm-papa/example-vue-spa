// import store from '@/store'
export default function(instance) {
    return {

        //Информация о пользователе
        getUserInfo(payload) {
            return instance.get('userInfo', payload);
        },
        updateUserInfo(payload) {
            return instance.post('updateUserInfo', payload);
        },
        createNewUser(payload) {
            return instance.post('createUser', payload);
        },
        getUsersList(payload) {
            return instance.get('users', payload);
        },
        deleteUesrList(payload) {
            return instance.post('deleteUser', payload);
        }
    }
}
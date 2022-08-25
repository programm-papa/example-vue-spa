import instance from "./instance";
import axiosAuth from "./axiosAuth";
import axiosUsers from "./axiosUsers";
import axiosOrder from "./axiosOrder";

export default {
    auth: axiosAuth(instance),
    users: axiosUsers(instance),
    order: axiosOrder(instance)
}
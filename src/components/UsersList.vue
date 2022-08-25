<template>
  <div class="user-list">
    <div class="top">
      <div class="title">Список пользователей</div>
      <div class="filter" ref="filter_item">
        <div class="filtering-method" v-if="false">
          <div class="drop-down-top" @click="filteringMethodOpen = !filteringMethodOpen">
            <div class="icon">
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.166 2.49967H16.4993C16.7204 2.49967 16.9323 2.58747 17.0886 2.74375C17.2449 2.90003 17.3327 3.11199 17.3327 3.33301V16.6663C17.3327 16.8874 17.2449 17.0993 17.0886 17.2556C16.9323 17.4119 16.7204 17.4997 16.4993 17.4997H1.49935C1.27834 17.4997 1.06637 17.4119 0.910093 17.2556C0.753813 17.0993 0.666016 16.8874 0.666016 16.6663V3.33301C0.666016 3.11199 0.753813 2.90003 0.910093 2.74375C1.06637 2.58747 1.27834 2.49967 1.49935 2.49967H4.83268V0.833008H6.49935V2.49967H11.4993V0.833008H13.166V2.49967ZM15.666 9.16634H2.33268V15.833H15.666V9.16634ZM11.4993 4.16634H6.49935V5.83301H4.83268V4.16634H2.33268V7.49967H15.666V4.16634H13.166V5.83301H11.4993V4.16634ZM3.99935 10.833H5.66602V12.4997H3.99935V10.833ZM8.16602 10.833H9.83268V12.4997H8.16602V10.833ZM12.3327 10.833H13.9993V12.4997H12.3327V10.833Z"
                  fill="#69645E"
                />
              </svg>
            </div>
            {{ filteringMethodSelect }}
            <div class="corner" :class="filteringMethodOpen ? 'open' : 'close'">
              <svg
                width="12"
                height="7"
                viewBox="0 0 12 7"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M1 0.5L6 5.5L11 0.5" stroke="#69645E" />
              </svg>
            </div>
          </div>
          <div class="drop-down-content" v-if="filteringMethodOpen">
            <div
              class="filtering-method-list__item"
              v-for="(item, index) in filteringMethodList"
              :key="index"
              @click="selectFilteringMethod(index), (filteringMethodOpen = false)"
            >
              {{ item }}
            </div>
          </div>
        </div>
        <div class="filtering-order" @click="filteringOrder = !filteringOrder">
          <div class="icon" :class="filteringOrder ? 'open' : 'close'">
            <svg
              width="18"
              height="16"
              viewBox="0 0 18 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.95747 4.625L7.77322 5.80333L5.64927 3.69L5.64927 14.6667H3.97422L3.97422 3.69L1.85111 5.80333L0.666016 4.625L4.81174 0.5L8.95747 4.625ZM17.3327 11.375L13.187 15.5L9.04123 11.375L10.2255 10.1967L12.3503 12.31L12.3494 1.33333L14.0245 1.33333L14.0245 12.31L16.1484 10.1967L17.3327 11.375V11.375Z"
                fill="#69645E"
              />
            </svg>
          </div>
          {{ filteringOrderType }}
        </div>
        <div class="filtering-roles">
          <div class="drop-down-top" @click="filteringRolesOpen = !filteringRolesOpen">
            <div class="icon">
              <svg
                width="19"
                height="19"
                viewBox="0 0 19 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.8327 5.83301L18.9994 5.833L18.9994 7.49967L14.8327 7.49967L14.8327 5.83301ZM13.166 9.99967L18.9994 9.99967L18.9994 11.6663L13.166 11.6663L13.166 9.99967ZM15.666 14.1663L18.9994 14.1663L18.9994 15.833L15.666 15.833L15.666 14.1663ZM0.666019 18.333C0.666018 16.5649 1.3684 14.8692 2.61864 13.619C3.86888 12.3687 5.56457 11.6663 7.33268 11.6663C9.10079 11.6663 10.7965 12.3687 12.0467 13.619C13.297 14.8692 13.9994 16.5649 13.9994 18.333L12.3327 18.333C12.3327 17.0069 11.8059 15.7352 10.8682 14.7975C9.93054 13.8598 8.65877 13.333 7.33268 13.333C6.0066 13.333 4.73483 13.8598 3.79715 14.7975C2.85947 15.7352 2.33269 17.0069 2.33269 18.333L0.666019 18.333ZM7.33268 10.833C4.57018 10.833 2.33268 8.59551 2.33268 5.83301C2.33268 3.07051 4.57018 0.833007 7.33268 0.833007C10.0952 0.833006 12.3327 3.07051 12.3327 5.83301C12.3327 8.59551 10.0952 10.833 7.33268 10.833ZM7.33268 9.16634C9.17435 9.16634 10.666 7.67467 10.666 5.83301C10.666 3.99134 9.17435 2.49967 7.33268 2.49967C5.49102 2.49967 3.99935 3.99134 3.99935 5.83301C3.99935 7.67467 5.49102 9.16634 7.33268 9.16634Z"
                  fill="#69645E"
                />
              </svg>
            </div>
            {{ filteringRoles }}
            <div class="corner" :class="filteringMethodOpen ? 'open' : 'close'">
              <svg
                width="12"
                height="7"
                viewBox="0 0 12 7"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M1 0.5L6 5.5L11 0.5" stroke="#69645E" />
              </svg>
            </div>
          </div>
          <div class="drop-down-content" v-if="filteringRolesOpen">
            <div class="filtering-roles-list__item">
              <div class="checkbox">
                <input type="checkbox" name="role_0" id="role_0" v-model="selectAllRoles" />
                <label for="role_0" class="custom-checkbox">
                  <svg
                    width="12"
                    height="10"
                    viewBox="0 0 12 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M1 4.5L4.33333 8L11 1" stroke="#C2A561" stroke-width="2" />
                  </svg>
                </label>
              </div>
              <div class="text">Все роли</div>
            </div>
            <div
              class="filtering-roles-list__item"
              v-for="(item, index) in filteringRolesList"
              :key="index"
            >
              <div class="checkbox">
                <input
                  checked
                  type="checkbox"
                  :name="'role_list' + index"
                  :id="'role_list' + index"
                  v-model="filteringRolesList[index].checked"
                />
                <label :for="'role_list' + index" class="custom-checkbox">
                  <svg
                    width="12"
                    height="10"
                    viewBox="0 0 12 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M1 4.5L4.33333 8L11 1" stroke="#C2A561" stroke-width="2" />
                  </svg>
                </label>
              </div>
              <div class="text">{{ item.name }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="list">
      <template v-for="(user, index) in userList" :key="index">
        <div class="row" v-if="haveRole(user.roles)">
          <div class="index-number">№{{ index + 1 }}</div>
          <div class="name">{{ user.user_info.fullName }}</div>
          <div class="login">{{ user.username }}</div>
          <div class="contact-email">{{ user.user_info.contactEmail }}</div>
          <div class="role" v-html="rolesStr(user.roles)"></div>
          <div class="row__menu" @click="openRowMenu(index)">
            <div class="dot"></div>
            <div class="dot"></div>
            <div class="dot"></div>
            <div class="menu-wrapper" v-if="user.menuOpen">
              <div class="menu">
                <div class="menu__row black">Изменить права</div>
                <div class="menu__row red" @click="deleteUser(user._id)">Удалить пользователя</div>
              </div>
            </div>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>
<script>
import api from '@/api';
export default {
  data() {
    return {
      //Способ фильтрации
      filteringMethodOpen: false,
      filteringMethodSelectIndex: '',
      filteringMethodSelect: '',
      filteringMethodList: ['по ФИО', 'по логину', 'по Email', 'по дате создания'],
      //Порядок фильтрации
      filteringOrder: false,
      //Филтр по ролям
      filteringRolesOpen: false,
      selectAllRoles: false,
      filteringRolesList: [
        { name: 'Администратор', checked: false, type: 'ADMIN' },
        { name: 'Менеджер', checked: false, type: 'MANAGER' },
        { name: 'Пользователь', checked: true, type: 'USER' },
      ],
      //Список пользователей
      userList: [],
    };
  },
  methods: {
    selectFilteringMethod(index) {
      this.filteringMethodSelect = this.filteringMethodList[index];
      this.filteringMethodSelectIndex = index;
    },
    // selectFilteringRoles(index) {

    // },
    closeFilterPopup(event) {
      let el = this.$refs.filter_item;
      let target = event.target;
      if (el !== target && !el.contains(target)) {
        this.filteringMethodOpen = false;
        this.filteringRolesOpen = false;
      }
    },

    loadUserList() {
      api.users
        .getUsersList({})
        .then((resp) => {
          // console.log(resp.data.users);
          this.userList = resp.data.users;
          for (let item of this.userList) {
            item.menuOpen = false;
          }
        })
        .catch((err) => {
          if (err.response.status == 401) {
            this.$store.dispatch('createNewNotification', {
              type: 'error',
              icon: 'warning',
              content: err.response.data.message,
              time: 5000,
            });
          }
        });
    },
    rolesStr(rolesArr) {
      let str = '';
      if (rolesArr.includes('USER')) {
        str += '<p>Пользователь</p>';
      }
      if (rolesArr.includes('MANAGER')) {
        str += '<p>Менеджер</p>';
      }
      if (rolesArr.includes('ADMIN')) {
        str += '<p>Администратор</p>';
      }
      return str;
    },
    haveRole(rolesArr) {
      for (let filterRole of this.filteringRolesList) {
        if (filterRole.checked && !rolesArr.includes(filterRole.type)) {
          return false;
        }
      }
      return true;
    },
    openRowMenu(index) {
      for (let itemIndex in this.userList) {
        if (itemIndex != index) {
          this.userList[itemIndex].menuOpen = false;
        }
      }
      this.userList[index].menuOpen = !this.userList[index].menuOpen;
    },
    closeAllRowMenu(e) {
      let target = e.target?.classList;
      if (!target.contains('row__menu') && !target.contains('dot')) {
        for (let item of this.userList) {
          item.menuOpen = false;
        }
      }
    },
    deleteUser(userID) {
      if (this.$store.state.auth.userData.id == userID) {
        this.$store.dispatch('createNewNotification', {
          type: 'error',
          icon: 'warning',
          content: 'Нельзя удалить свой профиль.',
          time: 5000,
        });
        return;
      }
      api.users
        .deleteUesrList({
          userID: userID,
        })
        .then(() => {
          this.loadUserList();
        })
        .catch((err) => {
          if (err.response.status == 401) {
            this.$store.dispatch('createNewNotification', {
              type: 'error',
              icon: 'warning',
              content: err.response.data.message,
              time: 5000,
            });
          }
        });
    },
  },
  computed: {
    filteringOrderType() {
      return this.filteringOrder ? 'по возрастанию' : 'по убыванию';
    },
    filteringRoles() {
      let str = '';
      for (let key in this.filteringRolesList) {
        if (this.filteringRolesList[key].checked) {
          if (str == '') {
            str += this.filteringRolesList[key].name;
          } else {
            str += ', ' + this.filteringRolesList[key].name;
          }
        }
      }
      if (str == '') {
        str = 'Права пользователя';
      }
      return str;
    },
  },
  watch: {
    selectAllRoles: {
      handler: function () {
        if (this.selectAllRoles) {
          for (let key in this.filteringRolesList) {
            this.filteringRolesList[key].checked = true;
          }
        } else {
          for (let key in this.filteringRolesList) {
            this.filteringRolesList[key].checked = false;
          }
        }
      },
      deep: true,
    },
    filteringRolesList: {
      handler: function () {},
      deep: true,
    },
    filteringOrder: {
      handler: function () {
        this.userList.reverse();
      },
      deep: true,
    },
  },
  mounted() {
    if (this.filteringMethodSelect == '') {
      this.selectFilteringMethod(3);
    }
    document.addEventListener('click', this.closeFilterPopup);
    document.addEventListener('click', this.closeAllRowMenu);
    this.loadUserList();
  },
  unmounted() {
    document.removeEventListener('click', this.closeFilterPopup);
    document.removeEventListener('click', this.closeAllRowMenu);
  },
};
</script>
<style scoped lang="scss">
.top {
  display: flex;
  align-items: flex-end;
  gap: 30px;
  margin-top: 60px;
  margin-bottom: 30px;
  .title {
    font-style: normal;
    font-weight: 500;
    font-size: 32px;
    line-height: 32px;
    color: #69645e;
  }
  .filter {
    display: flex;
    align-items: center;
    gap: 40px;
    .filtering-method {
      position: relative;
      .drop-down-top {
        display: flex;
        align-items: center;
        gap: 10px;
        width: 190px;
        //стили текста
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 135%;
        color: #69645e;
        cursor: pointer;
        .icon {
          width: 20px;
          height: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .corner {
          transition: transform 0.2s;
          &.open {
            transform: rotate(180deg);
          }
        }
      }
      .drop-down-content {
        position: absolute;
        width: 200px;
        height: 164px;
        top: 36px;
        left: 0px;
        background: #f9f9f9;
        box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.06);
        padding: 0px 20px 0px;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        .filtering-method-list__item {
          font-style: normal;
          font-weight: 400;
          font-size: 14px;
          line-height: 16px;
          color: #69645e;
          &:hover {
            color: #c2a561;
            font-weight: 400;
            cursor: pointer;
          }
        }
      }
    }
    .filtering-order {
      display: flex;
      align-items: center;
      gap: 10px;
      width: 160px;
      //стили текста
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 135%;
      color: #69645e;
      cursor: pointer;
      .icon {
        width: 20px;
        height: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
        &.open {
          transform: scale(1, -1);
        }
      }
    }
    .filtering-roles {
      position: relative;
      .drop-down-top {
        display: flex;
        align-items: center;
        gap: 10px;
        cursor: pointer;
      }
      .drop-down-content {
        position: absolute;
        z-index: 2;
        width: 200px;
        height: 164px;
        top: 36px;
        left: 0px;
        background: #f9f9f9;
        box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.06);
        padding: 0px 20px 0px;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        .filtering-roles-list__item {
          display: flex;
          align-items: center;
          gap: 10px;
          //Стили текста
          .text {
            font-style: normal;
            font-weight: 400;
            font-size: 14px;
            line-height: 14px;
            color: #69645e;
          }
          &:first-of-type {
            .text {
              color: #c2a561;
            }
          }
          .checkbox {
            width: 20px;
            height: 20px;
            display: flex;
            align-items: center;
            justify-content: center;
            input {
              position: absolute;
              visibility: hidden;
            }
            label {
              position: relative;
              z-index: 1;
              display: block;
            }
            .custom-checkbox {
              cursor: pointer;
              width: 18px;
              height: 18px;
              display: flex;
              align-items: center;
              justify-content: center;
              border: 2px solid #c2a561;
              border-radius: 3px;
              svg {
                visibility: hidden;
              }
            }
            input:checked ~ .custom-checkbox {
              svg {
                visibility: visible;
              }
            }
          }
        }
      }
    }
  }
}
.list {
  .row {
    display: flex;
    align-items: center;
    height: 80px;
    width: 1010px;
    padding: 0px 30px;
    border-bottom: 1px solid #e8e8e8;
    &:hover {
      background: #f9f6f0;
    }
    .index-number {
      width: 50px;
      margin-right: 20px;
      //Стили текста
      font-weight: 400;
      font-size: 18px;
      line-height: 21px;
      color: #69645e;
    }
    .name {
      width: 230px;
      margin-right: 40px;
      flex: 1;
      //Стили текста
      font-style: normal;
      font-weight: 400;
      font-size: 18px;
      line-height: 23px;
      color: #69645e;
    }
    .login {
      width: 120px;
      margin-right: 40px;
      //Стили текста
      font-weight: 400;
      font-size: 18px;
      line-height: 21px;
      color: #c2a561;
    }
    .contact-email {
      width: 220px;
      margin-right: 20px;
      //Стили текста
      font-style: normal;
      font-weight: 400;
      font-size: 18px;
      line-height: 23px;
      color: #69645e;
    }
    .role {
      text-align: center;
      width: 150px;
      margin-left: auto;
      //Стили текста
      font-style: normal;
      font-weight: 400;
      font-size: 18px;
      line-height: 23px;
      color: #69645e;
    }
    .row__menu {
      width: 32px;
      height: 32px;
      border-radius: 100%;
      background-color: #69645e;
      margin-left: 60px;
      display: flex;
      align-items: center;
      justify-content: space-around;
      cursor: pointer;
      padding: 4px;
      position: relative;
      .dot {
        width: 4px;
        height: 4px;
        border-radius: 100%;
        background-color: #ffffff;
      }
      .menu-wrapper {
        position: absolute;
        padding: 10px 30px 10px;
        height: fit-content;
        bottom: 0;
        right: -30px;
        transform: translatey(100%);
        z-index: 1;
        .menu {
          width: 190px;
          padding: 20px 0px;
          background: #f9f9f9;
          box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.06);
          .menu__row {
            padding: 10px 20px;
            width: 100%;
            &:hover {
              background: #f9f6f0;
            }
            //Стили текста
            font-style: normal;
            font-weight: 400;
            font-size: 14px;
            line-height: 16px;
            &.black {
              color: #69645e;
            }
            &.red {
              color: #db4d4d;
            }
          }
        }
      }
      &:hover {
        .menu-wrapper {
          display: block;
        }
      }
    }
  }
}
@media screen and (max-width: 1366px) {
  .top {
    flex-direction: column;
    align-items: flex-start;
  }
  .list {
    .row {
      height: fit-content;
      width: 100%;
      padding: 20px 20px;
      align-items: flex-start;
      display: grid;
      grid-template-columns: 60px 220px auto;
      gap: 10px 0px;
      position: relative;
      .index-number {
        grid-column: 1;
      }
      .name {
        position: relative;
        width: 350px;
        grid-column: 2;
        grid-row: 1;
      }
      .login {
        grid-column: 2;
      }
      .contact-email {
        grid-column: 2;
      }
      .role {
        margin-left: 0;
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        gap: 20px;
        grid-column: 3;
        grid-row: 3;
      }
      .row__menu {
        position: absolute;
        right: 20px;
        top: 20px;
      }
    }
  }
}
@media screen and (max-width: 500px) {
   .list {
    .row {
      height: fit-content;
      width: 100%;
      padding: 20px 0px;
      align-items: flex-start;
      display: grid;
      grid-template-columns: 40px 140px;
      gap: 15px 0px;
      position: relative;
      .index-number {
        grid-column: 1;
      }
      .name {
        position: relative;
        width: 100%;
        grid-column: 2;
        grid-row: 1;
      }
      .login {
        grid-column: 2;
      }
      .contact-email {
        grid-column: 2;
      }
      .role {
        margin-left: 0;
        width: calc(100vw - 100px);
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
        grid-column: 2;
        grid-row: 4;
      }
      .row__menu {
        position: absolute;
        right: 20px;
        top: 20px;
      }
    }
  }
}
</style>

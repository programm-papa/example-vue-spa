<template>
  <div class="user-profile">
    <div class="left">
      <div class="avatar-block">
        <div class="avatar">
          <img src="@/assets/image/avatar.png" alt="" />
        </div>
        <div class="full-name">
          {{ fullName.value }}
        </div>
        <div class="roles">{{ userRolesStr }}</div>
      </div>
    </div>
    <div class="right">
      <div class="user-info">
        <div class="row">
          <div class="value-name">Полное имя</div>
          <div class="value">{{ fullName.value }}</div>
        </div>
        <div class="row">
          <div class="value-name">Email для связи</div>
          <div class="value">{{ userEmail.value }}</div>
        </div>
        <div class="row">
          <div class="value-name">Номер телефона</div>
          <div class="value">{{ userPhone.value }}</div>
        </div>
        <div class="row">
          <div class="value-name">Дата рождения</div>
          <input
            type="text"
            class="value"
            :class="dateBirth.edited ? 'active' : ''"
            placeholder="03.03.1990"
            :disabled="!dateBirth.edited"
            v-model="dateBirth.value"
          />
          <div class="edit" :class="dateBirth.edited ? '' : 'icon'">
            <div class="button" @click="dateBirth.edited = true" v-if="!dateBirth.edited">
              <svg
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.66667 13.3306H2.845L10.6067 5.55634L9.42833 4.37609L1.66667 12.1504V13.3306ZM15 15H0V11.4584L11.1958 0.244385C11.3521 0.0879056 11.564 0 11.785 0C12.006 0 12.2179 0.0879056 12.3742 0.244385L14.7317 2.60572C14.8879 2.76224 14.9757 2.97451 14.9757 3.19584C14.9757 3.41717 14.8879 3.62944 14.7317 3.78597L5.2025 13.3306H15V15ZM10.6067 3.19584L11.785 4.37609L12.9633 3.19584L11.785 2.01559L10.6067 3.19584V3.19584Z"
                  fill="white"
                />
              </svg>
            </div>
            <div class="change-btns" v-if="dateBirth.edited">
              <div class="button confirm" @click="updateUserInfo('dateBirth')">
                <svg
                  width="23"
                  height="16"
                  viewBox="0 0 23 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.83284 12.2359L21.1098 0L22.9997 1.88204L8.83284 16L0.333008 7.52949L2.22156 5.64745L8.83284 12.2359Z"
                    fill="#69645E"
                  />
                </svg>
              </div>
              <div class="button cancel" @click="dateBirth.edited = false">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.66667 6.74104L15.4077 0L17.3333 1.92562L10.5923 8.66667L17.3333 15.4077L15.4077 17.3333L8.66667 10.5923L1.92562 17.3333L0 15.4077L6.74104 8.66667L0 1.92562L1.92562 0L8.66667 6.74104Z"
                    fill="#69645E"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      //Основная информация о пользователе
      fullName: {
        value: '',
      },
      userEmail: {
        value: '',
      },
      userPhone: {
        value: '',
      },
      dateBirth: {
        value: '',
        edited: false,
      },
      //Права пользователя
      userRoles: [],
    };
  },
  computed: {
    userRolesStr() {
      let str = '';
      for (let index in this.userRoles) {
        if (index != 0) {
          str += ' / ';
        }
        switch (this.userRoles[index]) {
          case 'USER':
            str += 'Пользователь';
            break;
          case 'MANAGER':
            str += 'Менеджер';
            break;
          case 'ADMIN':
            str += 'Администратор';
            break;
          default:
            break;
        }
      }
      return str;
    },
  },
  methods: {
    loadUserInfo() {
      const userInfo = this.$store.state.auth.userInfo;
      this.fullName.value = userInfo.fullName;
      this.userEmail.value = userInfo.contactEmail;
      this.userPhone.value = userInfo.phone;
      this.dateBirth.value = userInfo.dateBirth;
    },
    updateUserInfo: async function (type) {
      if (type == 'dateBirth') {
        this.dateBirth.edited = false;
        await this.$store.dispatch('updateUserInfo', {
          infoType: 'dateBirth',
          newValue: this.dateBirth.value,
        });
      }
      this.loadUserInfo();
    },
  },
  mounted() {
    //Основная информация о пользователе
    this.loadUserInfo();
    //Права пользователя
    const userRoles = this.$store.state.auth.userData.roles;
    this.userRoles = userRoles;
  },
};
</script>
<style scoped lang="scss">
.user-profile {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  .left {
    width: 386px;
    .avatar-block {
      width: 386px;
      height: 400px;
      background: #f2f2f2;
      border-radius: 5px;
      display: flex;
      flex-direction: column;
      align-items: center;
      padding-top: 30px;
      .avatar {
        width: 180px;
        height: 180px;
        overflow: hidden;
        border-radius: 100%;
        background: #ffffff;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 20px;
        img {
          height: 100%;
          width: auto;
        }
      }
      .full-name {
        width: 326px;
        font-weight: 500;
        font-size: 20px;
        line-height: 135%;
        text-align: center;
        color: #69645e;
        margin-bottom: 10px;
      }
      .roles {
        font-weight: 400;
        font-size: 16px;
        line-height: 135%;
        text-align: center;
        color: #b0b0b0;
      }
    }
  }
  .right {
    flex: 1;
    .user-info {
      width: 1000px;
      padding: 0px 30px;
      background: #f2f2f2;
      border-radius: 5px;
      .row {
        position: relative;
        display: flex;
        align-items: center;
        height: 80px;
        border-bottom: 1px solid #b0b0b0;
        &:last-of-type {
          border-bottom: none;
        }
        .value-name {
          width: 200px;
          margin-right: 10px;
          font-style: normal;
          font-weight: 600;
          font-size: 18px;
          line-height: 21px;
          color: #69645e;
        }
        .value {
          height: 48px;
          width: 500px;
          display: flex;
          align-items: center;
          padding: 0px 15px;
          background-color: inherit;
          border: 2px solid #f2f2f2;
          outline: none;
          //Стили текста
          font-weight: 400;
          font-size: 18px;
          line-height: 21px;
          color: #69645e;
          &::placeholder {
            opacity: 0.5;
          }
          &.active {
            border: 2px solid #c2a561;
          }
        }
        .edit {
          position: absolute;
          right: 0;
          width: 120px;
          height: 38px;
          margin-left: auto;
          display: flex;
          justify-content: flex-end;
          align-items: center;
          .button {
            cursor: pointer;
            display: flex;
            justify-content: center;
            align-items: center;
            user-select: none;
            &:active {
              box-shadow: 0px 0px 7px -2px rgba(34, 60, 80, 0.2);
              opacity: 0.9;
            }
          }
          &.icon {
            .button {
              width: 32px;
              height: 32px;
              border-radius: 100%;
              background: #69645e;
              &:hover {
                background: #c2a561;
              }
            }
          }
          .change-btns {
            display: flex;
            align-items: center;
            gap: 20px;
            .button {
              width: 32px;
              height: 32px;
              display: flex;
              align-items: center;
              &:hover {
                svg {
                  path {
                    fill: #c2a561;
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
@media screen and (max-width: 1366px) {
  .user-profile {
    .right {
      width: 100%;
      .user-info {
        width: 100%;
      }
    }
  }
}
</style>

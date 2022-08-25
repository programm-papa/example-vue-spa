<template>
  <div class="create-user-block">
    <div class="block__title">
      <div class="text">Создание нового пользователя</div>
    </div>
    <div class="block__content">
      <div class="input-block">
        <div class="title">Email</div>
        <input
          type="text"
          class="input-value"
          @input="clearStatus('emailStatus')"
          :class="emailStatus"
          placeholder="Почта нового пользователя"
          v-model="email"
        />
      </div>
      <div class="input-block">
        <div class="title">Логин</div>
        <input
          type="text"
          class="input-value"
          @input="clearStatus('loginStatus')"
          :class="loginStatus"
          placeholder="Логин нового пользователя"
          v-model="login"
        />
      </div>
      <div class="input-block">
        <div class="title">Пароль</div>
        <p class="description">генерируется автоматически</p>
      </div>
      <div class="input-block">
        <div class="title">Права</div>
        <div class="role-wrap">
          <!-- Чекбокс user -->
          <div class="checkbox disable">
            <input type="checkbox" disabled id="checkbox_user" name="checkbox_user" checked />
            <label class="custom-checkbox" for="checkbox_user">
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
            <label for="checkbox_user" class="title">Пользователь</label>
          </div>
          <!-- Чекбокс manager -->
          <div class="checkbox">
            <input
              type="checkbox"
              id="checkbox_manager"
              name="checkbox_manager"
              v-model="roleManager"
            />
            <label class="custom-checkbox" for="checkbox_manager">
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
            <label for="checkbox_manager" class="title">Менеджер</label>
          </div>
          <!-- Чекбокс admin -->
          <div class="checkbox">
            <input type="checkbox" id="checkbox_admin" name="checkbox_admin" v-model="roleAdmin" />
            <label class="custom-checkbox" for="checkbox_admin">
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
            <label for="checkbox_admin" class="title">Администратор</label>
          </div>
        </div>
      </div>
      <div class="input-block">
        <div class="title center">Данные о пользователе</div>
      </div>
      <div class="input-block">
        <div class="title">ФИО</div>
        <input
          type="text"
          class="input-value"
          @input="clearStatus('fullNameStatus')"
          :class="fullNameStatus"
          placeholder="ФИО нового пользователя"
          v-model="fullName"
        />
      </div>
      <div class="input-block">
        <div class="title">Номер телефона</div>
        <input
          type="text"
          class="input-value"
          @input="clearStatus('phoneStatus')"
          :class="phoneStatus"
          placeholder="Номер телефона пользователя"
          v-model="phone"
        />
      </div>
      <div class="input-block">
        <div class="title">Регион</div>
        <div class="region-wrap">
          <!-- Чекбокс ВН -->
          <div class="checkbox">
            <input type="radio" id="checkbox_vn" name="checkbox_vn" value="VN" v-model="region" />
            <label class="custom-checkbox" for="checkbox_vn">
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
            <label for="checkbox_vn" class="title">В. Новгород</label>
          </div>
          <!-- Чекбокс Псков -->
          <div class="checkbox">
            <input type="radio" id="checkbox_ps" name="checkbox_ps" value="PS" v-model="region" />
            <label class="custom-checkbox" for="checkbox_ps">
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
            <label for="checkbox_ps" class="title">Псков</label>
          </div>
          <!-- Чекбокс Тверь -->
          <div class="checkbox">
            <input type="radio" id="checkbox_tv" name="checkbox_tv" value="TV" v-model="region" />
            <label class="custom-checkbox" for="checkbox_tv">
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
            <label for="checkbox_tv" class="title">Тверь</label>
          </div>
          <!-- Чекбокс Вологда -->
          <div class="checkbox">
            <input type="radio" id="checkbox_vg" name="checkbox_vg" value="VG" v-model="region" />
            <label class="custom-checkbox" for="checkbox_vg">
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
            <label for="checkbox_vg" class="title">Вологда</label>
          </div>
          <!-- Чекбокс Череповец -->
          <div class="checkbox">
            <input type="radio" id="checkbox_hp" name="checkbox_hp" value="HP" v-model="region" />
            <label class="custom-checkbox" for="checkbox_hp">
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
            <label for="checkbox_hp" class="title">Череповец</label>
          </div>
          <!-- Чекбокс СПБ -->
          <div class="checkbox">
            <input
              type="radio"
              id="checkbox_spb"
              name="checkbox_spb"
              value="SPB"
              v-model="region"
            />
            <label class="custom-checkbox" for="checkbox_spb">
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
            <label for="checkbox_spb" class="title">СПб</label>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="submit-create-user">
    <div class="create-user" @click="createNewUser">СОЗДАТЬ ПОЛЬЗОВАТЕЛЯ</div>
  </div>
  <userList :key="updateList" />
</template>
<script>
import api from '@/api';
import userList from '@/components/UsersList.vue';
export default {
  data() {
    return {
      updateList: '',
      email: '',
      login: '',
      fullName: '',
      phone: '',
      region: '',
      emailStatus: '',
      loginStatus: '',
      fullNameStatus: '',
      phoneStatus: '',
      roleManager: false,
      roleAdmin: false,
    };
  },
  methods: {
    createNewUser() {
      if (this.email == '' || this.email == ' ') {
        this.emailStatus = 'error';
        this.$store.dispatch('createNewNotification', {
          type: 'error',
          icon: 'warning',
          content: 'Поле почты не может быть пустым.',
          time: 5000,
          notificationType: 'emailInputError',
        });
        return null;
      }
      if (this.login == '' || this.login == ' ') {
        this.loginStatus = 'error';
        this.$store.dispatch('createNewNotification', {
          type: 'error',
          icon: 'warning',
          content: 'Поле логина не может быть пустым.',
          time: 5000,
          notificationType: 'loginInputError',
        });
        return null;
      }
      if (this.fullName == '' || this.fullName == ' ') {
        this.fullNameStatus = 'error';
        this.$store.dispatch('createNewNotification', {
          type: 'error',
          icon: 'warning',
          content: 'Поле ФИО пользователя не может быть пустым.',
          time: 5000,
          notificationType: 'fullNameInputError',
        });
        return null;
      }
      if (this.phone == '' || this.phone == ' ') {
        this.phoneStatus = 'error';
        this.$store.dispatch('createNewNotification', {
          type: 'error',
          icon: 'warning',
          content: 'Поле номера телефона пользователя не может быть пустым.',
          time: 5000,
          notificationType: 'phoneInputError',
        });
        return null;
      }
      if (this.region == '' || this.region == ' ') {
        this.$store.dispatch('createNewNotification', {
          type: 'error',
          icon: 'warning',
          content: 'Необходимо выбрать регион для пользователя.',
          time: 5000,
          notificationType: 'regionInputError',
        });
        return null;
      }
      let rolesArr = '';
      if (this.roleManager) {
        rolesArr += 'MANAGER';
      }
      if (this.roleAdmin) {
        if (this.roleManager) {
          rolesArr += ',';
        }
        rolesArr += 'ADMIN';
      }
      api.users
        .createNewUser({
          email: this.email,
          login: this.login,
          roles: rolesArr,
          fullName: this.fullName,
          phone: this.phone,
          region: this.region,
        })
        .then((resp) => {
          this.$store.dispatch('createNewNotification', {
            type: 'sucsess',
            icon: 'sucsess',
            content: resp.data.message,
            time: 3000,
            notificationType: 'createUserSucsess',
          });
          this.email = '';
          this.login = '';
          this.roleManager = false;
          this.roleAdmin = false;
          this.updateList = new Date();
        })
        .catch((err) => {
          if (err.response.status == 401) {
            const errData = err.response.data;
            if (errData.errorType == 'createUserError') {
              if (errData.message == 'Пользователь с такой почтой уже существет.') {
                this.emailStatus = 'error';
                this.$store.dispatch('createNewNotification', {
                  type: 'error',
                  icon: 'warning',
                  content: errData.message,
                  time: 3000,
                  notificationType: 'createUserError',
                });
              }
              if (errData.message == 'Пользователь с таким логином уже существет.') {
                this.loginStatus = 'error';
                this.$store.dispatch('createNewNotification', {
                  type: 'error',
                  icon: 'warning',
                  content: errData.message,
                  time: 3000,
                  notificationType: 'createUserError',
                });
              } else {
                this.$store.dispatch('createNewNotification', {
                  type: 'error',
                  icon: 'warning',
                  content: errData.message,
                  time: 5000,
                  notificationType: 'createUserError',
                });
              }
            }
          }
        });
    },
    clearStatus(statusName) {
      if (statusName == 'emailStatus') {
        this.emailStatus = '';
      } else if (statusName == 'loginStatus') {
        this.loginStatus = '';
      } else if (statusName == 'fullNameStatus') {
        this.fullNameStatus = '';
      } else if (statusName == 'phoneStatus') {
        this.phoneStatus = '';
      }
    },
  },
  components: {
    userList,
  },
  mounted() {},
};
</script>
<style scoped lang="scss">
.create-user-block {
  width: 906px;
  height: fit-content;
  background: #f2f2f2;
  border-radius: 5px;
  .block__title {
    width: 100%;
    height: fit-content;
    background: #69645e;
    border-radius: 5px 5px 0px 0px;
    display: flex;
    align-items: center;
    padding: 22px 30px;
    .text {
      font-weight: 500;
      font-size: 22px;
      line-height: 26px;
      color: #ffffff;
    }
  }
  .block__content {
    padding: 0px 30px;
    .input-block {
      width: 100%;
      height: 80px;
      border-bottom: 1px solid #dedede;
      display: flex;
      align-items: center;
      &:last-of-type {
        border-bottom: none;
      }
      .title {
        width: 250px;
        margin-right: 15px;
        //Стиль текста
        font-weight: 600;
        font-size: 18px;
        line-height: 21px;
        color: #69645e;
        &.center {
          width: 100%;
          text-align: center;
          text-transform: uppercase;
          font-size: 19px;
        }
      }
      .input-value {
        width: 387px;
        height: 48px;
        padding: 0px 14px;
        border: 1px solid #69645e;
        border-radius: 3px;
        background: inherit;
        outline: none;
        //Стили текста
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 21px;
        color: #69645e;
        &.error {
          border: 1px solid #db4d4d;
        }
        &:focus {
          border: 1px solid #c2a561;
          color: #69645e;
        }
        &::placeholder {
          color: #bdbdbd;
          opacity: 0.6;
        }
      }
      .description {
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 21px;
        color: #b0b0b0;
      }
      .role-wrap {
        display: flex;
        align-items: center;
        gap: 30px;
        .checkbox {
          display: flex;
          align-items: center;
          position: relative;
          gap: 10px;
          .disable {
            * {
              pointer-events: none;
            }
          }
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
          .title {
            width: fit-content;
            font-style: normal;
            font-weight: 400;
            font-size: 14px;
            line-height: 16px;
            color: #69645e;
            user-select: none;
          }
        }
      }
      .region-wrap {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 15px 30px;
        .checkbox {
          display: flex;
          align-items: center;
          position: relative;
          gap: 10px;
          .disable {
            * {
              pointer-events: none;
            }
          }
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
          .title {
            width: fit-content;
            font-style: normal;
            font-weight: 400;
            font-size: 14px;
            line-height: 16px;
            color: #69645e;
            user-select: none;
          }
        }
      }
    }
  }
}
.submit-create-user {
  width: 906px;
  display: flex;
  justify-content: center;
  padding-top: 20px;
  .create-user {
    width: 282px;
    height: 38px;
    background: #c2a561;
    border-radius: 3px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    //Стили текста
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 16px;
    text-transform: uppercase;
    color: #ffffff;
    &:hover {
      background: #cab072;
    }
    &:active {
      opacity: 0.7;
    }
  }
}
.user-list {
  margin-top: 60px;
}
@media screen and (max-width: 1366px) {
  .create-user-block {
    width: 100%;
    .block__content {
      .input-block {
        .title {
          width: 33%;
        }
      }
    }
  }
  .submit-create-user {
    width: 100%;
  }
}
@media screen and (max-width: 1024px) {
  .create-user-block {
    .block__content {
      .input-block {
        height: fit-content;
        padding: 20px 0px;
        flex-direction: column;
        align-items: flex-start;
        gap: 20px;

        .title {
          width: 100%;
        }
        input {
          max-width: 387px;
          width: 100% !important;
        }
        .role-wrap {
          flex-direction: column;
          align-items: flex-start;
          justify-content: space-around;
        }
        .region-wrap {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
        }
      }
    }
  }
}
</style>

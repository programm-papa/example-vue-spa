<template>
  <div class="entery">
    <div class="logo-img" :style="logoPosition">
      <img src="@/assets/image/logo.svg" alt="" class="logo" />
    </div>
    <p class="entery__title">Вход в приложение</p>
    <form class="entery__form" @submit.prevent="tryLogin()" :class="loginError">
      <div class="login-group input-group">
        <label class="form-label" for="login">Логин</label>
        <input
          class="form-input"
          id="login"
          name="login"
          type="text"
          placeholder="login или e-mail"
          v-model="login"
          @input="removeLoginError"
        />
      </div>
      <div class="password-group input-group">
        <label class="form-label" for="password">Пароль</label>
        <input
          :type="showPassword"
          class="form-input"
          id="password"
          name="password"
          placeholder="password"
          v-model="password"
          @input="removeLoginError"
          @focus.once="createNotification"
        />
        <img
          src="@/assets/image/ui_icons/show-password.svg"
          alt=""
          class="show-password"
          @mouseover="this.showPassword = 'text'"
          @mouseout="this.showPassword = 'password'"
        />
      </div>
      <div class="remember-group input-group">
        <input
          type="checkbox"
          class="form-checkbox"
          id="remember"
          name="remember"
          value="remember"
          v-model="remember"
        />
        <div class="checkbox-label" for="remember">Запомнить меня</div>
      </div>
      <div class="formbtn-group input-group">
        <input
          type="submit"
          class="login-btn"
          id="login-btn"
          name="login-btn"
          value="Начать работу"
          :class="tryLoginLoading ? 'load' : ''"
          :disabled="tryLoginLoading"
        />
        <input
          type="text"
          class="forgot-password-btn"
          id="forgot-password"
          name="forgot-password"
          value="Забыли пароль ?"
          @click="forgotPassword"
        />
      </div>
    </form>
    <NotificationList />
  </div>
</template>
<script>
import NotificationList from '@/components/NotificationList.vue';
export default {
  data() {
    return {
      login: '',
      password: '',
      showPassword: 'password',
      remember: false,
    };
  },
  computed: {
    logoPosition() {
      return `top: -135px`;
    },
    loginError() {
      return this.$store.state.auth.notificationType;
    },
    tryLoginLoading() {
      return this.$store.state.auth.tryLogin;
    },
  },
  components: {
    NotificationList,
  },
  methods: {
    removeLoginError() {
      if (this.loginError != '') {
        this.$store.dispatch('removeOldNotificationByType', this.loginError);
        this.$store.commit('setnotificationType', '');
      }
    },
    forgotPassword() {
      this.$router.push('/recovery');
    },
    tryLogin() {
      const user = {
        login: this.login,
        password: this.password,
      };
      this.$store.dispatch('login', user);
    },
    createNotification() {
      this.$store.dispatch('createNewNotification', {
        type: 'atention',
        icon: 'information',
        content:
          'Если вы не заходите в приложение в течение <span style="color: #C2A561">30 дней</span>, вас вновь попросят ввести данные вашей учётной записи.',
        time: 'infinitely',
      });
    },
    rememberMe() {
      if (this.remember) {
        localStorage.setItem('remember_me', true);
      } else {
        if (localStorage.getItem('remember_me')) {
          localStorage.removeItem('remember_me');
        }
      }
    },
  },
  watch: {
    remember: function () {
      this.rememberMe();
    },
  },
  mounted() {
    const remember = localStorage.getItem('remember_me');
    if(remember) {
      this.remember = remember;
    }
  }
};
</script>
<style scoped lang="scss">
.entery {
  width: 100%;
  height: fit-content;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  .logo-img {
    position: absolute;
  }
  .entery__title {
    font-weight: 500;
    font-size: 24px;
    line-height: 28px;
    margin-bottom: 30px;
    text-align: center;
    color: #69645e;
  }
  .entery__form {
    width: 100%;
    .form-label {
      display: block;
      margin-bottom: 8px;
      //СТили текста
      font-weight: 300;
      font-size: 20px;
      line-height: 23px;
      color: #69645e;
    }
    .form-input {
      width: 100%;
      height: 48px;
      background: #f2f2f2;
      border-radius: 7px;
      border: none;
      outline: none;
      padding: 0px 14px;
      //Стили текста
      font-weight: normal;
      font-size: 18px;
      line-height: 21px;
      color: #69645e;
      &#password {
        padding-right: 34px;
      }
      &:focus {
        background: #ebebeb;
        //Стили текста
        color: #69645e;
      }
      &::placeholder {
        color: #bdbdbd;
        opacity: 0.6;
      }
    }
    .form-checkbox {
      position: relative;
      width: 24px;
      height: 24px;
      border: 2px solid #c2a561;
      border-radius: 4px;
      appearance: none;
      outline: 0;
      cursor: pointer;
      transition: background 175ms cubic-bezier(0.1, 0.1, 0.25, 1);
      &::before {
        position: absolute;
        content: '';
        display: block;
        top: 0px;
        left: 5px;
        width: 8px;
        height: 14px;
        border-style: solid;
        border-color: #69645e;
        border-width: 0 2px 2px 0;
        transform: rotate(45deg);
        opacity: 0;
      }
      &:checked {
        color: #fff;
        border-color: #c2a561;
        background: #fff;
        &::before {
          opacity: 1;
        }
        ~ label::before {
          clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
        }
      }
    }
    .input-group {
      margin-bottom: 30px;
      &.password-group {
        position: relative;
        height: fit-content;
        .show-password {
          position: absolute;
          bottom: 12px;
          right: 10px;
          cursor: pointer;
          opacity: 1;
          &:hover {
            opacity: 0.7;
          }
        }
      }
      &.remember-group {
        display: flex;
        align-items: center;
        gap: 10px;
        .checkbox-label {
          font-weight: normal;
          font-size: 18px;
          line-height: 21px;
          display: flex;
          align-items: center;
          color: #69645e;
        }
      }
      &.formbtn-group {
        margin-bottom: 40px;
        input {
          display: block;
          width: 100%;
          height: 48px;
          border: none;
          outline: none;
          cursor: pointer;
          transition: background 0.4s, color 0.2s;
          &.login-btn {
            background: #c2a561;
            border-radius: 3px;
            margin-bottom: 15px;
            //Стили текста
            font-weight: 500;
            font-size: 18px;
            line-height: 21px;
            text-align: center;
            text-transform: uppercase;
            color: #ffffff;
            &:hover {
              background: #cab072;
            }
            &:active {
              opacity: 0.7;
            }
          }
          &.forgot-password-btn {
            border: 1px solid #9a9a9a;
            border-radius: 3px;
            background: inherit;
            font-size: 18px;
            line-height: 21px;
            text-align: center;
            color: #9a9a9a;
            &:hover {
              background: #9a9a9a;
              color: #f2f2f2;
            }
            &:active {
              opacity: 0.7;
            }
          }
        }
      }
    }

    &.userNotFound {
      .input-group {
        &.login-group {
          .form-input {
            border: 2px solid #db4d4d;
          }
        }
      }
    }
    &.incorrectPassword {
      .input-group {
        &.password-group {
          .form-input {
            border: 2px solid #db4d4d;
          }
        }
      }
    }
  }
  @media screen and (max-width: 767px) {
    .entery__title {
      font-size: 21px;
      line-height: 24px;
      margin-bottom: 20px;
    }
    .entery__form {
      .form-label {
        font-size: 16px;
        line-height: 19px;
      }
      .form-input {
        font-size: 16px;
        line-height: 18px;
      }
      .input-group {
        margin-bottom: 20px;
        &.remember-group {
          .checkbox-label {
            font-size: 16px;
            line-height: 18px;
          }
        }
        &.formbtn-group {
          input {
            &.login-btn {
              font-size: 16px;
              line-height: 18px;
              letter-spacing: 0.8px;
            }
            &.forgot-password-btn {
              font-size: 16px;
              line-height: 18px;
            }
          }
        }
      }
    }
  }
  @media screen and (max-width: 500px) {
    .entery__title {
      font-size: 18px;
      line-height: 21px;
      margin-bottom: 20px;
    }
    .entery__form {
      .form-label {
        font-size: 16px;
        line-height: 19px;
      }
      .form-input {
        font-size: 14px;
        line-height: 16px;
      }
      .input-group {
        margin-bottom: 20px;
        &.remember-group {
          .checkbox-label {
            font-size: 14px;
            line-height: 16px;
          }
        }
        &.formbtn-group {
          input {
            &.login-btn {
              font-size: 14px;
              line-height: 16px;
              letter-spacing: 0.8px;
            }
            &.forgot-password-btn {
              font-size: 14px;
              line-height: 16px;
            }
          }
        }
      }
    }
  }
}
</style>

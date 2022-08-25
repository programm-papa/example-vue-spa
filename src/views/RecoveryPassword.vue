<template>
  <div class="recovery">
    <div class="logo-img" :style="logoPosition">
      <img src="@/assets/image/logo.svg" alt="" class="logo" />
    </div>
    <p class="recovery__title">Восстановление пароля</p>
    <form class="recovery__form" @submit.prevent="tryRecovery()" :class="loginError">
      <div class="login-group input-group">
        <label class="form-label" for="login">Логин</label>
        <input
          class="form-input"
          id="login"
          name="login"
          type="text"
          placeholder="login или e-mail"
        />
      </div>
      <div class="formbtn-group input-group">
        <input
          type="submit"
          class="recovery-btn"
          id="recovery-btn"
          name="recovery-btn"
          value="Восстановить пароль"
        />
      </div>
    </form>
    <router-link class="go-to-login_btn" to="/login">Страница авторизации</router-link>
  </div>
</template>

<style scoped lang="scss">
.recovery {
  width: 100%;
  height: fit-content;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  .logo-img {
    position: absolute;
    top: -135px;
  }
  .recovery__title {
    font-weight: 500;
    font-size: 24px;
    line-height: 28px;
    margin-bottom: 30px;
    text-align: center;
    color: #69645e;
  }
  .recovery__form {
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
      border-radius: 3px;
      border: none;
      outline: none;
      padding: 0px 14px;
      //Стили текста
      font-weight: normal;
      font-size: 18px;
      line-height: 21px;
      color: #9a9a9a;
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
    .input-group {
      margin-bottom: 30px;
      &.formbtn-group {
        input {
          display: block;
          width: 100%;
          height: 48px;
          border: none;
          outline: none;
          cursor: pointer;
          transition: background 0.4s, color 0.2s;
          &.recovery-btn {
            background: #c2a561;
            border-radius: 3px;
            margin-bottom: 15px;
            //Стили текста
            font-weight: 600;
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
        }
      }
    }
  }
  .go-to-login_btn {
      opacity: .7;
    text-align: center;
    color: #69645e;  
  }
}
</style>
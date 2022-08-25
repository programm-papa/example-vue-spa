<template>
  <div class="settings-blocks">
    <div class="block block_safety">
      <div class="block__title">
        <div class="text">Безопасность</div>
      </div>
      <div class="block__content">
        <div class="input-block">
          <div class="title">Email</div>
          <div class="value">testmail@mail.ru</div>
          <div class="edit icon" @click="openEditPopup('email_edit')">
            <div class="button">
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
          </div>
        </div>
        <div class="input-block">
          <div class="title">Пароль</div>
          <div class="value secret">Пароль скрыт в целях безопаснсти</div>
          <div class="edit button" @click="openEditPopup('password_edit')">
            <div class="button">сменить</div>
          </div>
        </div>
      </div>
    </div>
    <div class="block block_logout"></div>
  </div>
  <SettingsEdit :popupData="popupData" @closePopUp="closePopUp" @submitForm="formHandler" />
</template>
<script>
import SettingsEdit from '@/components/SettingsEdit.vue';
export default {
  data() {
    return {
      popupData: {
        open: false,
        type: '',
        title: '',
        buttonText: '',
        fields: [],
      },
    };
  },
  methods: {
    openEditPopup(popupType) {
      if (popupType == 'email_edit') {
        this.popupData.open = true;
        this.popupData.type = 'editEmail';
        this.popupData.title = 'Изменение почты';
        this.popupData.buttonText = 'Сменить почту';
        this.popupData.fields.push(
          {
            label: 'Введите пароль',
            inputType: 'password',
            inputName: 'currentPassword',
            secretInput: true,
            error: false,
          },
          {
            label: 'Введите новую почту',
            inputType: 'text',
            inputName: 'newEmail',
            secretInput: false,
            error: false,
          },
        );
      } else if (popupType == 'password_edit') {
        this.$store.dispatch('createNewNotification', {
          type: 'atention',
          icon: 'information',
          content:
            'Новый пароль должен содержать: минимум 8 символов, разный регистр символов, наличие букв, цифр и специальных знаков (!@#$&*)',
          time: 'infinitely',
          notificationType: 'popupNotification',
        });
        this.popupData.open = true;
        this.popupData.type = 'editPassword';
        this.popupData.title = 'Изменение пароля';
        this.popupData.buttonText = 'Сменить пароль';
        this.popupData.fields.push(
          {
            label: 'Введите текущий пароль',
            inputType: 'password',
            inputName: 'currentPassword',
            secretInput: true,
            error: false,
          },
          {
            label: 'Введите новый пароль',
            inputType: 'password',
            inputName: 'newPassword',
            secretInput: true,
            error: false,
          },
          {
            label: 'Повторите новый пароль',
            inputType: 'password',
            inputName: 'repeatNewPassword',
            secretInput: true,
            error: false,
          },
        );
      }
    },
    closePopUp() {
      this.$store.dispatch('removeOldNotificationByType', 'popupNotification');
      this.popupData.open = false;
      this.popupData.title = '';
      this.popupData.fields = [];
    },
    formHandler(value) {
      this.popupData.fields.forEach((element) => {
        element.error = false;
      });
      if (value.formType == 'editPassword') {
        if (!value.formValue.currentPassword) {
          this.$store.dispatch('createNewNotification', {
            type: 'error',
            icon: 'warning',
            content: 'Поле текущего пароля не может быть пустым.',
            time: 5000,
            notificationType: 'popupNotification',
          });
          this.popupData.fields.forEach((element) => {
            if (element.inputName == 'currentPassword') {
              element.error = true;
            }
          });
          return false;
        }
        if (!value.formValue.newPassword && !value.formValue.repeatNewPassword) {
          this.$store.dispatch('createNewNotification', {
            type: 'error',
            icon: 'warning',
            content: 'Поля нового проля не могут быть пустыми.',
            time: 5000,
            notificationType: 'popupNotification',
          });
          this.popupData.fields.forEach((element) => {
            if (element.inputName == 'newPassword' || element.inputName == 'repeatNewPassword') {
              element.error = true;
            }
          });
          return false;
        }
        if (value.formValue.newPassword != value.formValue.repeatNewPassword) {
          this.$store.dispatch('createNewNotification', {
            type: 'error',
            icon: 'warning',
            content: 'Поля нового проля не совпадают.',
            time: 5000,
            notificationType: 'popupNotification',
          });
          return false;
        }
        const regex =
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^\w\s]).{8,}/;
        if (!regex.test(value.formValue.newPassword)) {
          this.$store.dispatch('createNewNotification', {
            type: 'error',
            icon: 'warning',
            content:
              'Пароль должен соответствовать правилам (8 символов, разный регистр символов, наличие букв, цифр и специальных знаков).',
            time: 5000,
            notificationType: 'popupNotification',
          });
          this.popupData.fields.forEach((element) => {
            if (element.inputName == 'newPassword') {
              element.error = true;
            }
          });
          return false;
        }
      } else if (value.formType == 'editEmail') {
        if (!value.formValue.currentPassword) {
          this.$store.dispatch('createNewNotification', {
            type: 'error',
            icon: 'warning',
            content: 'Поле пароля не может быть пустым.',
            time: 5000,
            notificationType: 'popupNotification',
          });
          this.popupData.fields.forEach((element) => {
            if (element.inputName == 'currentPassword') {
              element.error = true;
            }
          });
          return false;
        }
        if (!value.formValue.newEmail) {
          this.$store.dispatch('createNewNotification', {
            type: 'error',
            icon: 'warning',
            content: 'Поле новой почты не может быть пустым.',
            time: 5000,
            notificationType: 'popupNotification',
          });
          this.popupData.fields.forEach((element) => {
            if (element.inputName == 'newEmail') {
              element.error = true;
            }
          });
          return false;
        }
        const regex = /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i;
        if (!regex.test(value.formValue.newEmail)) {
          this.$store.dispatch('createNewNotification', {
            type: 'error',
            icon: 'warning',
            content: 'В поле новой почты вы должны ввести корректный email адрес.',
            time: 5000,
            notificationType: 'popupNotification',
          });
          this.popupData.fields.forEach((element) => {
            if (element.inputName == 'newEmail') {
              element.error = true;
            }
          });
          return false;
        }
      }
    },
  },
  components: {
    SettingsEdit,
  },
};
</script>
<style scoped lang="scss">
.settings-blocks {
  display: flex;
  flex-direction: column;
  gap: 60px;
  .block {
    width: 906px;
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
        .title {
          width: 286px;
          padding-right: 30px;
          //Стиль текста
          font-weight: 600;
          font-size: 18px;
          line-height: 21px;
          color: #69645e;
        }
        .value {
          width: 443px;
          padding-right: 30px;
          //Стиль текста
          font-weight: 400;
          font-size: 18px;
          line-height: 21px;
          color: #69645e;

          &.secret {
            opacity: 0.5;
          }
        }
        .edit {
          width: 120px;
          height: 38px;
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
          &.button {
            .button {
              width: 100%;
              height: 100%;
              background: #69645e;
              border-radius: 3px;
              //Стиль текста
              text-transform: uppercase;
              font-weight: 600;
              font-size: 14px;
              line-height: 16px;
              color: #ffffff;
              &:hover {
                background: #c2a561;
              }
            }
          }
        }
        &:last-of-type {
          border-bottom: none;
        }
      }
    }
  }
}
@media screen and (max-width: 1366px) {
  .settings-blocks {
    .block {
      width: 100%;
      .block__content {
        .input-block {
          display: grid;
          grid-template-columns: 25% 50% 25%;
          .title {
            width: 100%;
          }
          .value {
            width: 100%;
          }
          .edit  {
            justify-content: flex-end;
          }
        }
      }
    }
  }
}
</style>

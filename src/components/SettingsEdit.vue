<template>
  <div class="edit-popup" v-if="popupData.open">
    <div class="close-mask" @click="closePopUp"></div>
    <div class="popup">
      <div class="close" @click="closePopUp">
        <div class="line"></div>
        <div class="line"></div>
      </div>
      <div class="popup__title">{{ popupData.title }}</div>
      <form @submit="submitForm" :class="popupData.error">
        <div class="input-block" v-for="(field, index) in popupData.fields" :key="index">
          <label for="password">{{ field['label'] }}</label>
          <div class="input-container">
            <input
              :type="field['inputType']"
              :class="field.error ? 'error' : ''"
              :name="field['inputName']"
              placeholder="***"
              v-model="values[field['inputName']]"
              @input="field.error = false"
            />
            <img
              v-if="field['secretInput']"
              src="@/assets/image/ui_icons/show-password.svg"
              alt=""
              class="show-password"
              @mouseover="field['inputType'] = 'text'"
              @mouseout="field['inputType'] = 'password'"
            />
          </div>
        </div>
        <button class="button-submit">{{ popupData.buttonText }}</button>
      </form>
    </div>
  </div>
</template>
<script>
export default {
  props: ['popupData'],
  data() {
    return {
      values: [],
    };
  },
  methods: {
    submitForm(event) {
      this.$emit('submitForm', {
        formType: this.popupData.type,
        formValue: { ...this.values },
      });
      event.preventDefault();
    },
    closePopUp() {
      this.values = [];
      this.$emit('closePopUp');
    },
  },
  // watch: {
  //   popupData: {
  //     handler: function () {
  //      this.values = [];
  //     },
  //     deep: true,
  //   },
  // },
  mounted() {},
};
</script>
<style scoped lang="scss">
.edit-popup {
  position: fixed;
  z-index: 5;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(79, 79, 79, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  .close-mask {
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 5;
  }
  .popup {
    width: 440px;
    height: fit-content;
    padding: 30px 27px 30px;
    background: #ffffff;
    border-radius: 5px;
    position: absolute;
    z-index: 6;
    .close {
      width: 20px;
      height: 20px;
      position: absolute;
      cursor: pointer;
      top: 18px;
      right: 16px;
      padding-top: 10px;
      .line {
        position: absolute;
        width: 17px;
        height: 2px;
        background: #69645e;
        border-radius: 2px;
        &:first-of-type {
          transform: rotate(45deg);
        }
        &:last-of-type {
          transform: rotate(-45deg);
        }
      }
      &:hover {
        .line {
          background: #c2a561;
        }
      }
    }
    .popup__title {
      font-weight: 500;
      font-size: 24px;
      line-height: 135%;
      color: #69645e;
      margin-bottom: 30px;
    }
    form {
      display: flex;
      flex-direction: column;
      gap: 30px;
      .input-block {
        label {
          display: block;
          font-weight: 300;
          font-size: 18px;
          line-height: 21px;
          color: #69645e;
          margin-bottom: 10px;
        }
        .input-container {
          position: relative;
          display: flex;
          align-content: center;
          input {
            width: 100%;
            height: 48px;
            outline: none;
            border: none;
            background: #f2f2f2;
            border-radius: 3px;
            padding: 0px 15px;
            //Стиль текста
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
            &.error {
              border: 2px solid #db4d4d;
              padding: 0px 13px;
            }
          }
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
      }
      .button-submit {
        cursor: pointer;
        width: 100%;
        height: 48px;
        margin-top: 10px;
        border: none;
        outline: none;
        background: #c2a561;
        border-radius: 3px;
        //Стили текста
        font-weight: 600;
        font-size: 18px;
        line-height: 21px;
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
</style>
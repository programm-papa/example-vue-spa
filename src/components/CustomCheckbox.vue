
<template>
  <div class="radio-wrapper" :class="checkboxStyle">
    <template v-for="(value, index) in radioList" :key="index">
      <div class="radio-group">
        <input
          class="radio-group__input"
          type="radio"
          :id="'radio__' + checkboxType + index"
          :value="value.variant"
          v-model="picked"
        />
        <label :for="'radio__' + checkboxType + index" class="radio-group__radio_custom"></label>
        <label :for="'radio__' + checkboxType + index" class="radio-group__label">{{
          value.description
        }}</label>
      </div>
    </template>
  </div>
</template>
<script>
export default {
  props: ['checkboxStyle', 'checkboxType', 'radioList', 'defaultSelect'],
  data() {
    return {
      picked: '',
    };
  },
  watch: {
    picked: function () {
      this.$emit('resultSelectCheckbox', {
        select: this.picked,
        checkboxType: this.checkboxType,
      });
    },
  },
  mounted() {
    this.picked = this.defaultSelect ? this.defaultSelect : this.radioList[0].variant;
  },
};
</script>
<style scoped lang="scss">
.radio-wrapper {
  display: flex;
  flex-direction: column;
  gap: 12px;
  &.verticale {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }
  &.horizontal {
    display: flex;
    flex-direction: row;
    gap: 20px;
  }
}
.radio-group {
  position: relative;
  display: flex;
  .radio-group__input {
    visibility: hidden;
    width: 20px;
    height: 20px;
  }
  .radio-group__radio_custom {
    left: 0;
    top: 0;
    position: absolute;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 20px;
    height: 20px;
    border: 1px solid #4f4f4f;
    border-radius: 100%;
    &::before {
      position: relative;
      content: '';
      width: 12px;
      height: 12px;
      background: #4f4f4f;
      border-radius: 100%;
      opacity: 0;
    }
    &:hover::before {
      opacity: 0.4;
    }
  }
  .radio-group__input:checked + .radio-group__radio_custom::before {
    opacity: 1;
  }
  .radio-group__label {
    padding-left: 8px;
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 21px;
    color: #4f4f4f;
  }
}
</style>

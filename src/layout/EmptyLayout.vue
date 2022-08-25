<template>
  <div class="auth">
    <div class="wrapper">
      <slot/>
    </div>
  </div>
</template>
<style scoped lang="scss">
.auth {
  background-color: #fff;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  .wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 386px;
  }
  @media screen and (max-width: 418px) {
    .wrapper {
      padding: 0 16px;
      width: 100%;
    }
  }
}
</style>

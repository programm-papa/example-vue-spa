<template>
  <transition name="fade">
    <div v-if="loadingStatus" class="loader">
      <svg
        width="56"
        height="56"
        viewBox="0 0 56 56"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <mask
          id="mask0_1_3"
          style="mask-type: alpha"
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="56"
          height="56"
        >
          <circle cx="28" cy="28" r="28" fill="#C4C4C4" />
        </mask>
        <g mask="url(#mask0_1_3)">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M32.7472 55.1752C31.4777 51.396 30.091 46.63 30.4483 43.045C30.7897 42.4256 32.2245 40.7827 33.0298 40.8982C33.1267 40.7549 33.1892 40.5918 33.2125 40.4212C33.2358 40.2506 33.2193 40.077 33.1643 39.9137C33.1093 39.7503 33.0172 39.6013 32.895 39.4782C32.7729 39.355 32.6238 39.2609 32.4591 39.2028C32.0904 39.7769 31.5214 40.1987 30.859 40.3891C31.5471 38.0166 33.6752 34.8515 36.0861 33.9434C36.7741 34.9617 38.6676 34.736 39.2863 34.0012C40.497 35.2452 42.9612 34.2846 43.0785 32.647C45.372 33.4343 47.6709 31.5132 46.6361 29.4241C48.5349 28.3744 48.2362 25.5242 46.5828 24.8471C47.2122 23.094 44.9827 21.1152 43.1372 21.3986C43.0354 21.2236 42.8973 21.0715 42.7318 20.9524C43.6546 19.0838 42.7319 15.5776 40.3797 15.1787C39.8463 12.9741 37.0515 11.8456 35.0993 12.8639C33.8939 11.7302 31.9951 11.6199 31.0777 13.0896C29.5309 11.5622 26.3147 12.465 25.568 14.3336C24.5408 14.1213 23.4699 14.3164 22.5881 14.8766C21.7062 15.4368 21.0846 16.3168 20.8583 17.3255C19.7916 16.029 18.1595 15.9713 16.7247 16.7638C14.9433 16.4227 12.9911 17.5512 12.9378 19.4775C10.8683 19.1941 9.26286 20.2124 8.91616 22.2437C7.0227 22.5849 5.58793 27.4926 9.37486 28.5738C7.82809 30.6104 9.43353 33.6652 11.8444 32.9829C12.5911 35.0195 15.8073 35.4131 17.4128 33.8909C18.1595 35.812 21.5464 35.812 22.8105 34.6783C25.4346 39.4915 25.568 49.6586 23.2532 55.2592C24.8554 55.8219 28.9974 56.5929 32.7472 55.1752ZM33.01 32.8781C32.9375 32.6958 32.9239 32.4959 32.9712 32.3058C32.7626 32.2245 32.5938 32.0676 32.4995 31.8673C32.4052 31.6671 32.3927 31.4388 32.4645 31.2298C31.8363 31.1781 31.2176 31.0458 30.6243 30.8361C30.3363 30.9516 30.107 31.0041 29.8776 31.1195C29.803 31.8544 29.1149 35.5863 29.3443 35.8698C29.3443 36.2634 30.619 35.6493 33.3765 33.3241C33.2106 33.2161 33.0826 33.0604 33.01 32.8781ZM26.254 32.6957C25.8153 33.1588 25.2288 33.4603 24.5919 33.5498C24.6373 33.6035 24.6936 33.6738 24.7581 33.7545C25.1037 34.1862 25.6854 34.9131 26.0854 34.9617C27.0988 34.9617 27.5201 32.0801 27.6321 31.2875C27.4035 31.2403 27.1885 31.1435 27.0028 31.0041C26.9568 31.6356 26.6926 32.2325 26.254 32.6957Z"
            fill="#C2A561"
          />
        </g>
        <path
          id="circle-loader"
          d="M28 55C24.4543 55 20.9433 54.3016 17.6675 52.9447C14.3918 51.5879 11.4153 49.5991 8.90812 47.0919C6.40093 44.5847 4.41213 41.6082 3.05525 38.3325C1.69837 35.0567 1 31.5457 1 28C1 24.4543 1.69838 20.9433 3.05525 17.6675C4.41213 14.3918 6.40094 11.4153 8.90812 8.90811C11.4153 6.40093 14.3918 4.41213 17.6676 3.05525C20.9433 1.69837 24.4543 0.999999 28 1C31.5457 1 35.0567 1.69838 38.3325 3.05525C41.6082 4.41213 44.5847 6.40094 47.0919 8.90812C49.5991 11.4153 51.5879 14.3918 52.9447 17.6676C54.3016 20.9433 55 24.4543 55 28C55 31.5457 54.3016 35.0567 52.9447 38.3325C51.5879 41.6083 49.5991 44.5847 47.0919 47.0919C44.5847 49.5991 41.6082 51.5879 38.3324 52.9448C35.0567 54.3016 31.5457 55 28 55L28 55Z"
          stroke="#C2A561"
          stroke-width="2"
        />
      </svg>
    </div>
  </transition>
  <component :is="layouts">
    <router-view v-if="!loadingStatus" />
  </component>
</template>
<script>
import EmptyLayout from '@/layout/EmptyLayout.vue';
import DefaultLayout from '@/layout/DefaultLayout.vue';
export default {
  // data: {

  // },
  computed: {
    layouts() {
      const layoutName = this.$route.meta.layout;
      return layoutName ? layoutName + '-layout' : 'default-layout';
    },
    loadingStatus() {
      return this.$store.state.auth.loadingStatus;
    },
  },
  components: {
    EmptyLayout,
    DefaultLayout,
  },
  created() {},
  mounted() {
    //Проверка изменения интернет соединения у нашего приложения (док. стр. ...)
    window.addEventListener('online', () => {
      this.$store.dispatch('changeConnectionStatus', true);
    });
    window.addEventListener('offline', () => {
      this.$store.dispatch('changeConnectionStatus', false);
    });
    //Проверка соединения при запуске приложения (док. стр. ...)
    if (window.navigator.onLine) {
      this.$store.dispatch('changeConnectionStatus', true);
    } else {
      this.$store.dispatch('changeConnectionStatus', false);
    }

    //Проверка автоматического входа в аккаунт
    const token = localStorage.getItem('accessToken');
    const remember = localStorage.getItem('remember_me');
    if (token && remember) {
      this.$store.state.auth.needAuthologin = true;
    } else {
      setTimeout(() => {
        this.$store.dispatch('updateLoadApp', false);
      }, 900);
    }
  },
};
</script>

<style lang="scss">
@font-face {
  font-family: 'Roboto';
  src: url('./assets/fonts/Robotolight.woff');
  font-weight: 300;
  font-style: normal;
  font-display: auto;
}

@font-face {
  font-family: 'Roboto';
  src: url('./assets/fonts/Roboto.woff');
  font-weight: 400;
  font-style: normal;
}

@font-face {
  font-family: 'Roboto';
  src: url('./assets/fonts/Robotomedium.woff');
  font-weight: 500;
  font-style: normal;
}

@font-face {
  font-family: 'Roboto';
  src: url('./assets/fonts/Robotobold.woff');
  font-weight: 700;
  font-style: normal;
}
* {
  font-family: 'Roboto', sans-serif;
  padding: 0px;
  margin: 0px;
  box-sizing: border-box;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active до версии 2.1.8 */ {
  opacity: 0;
}
.loader {
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 15;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  #circle-loader {
    stroke-dasharray: 170;
    animation: circle_loader_animation linear infinite 1.2s;
  }
  @keyframes circle_loader_animation {
    0% {
      stroke-dashoffset: 170;
    }
    50% {
      stroke-dashoffset: 0;
    }
    100% {
      stroke-dashoffset: -170;
    }
  }
}
</style>

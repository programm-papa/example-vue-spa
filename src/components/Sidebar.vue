<template>
  <div class="sidebar" :class="sidebarOpenStatus">
    <nav class="menu" id="menu1">
      <router-link :to="'/'" class="link" @click="$emit('closeSidebar', false)">
        <div class="icon">
          <svg
            width="18"
            height="19"
            viewBox="0 0 18 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10 17H16V7.97803L9 2.53403L2 7.97803V17H8V11H10V17ZM18 18C18 18.2652 17.8946 18.5196 17.7071 18.7071C17.5196 18.8947 17.2652 19 17 19H1C0.734784 19 0.48043 18.8947 0.292893 18.7071C0.105357 18.5196 2.4071e-07 18.2652 2.4071e-07 18V7.49003C-0.000105484 7.33764 0.0346172 7.18724 0.101516 7.05033C0.168415 6.91341 0.26572 6.79359 0.386 6.70003L8.386 0.478028C8.56154 0.341473 8.7776 0.267334 9 0.267334C9.2224 0.267334 9.43846 0.341473 9.614 0.478028L17.614 6.70003C17.7343 6.79359 17.8316 6.91341 17.8985 7.05033C17.9654 7.18724 18.0001 7.33764 18 7.49003V18V18Z"
              fill="#C2A561"
            />
          </svg>
        </div>
        <div class="text">Главная страница</div>
      </router-link>
      <router-link :to="'/profile'" class="link" @click="$emit('closeSidebar', false)">
        <div class="icon">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10 20C4.477 20 0 15.523 0 10C0 4.477 4.477 0 10 0C15.523 0 20 4.477 20 10C20 15.523 15.523 20 10 20ZM5.013 16.256C6.42855 17.3877 8.18768 18.0029 10 18C11.97 18 13.773 17.288 15.167 16.108C14.5157 15.4397 13.7371 14.9089 12.877 14.5468C12.017 14.1847 11.0931 13.9988 10.16 14C9.19259 13.9989 8.2355 14.1989 7.34947 14.5872C6.46343 14.9756 5.66778 15.5439 5.013 16.256ZM3.616 14.82C4.45645 13.9281 5.47067 13.2177 6.59614 12.7327C7.72161 12.2477 8.93448 11.9984 10.16 12C11.3417 11.9985 12.512 12.2304 13.6037 12.6824C14.6955 13.1344 15.6873 13.7976 16.522 14.634C17.3781 13.4291 17.8836 12.0106 17.9826 10.5359C18.0815 9.06119 17.77 7.58789 17.0825 6.27946C16.395 4.97102 15.3585 3.87862 14.088 3.12345C12.8174 2.36827 11.3625 1.97984 9.8846 2.00125C8.40672 2.02267 6.96366 2.45308 5.71552 3.24476C4.46738 4.03643 3.46296 5.1584 2.81369 6.4862C2.16442 7.814 1.89569 9.29571 2.03732 10.7669C2.17894 12.2382 2.72537 13.6414 3.616 14.821V14.82ZM10 11C8.93913 11 7.92172 10.5786 7.17157 9.82843C6.42143 9.07828 6 8.06087 6 7C6 5.93913 6.42143 4.92172 7.17157 4.17157C7.92172 3.42143 8.93913 3 10 3C11.0609 3 12.0783 3.42143 12.8284 4.17157C13.5786 4.92172 14 5.93913 14 7C14 8.06087 13.5786 9.07828 12.8284 9.82843C12.0783 10.5786 11.0609 11 10 11ZM10 9C10.5304 9 11.0391 8.78929 11.4142 8.41421C11.7893 8.03914 12 7.53043 12 7C12 6.46957 11.7893 5.96086 11.4142 5.58579C11.0391 5.21071 10.5304 5 10 5C9.46957 5 8.96086 5.21071 8.58579 5.58579C8.21071 5.96086 8 6.46957 8 7C8 7.53043 8.21071 8.03914 8.58579 8.41421C8.96086 8.78929 9.46957 9 10 9Z"
              fill="#C2A561"
            />
          </svg>
        </div>
        <div class="text">Мой профиль</div>
      </router-link>
      <router-link :to="'/order_list'" class="link" @click="$emit('closeSidebar', false)">
        <div class="icon">
          <svg
            width="18"
            height="20"
            viewBox="0 0 18 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4 4V1C4 0.734784 4.10536 0.48043 4.29289 0.292893C4.48043 0.105357 4.73478 0 5 0H17C17.2652 0 17.5196 0.105357 17.7071 0.292893C17.8946 0.48043 18 0.734784 18 1V15C18 15.2652 17.8946 15.5196 17.7071 15.7071C17.5196 15.8946 17.2652 16 17 16H14V19C14 19.552 13.55 20 12.993 20H1.007C0.875127 20.0008 0.744397 19.9755 0.622322 19.9256C0.500247 19.8757 0.389233 19.8022 0.295659 19.7093C0.202084 19.6164 0.127793 19.5059 0.0770543 19.3841C0.0263156 19.2624 0.000129374 19.1319 0 19L0.00300002 5C0.00300002 4.448 0.453 4 1.009 4H4ZM2.002 6L2 18H12V6H2.002ZM6 4H14V14H16V2H6V4ZM4 9H10V11H4V9ZM4 13H10V15H4V13Z"
              fill="#C2A561"
            />
          </svg>
        </div>
        <div class="text">Список заказов</div>
      </router-link>
      <router-link
        :to="'/users'"
        v-if="roles.includes('ADMIN') || roles.includes('MANAGER')"
        class="link"
        @click="$emit('closeSidebar', false)"
      >
        <div class="icon">
          <svg
            width="21"
            height="21"
            viewBox="0 0 21 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 21C0 18.8783 0.842855 16.8434 2.34315 15.3431C3.84344 13.8429 5.87827 13 8 13C10.1217 13 12.1566 13.8429 13.6569 15.3431C15.1571 16.8434 16 18.8783 16 21H14C14 19.4087 13.3679 17.8826 12.2426 16.7574C11.1174 15.6321 9.5913 15 8 15C6.4087 15 4.88258 15.6321 3.75736 16.7574C2.63214 17.8826 2 19.4087 2 21H0ZM8 12C4.685 12 2 9.315 2 6C2 2.685 4.685 0 8 0C11.315 0 14 2.685 14 6C14 9.315 11.315 12 8 12ZM8 10C10.21 10 12 8.21 12 6C12 3.79 10.21 2 8 2C5.79 2 4 3.79 4 6C4 8.21 5.79 10 8 10ZM16.284 13.703C17.6893 14.3359 18.882 15.3612 19.7186 16.6557C20.5552 17.9502 21.0002 19.4587 21 21H19C19.0002 19.844 18.6666 18.7125 18.0391 17.7416C17.4116 16.7707 16.5171 16.0017 15.463 15.527L16.283 13.703H16.284ZM15.596 2.413C16.6035 2.8283 17.465 3.53354 18.071 4.43923C18.6771 5.34492 19.0004 6.41024 19 7.5C19.0004 8.87233 18.4877 10.1952 17.5625 11.2088C16.6374 12.2224 15.3667 12.8535 14 12.978V10.965C14.7409 10.8589 15.4283 10.518 15.9613 9.99246C16.4943 9.4669 16.8447 8.78432 16.9612 8.04493C17.0776 7.30555 16.954 6.5483 16.6084 5.88435C16.2628 5.22041 15.7134 4.68475 15.041 4.356L15.596 2.413V2.413Z"
              fill="#C2A561"
            />
          </svg>
        </div>
        <div class="text">Пользователи</div>
      </router-link>
    </nav>
    <nav class="menu menu_additional" id="menu2">
      <router-link :to="'/settings'" class="link" @click="$emit('closeSidebar', false)">
        <div class="icon">
          <svg
            width="19"
            height="20"
            viewBox="0 0 19 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.963997 14.9991C0.54732 14.2682 0.223419 13.4868 0 12.6735C0.486244 12.4227 0.894599 12.0403 1.17989 11.5686C1.46518 11.097 1.61629 10.5545 1.61649 10.0011C1.61669 9.44776 1.46599 8.90514 1.18105 8.43328C0.896103 7.96141 0.48803 7.5787 0.00197146 7.32747C0.447535 5.69325 1.2959 4.20098 2.46716 2.99124C2.92461 3.29292 3.45542 3.46032 4.00086 3.47494C4.5463 3.48956 5.08508 3.35081 5.5576 3.07406C6.03011 2.79731 6.41792 2.39335 6.67812 1.90688C6.93831 1.42041 7.06074 0.870398 7.03185 0.31772C8.65045 -0.106583 10.3489 -0.105895 11.9672 0.319719C11.9385 0.872386 12.0612 1.42231 12.3216 1.90865C12.582 2.39498 12.97 2.79875 13.4426 3.07529C13.9152 3.35183 14.454 3.49034 14.9994 3.47551C15.5448 3.46068 16.0755 3.29307 16.5328 2.99124C17.1035 3.58114 17.6102 4.25202 18.036 5.00089C18.4628 5.74975 18.7822 6.53062 19 7.32648C18.5138 7.57733 18.1054 7.95974 17.8201 8.43138C17.5348 8.90303 17.3837 9.44554 17.3835 9.99889C17.3833 10.5522 17.534 11.0949 17.819 11.5667C18.1039 12.0386 18.512 12.4213 18.998 12.6725C18.5525 14.3067 17.7041 15.799 16.5328 17.0088C16.0754 16.7071 15.5446 16.5397 14.9991 16.5251C14.4537 16.5104 13.9149 16.6492 13.4424 16.9259C12.9699 17.2027 12.5821 17.6066 12.3219 18.0931C12.0617 18.5796 11.9393 19.1296 11.9681 19.6823C10.3495 20.1066 8.6511 20.1059 7.03284 19.6803C7.06147 19.1276 6.9388 18.5777 6.67841 18.0914C6.41801 17.605 6.03005 17.2012 5.55744 16.9247C5.08484 16.6482 4.54602 16.5097 4.00061 16.5245C3.45521 16.5393 2.92448 16.7069 2.46716 17.0088C1.88461 16.4058 1.37955 15.7306 0.963997 14.9991ZM6.54295 15.1951C7.59332 15.8096 8.38307 16.7958 8.76074 17.9646C9.25259 18.0116 9.74642 18.0126 10.2383 17.9656C10.6162 16.7966 11.4063 15.8104 12.457 15.1961C13.507 14.5799 14.7443 14.3787 15.9316 14.6312C16.2174 14.2232 16.4638 13.7883 16.6689 13.3334C15.86 12.417 15.4132 11.23 15.4141 10C15.4141 8.74022 15.8774 7.56343 16.6689 6.66659C16.4624 6.21182 16.2149 5.77738 15.9296 5.36882C14.7431 5.62109 13.5066 5.42029 12.457 4.80492C11.4067 4.1904 10.6169 3.20419 10.2393 2.03541C9.74741 1.98842 9.25358 1.98742 8.76172 2.03441C8.38381 3.20335 7.5937 4.18959 6.54295 4.80392C5.49299 5.42013 4.25566 5.6213 3.06843 5.36882C2.78314 5.77704 2.53629 6.21154 2.33114 6.66659C3.13996 7.58299 3.58678 8.77001 3.58591 10C3.58591 11.2598 3.12264 12.4366 2.33114 13.3334C2.53761 13.7882 2.78508 14.2226 3.0704 14.6312C4.25688 14.3789 5.49341 14.5797 6.54295 15.1951ZM9.5 12.9995C8.71574 12.9995 7.96361 12.6835 7.40905 12.1209C6.8545 11.5584 6.54295 10.7955 6.54295 10C6.54295 9.20449 6.8545 8.44157 7.40905 7.87906C7.96361 7.31655 8.71574 7.00053 9.5 7.00053C10.2843 7.00053 11.0364 7.31655 11.5909 7.87906C12.1455 8.44157 12.457 9.20449 12.457 10C12.457 10.7955 12.1455 11.5584 11.5909 12.1209C11.0364 12.6835 10.2843 12.9995 9.5 12.9995ZM9.5 10.9998C9.76142 10.9998 10.0121 10.8945 10.197 10.707C10.3818 10.5195 10.4857 10.2652 10.4857 10C10.4857 9.73483 10.3818 9.48052 10.197 9.29302C10.0121 9.10552 9.76142 9.00018 9.5 9.00018C9.23858 9.00018 8.98787 9.10552 8.80302 9.29302C8.61817 9.48052 8.51432 9.73483 8.51432 10C8.51432 10.2652 8.61817 10.5195 8.80302 10.707C8.98787 10.8945 9.23858 10.9998 9.5 10.9998Z"
              fill="#C2A561"
            />
          </svg>
        </div>
        <div class="text">Настройки</div>
      </router-link>
      <div class="link">
        <div class="icon">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15 4H20V6H18V19C18 19.2652 17.8946 19.5196 17.7071 19.7071C17.5196 19.8946 17.2652 20 17 20H3C2.73478 20 2.48043 19.8946 2.29289 19.7071C2.10536 19.5196 2 19.2652 2 19V6H0V4H5V1C5 0.734784 5.10536 0.48043 5.29289 0.292893C5.48043 0.105357 5.73478 0 6 0H14C14.2652 0 14.5196 0.105357 14.7071 0.292893C14.8946 0.48043 15 0.734784 15 1V4ZM16 6H4V18H16V6ZM7 9H9V15H7V9ZM11 9H13V15H11V9ZM7 2V4H13V2H7Z"
              fill="#C2A561"
            />
          </svg>
        </div>
        <div class="text">Корзина</div>
      </div>
      <div class="link">
        <div class="icon">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10 20C4.477 20 0 15.523 0 10C0 4.477 4.477 0 10 0C15.523 0 20 4.477 20 10C20 15.523 15.523 20 10 20ZM7.71 17.667C6.72341 15.5743 6.15187 13.3102 6.027 11H2.062C2.25659 12.5389 2.89392 13.9882 3.89657 15.1717C4.89922 16.3552 6.22401 17.2221 7.71 17.667ZM8.03 11C8.181 13.439 8.878 15.73 10 17.752C11.1523 15.6766 11.8254 13.3695 11.97 11H8.03ZM17.938 11H13.973C13.8481 13.3102 13.2766 15.5743 12.29 17.667C13.776 17.2221 15.1008 16.3552 16.1034 15.1717C17.1061 13.9882 17.7434 12.5389 17.938 11ZM2.062 9H6.027C6.15187 6.68979 6.72341 4.42569 7.71 2.333C6.22401 2.77788 4.89922 3.64475 3.89657 4.8283C2.89392 6.01184 2.25659 7.4611 2.062 9ZM8.031 9H11.969C11.8248 6.6306 11.152 4.32353 10 2.248C8.84768 4.32345 8.17456 6.63052 8.03 9H8.031ZM12.29 2.333C13.2766 4.42569 13.8481 6.68979 13.973 9H17.938C17.7434 7.4611 17.1061 6.01184 16.1034 4.8283C15.1008 3.64475 13.776 2.77788 12.29 2.333Z"
              fill="#C2A561"
            />
          </svg>
        </div>
        <a href="https://mart53.ru/" target="_blank" class="text" id="site_link">Перейти на сайт</a>
      </div>
    </nav>
  </div>
</template>
<script>
export default {
  props: ['openSidebar'],
  data() {
    return {
      specialRole: false,
    };
  },
  computed: {
    sidebarOpenStatus: function () {
      return this.openSidebar ? 'open' : 'close';
    },
    roles() {
      return this.$store.state.auth.userData.roles;
    },
  },
  // watch: {
  //   roles: {
  //     handler: function () {
  //       console.log(this.roles)
  //       if() {
  //         this.specialRole = true;
  //       } else {
  //         this.specialRole = false;
  //       }
  //     },
  //     deep: true,
  //   }
  // }
};
</script>
<style scoped lang="scss">
.sidebar {
  width: 300px;
  background: #ececec;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  .menu {
    width: 100%;
    .link {
      height: 80px;
      border-bottom: 1px solid #dedede;
      background: #f2f2f2;
      cursor: pointer;
      display: flex;
      align-items: center;
      padding: 0px 32px;
      //Стиль текста
      text-decoration: none;
      .icon {
        width: 24px;
        height: 24px;
        margin-right: 18px;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .text {
        height: 24px;
        padding-top: 3px;
        font-weight: 400;
        font-size: 18px;
        line-height: 21px;
        color: #69645e;
        &#site_link {
          color: #c2a561;
        }
      }
      &:hover {
        background: #f9f6f0;
        .text {
          color: #c2a561;
        }
      }
      &.router-link-exact-active {
        background: #9d9c97;
        .icon {
          svg {
            path {
              fill: #f2f2f2;
            }
          }
        }
        .text {
          color: #f2f2f2;
        }
      }
    }
    &#menu1 {
      margin-bottom: auto;
    }
    &#menu2 {
      height: fit-content;
    }
  }
}

@media screen and (max-width: 1500px) {
  .sidebar {
    max-width: 84px;
    transition: max-width 0.3s;
    overflow: hidden;
    z-index: 11;
    .menu {
      width: 300px;
      .link {
        height: 80px;
        padding-left: 30px;
        .text {
          opacity: 0;
          transition: opacity 0.1s;
        }
      }
    }
    &.open {
      max-width: 300px;
      box-shadow: 5px 0px 10px 0px rgba(34, 60, 80, 0.2);
      .menu {
        .link {
          .text {
            opacity: 1;
          }
        }
      }
    }
  }
}
@media screen and (max-width: 767px) {
  .sidebar {
    max-width: 300px;
    height: 100%;
    overflow: hidden;
    transform: translateX(-100%);
    transition: transform 0.3s;
    position: absolute;
    .menu {
      width: 300px;
      .link {
        height: 80px;
        padding-left: 30px;
        .text {
          opacity: 1;
        }
      }
    }
    &.open {
      transform: translateX(0%);
    }
  }
}
@media screen and (max-width: 500px) {
  .content {
    .sidebar {
      width: 100%;
      max-width: 320px;
      height: 100%;
      overflow: hidden;
      transform: translateX(-100%);
      transition: transform 0.3s;
      position: absolute;
      .menu {
        width: 320px;
        .link {
          height: 80px;
          padding-left: 30px;
          .text {
            opacity: 1;
          }
        }
      }
      &.open {
        max-width: 320px;
        transform: translateX(0%);
      }
    }
  }
}
</style>

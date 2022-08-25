<template>
  <div class="header">
    <div class="menu-btn" @click="$emit('changeSidebarStatus')">
      <div class="line"></div>
      <div class="line"></div>
      <div class="line"></div>
    </div>
    <router-link :to="'/'" class="logo">
      <img src="@/assets/image/logoMain.svg" alt="" />
    </router-link>
    <div class="search search-input_noempty">
      <div class="button">
        <svg
          width="21"
          height="21"
          viewBox="0 0 21 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16.031 14.617L20.314 18.899L18.899 20.314L14.617 16.031C13.0237 17.3082 11.042 18.0029 9 18C4.032 18 0 13.968 0 9C0 4.032 4.032 0 9 0C13.968 0 18 4.032 18 9C18.0029 11.042 17.3082 13.0237 16.031 14.617ZM14.025 13.875C15.2941 12.5699 16.0029 10.8204 16 9C16 5.132 12.867 2 9 2C5.132 2 2 5.132 2 9C2 12.867 5.132 16 9 16C10.8204 16.0029 12.5699 15.2941 13.875 14.025L14.025 13.875Z"
            fill="#9D9C97"
          />
        </svg>
      </div>
      <input type="text" class="search-input" placeholder="Поиск" />
    </div>
    <div class="notification-icons"></div>
    <div class="profile" :style="{ background: 'url(' + defaultAvatar + ')' }"></div>
  </div>
</template>
<script>
import defaultAvatar from '@/assets/image/user-icon.svg';
export default {
  data() {
    return {
      defaultAvatar,
    };
  },
};
</script>
<style scoped lang="scss">
.header {
  background: #4f4f4f;
  width: 100%;
  height: 120px;
  display: flex;
  align-items: center;
  padding: 0px 60px 0px 40px;
  .menu-btn {
    display: none;
    flex-direction: column;
    gap: 8px;
    position: relative;
    width: 30px;
    height: 27px;
    margin-right: 50px;
    cursor: pointer;
    .line {
      height: 3px;
      width: 100%;
      background-color: #ffffff;
    }
  }
  .logo {
    margin-right: 108px;
    user-select: none !important;
  }
  .search {
    padding-right: 25px;
    width: 400px;
    height: 60px;
    background: #696969;
    border-radius: 50px;
    display: flex;
    align-items: center;
    margin-right: auto;
    .button {
      padding: 20px 16px 15px 24px;
      cursor: pointer;
      &:hover {
        opacity: 0.8;
      }
      &:active {
        opacity: 0.5;
      }
    }
    &.search-input_noempty {
      .button {
        svg {
          path {
            fill: #ffffff;
          }
        }
      }
    }
    .search-input {
      height: 21px;
      flex: 1;
      background: inherit;
      border: none;
      outline: none;
      //Стиль текста
      font-weight: 400;
      font-size: 18px;
      line-height: 21px;
      color: #cfcfcc;
      &::placeholder {
        font-weight: 400;
        font-size: 18px;
        line-height: 21px;
        color: #9d9c97;
      }
    }
  }
  .notification-icons {
    margin-right: 25px;
    width: 200px;
    height: 24px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 12px;
  }
  .profile {
    width: 50px;
    height: 50px;
    border-radius: 100%;
    border: 2px solid #777777;
    cursor: pointer;
    background-position: center center !important;
    background-repeat: no-repeat !important;
    background-size: cover;
  }
}

@media screen and (max-width: 1500px) {
  .header {
    height: 90px;
    padding-left: 28 px;
    .menu-btn {
      display: flex;
    }
    .search {
      height: 60px;
    }
  }
}

@media screen and (max-width: 1366px) {
  .header {
    height: 90px;
    .menu-btn {
      display: flex;
    }
    .logo {
      display: none;
    }
    .search {
      height: 50px;
    }
    .notification-icons {
      margin-right: 20px;
      width: 100px;
    }
  }
}

@media screen and (max-width: 767px) {
  .header {
    height: 80px;
    padding: 0px 20px 0px;
    .menu-btn {
      width: 24px;
      display: flex;
      margin-right: 35px;
      .line {
        height: 2px;
      }
    }
    .logo {
      display: none;
    }
    .search {
      height: 40px;
      width: auto;
    }
    .notification-icons {
      margin-right: 20px;
      width: 50px;
    }
    .profile {
      width: 32px;
      height: 32px;
    }
  }
}
@media screen and (max-width: 500px) {
  .header {
    height: 80px;
    padding: 0px 20px 0px;
    .menu-btn {
      width: 24px;
      display: flex;
      margin-right: 20px;
      .line {
        height: 2px;
      }
    }
    .logo {
      display: none;
    }
    .search {
      height: 40px;
      max-width: 130px;
      width: auto;
      .button {
        padding: 16px 16px 15px 24px;
        padding-left: 13px;
        padding-right: 10px;
        svg {
          width: 14px;
          height: 14px;
        }
      }
      .search-input {
        width: 80px;
        font-size: 14px;
        line-height: 16px;
      }
    }
    .notification-icons {
      width: 50px;
      margin-right: 15px;
    }
    .profile {
      width: 32px;
      height: 32px;
    }
  }
}
</style>
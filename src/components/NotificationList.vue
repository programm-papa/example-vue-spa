<template>
  <div class="notification-list">
    <div
      class="notification"
      :class="notification.addedClass + ' ' + notification.type"
      v-for="notification in loadNotificationList"
      :key="notification"
    >
      <div class="line"></div>
      <div @click="removeNotificationList(notification.id)" :id="notification.id" class="close">
        <div class="close__line"></div>
        <div class="close__line"></div>
      </div>
      <div class="notification__content">
        <div class="icon">
          <!-- Иконка информационная  -->
          <svg
            v-if="notification.icon == 'information'"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10 20C4.477 20 0 15.523 0 10C0 4.477 4.477 0 10 0C15.523 0 20 4.477 20 10C20 15.523 15.523 20 10 20ZM10 18C12.1217 18 14.1566 17.1571 15.6569 15.6569C17.1571 14.1566 18 12.1217 18 10C18 7.87827 17.1571 5.84344 15.6569 4.34315C14.1566 2.84285 12.1217 2 10 2C7.87827 2 5.84344 2.84285 4.34315 4.34315C2.84285 5.84344 2 7.87827 2 10C2 12.1217 2.84285 14.1566 4.34315 15.6569C5.84344 17.1571 7.87827 18 10 18ZM9 5H11V7H9V5ZM9 9H11V15H9V9Z"
              fill="#C2A561"
            />
          </svg>
          <!-- Иконка предупреждения -->
          <svg
            v-if="notification.icon == 'warning'"
            width="22"
            height="19"
            viewBox="0 0 22 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11.866 0.999986L21.392 17.5C21.4798 17.652 21.526 17.8244 21.526 18C21.526 18.1755 21.4798 18.348 21.392 18.5C21.3042 18.652 21.178 18.7782 21.026 18.866C20.874 18.9538 20.7015 19 20.526 19H1.474C1.29847 19 1.12603 18.9538 0.974013 18.866C0.821997 18.7782 0.695763 18.652 0.607998 18.5C0.520232 18.348 0.474028 18.1755 0.47403 18C0.474031 17.8244 0.520237 17.652 0.608004 17.5L10.134 0.999986C10.2218 0.847979 10.348 0.721752 10.5 0.633992C10.652 0.546232 10.8245 0.500031 11 0.500031C11.1755 0.500031 11.348 0.546232 11.5 0.633992C11.652 0.721752 11.7782 0.847979 11.866 0.999986ZM3.206 17H18.794L11 3.49999L3.206 17ZM10 14H12V16H10V14ZM10 6.99999H12V12H10V6.99999Z"
              fill="#C2A561"
            />
          </svg>
          <!-- Иконка успешного действия -->
          <svg
            v-if="notification.icon == 'sucsess'"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10 20C4.477 20 0 15.523 0 10C0 4.477 4.477 0 10 0C15.523 0 20 4.477 20 10C20 15.523 15.523 20 10 20ZM10 18C12.1217 18 14.1566 17.1571 15.6569 15.6569C17.1571 14.1566 18 12.1217 18 10C18 7.87827 17.1571 5.84344 15.6569 4.34315C14.1566 2.84285 12.1217 2 10 2C7.87827 2 5.84344 2.84285 4.34315 4.34315C2.84285 5.84344 2 7.87827 2 10C2 12.1217 2.84285 14.1566 4.34315 15.6569C5.84344 17.1571 7.87827 18 10 18V18Z"
              fill="#C2A561"
            />
            <path
              d="M8.21343 13.0151L15.5029 5.75L16.625 6.86746L8.21343 15.25L3.16666 10.2206L4.28799 9.10317L8.21343 13.0151Z"
              fill="#C2A561"
            />
          </svg>
        </div>
        <div class="description" v-html="notification.content"></div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      notificationList: [],
    };
  },
  methods: {
    removeNotificationList(id) {
      this.$store.dispatch('removeOldNotification', id);
    },
  },
  computed: {
    loadNotificationList() {
      return this.$store.state.notification.notificationList;
    },
  },
  // watch: {
  //   loadNotificationList: {
  //     handler: function () {
  //       this.notificationList = this.loadNotificationList;
  //     },
  //     deep: true,
  //   },
  // },
};
</script>
<style lang="scss" scoped>
.notification-list {
  position: absolute;
  bottom: 0;
  width: 386px;
  transform: translateY(100%);
  z-index: 10;

  // max-height: 100px;
  // overflow-y: auto;
  .notification {
    background: #fff;
    width: 100%;
    position: relative;
    margin-bottom: 20px;
    box-shadow: -6px 15px 20px rgba(0, 0, 0, 0.05);
    border-radius: 0px 0px 3px 3px;
    overflow: hidden;
    opacity: 0;
    animation: openNotification 0.6s 0.1s linear;
    animation-fill-mode: forwards;
    @keyframes openNotification {
      0% {
        opacity: 0;
      }
      100% {
        opacity: 1;
      }
    }
    &:last-of-type {
      margin-bottom: 0px;
    }
    .line {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 3px;
      z-index: 1;
    }
    .close {
      position: absolute;
      width: 24px;
      height: 24px;
      top: 10px;
      right: 10px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      z-index: 1;
      cursor: pointer;
      .close__line {
        width: 17px;
        height: 2px;
        background-color: #69645e;
        position: absolute;
        transform-origin: center;
        &:first-of-type {
          transform: rotate(45deg);
        }
        &:last-of-type {
          transform: rotate(-45deg);
        }
      }
    }
    .notification__content {
      display: flex;
      align-items: center;
      padding: 28px 40px 28px 20px;

      .icon {
        width: 24px;
        height: 24px;
        margin-right: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .description {
        flex: 1;
        font-weight: normal;
        font-size: 14px;
        line-height: 155%;
        color: #69645e;
      }
    }
    &.remove {
      overflow: hidden;
      opacity: 1;
      animation: closeNotification 0.5s linear;
      animation-fill-mode: forwards;
      @keyframes closeNotification {
        0% {
          opacity: 1;
          max-height: 150px;
        }
        100% {
          opacity: 0;
          max-height: 0px;
        }
      }
    }
    &.atention {
      .line {
        background-color: #c2a561;
      }
      .icon {
        svg {
          path {
            fill: #c2a561;
          }
        }
      }
    }
    &.error {
      .line {
        background-color: #db4d4d;
      }
      .icon {
        svg {
          path {
            fill: #db4d4d;
          }
        }
      }
    }
    &.sucsess {
      .line {
        background-color: #67b543;
      }
      .icon {
        svg {
          path {
            fill: #67b543;
          }
        }
      }
    }
  }
}
@media screen and (max-width: 768px) {
  .notification-list {
    width: 320px;
    left: calc((100vw - 320px) / 2);
  }
}
</style>
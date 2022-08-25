<template>
  <div class="default-layout">
    <Header :openSidebar="openSidebar" @changeSidebarStatus="openSidebarStatus" />
    <div class="content">
      <Sidebar :openSidebar="openSidebar" @closeSidebar="openSidebarStatus" />
      <div class="page-content">
        <slot />
        <NotificationList />
      </div>
    </div>
  </div>
</template>
<script>
import Header from '@/components/Header.vue';
import Sidebar from '@/components/Sidebar.vue';
import NotificationList from '@/components/NotificationList.vue';
import 'simplebar-vue/dist/simplebar.min.css';
import 'simplebar-vue/dist/simplebar-vue.js';

export default {
  data() {
    return {
      openSidebar: false,
    };
  },
  components: {
    Header,
    Sidebar,
    NotificationList,
  },
  methods: {
    openSidebarStatus(value) {
      value = value == undefined ? !this.openSidebar : value;
      this.openSidebar = value;
    },
  },
};
</script>
<style scoped lang="scss">
.simplebar-content-wrapper {
  outline: none;
}
.default-layout {
  width: 100%;
  height: 100vh;
  max-height: 100vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  .content {
    flex: 1;
    flex-grow: 1;
    display: flex;
    width: 100%;
    position: relative;
    overflow: hidden;
    .page-content {
      position: relative;
      padding: 40px 0px 80px 40px;
      flex: 1;
      height: 100%;
      overflow-x: hidden;
      .notification-list {
        position: fixed;
        transform: translate(0%);
        bottom: 10px;
        right: 30px;
      }
      &::-webkit-scrollbar {
        width: 8px;
      }
      &::-webkit-scrollbar-track {
        // background-color: #fff;
        border-radius: 8px;
      }
      &::-webkit-scrollbar-thumb {
        border-radius: 8px;
        background-color: rgba(0, 0, 0, 0.4);
      }
    }
    .simplebar-track.simplebar-vertical {
      .simplebar-scrollbar {
        &::before {
          opacity: 1 !important;
        }
      }
    }
  }
  @media screen and (max-width: 1500px) {
    .content {
      .page-content {
        padding: 40px 40px 80px 40px;
        position: absolute;
        left: 84px;
        height: 100%;
        width: calc(100% - 84px);
      }
    }
  }

  @media screen and (max-width: 767px) {
    .content {
      .page-content {
        padding: 20px 16px 20px;
        position: relative;
        left: 0;
        height: 100%;
        width: 100%;
      }
    }
  }
}
</style>

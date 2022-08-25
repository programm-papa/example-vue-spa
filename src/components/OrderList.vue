<template>
  <div class="user-order-list">
    <div class="top">
      <div class="title">Список ваших заказов</div>
      <div class="filter" ref="filter_item">
        <div class="filtering-method" v-if="false">
          <div class="drop-down-top" @click="filteringMethodOpen = !filteringMethodOpen">
            <div class="icon">
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.166 2.49967H16.4993C16.7204 2.49967 16.9323 2.58747 17.0886 2.74375C17.2449 2.90003 17.3327 3.11199 17.3327 3.33301V16.6663C17.3327 16.8874 17.2449 17.0993 17.0886 17.2556C16.9323 17.4119 16.7204 17.4997 16.4993 17.4997H1.49935C1.27834 17.4997 1.06637 17.4119 0.910093 17.2556C0.753813 17.0993 0.666016 16.8874 0.666016 16.6663V3.33301C0.666016 3.11199 0.753813 2.90003 0.910093 2.74375C1.06637 2.58747 1.27834 2.49967 1.49935 2.49967H4.83268V0.833008H6.49935V2.49967H11.4993V0.833008H13.166V2.49967ZM15.666 9.16634H2.33268V15.833H15.666V9.16634ZM11.4993 4.16634H6.49935V5.83301H4.83268V4.16634H2.33268V7.49967H15.666V4.16634H13.166V5.83301H11.4993V4.16634ZM3.99935 10.833H5.66602V12.4997H3.99935V10.833ZM8.16602 10.833H9.83268V12.4997H8.16602V10.833ZM12.3327 10.833H13.9993V12.4997H12.3327V10.833Z"
                  fill="#69645E"
                />
              </svg>
            </div>
            {{ filteringMethodSelect }}
            <div class="corner" :class="filteringMethodOpen ? 'open' : 'close'">
              <svg
                width="12"
                height="7"
                viewBox="0 0 12 7"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M1 0.5L6 5.5L11 0.5" stroke="#69645E" />
              </svg>
            </div>
          </div>
          <div class="drop-down-content" v-if="filteringMethodOpen">
            <div
              class="filtering-method-list__item"
              v-for="(item, index) in filteringMethodList"
              :key="index"
              @click="selectFilteringMethod(index), (filteringMethodOpen = false)"
            >
              {{ item }}
            </div>
          </div>
        </div>
        <div class="filtering-order" @click="filteringUserOrder = !filteringUserOrder">
          <div class="icon" :class="filteringUserOrder ? 'open' : 'close'">
            <svg
              width="18"
              height="16"
              viewBox="0 0 18 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.95747 4.625L7.77322 5.80333L5.64927 3.69L5.64927 14.6667H3.97422L3.97422 3.69L1.85111 5.80333L0.666016 4.625L4.81174 0.5L8.95747 4.625ZM17.3327 11.375L13.187 15.5L9.04123 11.375L10.2255 10.1967L12.3503 12.31L12.3494 1.33333L14.0245 1.33333L14.0245 12.31L16.1484 10.1967L17.3327 11.375V11.375Z"
                fill="#69645E"
              />
            </svg>
          </div>
          {{ filteringUserOrderType }}
        </div>
      </div>
    </div>
    <div class="order-list">
      <div class="order-item" v-for="(item, index) of usersOrders" :key="index">
        <div class="order-item__number">№{{ index + 1 }}</div>
        <div class="order-item__name">{{ item.customerName }}</div>
        <div class="order-item__type">Благоустройство могилы</div>
        <div class="order-item__id">#{{ item.orderID }}</div>
        <div class="order-item__status">В работе</div>
      </div>
    </div>
  </div>
  <div
    class="all-order-list"
    v-if="specialRole.includes('MANAGER') || specialRole.includes('ADMIN')"
  >
    <div class="top">
      <div class="title">Список заказов</div>
      <div class="filter" ref="filter_item">
        <div class="filtering-method" v-if="false">
          <div class="drop-down-top" @click="filteringMethodOpen = !filteringMethodOpen">
            <div class="icon">
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.166 2.49967H16.4993C16.7204 2.49967 16.9323 2.58747 17.0886 2.74375C17.2449 2.90003 17.3327 3.11199 17.3327 3.33301V16.6663C17.3327 16.8874 17.2449 17.0993 17.0886 17.2556C16.9323 17.4119 16.7204 17.4997 16.4993 17.4997H1.49935C1.27834 17.4997 1.06637 17.4119 0.910093 17.2556C0.753813 17.0993 0.666016 16.8874 0.666016 16.6663V3.33301C0.666016 3.11199 0.753813 2.90003 0.910093 2.74375C1.06637 2.58747 1.27834 2.49967 1.49935 2.49967H4.83268V0.833008H6.49935V2.49967H11.4993V0.833008H13.166V2.49967ZM15.666 9.16634H2.33268V15.833H15.666V9.16634ZM11.4993 4.16634H6.49935V5.83301H4.83268V4.16634H2.33268V7.49967H15.666V4.16634H13.166V5.83301H11.4993V4.16634ZM3.99935 10.833H5.66602V12.4997H3.99935V10.833ZM8.16602 10.833H9.83268V12.4997H8.16602V10.833ZM12.3327 10.833H13.9993V12.4997H12.3327V10.833Z"
                  fill="#69645E"
                />
              </svg>
            </div>
            {{ filteringMethodSelect }}
            <div class="corner" :class="filteringMethodOpen ? 'open' : 'close'">
              <svg
                width="12"
                height="7"
                viewBox="0 0 12 7"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M1 0.5L6 5.5L11 0.5" stroke="#69645E" />
              </svg>
            </div>
          </div>
          <div class="drop-down-content" v-if="filteringMethodOpen">
            <div
              class="filtering-method-list__item"
              v-for="(item, index) in filteringMethodList"
              :key="index"
              @click="selectFilteringMethod(index), (filteringMethodOpen = false)"
            >
              {{ item }}
            </div>
          </div>
        </div>
        <div class="filtering-order" @click="filteringOrder = !filteringOrder">
          <div class="icon" :class="filteringOrder ? 'open' : 'close'">
            <svg
              width="18"
              height="16"
              viewBox="0 0 18 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.95747 4.625L7.77322 5.80333L5.64927 3.69L5.64927 14.6667H3.97422L3.97422 3.69L1.85111 5.80333L0.666016 4.625L4.81174 0.5L8.95747 4.625ZM17.3327 11.375L13.187 15.5L9.04123 11.375L10.2255 10.1967L12.3503 12.31L12.3494 1.33333L14.0245 1.33333L14.0245 12.31L16.1484 10.1967L17.3327 11.375V11.375Z"
                fill="#69645E"
              />
            </svg>
          </div>
          {{ filteringOrderType }}
        </div>
      </div>
    </div>
    <div class="order-list">
      <div class="order-item" v-for="(item, index) of allOrders" :key="index">
        <div class="order-item__number">№{{ index + 1 }}</div>
        <div class="order-item__name">{{ item.customerName }}</div>
        <div class="order-item__type">Благоустройство могилы</div>
        <div class="order-item__id">#{{ item.orderID }}</div>
        <div class="order-item__status">В работе</div>
      </div>
    </div>
  </div>
</template>
<script>
import api from '@/api';

export default {
  data() {
    return {
      //Порядок фильтрации списка всех заказов
      filteringOrder: false,
      allOrders: [],
      //Порядок фильтрации заказов пользователя
      filteringUserOrder: false,
      usersOrders: [],
    };
  },
  computed: {
    specialRole() {
      return this.$store.state.auth.userData.roles;
    },
    filteringOrderType() {
      return this.filteringOrder ? 'по возрастанию' : 'по убыванию';
    },
    filteringUserOrderType() {
      return this.filteringUserOrder ? 'по возрастанию' : 'по убыванию';
    },
  },
  methods: {
    loadOrderList: async function () {
      console.log('orders');
      const orderList = await api.order.getOrderList({});
      console.log(orderList.data.orders);
      this.usersOrders = orderList.data.orders.userGraveOrder;
      this.allOrders = orderList.data.orders.graveOrder;
    },
  },
  mounted() {
    this.loadOrderList();
  },
};
</script>
<style lang="scss" scoped>
.user-order-list {
  margin-bottom: 100px;
  .top {
    display: flex;
    align-items: flex-end;
    gap: 30px;
    margin-bottom: 30px;
    .title {
      font-style: normal;
      font-weight: 500;
      font-size: 32px;
      line-height: 32px;
      color: #69645e;
    }
    .filter {
      display: flex;
      align-items: center;
      gap: 40px;
      .filtering-order {
        display: flex;
        align-items: center;
        gap: 10px;
        width: 160px;
        //стили текста
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 135%;
        color: #69645e;
        cursor: pointer;
        .icon {
          width: 20px;
          height: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          &.open {
            transform: scale(1, -1);
          }
        }
      }
    }
  }
  .order-list {
    max-width: 1010px;
    display: flex;
    flex-direction: column;
    .order-item {
      display: flex;
      align-items: center;
      padding: 30px 30px;
      &:hover {
        cursor: pointer;
        background: #f9f6f0;
      }
      &__number {
        width: 70px;
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 21px;
        color: #69645e;
      }
      &__name {
        width: 240px;
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 21px;
        color: #69645e;
      }
      &__type {
        width: 250px;
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 21px;
        color: #b0b0b0;
      }
      &__id {
        width: 140px;
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 21px;
        color: #69645e;
      }
      &__status {
        width: 140px;
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 21px;
        color: #69645e;
      }
    }
  }
}
.all-order-list {
  .top {
    display: flex;
    align-items: flex-end;
    gap: 30px;
    margin-bottom: 30px;
    .title {
      font-style: normal;
      font-weight: 500;
      font-size: 32px;
      line-height: 32px;
      color: #69645e;
    }
    .filter {
      display: flex;
      align-items: center;
      gap: 40px;
      .filtering-order {
        display: flex;
        align-items: center;
        gap: 10px;
        width: 160px;
        //стили текста
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 135%;
        color: #69645e;
        cursor: pointer;
        .icon {
          width: 20px;
          height: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          &.open {
            transform: scale(1, -1);
          }
        }
      }
    }
  }
  .order-list {
    max-width: 1010px;
    display: flex;
    flex-direction: column;
    .order-item {
      display: flex;
      align-items: center;
      padding: 30px 30px;
      &:hover {
        cursor: pointer;
        background: #f9f6f0;
      }
      &__number {
        width: 70px;
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 21px;
        color: #69645e;
      }
      &__name {
        width: 240px;
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 21px;
        color: #69645e;
      }
      &__type {
        width: 250px;
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 21px;
        color: #b0b0b0;
      }
      &__id {
        width: 140px;
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 21px;
        color: #69645e;
      }
      &__status {
        width: 140px;
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 21px;
        color: #69645e;
      }
    }
  }
}

@media screen and (max-width: 768px) {
  .user-order-list {
    .top {
      flex-direction: column;
      align-items: flex-start;
    }
    .order-list {
      .order-item {
        padding: 20px 0px;
        display: grid;
        grid-template-columns: 40px 140px 140px;
        gap: 15px;
        grid-auto-rows: auto;
        grid-template-areas: 'number name name' '. type type' '. id status';
        &__number {
          grid-area: number;
        }
        &__name {
          grid-area: name;
        }
        &__type {
          grid-area: type;
        }
        &__id {
          grid-area: id;
        }
        &__status {
          grid-area: status;
        }
      }
    }
  }
  .all-order-list {
    .top {
      flex-direction: column;
      align-items: flex-start;
    }
    .order-list {
      .order-item {
        padding: 20px 0px;
        display: grid;
        grid-template-columns: 40px 140px 140px;
        gap: 15px;
        grid-auto-rows: auto;
        grid-template-areas: 'number name name' '. type type' '. id status';
        &__number {
          grid-area: number;
        }
        &__name {
          grid-area: name;
        }
        &__type {
          grid-area: type;
        }
        &__id {
          grid-area: id;
        }
        &__status {
          grid-area: status;
        }
      }
    }
  }
}
</style>

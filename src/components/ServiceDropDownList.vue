<template>
  <div class="drop-list" :class="droplistClass" ref="droplist">
    <div class="drop-list__name" @click="openDropList()">{{ serviceName }}</div>
    <div class="list-variants">
      <div class="line"></div>
      <input type="text" placeholder="поиск..." v-model="searchInput" />
      <div class="line"></div>
      <div class="variants" data-simplebar>
        <template v-for="(variant, vIndex) in localeServiceList" :key="'variant' + vIndex">
          <div
            class="variant"
            v-if="!variant.selected"
            @click="selectServicesVariant(vIndex, variant.name)"
          >
            {{ variant.name }}
          </div>
        </template>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ['serviceList', 'inputValue', 'serviceItemId'],
  data() {
    return {
      droplistOpen: false,
      droplistClass: '',
      localeServiceList: [],
      searchInput: '',
    };
  },
  computed: {
    serviceName() {
      return this.inputValue == '' ? 'Выберите услугу' : this.inputValue;
    },
  },
  methods: {
    openDropList() {
      this.droplistOpen = !this.droplistOpen;
    },
    closeDropList: function(e) {
      if (this.droplistOpen) {
        let el = this.$refs.droplist;
        let target = e.target;
        if (el !== target && !el.contains(target)) {
          this.droplistOpen = false;
        }
      }
    },
    selectServicesVariant(vIndex, variantName) {
      this.droplistOpen = false;
      this.searchInput = '';
      this.$emit('selectVariant', {
        index: vIndex,
        variantName: variantName,
        serviceItemId: this.serviceItemId,
      });
    },
  },
  watch: {
    droplistOpen: function () {
      if (this.droplistOpen) {
        this.droplistClass = 'open';
      } else {
        this.droplistClass = '';
      }
    },
    serviceList: {
      handler: function () {
        this.localeServiceList = copy(this.serviceList);
      },
      deep: true,
    },
    searchInput: function () {
      this.localeServiceList = [];
      if (this.searchInput != '') {
        this.localeServiceList = copy(this.serviceList);
        this.localeServiceList.forEach((element, index) => {
          if (element.name.toLowerCase().includes(this.searchInput.toLowerCase())) {
            if (!this.serviceList[index].selected) {
              this.localeServiceList[index].selected = false;
            }
          } else {
            this.localeServiceList[index].selected = true;
          }
        });
      } else {
        this.localeServiceList = copy(this.serviceList);
      }
    },
  },
  mounted() {
    document.addEventListener('click', this.closeDropList);
    this.localeServiceList = copy(this.serviceList);
  },
  beforeUnmount() {
    document.removeEventListener('click', this.closeDropList);
  },
};

function copy(arr) {
  return JSON.parse(JSON.stringify(arr));
}
</script>
<style scoped lang="scss">
.drop-list {
  position: relative;
  z-index: 1;
  .drop-list__name {
    width: 100%;
    height: 48px;
    display: flex;
    align-items: center;
    cursor: pointer;
    background: #f2f2f2;
    border-radius: 3px;
    border: none;
    outline: none;
    padding: 0px 14px;
    //Стили текста
    font-weight: normal;
    font-size: 18px;
    line-height: 21px;
    color: #69645e;
  }
  .list-variants {
    position: absolute;
    z-index: 1;
    top: 48px;
    height: 262px;
    width: 100%;
    background: #f2f2f2;
    max-height: 0px;
    transition: max-height 0.3s;
    overflow: hidden;
    .line {
      height: 1px;
      width: 100%;
      background: #69645e;
    }
    input {
      width: 100%;
      height: 48px;
      background: #f2f2f2;
      border-radius: 3px;
      border: none;
      outline: none;
      padding: 0px 14px;
      //Стили текста
      font-weight: normal;
      font-size: 18px;
      line-height: 21px;
      color: #69645e;
      &:focus {
        background: #ebebeb;
        //Стили текста
        color: #69645e;
      }
      &::placeholder {
        color: #bdbdbd;
        opacity: 0.6;
      }
    }
    .variants {
      max-height: 212px;
      .variant {
        width: 100%;
        height: 48px;
        background: #f2f2f2;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        position: relative;
        cursor: pointer;
        padding: 0px 14px;
        //Стили текста
        font-weight: normal;
        font-size: 18px;
        line-height: 21px;
        color: #b0b0b0;
        &::before {
          width: calc(100% - 28px);
          height: 1px;
          background: #dedede;
          content: '';
          position: absolute;
          bottom: 0;
        }
        &:hover {
          background: #f9f6f0;
          color: #c2a561;
        }
      }
    }
    //Скролбар
    .simplebar-vertical {
      .simplebar-scrollbar {
        &::before {
          opacity: 1 !important;
        }
      }
    }
    // border-top: 1px solid #69645E;
  }
  &.open {
    .list-variants {
      max-height: 262px;
      transition: max-height 0.6s;
      .variants {
        overflow: auto;
      }
    }
  }
}
</style>

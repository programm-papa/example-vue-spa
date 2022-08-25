<template>
  <div class="order-grave" :class="formErrorClass">
    <div class="order-title" :style="orderConfirmation ? 'pointer-events: none;' : ''">
      Наряд-заказ на благоустройство могилы
      <!-- <span class="order-number">№Н1</span> -->
      <div class="warning-required">* — поля, обязательные для заполнения</div>
    </div>
    <div class="contact-information" :style="orderConfirmation ? 'pointer-events: none;' : ''">
      <div class="block-title">Контактная информация</div>
      <div class="contact-block customer">
        <div class="input-block customer__name">
          <label for="customer__name">Ф.И.О. заказчика<span class="required-star">*</span></label>
          <input
            type="text"
            name="customer__name"
            v-model="customerName"
            placeholder="Ф.И.О."
            id="customer__name_required"
          />
        </div>
        <div class="input-block customer__phone">
          <label for="customer__phone">Номер телефона<span class="required-star">*</span></label>
          <input
            type="tel"
            name="customer__phone"
            v-model="customerPhone"
            placeholder="+7 (964) 000-00-00"
            id="customer__phone_required"
          />
        </div>
        <div class="input-block customer__address">
          <label for="customer__address">Адрес</label>
          <input
            type="text"
            name="customer__address"
            v-model="customerAddress"
            placeholder="г. Великий Новгород, ул. ..."
          />
        </div>
        <div class="input-block customer__email">
          <label for="customer__name">Email</label>
          <input
            type="text"
            name="customer__name"
            v-model="customerEmail"
            placeholder="template@mail.ru"
          />
        </div>
      </div>
      <div class="contact-block deceased">
        <div class="input-block deceased__name">
          <label for="deceased__name">Ф.И.О. покойного<span class="required-star">*</span></label>
          <input
            type="text"
            name="deceased__name"
            v-model="deceasedName"
            placeholder="Ф.И.О."
            id="deceased__name_required"
          />
        </div>
        <div class="input-block deceased__phone">
          <label for="deceased__phone">Место установки<span class="required-star">*</span></label>
          <input
            type="text"
            name="deceased__phone"
            v-model="deceasedInstallationAddress"
            placeholder="Ермолинское кладбище"
            id="deceased__installation_required"
          />
        </div>
        <div class="deceased__region">
          <div class="input-block region__number">
            <label for="region__number">Участок<span class="required-star">*</span></label>
            <input
              type="text"
              name="region__number"
              v-model="deceasedRegion"
              placeholder="№ участка"
              id="deceased__region-number_required"
            />
          </div>
          <div class="input-block region__row">
            <label for="region__row">Ряд<span class="required-star">*</span></label>
            <input
              type="text"
              name="region__row"
              v-model="deceasedRow"
              placeholder="№ ряда"
              id="deceased__region-row_required"
            />
          </div>
          <div class="input-block region__place">
            <label for="region__place">Место<span class="required-star">*</span></label>
            <input
              type="text"
              name="region__place"
              v-model="deceasedPlace"
              placeholder="№ места"
              id="deceased__region-place_required"
            />
          </div>
        </div>
      </div>
    </div>

    <div class="list-services" :style="orderConfirmation ? 'pointer-events: none;' : ''">
      <div class="block-title">Список оказываемых услуг<span class="required-star">*</span></div>
      <div class="list-services-block">
        <div
          class="service-item"
          v-for="(item, index) in addedServiceData"
          :key="'service-item' + index"
        >
          <div class="service-item__remove" @click="deleteServices(index)">
            <div class="text">Удалить услугу</div>
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.166 4.99984H18.3327V6.6665H16.666V17.4998C16.666 17.7209 16.5782 17.9328 16.4219 18.0891C16.2657 18.2454 16.0537 18.3332 15.8327 18.3332H4.16602C3.945 18.3332 3.73304 18.2454 3.57676 18.0891C3.42048 17.9328 3.33268 17.7209 3.33268 17.4998V6.6665H1.66602V4.99984H5.83268V2.49984C5.83268 2.27882 5.92048 2.06686 6.07676 1.91058C6.23304 1.7543 6.445 1.6665 6.66602 1.6665H13.3327C13.5537 1.6665 13.7657 1.7543 13.9219 1.91058C14.0782 2.06686 14.166 2.27882 14.166 2.49984V4.99984ZM14.9993 6.6665H4.99935V16.6665H14.9993V6.6665ZM11.1777 11.6665L12.651 13.1398L11.4727 14.3182L9.99935 12.8448L8.52602 14.3182L7.34768 13.1398L8.82102 11.6665L7.34768 10.1932L8.52602 9.01484L9.99935 10.4882L11.4727 9.01484L12.651 10.1932L11.1777 11.6665ZM7.49935 3.33317V4.99984H12.4993V3.33317H7.49935Z"
                fill="#B0B0B0"
              />
            </svg>
          </div>
          <div class="service__number">{{ index + 1 }}</div>
          <div class="input-block service__name">
            <label>Наименование услуги</label>
            <ServiceDropDownList
              :serviceList="loadGravelServiceList"
              :inputValue="item.name"
              :serviceItemId="index"
              @selectVariant="selectServicesVariant"
            />
          </div>
          <div class="specifications">
            <div class="size input-block">
              <label for="">Размер</label>
              <input
                type="number"
                min="0"
                placeholder="100"
                v-model="item.quantity"
                @input="changeQuantityValue(index)"
              />
            </div>
            <div class="measurement input-block">
              <label for="">Ед. изм.</label>
              <input type="text" placeholder="п/м" :value="item.measurement" />
            </div>
            <div class="price-measurement input-block">
              <label for="">Цена за ед., руб.</label>
              <div class="price-wrapper">
                <input
                  type="number"
                  min="0"
                  placeholder="1600"
                  v-model="item.priceMeasurement"
                  @input="changeServiceMeasurementPriceValue(index)"
                />
              </div>
            </div>
            <div class="price input-block">
              <label for="">Сумма, руб.</label>
              <div class="price-wrapper">
                <input
                  type="number"
                  min="0"
                  placeholder="1600"
                  v-model="item.price"
                  @input="changeServicePriceValue(index)"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="add-new-service" @click="createNewServices">+ Добавить услугу</div>
    </div>

    <div class="additional-services" :style="orderConfirmation ? 'pointer-events: none;' : ''">
      <div class="block-title">Дополнительные услуги</div>
      <textarea
        class="additional-services__description"
        name="additionalDescription"
        placeholder="Описание дополнительных услуг"
        v-model="additionalServices"
      ></textarea>
    </div>

    <div class="confirmation-payment-block">
      <div class="column" id="column1">
        <div class="cost-calculation" :style="orderConfirmation ? 'pointer-events: none;' : ''">
          <div class="block-title">Расчёт стоимости<span class="required-star">*</span></div>
          <div class="cost-calculation__specifications">
            <div class="order-amount">
              <label for="">Сумма заказа</label>
              <div class="amount">
                {{ Intl.NumberFormat('ru', { style: 'decimal' }).format(amountOrder) }} руб.
              </div>
            </div>
            <div class="payment-type">
              <label>Тип оплаты</label>
              <CustomCheckbox
                :checkboxStyle="'verticale'"
                :checkboxType="'payment_type'"
                :defaultSelect="paymentType"
                :radioList="paymentTypeCheckbox"
                @resultSelectCheckbox="handlerSelectCheckbox"
              />
            </div>
            <div class="discount">
              <label>Скидка</label>
              <div class="discount__inputs">
                <input type="number" min="0" v-model="discountOrder" />
                <CustomCheckbox
                  :checkboxStyle="'verticale'"
                  :checkboxType="'discoun_type'"
                  :defaultSelect="discountType"
                  :radioList="discountTypeCheckbox"
                  @resultSelectCheckbox="handlerSelectCheckbox"
                />
              </div>
            </div>
            <div class="prepayment" v-if="showPrepaymentBlock">
              <label>Размер аванса</label>
              <div class="prepayment__inputs">
                <input type="number" min="0" v-model="prepaymentOrder" />
                <CustomCheckbox
                  :checkboxStyle="'verticale'"
                  :checkboxType="'prepayment_type'"
                  :defaultSelect="prepaymentType"
                  :radioList="discountTypeCheckbox"
                  @resultSelectCheckbox="handlerSelectCheckbox"
                />
              </div>
            </div>
          </div>
          <div class="cost-calculation__final-prices">
            <div class="payment-price">
              <div class="block-title">К оплате</div>
              <div class="final_cost">
                {{ Intl.NumberFormat('ru', { style: 'decimal' }).format(finalCost) }} руб.
              </div>
            </div>
            <div class="payment-method">
              <CustomCheckbox
                :checkboxStyle="'horizontal'"
                :checkboxType="'payment_method'"
                :defaultSelect="paymentMethod"
                :radioList="paymentMethodCheckbox"
                @resultSelectCheckbox="handlerSelectCheckbox"
              />
            </div>
          </div>
          <div class="signature-adaptive-block" v-if="orderConfirmation">
            <div class="block-title">Подпись заказчика</div>
            <div class="signature">
              <img :src="signatureImgUrl" alt="signature" />
            </div>
          </div>
        </div>
        <div class="order-confirmation">
          <div class="order-confirmation__button" @click="confirmOrder">
            {{ orderConfirmation ? 'создать заказ' : 'подтвердить заказ' }}
          </div>
          <div
            class="order-confirmation__cancellation"
            v-if="orderConfirmation"
            @click="cancelOrderCreation"
          >
            Вернуться к редактированию заказа
          </div>
        </div>
      </div>
      <div class="column" id="column2" :style="orderConfirmation ? 'pointer-events: none;' : ''">
        <div class="deadlines-implementation">
          <div class="block-title">Сроки выполнения работ</div>
          <div class="deadlines-implementation__periods">
            <div class="start-work">
              <label for="">Начало работ<span class="required-star">*</span></label>
              <input type="date" v-model="startDate" id="start-date_required" />
            </div>
            <div class="end-work">
              <label for="">Окончание работ<span class="required-star">*</span></label>
              <input type="date" v-model="endedDate" id="end-date_required" />
            </div>
          </div>
        </div>
        <div class="comment-order">
          <div class="block-title">Комментарий к заказу</div>
          <textarea
            name=""
            class="comment-order__textarea"
            placeholder="Текст комментария"
            v-model="orderComment"
          ></textarea>
          <div class="upload-files__wrapper">
            <div class="upload-files">
              <input type="file" id="upload-files__input" @change="previewFiles" accept="image/*" />
              <label for="upload-files__input">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2.63449 17.3655C3.07379 17.8054 3.59568 18.1542 4.17019 18.3918C4.7447 18.6294 5.3605 18.7511 5.9822 18.75C6.60404 18.7511 7.21997 18.6293 7.79462 18.3917C8.36928 18.1542 8.89135 17.8054 9.33085 17.3655L12.009 14.6865L10.6699 13.3475L7.99177 16.0265C7.4581 16.5578 6.73571 16.856 5.98267 16.856C5.22963 16.856 4.50725 16.5578 3.97358 16.0265C3.44183 15.4931 3.14324 14.7707 3.14324 14.0175C3.14324 13.2643 3.44183 12.5419 3.97358 12.0085L6.65269 9.33046L5.3136 7.99145L2.63449 10.6695C1.7479 11.5582 1.25 12.7622 1.25 14.0175C1.25 15.2728 1.7479 16.4768 2.63449 17.3655V17.3655ZM17.3663 9.33046C18.2524 8.44153 18.75 7.23758 18.75 5.98245C18.75 4.72731 18.2524 3.52336 17.3663 2.63443C16.4776 1.74788 15.2735 1.25 14.0181 1.25C12.7628 1.25 11.5587 1.74788 10.6699 2.63443L7.99177 5.31341L9.33085 6.65243L12.009 3.97345C12.5427 3.44219 13.2651 3.14393 14.0181 3.14393C14.7711 3.14393 15.4935 3.44219 16.0272 3.97345C16.559 4.50685 16.8575 5.22929 16.8575 5.98245C16.8575 6.7356 16.559 7.45804 16.0272 7.99145L13.3481 10.6695L14.6872 12.0085L17.3663 9.33046Z"
                    fill="#C2A561"
                  />
                  <path
                    d="M6.2505 13.75L5 12.5003L12.5004 5L13.75 6.25063L6.2505 13.75Z"
                    fill="#C2A561"
                  />
                </svg>
                <div class="text">Прикрепить файл</div>
              </label>
              <div class="upload-files_name">{{ fileName }}</div>
            </div>
          </div>
        </div>
        <div class="signature-block" v-if="orderConfirmation">
          <div class="block-title">Подпись заказчика</div>
          <div class="signature">
            <img :src="signatureImgUrl" alt="signature" />
          </div>
        </div>
      </div>
    </div>
  </div>
  <PopUpSignatures
    v-if="signaturesPopUp"
    @saveSign="saveSignaturesPopUp"
    @closeSign="closeSignaturesPopUp"
  />
</template>
<script>
import 'simplebar-vue/dist/simplebar.min.css';
import 'simplebar-vue/dist/simplebar-vue.js';
import ServiceDropDownList from '../components/ServiceDropDownList.vue';
import CustomCheckbox from '../components/CustomCheckbox.vue';
import PopUpSignatures from '../components/PopUpSignatures.vue';

export default {
  data() {
    return {
      formErrorClass: '',
      showPrepaymentBlock: false,
      paymentTypeCheckbox: [
        {
          variant: 'withoutPrepayment',
          description: 'без предоплаты',
        },
        {
          variant: 'prepayment',
          description: 'авансовый платёж',
        },
        {
          variant: 'payment',
          description: 'полный расчёт',
        },
      ],
      discountTypeCheckbox: [
        {
          variant: 'percent',
          description: '%',
        },
        {
          variant: 'currency',
          description: 'руб.',
        },
      ],
      paymentMethodCheckbox: [
        {
          variant: 'card',
          description: 'банковской картой',
        },
        {
          variant: 'cash',
          description: 'наличными',
        },
      ],
      addedServiceData: [],
      signaturesPopUp: false,
      fileName: '',
    };
  },
  computed: {
    //Информация о заказчике
    customerName: {
      get: function () {
        return this.$store.state.gravelOrder.customer.customerName;
      },
      set: function (newValue) {
        if (this.formErrorClass == 'customer__name_required') {
          this.formErrorClass = '';
        }
        this.$store.dispatch('updateCustomerData', { customerDataType: 'customerName', newValue });
      },
    },
    customerPhone: {
      get: function () {
        return this.$store.state.gravelOrder.customer.customerPhone;
      },
      set: function (newValue) {
        if (this.formErrorClass == 'customer__phone_required') {
          this.formErrorClass = '';
        }
        this.$store.dispatch('updateCustomerData', { customerDataType: 'customerPhone', newValue });
      },
    },
    customerAddress: {
      get: function () {
        return this.$store.state.gravelOrder.customer.customerAddress;
      },
      set: function (newValue) {
        this.$store.dispatch('updateCustomerData', {
          customerDataType: 'customerAddress',
          newValue,
        });
      },
    },
    customerEmail: {
      get: function () {
        return this.$store.state.gravelOrder.customer.customerEmail;
      },
      set: function (newValue) {
        this.$store.dispatch('updateCustomerData', { customerDataType: 'customerEmail', newValue });
      },
    },
    //Информация о покойном
    deceasedName: {
      get: function () {
        return this.$store.state.gravelOrder.deceased.deceasedName;
      },
      set: function (newValue) {
        if (this.formErrorClass == 'deceased__name_required') {
          this.formErrorClass = '';
        }
        this.$store.dispatch('updateDeceasedData', {
          deceasedDataType: 'deceasedName',
          newValue,
        });
      },
    },
    deceasedInstallationAddress: {
      get: function () {
        return this.$store.state.gravelOrder.deceased.deceasedInstallationAddress;
      },
      set: function (newValue) {
        if (this.formErrorClass == 'deceased__installation_required') {
          this.formErrorClass = '';
        }
        this.$store.dispatch('updateDeceasedData', {
          deceasedDataType: 'deceasedInstallationAddress',
          newValue,
        });
      },
    },
    deceasedRegion: {
      get: function () {
        return this.$store.state.gravelOrder.deceased.deceasedRegion;
      },
      set: function (newValue) {
        if (this.formErrorClass == 'deceased__region-number_required') {
          this.formErrorClass = '';
        }
        this.$store.dispatch('updateDeceasedData', {
          deceasedDataType: 'deceasedRegion',
          newValue,
        });
      },
    },
    deceasedRow: {
      get: function () {
        return this.$store.state.gravelOrder.deceased.deceasedRow;
      },
      set: function (newValue) {
        if (this.formErrorClass == 'deceased__region-row_required') {
          this.formErrorClass = '';
        }
        this.$store.dispatch('updateDeceasedData', {
          deceasedDataType: 'deceasedRow',
          newValue,
        });
      },
    },
    deceasedPlace: {
      get: function () {
        return this.$store.state.gravelOrder.deceased.deceasedPlace;
      },
      set: function (newValue) {
        if (this.formErrorClass == 'deceased__region-place_required') {
          this.formErrorClass = '';
        }
        this.$store.dispatch('updateDeceasedData', {
          deceasedDataType: 'deceasedPlace',
          newValue,
        });
      },
    },
    //Список добавленных услуг
    loadAddedServiceGravelOrder() {
      return this.$store.state.gravelOrder.addedServiceGravelOrder;
    },
    //Список доступных для заказа услуг
    loadGravelServiceList() {
      return this.$store.state.gravelOrder.gravelServiceList;
    },
    //описание дополнительных услуг
    additionalServices: {
      get: function () {
        return this.$store.state.gravelOrder.additionalServices;
      },
      set: function (newValue) {
        this.$store.dispatch('updateAdditionalServices', newValue);
      },
    },
    //Стоимость заказа (общая)
    amountOrder() {
      return this.$store.state.gravelOrder.amount;
    },
    //Вариант оплаты
    paymentType() {
      return this.$store.state.gravelOrder.paymentType;
    },
    //Скидка
    discountOrder: {
      get: function () {
        return this.$store.state.gravelOrder.discount;
      },
      set: function (newValue) {
        this.$store.dispatch('updateDiscount', newValue);
      },
    },
    //Тип скидки
    discountType() {
      return this.$store.state.gravelOrder.discountType;
    },
    //Аванс
    prepaymentOrder: {
      get: function () {
        return this.$store.state.gravelOrder.prepayment;
      },
      set: function (newValue) {
        this.$store.dispatch('updatePrepayment', newValue);
      },
    },
    //Тип аванса
    prepaymentType() {
      return this.$store.state.gravelOrder.prepaymentType;
    },
    //Стоимость к оплате
    finalCost() {
      return this.$store.state.gravelOrder.finalCost;
    },
    //Метод оплаты
    paymentMethod() {
      return this.$store.state.gravelOrder.paymentMethod;
    },
    //Дедлайны
    //Стартовая дата
    startDate: {
      get: function () {
        return this.$store.state.gravelOrder.startDate;
      },
      set: function (newValue) {
        if (this.formErrorClass == 'start-date_required') {
          this.formErrorClass = '';
        }
        this.$store.dispatch('updateStartDate', newValue);
      },
    },
    //Конечная дата
    endedDate: {
      get: function () {
        return this.$store.state.gravelOrder.endedDate;
      },
      set: function (newValue) {
        if (this.formErrorClass == 'end-date_required') {
          this.formErrorClass = '';
        }
        this.$store.dispatch('updateEndedDate', newValue);
      },
    },
    //Комментарий к заказу
    orderComment: {
      get: function () {
        return this.$store.state.gravelOrder.orderComment;
      },
      set: function (newValue) {
        this.$store.dispatch('updateOrderComment', newValue);
      },
    },
    //Текст подтверждающей кнопки
    orderConfirmation() {
      // if (this.$store.state.gravelOrder.orderСonfirmation) {
      //   return 'создать заказ';
      // } else {
      //   return 'подтвердить заказ';
      // }
      return this.$store.state.gravelOrder.orderСonfirmation;
    },
    //Изменение подписи
    signatureImgUrl: {
      get: function () {
        return this.$store.state.gravelOrder.signatureImgUrl;
      },
      set: function (newValue) {
        this.signaturesPopUp = false;
        if (newValue != '') {
          this.$store.dispatch('updateSignatureImgUrl', newValue);
          this.$store.dispatch('updateOrderСonfirmation', true);
        }
      },
    },
  },
  methods: {
    selectServicesVariant(value) {
      this.$store.dispatch('selectServicesVariant', value);
    },
    createNewServices() {
      this.$store.dispatch('createNewServices');
    },
    deleteServices(serviceItemId) {
      this.$store.dispatch('deleteServices', serviceItemId);
    },
    //Изменение количества ед. услуги
    changeQuantityValue(serviceItemId) {
      const newValue = this.addedServiceData[serviceItemId].quantity;
      this.$store.dispatch('updateServiceQuantityValue', { newValue, serviceItemId });
    },
    //Изменение цены/ед
    changeServiceMeasurementPriceValue(serviceItemId) {
      const newValue = this.addedServiceData[serviceItemId].priceMeasurement;
      this.$store.dispatch('updateServiceMeasurementPriceValue', { newValue, serviceItemId });
    },
    //Изменение общей цены
    changeServicePriceValue(serviceItemId) {
      const newValue = this.addedServiceData[serviceItemId].price;
      // console.log('changeServicePriceValue -> newValue-->' + newValue);
      this.$store.dispatch('updateServicePriceValue', { newValue, serviceItemId });
    },
    // changeServiceMeasurementPriceValue(serviceItemId) {
    //   const newValue = this.addedServiceData[serviceItemId].priceMeasurement;
    //   this.$store.dispatch('updateServiceMeasurementPriceValue', { newValue, serviceItemId });
    // },
    handlerSelectCheckbox(value) {
      if (value.checkboxType == 'payment_type') {
        if (value.select == 'prepayment') {
          this.showPrepaymentBlock = true;
        } else {
          this.showPrepaymentBlock = false;
        }
        this.$store.dispatch('updatePaymentType', value.select);
      } else if (value.checkboxType == 'discoun_type') {
        this.$store.dispatch('updateDiscounType', value.select);
      } else if (value.checkboxType == 'payment_method') {
        this.$store.dispatch('updatePaymentMethod', value.select);
      } else if (value.checkboxType == 'prepayment_type') {
        this.$store.dispatch('updatePrepaymentType', value.select);
      }
    },

    cancelOrderCreation() {
      this.$store.dispatch('updateSignatureImgUrl', '');
      this.$store.dispatch('updateOrderСonfirmation', false);
      this.$store.dispatch('createNewNotification', {
        type: 'atention',
        icon: 'information',
        content: 'После изменения <b>не забудьте повторно подвердить заказ</b>',
        time: '5000',
      });
    },
    saveSignaturesPopUp(value) {
      this.signatureImgUrl = value.signaturesImg;
    },
    closeSignaturesPopUp() {
      this.signaturesPopUp = false;
    },
    previewFiles(event) {
      //Кодирование png в base64
      const file = event.target.files[0];
      this.fileName = file.name;
      const reader = new FileReader();
      reader.readAsBinaryString(file);

      reader.onload = function () {
        this.$store.dispatch(
          'updateUploadImage',
          'data:' + file.type + ';base64,' + btoa(reader.result),
        );
      }.bind(this);
      reader.onerror = function () {};
    },
    confirmOrder() {
      if (this.$store.state.gravelOrder.orderСonfirmation) {
        this.$store.dispatch('createOrder');
        return 'создать заказ';
      } else {
        //Проверки заполнения обязательных полей
        const re = /^\s*$/;
        //Проверка имени заказчика
        if (this.customerName && !re.test(this.customerName)) {
          //Проверка телефона заказчика
          if (this.customerPhone && !re.test(this.customerName)) {
            //Проверка имени покойного
            if (this.deceasedName && !re.test(this.deceasedName)) {
              //Проверка места захоранения
              if (this.deceasedInstallationAddress && !re.test(this.deceasedInstallationAddress)) {
                //Проверка номера участка
                if (this.deceasedRegion && !re.test(this.deceasedRegion)) {
                  //Проверка номера  ряда захоронения
                  if (this.deceasedRow && !re.test(this.deceasedRow)) {
                    //Проверка номера  места захоронения
                    if (this.deceasedPlace && !re.test(this.deceasedPlace)) {
                      //Проверка заполнения услуг
                      if (this.addedServiceData.length && this.addedServiceData[0].name !== '') {
                        //Проверка даты начала выполнения работ
                        if (this.startDate && !re.test(this.startDate)) {
                          //Проверка даты окончания выполнения работ
                          if (this.endedDate && !re.test(this.endedDate)) {
                            this.signaturesPopUp = true;
                            return;
                          }
                          this.formErrorClass = 'end-date_required';
                          this.$store.dispatch('createNewNotification', {
                            type: 'error',
                            icon: 'warning',
                            content: 'Укажите дату окончания работ.',
                            time: '7000',
                          });
                          return;
                        }
                        this.formErrorClass = 'start-date_required';
                        this.$store.dispatch('createNewNotification', {
                          type: 'error',
                          icon: 'warning',
                          content: 'Укажите дату начала работ.',
                          time: '5000',
                        });
                        return;
                      }
                      this.formErrorClass = '';
                      this.$store.dispatch('createNewNotification', {
                        type: 'error',
                        icon: 'warning',
                        content: 'Надо заполнить <b>минимум 1 услугу</b>',
                        time: '7000',
                      });
                      return;
                    }
                    this.formErrorClass = 'deceased__region-place_required';
                    this.$store.dispatch('createNewNotification', {
                      type: 'error',
                      icon: 'warning',
                      content: 'Номер места установки не может быть пустым.',
                      time: '5000',
                    });
                    return;
                  }
                  this.formErrorClass = 'deceased__region-row_required';
                  this.$store.dispatch('createNewNotification', {
                    type: 'error',
                    icon: 'warning',
                    content: 'Номер ряда установки не может быть пустым.',
                    time: '5000',
                  });
                  return;
                }
                this.formErrorClass = 'deceased__region-number_required';
                this.$store.dispatch('createNewNotification', {
                  type: 'error',
                  icon: 'warning',
                  content: 'Номер участка установки не может быть пустым.',
                  time: '5000',
                });
                return;
              }
              this.formErrorClass = 'deceased__installation_required';
              this.$store.dispatch('createNewNotification', {
                type: 'error',
                icon: 'warning',
                content: 'Место установки не может быть пустым.',
                time: '5000',
              });
              return;
            }
            this.formErrorClass = 'deceased__name_required';
            this.$store.dispatch('createNewNotification', {
              type: 'error',
              icon: 'warning',
              content: 'ФИО покойного не может быть пустым.',
              time: '5000',
            });
            return;
          }
          this.formErrorClass = 'customer__phone_required';
          this.$store.dispatch('createNewNotification', {
            type: 'error',
            icon: 'warning',
            content: 'Телефон заказчика не может быть пустым.',
            time: '5000',
          });
          return;
        }
        this.formErrorClass = 'customer__name_required';
        this.$store.dispatch('createNewNotification', {
          type: 'error',
          icon: 'warning',
          content: 'ФИО заказчика не может быть пустым.',
          time: '5000',
        });
        return;

        //this.signaturesPopUp = true;
      }
    },
  },
  watch: {
    loadAddedServiceGravelOrder: {
      handler: function () {
        // this.store.dispatch()
        this.addedServiceData = [...copy(this.loadAddedServiceGravelOrder)];
        this.$store.dispatch('updateAmount');
      },
      deep: true,
    },
  },
  components: {
    ServiceDropDownList,
    CustomCheckbox,
    PopUpSignatures,
  },
  mounted() {
    this.addedServiceData = [...copy(this.loadAddedServiceGravelOrder)];
  },
};
function copy(arr) {
  return JSON.parse(JSON.stringify(arr));
}
</script>

<style scoped lang="scss">
//Невидимая рамка для
input {
  border: 1px solid rgba(255, 255, 255, 0);
}

//Основные стили страницы
.required-star {
  font-style: normal;
  font-weight: 300;
  padding-left: 3px;
  font-size: 18px;
  line-height: 21px;
  color: #db4d4d;
}
.order-grave {
  .order-title {
    margin-bottom: 60px;
    font-style: normal;
    font-weight: 500;
    font-size: 32px;
    line-height: 38px;
    color: #69645e;
    span.order-number {
      color: #c2a561;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell,
        'Open Sans', 'Helvetica Neue', sans-serif;
    }
    .warning-required {
      margin-top: 10px;
      font-style: normal;
      font-weight: 300;
      font-size: 18px;
      line-height: 21px;
      color: #db4d4d;
    }
  }
  .block-title {
    margin-bottom: 30px;
    //Стиль текста
    font-weight: 500;
    font-size: 24px;
    line-height: 28px;
    color: #69645e;
  }
  .contact-information {
    .contact-block {
      display: grid;
      grid-template-columns: 386px 386px 386px;
      gap: 30px;
      margin-bottom: 60px;
      .input-block {
        display: flex;
        flex-direction: column;
        gap: 10px;
      }
      label {
        font-weight: 300;
        font-size: 18px;
        line-height: 21px;
        color: #69645e;
      }
      input {
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
      &.customer {
        margin-bottom: 50px;
      }
      &.deceased {
        .deceased__region {
          display: flex;
          align-items: center;
          justify-content: space-between;
          .input-block {
            width: 115px;
            input {
              padding: 10px;
              text-align: center;
            }
          }
        }
      }
    }
  }
  .list-services {
    margin-bottom: 60px;
    .list-services-block {
      display: grid;
      grid-template-columns: 386px 386px 386px;
      gap: 50px 30px;
      margin-bottom: 30px;
      .service-item {
        border: 2px solid #c2a561;
        border-radius: 3px;
        padding: 20px;
        .service-item__remove {
          cursor: pointer;
          margin-bottom: 10px;
          width: 100%;
          height: 30px;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid #b0b0b0;
          border-radius: 3px;
          .text {
            color: #b0b0b0;
            font-weight: 500;
            font-size: 14px;
            line-height: 16px;
            margin-right: 10px;
          }
          &:hover {
            background-color: #c2a561;
            border: 1px solid #ffffff;
            .text {
              color: #ffffff;
            }
            svg {
              path {
                fill: #ffffff;
              }
            }
          }
        }
        .service__number {
          width: 100%;
          height: 30px;
          background: #69645e;
          display: flex;
          justify-content: center;
          align-items: center;
          margin-bottom: 30px;
          //Стили текста
          font-weight: 600;
          font-size: 20px;
          line-height: 23px;
          text-align: center;
          color: #ffffff;
        }
        .input-block.service__name {
          display: flex;
          flex-direction: column;
          gap: 10px;
          margin-bottom: 30px;
          label {
            font-weight: 300;
            font-size: 18px;
            line-height: 21px;
            color: #69645e;
          }
          .drop-list-mask {
            position: fixed;
            top: 0;
            left: 0;
            width: 100vw;
            height: 100vh;
          }
          .drop-list {
            position: relative;
            z-index: 1;
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
            .list-variants {
              position: absolute;
              z-index: 1;
              top: 48px;
              height: 212px;
              width: 100%;
              background: #f2f2f2;
              max-height: 0px;
              transition: max-height 0.6s;
              overflow: hidden;
              .line {
                height: 1px;
                width: 100%;
                background: #69645e;
              }
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
                max-height: 212px;
                overflow: auto;
              }
            }
          }
        }
        .specifications {
          display: grid;
          grid-template-columns: repeat(2, 158px);
          gap: 30px;
          .input-block {
            display: flex;
            flex-direction: column;
            gap: 10px;
            label {
              font-weight: 300;
              font-size: 18px;
              line-height: 21px;
              color: #69645e;
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
              text-align: center;
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
            // &.size {
            //   width: 80px;
            //   margin-right: 20px;
            // }
            // &.measurement {
            //   width: 80px;
            //   margin-right: auto;
            // }
            &.price {
              // width: 170px;
              .price-wrapper {
                input {
                  // width: 120px;
                }
                label {
                  font-weight: 400;
                  color: #69645e;
                }
                display: flex;
                align-items: center;
                gap: 15px;
              }
            }
          }
        }
      }
    }
    .add-new-service {
      display: flex;
      align-items: center;
      justify-content: center;
      border: 2px solid #c2a561;
      border-radius: 3px;
      width: 178px;
      height: 40px;
      cursor: pointer;
      user-select: none;
      //Стиль текста
      font-style: normal;
      font-weight: 500;
      font-size: 14px;
      line-height: 16px;
      color: #c2a561;
      &:hover {
        background: #c2a561;
        color: #ffffff;
      }
      &:active {
        opacity: 0.7;
      }
    }
  }
  .additional-services {
    margin-bottom: 60px;
    textarea {
      width: 1218px;
      height: 150px;
      background: #f2f2f2;
      border-radius: 3px;
      border: none;
      outline: none;
      resize: none;
      padding: 14px;
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
  }
  .confirmation-payment-block {
    display: grid;
    grid-template-columns: 398px 386px;
    gap: 0px 227px;
    label {
      font-weight: 300;
      font-size: 18px;
      line-height: 21px;
      color: #69645e;
      display: block;
      margin-bottom: 10px;
    }
    input {
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
    .column {
      display: flex;
      flex-direction: column;
      gap: 60px;
    }
    .cost-calculation {
      .cost-calculation__specifications {
        display: grid;
        grid-template-columns: 189px 189px;
        grid-template-rows: auto;
        gap: 28px 20px;
        margin-bottom: 60px;
        .order-amount {
          .amount {
            font-weight: 500;
            font-size: 24px;
            line-height: 28px;
            color: #69645e;
          }
        }
        .discount {
          .discount__inputs {
            display: flex;
            gap: 16px;
            input {
              width: 110px;
              text-align: center;
            }
          }
        }
        .prepayment {
          .prepayment__inputs {
            display: flex;
            gap: 16px;
            input {
              width: 110px;
              text-align: center;
            }
          }
        }
      }

      .cost-calculation__final-prices {
        margin-bottom: 30px;
        .payment-price {
          .final_cost {
            font-style: normal;
            font-weight: 500;
            font-size: 30px;
            line-height: 35px;
            color: #c2a561;
            margin-bottom: 25px;
          }
        }
      }
    }

    .order-confirmation {
      .order-confirmation__button {
        cursor: pointer;
        width: 386px;
        height: 48px;
        display: flex;
        align-items: center;
        justify-content: center;
        background: #c2a561;
        border-radius: 3px;
        //Стили текста
        font-style: normal;
        font-weight: 600;
        font-size: 18px;
        line-height: 21px;
        text-transform: uppercase;
        color: #ffffff;
        &:hover {
          background: #d9bd7a;
        }
        &:active {
          opacity: 0.8;
        }
         @media screen and (max-width: 500px) { 
          width: 100%;
        }
      }
      .order-confirmation__cancellation {
        margin-top: 60px;
        cursor: pointer;
        //Стили текста
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 21px;
        text-decoration-line: underline;
        color: #b0b0b0;
        &:hover {
          color: #c2a561;
        }
      }
    }

    .deadlines-implementation {
      .deadlines-implementation__periods {
        display: grid;
        grid-template-columns: 178px 178px;
        gap: 0px 30px;
        @media screen and (max-width: 400px) {
          grid-template-columns: 1fr;
          gap: 30px 0px;
        }
        input {
          width: 100%;
        }
      }
    }
    .comment-order {
      textarea {
        width: 100%;
        height: 150px;
        background: #f2f2f2;
        border-radius: 3px;
        border: none;
        outline: none;
        resize: none;
        padding: 14px;
        margin-bottom: 30px;
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
      .upload-files__wrapper {
        .upload-files {
          position: relative;
          display: flex;
          align-items: center;
          gap: 20px;
          input {
            width: 178px;
            height: 40px;
            visibility: hidden;
          }
          label {
            cursor: pointer;
            position: absolute;
            left: 0;
            top: 0;
            display: flex;
            align-items: center;
            justify-content: center;
            width: 178px;
            height: 40px;
            border: 2px solid #c2a561;
            box-sizing: border-box;
            border-radius: 3px;
            svg {
              margin-right: 5px;
            }
            .text {
              font-weight: 500;
              font-size: 14px;
              line-height: 16px;
              color: #c2a561;
            }
          }
          .upload-files_name {
            font-weight: 400;
            font-size: 14px;
            line-height: 16px;
            color: #c2a561;
            text-decoration: underline;
          }
        }
      }
    }
    .signature-block {
      .block-title {
        margin-bottom: 5px;
      }
      .signature {
        width: 215px;
        height: 195px;
        img {
          width: 100%;
          height: auto;
        }
      }
    }
    .signature-adaptive-block {
      display: none;
      .block-title {
        margin-bottom: 5px;
      }
      .signature {
        width: 215px;
        height: 125px;
        img {
          width: 100%;
          height: auto;
        }
      }
    }
  }
  //Обработка ошибок, выделение инпутов
  &.customer__name_required {
    #customer__name_required {
      border: 1px solid #db4d4d;
    }
  }
  &.customer__phone_required {
    #customer__phone_required {
      border: 1px solid #db4d4d;
    }
  }
  &.deceased__name_required {
    #deceased__name_required {
      border: 1px solid #db4d4d;
    }
  }
  &.deceased__installation_required {
    #deceased__installation_required {
      border: 1px solid #db4d4d;
    }
  }
  &.deceased__region-number_required {
    #deceased__region-number_required {
      border: 1px solid #db4d4d;
    }
  }
  &.deceased__region-row_required {
    #deceased__region-row_required {
      border: 1px solid #db4d4d;
    }
  }
  &.deceased__region-place_required {
    #deceased__region-place_required {
      border: 1px solid #db4d4d;
    }
  }
  &.start-date_required {
    #start-date_required {
      border: 1px solid #db4d4d;
    }
  }
  &.end-date_required {
    #end-date_required {
      border: 1px solid #db4d4d;
    }
  }
}

@media screen and (max-width: 1366px) {
  .order-grave {
    .order-title {
      margin-bottom: 40px;
    }
    .contact-information {
      .contact-block {
        grid-template-columns: 100%;
        &.customer {
          margin-bottom: 50px;
        }
        &.deceased {
          .deceased__region {
            justify-content: flex-start;
            flex-wrap: wrap;
            gap: 20px;
          }
        }
      }
    }
    .list-services {
      .list-services-block {
        grid-template-columns: 1fr;
        // max-width: 596px;
        gap: 30px;
        .service-item {
          .specifications {
            grid-template-columns: repeat(2, 1fr);
            @media screen and (max-width: 400px) {
              grid-template-columns: 1fr;
            }
            .input-block {
            }
          }
        }
      }
    }
    .additional-services {
      textarea {
        width: 100%;
      }
    }
    .confirmation-payment-block {
      display: flex;
      flex-direction: column-reverse;
      gap: 60px;
      .signature-block {
        display: none;
      }
    }
    .signature-adaptive-block {
      display: block !important;
    }
  }
}

@media screen and (max-width: 768px) {
  .required-star {
    font-size: calc(14px + 4 * (100vw - 320px) / (768 - 320));
    line-height: calc(17px + 4 * (100vw - 320px) / (768 - 320));
  }
  .order-grave {
    .order-title {
      font-size: calc(18px + 14 * (100vw - 320px) / (768 - 320));
      line-height: calc(24px + 14 * (100vw - 320px) / (768 - 320));
      .warning-required {
        font-size: calc(14px + 4 * (100vw - 320px) / (768 - 320));
        line-height: calc(17px + 4 * (100vw - 320px) / (768 - 320));
      }
    }
    .block-title {
      font-size: calc(16px + 14 * (100vw - 320px) / (768 - 320));
      line-height: calc(19px + 14 * (100vw - 320px) / (768 - 320));
    }
    .contact-information {
      .contact-block {
        label {
          font-size: calc(14px + 4 * (100vw - 320px) / (768 - 320));
          line-height: calc(16px + 5 * (100vw - 320px) / (768 - 320));
        }
        input {
          font-size: calc(14px + 4 * (100vw - 320px) / (768 - 320));
          line-height: calc(16px + 5 * (100vw - 320px) / (768 - 320));
        }
      }
    }
    .confirmation-payment-block {
      .cost-calculation {
        .cost-calculation__specifications {
          @media screen and (max-width: 500px) {
            grid-template-columns: 1fr;
          }
        }
      }
    }
  }
}
</style>

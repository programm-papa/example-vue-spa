/* eslint-disable prettier/prettier */
import api from '@/api';
import router from '@/router';
// import router from "../router";
// import axios from "@/api/instance";
//Добавление функции isFloat
Number.prototype.isFloat = function () {
  return this % 1 != 0;
};
export default {
  actions: {
    updateCustomerData: (ctx, value) => {
      if (value.customerDataType == 'customerName') {
        ctx.commit('changeCustomerName', value.newValue);
      } else if (value.customerDataType == 'customerPhone') {
        ctx.commit('changeCustomerPhone', value.newValue);
      } else if (value.customerDataType == 'customerAddress') {
        ctx.commit('changeCustomerAddress', value.newValue);
      } else if (value.customerDataType == 'customerEmail') {
        ctx.commit('changeCustomerEmail', value.newValue);
      } else {
        ctx.commit('addNotification', {
          type: 'error',
          icon: 'warning',
          content: 'Невозможно добавить несуществующие данные',
          time: 5000,
        });
      }
    },
    //Обновление данных о покойном
    updateDeceasedData: (ctx, value) => {
      if (value.deceasedDataType == 'deceasedName') {
        ctx.commit('changeDeceasedName', value.newValue);
      } else if (value.deceasedDataType == 'deceasedInstallationAddress') {
        ctx.commit('changeDeceasedInstallationAddress', value.newValue);
      } else if (value.deceasedDataType == 'deceasedRegion') {
        ctx.commit('changeDeceasedRegion', value.newValue);
      } else if (value.deceasedDataType == 'deceasedRow') {
        ctx.commit('changeDeceasedRow', value.newValue);
      } else if (value.deceasedDataType == 'deceasedPlace') {
        ctx.commit('changeDeceasedPlace', value.newValue);
      } else {
        ctx.commit('addNotification', {
          type: 'error',
          icon: 'warning',
          content: 'Невозможно добавить несуществующие данные',
          time: 5000,
        });
      }
    },
    //Добавление услуги в заказ
    createNewServices: (ctx) => {
      const lastIndex = ctx.state.addedServiceGravelOrder.length - 1;
      if (ctx.state.addedServiceGravelOrder[lastIndex].name == '') {
        ctx.commit('addNotification', {
          type: 'error',
          icon: 'warning',
          content: 'У вас есть незаполненная услуга',
          time: 5000,
        });
      } else {
        ctx.state.addedServiceGravelOrder.push({
          name: '',
          gravelServiceListId: null,
          measurement: '',
          priceMeasurement: '',
          price: '',
          quantity: '',
          description: '',
        });
      }
    },
    //Удаление услуги
    deleteServices: (ctx, serviceItemId) => {
      const addedServiceGravelOrderLength = ctx.state.addedServiceGravelOrder.length;
      if (addedServiceGravelOrderLength > 1) {
        if (ctx.state.addedServiceGravelOrder[serviceItemId].gravelServiceListId !== null) {
          ctx.state.gravelServiceList[
            ctx.state.addedServiceGravelOrder[serviceItemId].gravelServiceListId
          ].selected = false;
        }
        ctx.state.addedServiceGravelOrder.splice(serviceItemId, 1);
      } else {
        ctx.commit('addNotification', {
          type: 'error',
          icon: 'warning',
          content: 'Невозможно удалить единственную услугу в списке.',
          time: 5000,
        });
      }
    },
    //Выбор названия услуги
    selectServicesVariant: (ctx, value) => {
      if (ctx.state.addedServiceGravelOrder[value.serviceItemId].gravelServiceListId !== null) {
        ctx.state.gravelServiceList[
          ctx.state.addedServiceGravelOrder[value.serviceItemId].gravelServiceListId
        ].selected = false;
      }
      ctx.state.gravelServiceList[value.index].selected = true;
      ctx.state.addedServiceGravelOrder[value.serviceItemId].name =
        ctx.state.gravelServiceList[value.index].name;
      ctx.state.addedServiceGravelOrder[value.serviceItemId].measurement =
        ctx.state.gravelServiceList[value.index].measurement;
      ctx.state.addedServiceGravelOrder[value.serviceItemId].gravelServiceListId = value.index;
    },
    //Изменение количества ед. услуги
    updateServiceQuantityValue: (ctx, value) => {
      if (ctx.state.addedServiceGravelOrder[value.serviceItemId].name == '') {
        ctx.commit('addNotification', {
          type: 'error',
          icon: 'warning',
          content: 'Выберите наименование услуги',
          time: 5000,
        });
      }
      ctx.commit('changeServiceQuantityValue', value);
      ctx.commit('recalculationServicePrice', {
        type: 'quantity',
        serviceItemId: value.serviceItemId,
      });
    },
    //Изменение цены за ед. услуги
    updateServiceMeasurementPriceValue: (ctx, value) => {
      if (ctx.state.addedServiceGravelOrder[value.serviceItemId].name == '') {
        ctx.commit('addNotification', {
          type: 'error',
          icon: 'warning',
          content: 'Выберите наименование услуги',
          time: 5000,
        });
      }
      ctx.commit('changeServiceMeasurementPriceValue', value);
      ctx.commit('recalculationServicePrice', {
        type: 'priceMeasurement',
        serviceItemId: value.serviceItemId,
      });
    },
    //Изменение цены услуги
    updateServicePriceValue: (ctx, value) => {
      if (ctx.state.addedServiceGravelOrder[value.serviceItemId].name == '') {
        ctx.commit('addNotification', {
          type: 'error',
          icon: 'warning',
          content: 'Выберите наименование услуги',
          time: 5000,
        });
      }
      ctx.commit('changeServicePriceValue', value);
      ctx.commit('recalculationServicePrice', {
        type: 'price',
        serviceItemId: value.serviceItemId,
        commit: ctx.commit,
      });
    },
    //Изменение поля дополнительные услуги
    updateAdditionalServices: (ctx, value) => {
      ctx.commit('changeAdditionalServices', value);
    },
    updateAmount: (ctx) => {
      ctx.commit('recalculationAmount');
      ctx.commit('changeFinalCost');
    },
    updatePaymentType: (ctx, value) => {
      ctx.commit('changePaymentType', value);
      if (value == 'payment') {
        ctx.commit('changePrepayment', 0);
        ctx.commit('changePrepaymentType', '');
      }
      ctx.commit('changeFinalCost');
    },
    updateDiscount: (ctx, value) => {
      ctx.commit('changeDiscount', value);
      ctx.commit('recalculationAmount');
      ctx.commit('changeFinalCost');
    },
    updateDiscounType: (ctx, value) => {
      ctx.commit('changeDiscounType', value);
      ctx.commit('recalculationAmount');
      ctx.commit('changeFinalCost');
    },
    updatePrepayment: (ctx, value) => {
      ctx.commit('changePrepayment', value);
      ctx.commit('changeFinalCost');
    },
    updatePrepaymentType: (ctx, value) => {
      ctx.commit('changePrepaymentType', value);
      ctx.commit('changeFinalCost');
    },
    updateStartDate: (ctx, value) => {
      ctx.commit('changeStartDate', value);
    },
    updateEndedDate: (ctx, value) => {
      ctx.commit('changeEndedDate', value);
    },
    updateOrderComment: (ctx, value) => {
      ctx.commit('changeOrderComment', value);
    },
    updateUploadImage: (ctx, value) => {
      ctx.commit('changeUploadImage', value);
    },
    updatePaymentMethod: (ctx, value) => {
      ctx.commit('changePaymentMethod', value);
    },
    updateSignatureImgUrl: (ctx, value) => {
      ctx.commit('changeSignatureImgUrl', value);
    },
    updateOrderСonfirmation: (ctx, value) => {
      ctx.commit('changeOrderСonfirmation', value);
    },

    //Сохранение и отправка заказа
    createOrder: async (ctx) => {
      await api.order
        .createOrderGraveImprovement({
          customer: JSON.stringify(ctx.state.customer),
          deceased: JSON.stringify(ctx.state.deceased),
          addedServiceGravelOrder: JSON.stringify(ctx.state.addedServiceGravelOrder),
          additionalServices: ctx.state.additionalServices,
          amount: ctx.state.amount,
          paymentType: ctx.state.paymentType,
          discount: ctx.state.discount,
          discountType: ctx.state.discountType,
          prepayment: ctx.state.prepayment,
          prepaymentType: ctx.state.prepaymentType,
          startDate: ctx.state.startDate,
          endedDate: ctx.state.endedDate,
          orderComment: ctx.state.orderComment,
          uploadImage: ctx.state.uploadImage,
          finalCost: ctx.state.finalCost,
          paymentMethod: ctx.state.paymentMethod,
          signatureImgUrl: ctx.state.signatureImgUrl,
        })
        .then(async (resp) => {
            router.push('/order_list');
            ctx.commit('clearGraveOrderState');
            ctx.commit('addNotification', {
                'type': 'sucsess',
                'icon': 'sucsess',
                'content': resp.data.message,
                'time': 5000,
            });
        })
        .catch((err) => {
            ctx.commit('addNotification', {
                'type': 'error',
                'icon': 'warning',
                'content': err.response.data.message,
                'time': 10000,
                'notificationType': 'userNotFound',
            });
        });
    },
  },
  mutations: {
    //Изменение данных о заказчике
    changeCustomerName: (state, newValue) => {
      state.customer.customerName = newValue;
    },
    changeCustomerPhone: (state, newValue) => {
      state.customer.customerPhone = newValue;
    },
    changeCustomerAddress: (state, newValue) => {
      state.customer.customerAddress = newValue;
    },
    changeCustomerEmail: (state, newValue) => {
      state.customer.customerEmail = newValue;
    },
    //Изменение данных о покойном
    changeDeceasedName: (state, newValue) => {
      state.deceased.deceasedName = newValue;
    },
    changeDeceasedInstallationAddress: (state, newValue) => {
      state.deceased.deceasedInstallationAddress = newValue;
    },
    changeDeceasedRegion: (state, newValue) => {
      state.deceased.deceasedRegion = newValue;
    },
    changeDeceasedRow: (state, newValue) => {
      state.deceased.deceasedRow = newValue;
    },
    changeDeceasedPlace: (state, newValue) => {
      state.deceased.deceasedPlace = newValue;
    },
    //Создание услуги
    addedNewService: (state) => {
      state.addedServiceGravelOrder.push({
        name: '',
        gravelServiceListId: null,
        measurement: '',
        priceMeasurement: '',
        price: '',
        quantity: '',
        description: '',
      });
    },
    //Изменение услуги
    //Изменение количества ед. услуги
    changeServiceQuantityValue: (state, value) => {
      state.addedServiceGravelOrder[value.serviceItemId].quantity = isNaN(
        parseFloat(value.newValue),
      )
        ? ''
        : parseFloat(value.newValue);
    },
    changeServiceMeasurementPriceValue: (state, value) => {
      state.addedServiceGravelOrder[value.serviceItemId].priceMeasurement = isNaN(
        parseFloat(value.newValue),
      )
        ? ''
        : parseFloat(value.newValue);
    },
    //Изменение полной стоимости услуги
    changeServicePriceValue: (state, value) => {
      state.addedServiceGravelOrder[value.serviceItemId].price = isNaN(parseFloat(value.newValue))
        ? ''
        : parseFloat(value.newValue);
    },
    //Пересчет цен в услуге
    recalculationServicePrice: (state, value) => {
      //Изменение цен при смене количества (все возможные варианты)
      let price = state.addedServiceGravelOrder[value.serviceItemId].price;
      let priceMeasurement = state.addedServiceGravelOrder[value.serviceItemId].priceMeasurement;
      let quantity = state.addedServiceGravelOrder[value.serviceItemId].quantity;
      if (value.type == 'quantity') {
        if (price && !priceMeasurement) {
          price = price || 1;
          state.addedServiceGravelOrder[value.serviceItemId].priceMeasurement = (
            price / quantity
          ).isFloat()
            ? (price / quantity).toFixed(1)
            : price / quantity;
        } else if (priceMeasurement) {
          state.addedServiceGravelOrder[value.serviceItemId].price = (
            priceMeasurement * quantity
          ).isFloat()
            ? (priceMeasurement * quantity).toFixed(1)
            : priceMeasurement * quantity;
        }
      } else if (value.type == 'priceMeasurement') {
        if (!quantity) {
          state.addedServiceGravelOrder[value.serviceItemId].quantity = 1;
          quantity = 1;
        }
        state.addedServiceGravelOrder[value.serviceItemId].price = (
          priceMeasurement * quantity
        ).isFloat()
          ? (priceMeasurement * quantity).toFixed(1)
          : priceMeasurement * quantity;
      } else if (value.type == 'price') {
        if (!quantity) {
          state.addedServiceGravelOrder[value.serviceItemId].quantity = 1;
          quantity = 1;
          value.commit('addNotification', {
            type: 'atention',
            icon: 'warning',
            content:
              '<b>Количество выставлено автоматически.</b><br>Обратите внимание, что в дальнейшем при изменении количества, цена считается в зависимости от цена за ед.',
            time: 8500,
          });
        }
        state.addedServiceGravelOrder[value.serviceItemId].priceMeasurement = (
          price / quantity
        ).isFloat()
          ? (price / quantity).toFixed(1)
          : price / quantity;
      }
    },

    //Изменение Дополнительной услуги
    changeAdditionalServices: (state, value) => {
      state.additionalServices = value;
    },
    // recalculationServicePrices: (state, data) => {
    //     if (data.inputType == 'quantity') {
    //         if (state.addedServiceGravelOrder[data.serviceItemId].priceMeasurement) {

    //         }
    //     }
    // },
    recalculationAmount: (state) => {
      state.amount = 0;
      state.addedServiceGravelOrder.forEach((element) => {
        state.amount += element.price;
      });
      if (state.amount != 0) {
        if (state.discountType == 'percent') {
          state.amount = Math.ceil(state.amount - (state.amount * state.discount) / 100);
        } else if (state.discountType == 'currency') {
          state.amount -= state.discount;
        }
      }
    },
    changePaymentType: (state, value) => {
      state.paymentType = value;
    },
    changeDiscount: (state, value) => {
      state.discount = value;
    },
    changeDiscounType: (state, value) => {
      state.discountType = value;
      if (state.discount > 100) {
        state.discount = 0;
      }
    },
    changePrepayment: (state, value) => {
      state.prepayment = value;
    },
    changePrepaymentType: (state, value) => {
      state.prepaymentType = value;
    },
    changePaymentMethod: (state, value) => {
      state.paymentMethod = value;
    },
    changeStartDate: (state, value) => {
      state.startDate = value;
    },
    changeEndedDate: (state, value) => {
      state.endedDate = value;
    },
    changeOrderComment: (state, value) => {
      state.orderComment = value;
    },
    changeUploadImage: (state, value) => {
      state.uploadImage = value;
    },
    changeFinalCost: (state) => {
      if (state.paymentType == 'prepayment') {
        if (state.prepaymentType == 'percent') {
          state.finalCost = Math.ceil(state.amount * (state.prepayment / 100));
        } else if (state.prepaymentType == 'currency') {
          state.finalCost = Math.ceil(state.prepayment);
        }
      } else if (state.paymentType == 'payment') {
        state.finalCost = state.amount;
      } else {
        state.finalCost = 0;
      }
    },
    changeSignatureImgUrl: (state, value) => {
      state.signatureImgUrl = value;
    },
    changeOrderСonfirmation: (state, value) => {
      state.orderСonfirmation = value;
    },
    clearGraveOrderState: (state) => {
      //Очищаем данные о заказчике
      state.customer.customerName = '';
      state.customer.customerPhone = '';
      state.customer.customerAddress = '';
      state.customer.customerEmail = '';
      //Очищаем данные о покойном
      state.deceased.deceasedName = '';
      state.deceased.deceasedInstallationAddress = '';
      state.deceased.deceasedRegion = '';
      state.deceased.deceasedRow = '';
      state.deceased.deceasedPlace = '';
      //Очищаем данные о выбранных услугах
      state.addedServiceGravelOrder = [
        {
          name: '',
          gravelServiceListId: null,
          measurement: '',
          priceMeasurement: '',
          price: '',
          quantity: '',
          description: '',
        },
      ];
    //очищаем Дополнительные услуги
    state.additionalServices = '';
    //Цена и вариант оплаты
    state.amount = 0;
    state.paymentType = '';
    //Скидка и вариант скидки
    state.discount = 0;
    state.discountType = '';
    //Аванс и вариант аванса
    state.prepayment = 0;
    state.prepaymentType = '';
    //Дедлайн
    state.startDate = '';
    state.endedDate = '';
    //Комментарий заказа
    state.orderComment = '';
    //Загруженное изображение
    state.uploadImage = '';
    //Финальная стоимость заказа "К ОПЛАТЕ"
    state.finalCost = 0;
    //Способ оплаты
    state.paymentMethod = '';
    //Подтверждение заказа
    state.orderСonfirmation = false;
    //Подпись заказчика
    state.signatureImgUrl = '';

    },
  },
  state: {
    // orderId: null,
    gravelServiceList: [
      {
        name: 'Ж/б поребрик',
        measurement: 'п/м',
        selected: false,
      },
      {
        name: 'Подсыпка песка',
        measurement: 'усл.',
        selected: false,
      },
      {
        name: 'Ограда',
        measurement: 'п/м',
        selected: false,
      },
      {
        name: 'Установка ограды',
        measurement: 'усл.',
        selected: false,
      },
      {
        name: 'Установка памятника',
        measurement: 'усл.',
        selected: false,
      },
      {
        name: 'Установка стола',
        measurement: 'усл.',
        selected: false,
      },
      {
        name: 'Установка скамьи',
        measurement: 'усл.',
        selected: false,
      },
      {
        name: 'Мраморная крошка на стяжке',
        measurement: 'кв/м',
        selected: false,
      },
      {
        name: 'Укладка плитки тротуарной',
        measurement: 'кв/м',
        selected: false,
      },
      {
        name: 'Демонтаж бетонного поребрика',
        measurement: 'п/м',
        selected: false,
      },
      {
        name: 'Демонтаж памятника',
        measurement: 'усл.',
        selected: false,
      },
      {
        name: 'Демонтаж ограды',
        measurement: 'усл.',
        selected: false,
      },
      {
        name: 'Спил дерева',
        measurement: 'усл.',
        selected: false,
      },
      {
        name: 'Покраска ограды',
        measurement: 'усл.',
        selected: false,
      },
      {
        name: 'Реставрация надписей, портрета',
        measurement: 'усл.',
        selected: false,
      },
      {
        name: 'Отмостка, опорная стена',
        measurement: 'п/м',
        selected: false,
      },
      {
        name: 'Бетонный цветник',
        measurement: 'усл.',
        selected: false,
      },
      {
        name: 'Укладка гранитного комплекса',
        measurement: 'усл.',
        selected: false,
      },
      {
        name: 'Утилизация',
        measurement: 'усл.',
        selected: false,
      },
      {
        name: 'Вывоз памятника на хранение',
        measurement: 'усл.',
        selected: false,
      },
    ],
    customer: {
      customerName: '',
      customerPhone: '',
      customerAddress: '',
      customerEmail: '',
    },
    deceased: {
      deceasedName: '',
      deceasedInstallationAddress: '',
      deceasedRegion: '',
      deceasedRow: '',
      deceasedPlace: '',
    },
    addedServiceGravelOrder: [
      {
        name: '',
        gravelServiceListId: null,
        measurement: '',
        priceMeasurement: '',
        price: '',
        quantity: '',
        description: '',
      },
    ],
    //Дополнительные услуги
    additionalServices: '',
    //Цена и вариант оплаты
    amount: 0,
    paymentType: '',
    //Скидка и вариант скидки
    discount: 0,
    discountType: '',
    //Аванс и вариант аванса
    prepayment: 0,
    prepaymentType: '',
    //Дедлайн
    startDate: '',
    endedDate: '',
    //Комментарий заказа
    orderComment: '',
    //Загруженное изображение
    uploadImage: '',
    //Финальная стоимость заказа "К ОПЛАТЕ"
    finalCost: 0,
    //Способ оплаты
    paymentMethod: '',
    //Подтверждение заказа
    orderСonfirmation: false,
    //Подпись заказчика
    signatureImgUrl: '',
  },
};

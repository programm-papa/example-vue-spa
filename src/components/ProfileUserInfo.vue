<template>
     <div class="user-info">
        <div class="row">
          <div class="value-name">Полное имя</div>
          <input
            type="text"
            class="value"
            :class="fullName.edited ? 'active' : ''"
            placeholder="ФИО"
            :disabled="!fullName.edited"
            v-model="fullName.value"
          />
          <div class="edit" :class="fullName.edited ? '' : 'icon'">
            <div class="button" @click="fullName.edited = true" v-if="!fullName.edited">
              <svg
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.66667 13.3306H2.845L10.6067 5.55634L9.42833 4.37609L1.66667 12.1504V13.3306ZM15 15H0V11.4584L11.1958 0.244385C11.3521 0.0879056 11.564 0 11.785 0C12.006 0 12.2179 0.0879056 12.3742 0.244385L14.7317 2.60572C14.8879 2.76224 14.9757 2.97451 14.9757 3.19584C14.9757 3.41717 14.8879 3.62944 14.7317 3.78597L5.2025 13.3306H15V15ZM10.6067 3.19584L11.785 4.37609L12.9633 3.19584L11.785 2.01559L10.6067 3.19584V3.19584Z"
                  fill="white"
                />
              </svg>
            </div>
            <div class="change-btns" v-if="fullName.edited">
              <div class="button confirm" @click="updateUserInfo('fullName')">
                <svg
                  width="23"
                  height="16"
                  viewBox="0 0 23 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.83284 12.2359L21.1098 0L22.9997 1.88204L8.83284 16L0.333008 7.52949L2.22156 5.64745L8.83284 12.2359Z"
                    fill="#69645E"
                  />
                </svg>
              </div>
              <div
                class="button cancel"
                @click="
                  fullName.edited = false;
                  loadUserInfo();
                "
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.66667 6.74104L15.4077 0L17.3333 1.92562L10.5923 8.66667L17.3333 15.4077L15.4077 17.3333L8.66667 10.5923L1.92562 17.3333L0 15.4077L6.74104 8.66667L0 1.92562L1.92562 0L8.66667 6.74104Z"
                    fill="#69645E"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="value-name">Email для связи</div>
          <input
            type="text"
            class="value"
            :class="userEmail.edited ? 'active' : ''"
            placeholder="template@mail.ru"
            :disabled="!userEmail.edited"
            v-model="userEmail.value"
          />
          <div class="edit" :class="userEmail.edited ? '' : 'icon'">
            <div class="button" @click="userEmail.edited = true" v-if="!userEmail.edited">
              <svg
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.66667 13.3306H2.845L10.6067 5.55634L9.42833 4.37609L1.66667 12.1504V13.3306ZM15 15H0V11.4584L11.1958 0.244385C11.3521 0.0879056 11.564 0 11.785 0C12.006 0 12.2179 0.0879056 12.3742 0.244385L14.7317 2.60572C14.8879 2.76224 14.9757 2.97451 14.9757 3.19584C14.9757 3.41717 14.8879 3.62944 14.7317 3.78597L5.2025 13.3306H15V15ZM10.6067 3.19584L11.785 4.37609L12.9633 3.19584L11.785 2.01559L10.6067 3.19584V3.19584Z"
                  fill="white"
                />
              </svg>
            </div>
            <div class="change-btns" v-if="userEmail.edited">
              <div class="button confirm" @click="updateUserInfo('userEmail')">
                <svg
                  width="23"
                  height="16"
                  viewBox="0 0 23 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.83284 12.2359L21.1098 0L22.9997 1.88204L8.83284 16L0.333008 7.52949L2.22156 5.64745L8.83284 12.2359Z"
                    fill="#69645E"
                  />
                </svg>
              </div>
              <div class="button cancel" @click="userEmail.edited = false">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.66667 6.74104L15.4077 0L17.3333 1.92562L10.5923 8.66667L17.3333 15.4077L15.4077 17.3333L8.66667 10.5923L1.92562 17.3333L0 15.4077L6.74104 8.66667L0 1.92562L1.92562 0L8.66667 6.74104Z"
                    fill="#69645E"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="value-name">Номер телефона</div>
          <input
            type="text"
            class="value"
            :class="userPhone.edited ? 'active' : ''"
            placeholder="+7 (000) 000-00-00"
            :disabled="!userPhone.edited"
            v-model="userPhone.value"
          />
          <div class="edit" :class="userPhone.edited ? '' : 'icon'">
            <div class="button" @click="userPhone.edited = true" v-if="!userPhone.edited">
              <svg
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.66667 13.3306H2.845L10.6067 5.55634L9.42833 4.37609L1.66667 12.1504V13.3306ZM15 15H0V11.4584L11.1958 0.244385C11.3521 0.0879056 11.564 0 11.785 0C12.006 0 12.2179 0.0879056 12.3742 0.244385L14.7317 2.60572C14.8879 2.76224 14.9757 2.97451 14.9757 3.19584C14.9757 3.41717 14.8879 3.62944 14.7317 3.78597L5.2025 13.3306H15V15ZM10.6067 3.19584L11.785 4.37609L12.9633 3.19584L11.785 2.01559L10.6067 3.19584V3.19584Z"
                  fill="white"
                />
              </svg>
            </div>
            <div class="change-btns" v-if="userPhone.edited">
              <div class="button confirm" @click="updateUserInfo('userPhone')">
                <svg
                  width="23"
                  height="16"
                  viewBox="0 0 23 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.83284 12.2359L21.1098 0L22.9997 1.88204L8.83284 16L0.333008 7.52949L2.22156 5.64745L8.83284 12.2359Z"
                    fill="#69645E"
                  />
                </svg>
              </div>
              <div class="button cancel" @click="userPhone.edited = false">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.66667 6.74104L15.4077 0L17.3333 1.92562L10.5923 8.66667L17.3333 15.4077L15.4077 17.3333L8.66667 10.5923L1.92562 17.3333L0 15.4077L6.74104 8.66667L0 1.92562L1.92562 0L8.66667 6.74104Z"
                    fill="#69645E"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="value-name">Дата рождения</div>
          <input
            type="text"
            class="value"
            :class="dateBirth.edited ? 'active' : ''"
            placeholder="03.03.1990"
            :disabled="!dateBirth.edited"
            v-model="dateBirth.value"
          />
          <div class="edit" :class="dateBirth.edited ? '' : 'icon'">
            <div class="button" @click="dateBirth.edited = true" v-if="!dateBirth.edited">
              <svg
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.66667 13.3306H2.845L10.6067 5.55634L9.42833 4.37609L1.66667 12.1504V13.3306ZM15 15H0V11.4584L11.1958 0.244385C11.3521 0.0879056 11.564 0 11.785 0C12.006 0 12.2179 0.0879056 12.3742 0.244385L14.7317 2.60572C14.8879 2.76224 14.9757 2.97451 14.9757 3.19584C14.9757 3.41717 14.8879 3.62944 14.7317 3.78597L5.2025 13.3306H15V15ZM10.6067 3.19584L11.785 4.37609L12.9633 3.19584L11.785 2.01559L10.6067 3.19584V3.19584Z"
                  fill="white"
                />
              </svg>
            </div>
            <div class="change-btns" v-if="dateBirth.edited">
              <div class="button confirm" @click="updateUserInfo('dateBirth')">
                <svg
                  width="23"
                  height="16"
                  viewBox="0 0 23 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.83284 12.2359L21.1098 0L22.9997 1.88204L8.83284 16L0.333008 7.52949L2.22156 5.64745L8.83284 12.2359Z"
                    fill="#69645E"
                  />
                </svg>
              </div>
              <div class="button cancel" @click="dateBirth.edited = false">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.66667 6.74104L15.4077 0L17.3333 1.92562L10.5923 8.66667L17.3333 15.4077L15.4077 17.3333L8.66667 10.5923L1.92562 17.3333L0 15.4077L6.74104 8.66667L0 1.92562L1.92562 0L8.66667 6.74104Z"
                    fill="#69645E"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
</template>
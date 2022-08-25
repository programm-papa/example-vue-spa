<template>
  <div class="popup-wrapper">
    <div class="close-mask"></div>
    <div class="popup-signatures" ref="popup_signatures">
      <canvas
        v-if="!adaptivePlatform"
        width="500"
        height="400"
        ref="canvas_desctop"
        id="canvas_desctop"
        class="signatures-canvas"
        @mousedown="start"
        @mouseup="finish"
        @mousemove="draw"
      />
      <canvas
        :width="adaptiveCanvasWidth"
        :height="adaptiveCanvasHeight"
        v-if="adaptivePlatform"
        ref="canvas_adaptive"
        id="canvas_adaptive"
        class="signatures-canvas"
        @touchstart="startMobile"
        @touchend="finishMobile"
        @touchmove="drawMobile"
      />
      <div class="reset" @click="clearCanvas">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5.828 6.9998L8.364 9.5358L6.95 10.9498L2 5.9998L6.95 1.0498L8.364 2.4638L5.828 4.9998H13C15.1217 4.9998 17.1566 5.84266 18.6569 7.34295C20.1571 8.84324 21 10.8781 21 12.9998C21 15.1215 20.1571 17.1564 18.6569 18.6567C17.1566 20.157 15.1217 20.9998 13 20.9998H4V18.9998H13C14.5913 18.9998 16.1174 18.3677 17.2426 17.2424C18.3679 16.1172 19 14.5911 19 12.9998C19 11.4085 18.3679 9.88238 17.2426 8.75716C16.1174 7.63195 14.5913 6.9998 13 6.9998H5.828Z"
            fill="#69645E"
          />
        </svg>
      </div>
      <div class="buttons">
        <div class="submit" @click="saveSign">ок</div>
        <div class="cancellation" @click="$emit('closeSign')">отмена</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      adaptivePlatform: false,
      canvas: null,
      ctx: null,
      painting: false,
      adaptiveCanvasWidth: 320,
      adaptiveCanvasHeight: 400,
    };
  },
  methods: {
    //Подпись для десктопа
    start() {
      this.painting = true;
      this.ctx.beginPath();
    },
    finish(e) {
      this.stroke(e);
      this.painting = false;
    },
    draw(e) {
      if (this.painting) {
        this.stroke(e);
        this.ctx.beginPath();
        this.ctx.moveTo(e.offsetX, e.offsetY);
      }
    },
    stroke(e) {
      this.ctx.lineTo(e.offsetX, e.offsetY);
      this.ctx.stroke();
    },
    //Подпись для мобильного устройства
    startMobile() {
      this.painting = true;
      this.ctx.beginPath();
    },
    finishMobile() {
      this.ctx.closePath();
      this.painting = false;
    },
    drawMobile(e) {
      if (this.painting) {
        this.strokeMobile(e);
        this.ctx.beginPath();
        const coordinate = e.target.getBoundingClientRect();
        this.ctx.moveTo(e.touches[0].pageX - coordinate.left, e.touches[0].pageY - coordinate.top);
      }
    },
    strokeMobile(e) {
      const coordinate = e.target.getBoundingClientRect();
      this.ctx.lineTo(
        e.touches[0].clientX - coordinate.left,
        e.touches[0].clientY - coordinate.top,
      );
      this.ctx.stroke();
    },
    //Очистка области для подписи
    clearCanvas() {
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    },

    saveSign() {
      // console.log(this.canvas.toDataURL("image/png"));
      const signaturesImg = this.canvas.toDataURL('image/png');
      this.$emit('saveSign', {
        signaturesImg: signaturesImg,
      });
    },
  },
  beforeMount() {
    if (window.screen.width < 1366) {
      this.adaptivePlatform = true;
    }
  },
  mounted() {
    if (window.screen.width < 1366) {
      this.adaptiveCanvasWidth = this.$refs.popup_signatures.offsetWidth - 60;
      this.adaptiveCanvasHeight = this.$refs.popup_signatures.offsetHeight - 200;
      this.canvas = this.$refs.canvas_adaptive;
      this.ctx = this.$refs.canvas_adaptive.getContext('2d');
      this.ctx.lineWidth = 8;
    } else {
      this.canvas = this.$refs.canvas_desctop;
      this.ctx = this.$refs.canvas_desctop.getContext('2d');
      this.ctx.lineWidth = 5;
    }

    this.ctx.strokeStyle = '#69645E';
    this.ctx.lineCap = 'round';
    this.ctx.lineJoin = 'round';

    window.addEventListener(
      'resize',
      function () {
        if (window.screen.width < 1366) {
          this.adaptiveCanvasWidth = this.$refs.popup_signatures.offsetWidth - 60;
          this.adaptiveCanvasHeight = this.$refs.popup_signatures.offsetHeight - 200;
          this.canvas = this.$refs.canvas_adaptive;
          this.ctx = this.$refs.canvas_adaptive.getContext('2d');
          this.ctx.lineWidth = 8;
        } else {
          this.canvas = this.$refs.canvas_desctop;
          this.ctx = this.$refs.canvas_desctop.getContext('2d');
          this.ctx.lineWidth = 5;
        }
      }.bind(this),
    );
  },
};
</script>
<style lang="scss" scoped>
.popup-wrapper {
  position: fixed;
  z-index: 5;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  .close-mask {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.3);
  }
  .popup-signatures {
    z-index: 6;
    padding: 30px;
    width: 560px;
    height: 600px;
    background: #fff;
    position: relative;
    .signatures-canvas {
      //   width: 100%;
      //   height: 400px;
      cursor: pointer;
      border: 1px solid #b0b0b0;
      border-radius: 5px;
    }
    .reset {
      position: absolute;
      top: 50px;
      right: 50px;
      z-index: 6;
      cursor: pointer;
      &:hover {
        svg {
          path {
            fill: #c2a561;
          }
        }
      }
    }
    .buttons {
      padding-top: 20px;
      display: flex;
      flex-direction: column;
      gap: 20px;
      .submit {
        width: 100%;
        height: 48px;
        background: #c2a561;
        border-radius: 3px;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        //Стили текста
        font-style: normal;
        font-weight: 600;
        font-size: 18px;
        line-height: 21px;
        text-transform: uppercase;
        color: #ffffff;
        user-select: none;
        &:hover {
          background: #d9bd7a;
        }
        &:active {
          opacity: 0.7;
        }
      }
      .cancellation {
        width: 100%;
        height: 48px;
        border: 1px solid #b0b0b0;
        border-radius: 3px;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        //Стили текста
        font-style: normal;
        font-weight: 600;
        font-size: 18px;
        line-height: 21px;
        text-transform: uppercase;
        color: #b0b0b0;
        user-select: none;
        &:hover {
          background: #b0b0b0;
          color: #fff;
        }
        &:active {
          opacity: 0.7;
        }
      }
    }
  }
}
@media screen and (max-width: 1366px) {
  .popup-wrapper {
    .popup-signatures {
      width: 80%;
      left: 40px;
      height: 80%;
    }
  }
}
@media screen and (max-width: 768px) {
  .popup-wrapper {
    .popup-signatures {
      left: 0;
      width: 100%;
      height: 100%;
      // canvas {
      //   width: 100%;
      // }
    }
  }
}
</style>
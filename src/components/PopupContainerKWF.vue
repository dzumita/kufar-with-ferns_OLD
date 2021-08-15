<template>
  <div class="popup-overlay" v-show="visibility">
    <div class="popup-container">
      <button class="popup-container__close" role="button" title="close" @click="popupClose">
        X
      </button>
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "PopupContainerKWF.vue",
  props: {
    visibility: {
      type: Boolean,
      required: true,
    },
    popupClose: {
      type: Function,
      required: false,
    },
  },
};
</script>

<style scoped>
@import url("../assets/styleGuide.css");

.popup-overlay {
  backdrop-filter: blur(3px);

  width: 100vw;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;

  position: fixed;
  top: 0;
  left: 0;

  z-index: var(--zIndexLevel5);
}

.popup-container {
  background: var(--background);
  border-radius: var(--borderRadius);
  border: var(--border);

  min-width: 12rem;
  min-height: 12rem;
  padding-top: 2rem;

  position: relative;
}

.popup-container__close {
  background: none;
  border: none;
  cursor: pointer;

  font-family: var(--mainFont);
  font-size: 1.5rem;
  line-height: 1.5rem;

  padding-top: 0.4rem;
  padding-right: 0.4rem;

  position: absolute;
  right: 0;
  top: 0;
}

.popup-container__close:active {
  transform: scale(0.8);

  -webkit-tap-highlight-color: transparent;
}

.popup-container__close:focus {
  outline: none;

  -webkit-tap-highlight-color: transparent;
}
</style>

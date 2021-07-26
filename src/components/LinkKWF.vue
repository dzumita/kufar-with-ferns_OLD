<template>
  <button :class="`link-kwf ` + (hasActive ? `link-kwf--active` : '')">
    <PictureKWF :picture-source="`menu/${iconName}`" :name="iconName" />
    <p class="link-kwf__text">{{ iconName }}</p>
  </button>
</template>

<script lang="ts">
import PictureKWF from "./PictureKWF.vue";

export default {
  name: "LinkKWF",
  components: { PictureKWF },
  props: {
    iconName: {
      type: String,
      required: true,
    },
    hasActive: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
};
</script>

<style scoped>
@import url("../assets/styleGuide.css");

.link-kwf {
  background: none;
  border: none;

  user-select: none;
  cursor: pointer;

  display: flex;
  align-items: center;
  flex-direction: column;

  transition: var(--transition);
}

.link-kwf:active {
  transform: var(--transformActive);

  -webkit-tap-highlight-color: transparent;
}

.link-kwf:focus {
  outline: none;
  filter: var(--focusFilter);
  border-color: var(--focusBorder);

  -webkit-tap-highlight-color: transparent;
}

.link-kwf.link-kwf--active {
  color: var(--fontColor);

  position: relative;
}

.link-kwf.link-kwf--active:before {
  content: "";

  background: var(--fontColor);
  border-radius: var(--borderRadius);

  width: 100%;
  height: 2px;

  position: absolute;
  bottom: -0.2rem;
  left: 0;
}

.link-kwf__text {
  font-size: 0.5rem;
  text-transform: uppercase;
  text-overflow: ellipsis;
  white-space: nowrap;

  margin: 0;
  overflow: hidden;
}
</style>

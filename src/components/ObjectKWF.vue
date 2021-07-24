<template>
  <button class="object-kwf">
    <PictureKWF :picture-source="`objects/${iconName}`" :name="iconName" />
  </button>
</template>

<script lang="ts">
import PictureKWF from "./PictureKWF.vue";

export default {
  name: "ObjectKWF",
  components: { PictureKWF },
  props: {
    iconName: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
@import url("../assets/styleGuide.css");

.object-kwf {
  background: var(--background);
  border: var(--border);
  border-radius: var(--borderRadius);

  width: 3rem;
  height: 3rem;

  display: flex;
  align-items: center;
  justify-content: center;

  position: relative;

  overflow: hidden;

  user-select: none;
  cursor: pointer;

  transition: var(--transition);
}

.object-kwf:active {
  transform: var(--transformActive);

  -webkit-tap-highlight-color: transparent;
}

.object-kwf:focus {
  outline: none;
  background: var(--focusBackground);
  filter: var(--focusFilter);
  border-color: var(--focusBorder);

  -webkit-tap-highlight-color: transparent;
}
</style>

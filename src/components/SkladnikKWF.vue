<template>
  <button class="skladnik-kwf">
    <PictureKWF :picture-source="`skrynia/${iconName}`" :name="iconName" />
  </button>
</template>

<script lang="ts">
import PictureKWF from "./PictureKWF.vue";

export default {
  name: "SkladnikKWF",
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

.skladnik-kwf {
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

.skladnik-kwf:active {
  transform: var(--transformActive);

  -webkit-tap-highlight-color: transparent;
}

.skladnik-kwf:focus {
  outline: none;
  background: var(--focusBackground);
  filter: var(--focusFilter);
  border: var(--focusBorder);

  -webkit-tap-highlight-color: transparent;
}
</style>

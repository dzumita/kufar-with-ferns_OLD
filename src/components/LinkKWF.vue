<template>
  <router-link class="link-kwf" :to="{ path }">
    <PictureKWF :picture-source="`menu/${iconName}`" :name="iconName" />
    <p class="link-kwf__text">{{ iconName }}</p>
  </router-link>
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
    path: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
@import url("../assets/styleGuide.css");

.link-kwf {
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

.link-kwf__text {
  font-size: 0.5rem;
  text-transform: uppercase;
  text-overflow: ellipsis;
  white-space: nowrap;

  margin: 0;
  overflow: hidden;
}
</style>

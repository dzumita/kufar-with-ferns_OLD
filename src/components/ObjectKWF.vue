<template>
  <button class="object">
    <picture>
      <source
        type="image/webp"
        :srcset="require(`../assets/img/objects/${iconName}.webp`)"
      />
      <img
        class="object-img"
        :src="require(`../assets/img/objects/${iconName}.png`)"
        :alt="iconName"
        :title="iconName"
      />
    </picture>
  </button>
</template>

<script lang="ts">
export default {
  name: "ObjectKWF",
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

.object {
  background: transparent;
  border: var(--border);
  border-radius: var(--borderRadius);

  width: 3rem;
  height: 3rem;

  position: relative;

  overflow: hidden;

  user-select: none;
  cursor: pointer;

  transition: var(--transition);
}

.object:active {
  transform: var(--transformActive);

  -webkit-tap-highlight-color: transparent;
}

.object:focus {
  outline: none;
  background: var(--focusBackground);
  filter: var(--focusFilter);
  border-color: var(--focusBorder);

  -webkit-tap-highlight-color: transparent;
}

.object-img {
  width: 100%;
}
</style>

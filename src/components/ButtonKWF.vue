<template>
  <button class="button-kwf">{{ label }}</button>
</template>

<script lang="ts">
export default {
  name: "ButtonKWF",
  props: {
    label: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
@import url("../assets/styleGuide.css");

.button-kwf {
  background: transparent;
  border: var(--border);
  border-radius: var(--borderRadius);

  font-size: 0.7rem;
  font-family: var(--mainFont);
  color: var(--fontColor);
  text-transform: uppercase;
  text-overflow: ellipsis;
  white-space: nowrap;

  width: 100%;
  padding: calc(var(--padding) / 2) var(--padding);
  overflow: hidden;

  cursor: pointer;
  user-select: none;

  transition: var(--transition);
}

.button-kwf:active {
  transform: var(--transformActive);

  -webkit-tap-highlight-color: transparent;
}

.button-kwf:focus {
  outline: none;
  background: var(--focusBackground);
  filter: var(--focusFilter);
  border-color: var(--focusBorder);

  -webkit-tap-highlight-color: transparent;
}
</style>

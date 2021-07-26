<template>
  <button class="skladnik-kwf">
    <p class="skladnik-kwf__count">{{ count || 0 }}</p>
    <PictureKWF :picture-source="`skrynia/${iconName}`" :name="iconName" />
    <p class="skladnik-kwf__type">{{ attribute || "emp" }}</p>
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
    count: {
      type: Number,
      required: true,
    },
    attribute: {
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

  color: var(--fontColor);
  font-size: 0.7rem;
  line-height: 0.6rem;

  width: 4rem;
  height: 4rem;
  padding: 0.2rem;
  padding-top: 0.9rem;

  display: flex;
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

.skladnik-kwf__count {
  text-overflow: ellipsis;
  white-space: nowrap;

  max-width: 44%;
  padding-left: 0.2rem;
  padding-top: 0.2rem;
  overflow: hidden;

  position: absolute;
  top: 0;
  left: 0;
}

.skladnik-kwf__type {
  text-transform: uppercase;
  text-overflow: ellipsis;
  white-space: nowrap;

  max-width: 44%;
  padding-right: 0.2rem;
  padding-top: 0.2rem;
  overflow: hidden;

  position: absolute;
  top: 0;
  right: 0;
}
</style>

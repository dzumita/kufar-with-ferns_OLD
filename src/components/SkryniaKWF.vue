<template>
  <div class="skrynia-kwf">
    <div class="skrynia-kwf__header">
      <h6 class="skrynia-kwf__title">{{ title }}</h6>
      <div class="skrynia-kwf__header-controls">
        <button class="skrynia-kwf__button" v-show="hasSelection">
          Selection: 1
        </button>
        <button class="skrynia-kwf__button" v-show="hasFilter">
          Filter: None
        </button>
      </div>
    </div>
    <div class="skrynia-kwf__content">
      <SkladnikKWF
        v-for="skladnik in content"
        :key="skladnik.id"
        :icon-name="skladnik.name"
        :count="skladnik.count"
        :attribute="skladnik.attribute"
      />
    </div>
  </div>
</template>

<script lang="ts">
import SkladnikKWF from "./SkladnikKWF.vue";

export default {
  name: "SkryniaKWF",
  components: { SkladnikKWF },
  props: {
    title: {
      type: String,
      required: false,
      default: "Skrynia:",
    },
    content: {
      type: Array,
      required: true,
    },
    hasSelection: {
      type: Boolean,
      required: false,
      default: false,
    },
    hasFilter: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
};
</script>

<style scoped>
@import url("../assets/styleGuide.css");

.skrynia-kwf {
  background: var(--background);
  border: none;
  border-radius: var(--borderRadius);

  font-family: var(--mainFont);

  overflow: hidden;
}

.skrynia-kwf__content {
  width: 100%;
  height: 100%;

  display: grid;
  grid-template-columns: repeat(auto-fill, 4rem);
  grid-template-rows: repeat(auto-fill, 4rem);
  grid-gap: var(--padding);
  justify-content: space-around;

  overflow-y: auto;
}

.skrynia-kwf__header {
  padding-bottom: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
}

.skrynia-kwf__title {
  color: var(--fontColor);
  font-size: 1.2rem;
  font-weight: normal;
  text-overflow: ellipsis;
  white-space: nowrap;

  max-width: 65%;
  overflow: hidden;
}

.skrynia-kwf__header-controls {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
}

.skrynia-kwf__button {
  background: var(--background);
  border: none;
  border-radius: var(--borderRadius);

  font-family: var(--mainFont);
  color: var(--fontColor);
  font-size: 0.9rem;
  cursor: pointer;

  margin-left: 1rem;
}

.skrynia-kwf__button:active {
  transform: var(--transformActive);

  -webkit-tap-highlight-color: transparent;
}
</style>

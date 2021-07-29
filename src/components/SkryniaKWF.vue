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
        v-for="skladnik in skrynia"
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
  setup() {
    const skrynia = [
      { id: 0, name: "empty", count: 0, attribute: "emp" },
      { id: 1, name: "antiempty", count: 99, attribute: "emp" },
      { id: 2, name: "dirty", count: 8, attribute: "oth" },
      { id: 3, name: "dirtyClass", count: 9, attribute: "cls" },
      { id: 4, name: "dust", count: 5, attribute: "oth" },
      { id: 5, name: "earid", count: 6, attribute: "met" },
      { id: 6, name: "empty", count: 5, attribute: "emp" },
      { id: 7, name: "energy", count: 5, attribute: "oth" },
      { id: 8, name: "energyClass", count: 1, attribute: "cls" },
      { id: 9, name: "fire", count: 3, attribute: "oth" },
      { id: 10, name: "fireClass", count: 42, attribute: "cls" },
      { id: 11, name: "firid", count: 5, attribute: "met" },
      { id: 12, name: "sand", count: 2, attribute: "oth" },
      { id: 13, name: "stone", count: 5, attribute: "oth" },
      { id: 14, name: "strumenid", count: 6, attribute: "met" },
      { id: 16, name: "watenid", count: 1, attribute: "met" },
      { id: 17, name: "water", count: 11, attribute: "oth" },
      { id: 18, name: "waterClass", count: 5, attribute: "cls" },
    ];

    return { skrynia };
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

  max-width: calc(var(--maxWidth) - var(--padding));
  max-height: calc(var(--maxHeight) - var(--padding));
  padding: var(--padding);

  overflow: hidden;
}

.skrynia-kwf__content {
  width: 100%;
  height: 100%;

  display: grid;
  grid-template-columns: repeat(auto-fill, 4rem);
  grid-template-rows: repeat(auto-fill, 4rem);
  grid-gap: var(--padding);
  justify-content: space-between;

  overflow-y: auto;
}

.skrynia-kwf__header {
  padding-bottom: 1rem;
  display: grid;
  grid-template-columns: 65% 35%;
  justify-content: space-between;
  align-items: end;
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

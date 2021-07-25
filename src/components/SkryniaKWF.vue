<template>
  <div class="skrynia-kwf">
    <h6 class="skrynia-kwf__title">{{ title }}</h6>
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
  },
  setup() {
    const skrynia = [
      { id: 0, name: "empty", count: 0, attribute: "er" },
      { id: 1, name: "antiempty", count: 99, attribute: "er" },
      { id: 2, name: "dirty", count: 8, attribute: "ot" },
      { id: 3, name: "dirtyClass", count: 9, attribute: "cl" },
      { id: 4, name: "dust", count: 5, attribute: "ot" },
      { id: 5, name: "earid", count: 6, attribute: "ot" },
      { id: 6, name: "empty", count: 5, attribute: "ot" },
      { id: 7, name: "energy", count: 5, attribute: "ot" },
      { id: 8, name: "energyClass", count: 1, attribute: "cl" },
      { id: 9, name: "fire", count: 3, attribute: "ot" },
      { id: 10, name: "fireClass", count: 42, attribute: "cl" },
      { id: 11, name: "firid", count: 5, attribute: "ot" },
      { id: 12, name: "sand", count: 2, attribute: "ot" },
      { id: 13, name: "stone", count: 5, attribute: "ot" },
      { id: 14, name: "strumenid", count: 6, attribute: "ot" },
      { id: 16, name: "watenid", count: 1, attribute: "ot" },
      { id: 17, name: "water", count: 11, attribute: "ot" },
      { id: 18, name: "waterClass", count: 5, attribute: "cl" },
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

  max-width: var(--maxWidth);
  max-height: var(--maxHeight);
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

.skrynia-kwf__title {
  color: var(--activeColor);
  font-size: 1.2rem;
  font-weight: normal;
  padding-bottom: 1rem;
}
</style>

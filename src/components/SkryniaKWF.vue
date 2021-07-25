<template>
  <div class="skrynia-kwf">
    <h6 class="skrynia-kwf__title">{{ title }}</h6>
    <div class="skrynia-kwf__content">
      <SkladnikKWF
        v-for="skladnik in skrynia"
        :key="skladnik.id"
        :icon-name="skladnik.name"
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
      { id: 0, name: "empty", count: "1" },
      { id: 1, name: "antiempty", count: "3" },
      { id: 2, name: "dirty", count: "8" },
      { id: 3, name: "dirtyClass", count: "9" },
      { id: 4, name: "dust", count: "5" },
      { id: 5, name: "earid", count: "6" },
      { id: 6, name: "empty", count: "5" },
      { id: 7, name: "energy", count: "5" },
      { id: 8, name: "energyClass", count: "1" },
      { id: 9, name: "fire", count: "3" },
      { id: 10, name: "fireClass", count: "4" },
      { id: 11, name: "firid", count: "5" },
      { id: 12, name: "sand", count: "0" },
      { id: 13, name: "stone", count: "5" },
      { id: 14, name: "strumenid", count: "6" },
      { id: 15, name: "unknown", count: "5" },
      { id: 16, name: "watenid", count: "1" },
      { id: 17, name: "water", count: "1" },
      { id: 18, name: "waterClass", count: "5" },
    ];

    return { skrynia };
  },
};
</script>

<style scoped>
@import url("../assets/styleGuide.css");

.skrynia-kwf {
  background: var(--background);
  border: var(--border);
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
  grid-template-columns: repeat(auto-fill, 3rem);
  grid-template-rows: repeat(auto-fill, 3rem);
  grid-gap: var(--padding);
  justify-content: space-between;

  overflow-y: auto;
}

.skrynia-kwf__title {
  color: var(--activeColor);
  font-size: 1rem;
  font-weight: normal;
  padding-bottom: var(--padding);
}
</style>

<template>
  <div class="menu-kwf">
    <LinkKWF
      v-for="(value, key) in linksCollection"
      :key="key"
      :iconName="key"
      :hasActive="value"
    />
  </div>
</template>

<script lang="ts">
import LinkKWF from "./LinkKWF.vue";

export default {
  name: "MenuKWF",
  components: { LinkKWF },
  setup() {
    const linksCollection = {
      paparac: true,
      furnace: false,
      anvil: false,
      krama: false,
      info: false,
      settings: false,
    };

    return { linksCollection };
  },
};
</script>

<style scoped>
@import url("../assets/styleGuide.css");

.menu-kwf {
  font-family: var(--mainFont);

  max-width: calc(var(--maxWidth) - var(--padding));
  max-height: calc(var(--maxHeight) - var(--padding));
  padding: var(--padding);

  display: flex;
  justify-content: center;
  align-items: center;
  gap: var(--gap);

  overflow-y: auto;
}
</style>

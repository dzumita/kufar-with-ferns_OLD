<template>
  <div class="menu-kwf">
    <LinkKWF iconName="paparac" path="/" />
    <LinkKWF iconName="shop" path="/shop" />
    <LinkKWF iconName="furnace" path="/furnace" />
    <LinkKWF iconName="info" path="/info" />
    <LinkKWF iconName="settings" path="/settings" />
  </div>
</template>

<script lang="ts">
import LinkKWF from "./LinkKWF.vue";

export default {
  name: "MenuKWF",
  components: { LinkKWF },
};
</script>

<style scoped>
@import url("../assets/styleGuide.css");

.menu-kwf {
  max-width: calc(var(--maxWidth) - var(--padding));
  max-height: calc(var(--maxHeight) - var(--padding));
  padding: var(--padding);

  display: flex;
  justify-content: center;
  align-items: center;
  gap: var(--gap);

  overflow-y: auto;
}

.menu-kwf .router-link-active {
  color: var(--fontColor);

  position: relative;
}

.menu-kwf .router-link-active:before {
  content: "";

  background: var(--fontColor);
  border-radius: var(--borderRadius);

  width: 100%;
  height: 2px;

  position: absolute;
  bottom: -0.2rem;
  left: 0;
}
</style>

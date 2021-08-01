<template>
  <section class="page-kwf">
    <FactoryKWF name="Merge" />
    <SkryniaKWF :content="inventory" />
  </section>
</template>

<script lang="ts">
import FactoryKWF from "../../components/FactoryKWF.vue";
import SkryniaKWF from "../../components/SkryniaKWF.vue";
import inventory from "./inventory";

export default {
  name: "Page",
  components: { SkryniaKWF, FactoryKWF },
  setup() {
    return { inventory };
  },
};
</script>

<style scoped>
@import url("../../assets/styleGuide.css");
</style>

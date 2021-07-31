<template>
  <section class="page-kwf">
    <FactoryKWF name="Merge" />
    <SkryniaKWF />
  </section>
</template>

<script lang="ts">
import FactoryKWF from "../../components/FactoryKWF.vue";
import SkryniaKWF from "../../components/SkryniaKWF.vue";

export default {
  name: "Page",
  components: { SkryniaKWF, FactoryKWF },
};
</script>

<style scoped>
@import url("../../assets/styleGuide.css");
</style>

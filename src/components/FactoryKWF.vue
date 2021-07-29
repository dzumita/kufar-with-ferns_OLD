<template>
  <div class="factory-kwf">
    <div class="factory-kwf__interface">
      <div class="factory-kwf__interface-result">
        <SkryniaKWF title="Result:" />
      </div>

      <div class="factory-kwf__interface-active">
        <ButtonKWF :label="name" />
      </div>
    </div>

    <div class="factory-kwf__list">
      <SkryniaKWF :title="`Objects for ${name}:`" />
    </div>
  </div>
</template>

<script lang="ts">
import ButtonKWF from "./ButtonKWF.vue";
import SkryniaKWF from "./SkryniaKWF.vue";

export default {
  name: "FactoryKWF",
  components: { SkryniaKWF, ButtonKWF },
  props: {
    name: {
      type: String,
      required: true,
    },
  }
};
</script>

<style scoped>
@import url("../assets/styleGuide.css");

.factory-kwf {
  width: 100%;
  height: 100%;

  display: grid;
  grid-template-columns: 5fr 10fr;
  gap: var(--gap);

  overflow: hidden;
}

.factory-kwf__interface {
  height: 100%;

  display: grid;
  gap: var(--gap);

  overflow: auto;
}

.factory-kwf__interface-active,
.factory-kwf__interface-result,
.factory-kwf__list {
  height: 100%;
  width: 100%;

  display: grid;
  gap: 1rem;

  overflow: auto;
}

.factory-kwf__interface-active {
  align-content: end;
}
</style>

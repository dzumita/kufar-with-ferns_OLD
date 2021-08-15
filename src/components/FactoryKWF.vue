<template>
  <div class="factory-kwf">
    <div class="factory-kwf__interface">
      <div class="factory-kwf__interface-result">
        <SkryniaKWF title="Result:" :content="result" />
      </div>

      <div class="factory-kwf__interface-active">
        <ButtonKWF :label="name" />
      </div>
    </div>

    <div class="factory-kwf__list">
      <SkryniaKWF
        :title="`Objects for ${name}:`"
        :hasFilter="true"
        :hasSelection="true"
        :content="list"
      />
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
  },

  setup() {
    const list = [
      {
        id: 5,
        name: "water",
        attribute: "oth",
        group: "other",
        source: "paparac",
        count: 11,
      },
      {
        id: 6,
        name: "waterClass",
        attribute: "class",
        group: "other",
        source: "paparac",
        count: 5,
      },
      {
        id: 7,
        name: "energy",
        attribute: "oth",
        group: "other",
        source: "paparac",
        count: 5,
      },
    ];
    const result = [
      {
        id: -1,
        name: "aEmpty",
        attribute: "emp",
        group: "empty",
        source: "paparac",
        count: 99,
      },
    ];

    return { list, result };
  },
};
</script>

<style scoped>
@import url("../assets/styleGuide.css");

.factory-kwf {
  width: 100%;
  height: 100%;

  display: grid;
  grid-template-columns: 4fr 10fr;
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

<template>
  <div class="info-kwf">
    <p class="info-kwf__icon">
      <PictureKWF
        :picture-source="`skrynia/${exampleSkladnik.name}`"
        :name="exampleSkladnik.name"
      />
    </p>
    <p
      class="info-kwf__text"
      v-for="(value, key) in exampleSkladnik"
      :key="key"
    >
      <b>{{ key }}: </b>{{ value }}
    </p>
  </div>
</template>

<script>
import PictureKWF from "./PictureKWF.vue";

export default {
  name: "InfoKWF",
  components: { PictureKWF },
  setup() {
    const exampleSkladnik = {
      id: 0,
      name: "empty",
      count: 0,
      attribute: "emp",
    };

    return { exampleSkladnik };
  },
};
</script>

<style scoped>
.info-kwf {
  border: var(--border);
  border-radius: var(--borderRadius);

  color: var(--fontColor);
  font-size: 1rem;

  padding: var(--padding);
  width: fit-content;
  max-width: 40%;
  height: fit-content;
  overflow: hidden;
}

.info-kwf__text {
  max-width: 100%;
  overflow: hidden;

  text-overflow: ellipsis;
  white-space: nowrap;
}

.info-kwf__icon {
  width: 100%;
  padding-top: var(--padding);
  padding-bottom: var(--padding);
  margin-bottom: var(--padding);
  border-bottom: var(--border);

  display: flex;
  justify-content: center;
  align-items: center;
}
</style>

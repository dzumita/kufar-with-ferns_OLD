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
  border-radius: var(--borderRadius);

  color: var(--fontColor);
  font-family: var(--mainFont);
  font-size: 1rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  box-sizing: border-box;
  padding: var(--padding);
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.info-kwf__text {
  text-overflow: ellipsis;
  white-space: nowrap;
  text-align: center;

  width: fit-content;
  overflow: hidden;
}

.info-kwf__icon {
  width: 100%;
  padding-top: var(--padding);
  padding-bottom: var(--padding);
  margin-bottom: var(--padding);
  border-bottom: var(--border);

  text-align: center;
}
</style>

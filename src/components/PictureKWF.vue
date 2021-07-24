<template>
  <picture>
    <source
      type="image/webp"
      :srcset="require(`../assets/img/${pictureSource}.webp`)"
    />
    <img
      class="picture-kwf"
      :src="require(`../assets/img/${pictureSource}.png`)"
      :alt="name"
      :title="name"
    />
  </picture>
</template>

<script lang="ts">
export default {
  name: "PictureKWF",
  props: {
    pictureSource: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: false,
      default: "picture",
    },
  },
};
</script>

<style scoped>
@import url("../assets/styleGuide.css");

.picture-kwf {
  width: 2.5rem;
  height: 2.5rem;
}
</style>

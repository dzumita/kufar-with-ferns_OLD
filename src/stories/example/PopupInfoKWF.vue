<template>
  <FactoryKWF name="Merge" />
  <PopupContainerKWF>
    <InfoKWF />
  </PopupContainerKWF>
</template>

<script>
import PopupContainerKWF from "../../components/PopupContainerKWF";
import FactoryKWF from "@/components/FactoryKWF";
import InfoKWF from "@/components/InfoKWF";

export default {
  name: "PopupInfoKWF.vue",
  components: { InfoKWF, FactoryKWF, PopupContainerKWF },
};
</script>

<style scoped></style>

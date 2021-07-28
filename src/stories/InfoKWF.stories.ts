import InfoKWF from "../components/InfoKWF.vue";

export default {
  title: "Components/InfoKWF",
  component: InfoKWF,
};

const Template = (args: never) => ({
  components: { InfoKWF },
  setup() {
    return { args };
  },
  template: '<InfoKWF v-bind="args"/>',
});

export const Empty = Template.bind({});

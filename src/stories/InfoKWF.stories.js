import InfoKWF from "../components/InfoKWF";

export default {
  title: "Components/InfoKWF",
  component: InfoKWF,
};

const Template = (args) => ({
  components: { InfoKWF },
  setup() {
    return { args };
  },
  template: '<InfoKWF v-bind="args"/>',
});

export const Empty = Template.bind({});

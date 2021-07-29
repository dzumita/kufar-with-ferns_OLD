import Info from "../components/InfoKWF.vue";

export default {
  title: "Components/Info KWF",
  component: Info,
};

const Template = (args: never) => ({
  components: { Info },
  setup() {
    return { args };
  },
  template: '<Info v-bind="args"/>',
});

export const InfoKWF = Template.bind({});

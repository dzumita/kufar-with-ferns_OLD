import SkladnikKWF from "../components/SkladnikKWF";

export default {
  title: "Components/SkladnikKWF",
  component: SkladnikKWF,
  argTypes: {
    iconName: {
      control: "select",
      options: ["empty", "dirty", "water", "fire"],
    },
    count: {
      control: "number",
      max: 999,
      min: 0,
    },
    attribute: {
      control: "select",
      options: ["er", "ot", "cl"],
    },
  },
};

const Template = (args) => ({
  components: { SkladnikKWF },
  setup() {
    return { args };
  },
  template: '<SkladnikKWF v-bind="args"/>',
});

export const Empty = Template.bind({});
Empty.args = {
  iconName: "empty",
};

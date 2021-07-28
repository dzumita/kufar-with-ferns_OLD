import SkladnikKWF from "../components/SkladnikKWF.vue";

export default {
  title: "Components/SkladnikKWF",
  component: SkladnikKWF,
  argTypes: {
    iconName: {
      control: "select",
      options: ["empty", "dirty", "water", "fire"],
      description: "Sets a picture for an item",
    },
    count: {
      control: "number",
      max: 999,
      min: 0,
      description: "Sets the number of items",
    },
    attribute: {
      control: "select",
      options: ["er", "ot", "cl"],
      description: "Sets an attribute of an item",
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

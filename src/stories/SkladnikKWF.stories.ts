import Skladnik from "../components/SkladnikKWF.vue";

export default {
  title: "Components/Skladnik KWF",
  component: Skladnik,
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
      options: ["emp", "oth", "cls", "met"],
      description: "Sets an attribute of an item",
    },
  },
};

interface template {
  iconName: string;
  count: number;
  attribute: string;
}

const Template = (args: template) => ({
  components: { Skladnik },
  setup() {
    return { args };
  },
  template: '<Skladnik v-bind="args"/>',
});

export const SkladnikKWF = Template.bind({});
// @ts-ignore
SkladnikKWF.args = {
  iconName: "empty",
};

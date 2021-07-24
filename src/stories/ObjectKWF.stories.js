import ObjectKWF from "../components/ObjectKWF";

export default {
  title: "Components/ObjectKWF",
  component: ObjectKWF,
  argTypes: {
    iconName: {
      control: "select",
      options: ["unknown", "dirty", "water", "fire"],
    },
  },
};

const Template = (args) => ({
  components: { ObjectKWF },
  setup() {
    return { args };
  },
  template: '<ObjectKWF v-bind="args"/>',
});

export const Unknown = Template.bind({});
Unknown.args = {
  iconName: "unknown",
};

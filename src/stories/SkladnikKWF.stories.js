import SkladnikKWF from "../components/SkladnikKWF";

export default {
  title: "Components/SkladnikKWF",
  component: SkladnikKWF,
  argTypes: {
    iconName: {
      control: "select",
      options: ["unknown", "dirty", "water", "fire"],
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

export const Unknown = Template.bind({});
Unknown.args = {
  iconName: "unknown",
};

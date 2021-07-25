import LinkKWF from "../components/LinkKWF";

export default {
  title: "Components/LinkKWF",
  component: LinkKWF,
  argTypes: {
    iconName: {
      control: "select",
      options: ["paparac", "furnace", "shop", "info", "settings"],
    },
  },
};

const Template = (args) => ({
  components: { LinkKWF },
  setup() {
    return { args };
  },
  template: '<LinkKWF v-bind="args"/>',
});

export const Paparac = Template.bind({});
Paparac.args = {
  iconName: "paparac",
  path: "/",
};

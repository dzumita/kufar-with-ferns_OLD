import LinkKWF from "../components/LinkKWF.vue";

export default {
  title: "Components/LinkKWF",
  component: LinkKWF,
  argTypes: {
    iconName: {
      control: "select",
      options: ["paparac", "furnace", "shop", "info", "settings"],
      description: "Sets a picture for a link",
    },
    hasActive: {
      control: "boolean",
      description: "Sets whether the item will be active",
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
  hasActive: true,
};

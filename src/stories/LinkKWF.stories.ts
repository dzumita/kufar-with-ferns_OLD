import Link from "../components/LinkKWF.vue";

export default {
  title: "Components/Link KWF",
  component: Link,
  argTypes: {
    iconName: {
      control: "select",
      options: ["paparac", "furnace", "anvil", "shop", "info", "settings"],
      description: "Sets a picture for a link",
    },
    hasActive: {
      control: "boolean",
      description: "Sets whether the item will be active",
    },
  },
};

interface template {
  iconName: string;
  hasActive: boolean;
}

const Template = (args: template) => ({
  components: { Link },
  setup() {
    return { args };
  },
  template: '<Link v-bind="args"/>',
});

export const LinkKWF = Template.bind({});
// @ts-ignore
LinkKWF.args = {
  iconName: "paparac",
  hasActive: true,
};

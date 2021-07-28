import SkryniaKWF from "../components/SkryniaKWF.vue";

export default {
  title: "Components/SkryniaKWF",
  component: SkryniaKWF,
  argTypes: {
    title: {
      control: "text",
      description: "Sets the title for an item",
    },
    hasFilter: {
      control: "boolean",
      description: "Sets the display of a filter on an item",
    },
  },
};

const Template = (args) => ({
  components: { SkryniaKWF },
  setup() {
    return { args };
  },
  template: '<SkryniaKWF v-bind="args"/>',
});

export const Primary = Template.bind({});
Primary.args = {
  hasFilter: true,
};

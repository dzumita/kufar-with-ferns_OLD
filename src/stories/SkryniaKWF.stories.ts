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

interface template {
  title: string;
  hasFilter: boolean;
}

const Template = (args: template) => ({
  components: { SkryniaKWF },
  setup() {
    return { args };
  },
  template: '<SkryniaKWF v-bind="args"/>',
});

export const Primary = Template.bind({});
// @ts-ignore
Primary.args = {
  hasFilter: true,
};

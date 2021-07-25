import SkryniaKWF from "../components/SkryniaKWF";

export default {
  title: "Components/SkryniaKWF",
  component: SkryniaKWF,
  argTypes: {
    title: {
      control: "text",
    },
    hasFilter: {
      control: "boolean",
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

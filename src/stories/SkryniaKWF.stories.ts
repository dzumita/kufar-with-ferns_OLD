import Skrynia from "../components/SkryniaKWF.vue";

export default {
  title: "Components/Skrynia KWF",
  component: Skrynia,
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
  components: { Skrynia },
  setup() {
    return { args };
  },
  template: '<Skrynia v-bind="args"/>',
});

export const SkryniaKWF = Template.bind({});
// @ts-ignore
SkryniaKWF.args = {
  hasSelection: true,
  hasFilter: true,
};

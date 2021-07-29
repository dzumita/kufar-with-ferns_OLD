import Factory from "../components/FactoryKWF.vue";

export default {
  title: "Components/Factory KWF",
  component: Factory,
  argTypes: {
    name: {
      control: "text",
    },
  },
};

interface template {
  name: string;
}

const Template = (args: template) => ({
  components: { Factory },
  setup() {
    return { args };
  },
  template: '<Factory v-bind="args"/>',
});

export const FactoryKWF = Template.bind({});
// @ts-ignore
FactoryKWF.args = {
  name: "Merge",
};

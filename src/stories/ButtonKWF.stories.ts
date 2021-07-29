import Button from "../components/ButtonKWF.vue";

export default {
  title: "Components/Button KWF",
  component: Button,
  argTypes: {
    label: {
      control: "text",
    },
  },
};

interface template {
  label: string;
}

const Template = (args: template) => ({
  components: { Button },
  setup() {
    return { args };
  },
  template: '<Button v-bind="args"/>',
});

export const ButtonKWF = Template.bind({});
// @ts-ignore
ButtonKWF.args = {
  label: "Click me!",
};

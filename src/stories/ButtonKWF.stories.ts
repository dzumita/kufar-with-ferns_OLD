import ButtonKWF from "../components/ButtonKWF.vue";

export default {
  title: "Components/ButtonKWF",
  component: ButtonKWF,
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
  components: { ButtonKWF },
  setup() {
    return { args };
  },
  template: '<ButtonKWF v-bind="args"/>',
});

export const Primary = Template.bind({});
// @ts-ignore
Primary.args = {
  label: "Click me!",
};

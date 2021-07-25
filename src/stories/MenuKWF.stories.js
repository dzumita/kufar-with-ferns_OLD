import MenuKWF from "../components/MenuKWF";

export default {
  title: "Components/MenuKWF",
  component: MenuKWF,
};

const Template = (args) => ({
  components: { MenuKWF },
  setup() {
    return { args };
  },
  template: '<MenuKWF v-bind="args"/>',
});

export const Primary = Template.bind({});

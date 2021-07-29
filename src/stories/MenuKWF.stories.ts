import Menu from "../components/MenuKWF.vue";

export default {
  title: "Components/Menu KWF",
  component: Menu,
};

const Template = (args: never) => ({
  components: { Menu },
  setup() {
    return { args };
  },
  template: '<Menu v-bind="args"/>',
});

export const MenuKWF = Template.bind({});

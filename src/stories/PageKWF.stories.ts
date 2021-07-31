import PageKWF from "./example/PageKWF.vue";

export default {
  title: "Example/Page",
  component: PageKWF,
};

const Template = (args: never) => ({
  components: { PageKWF },
  setup() {
    return { args };
  },
  template: '<PageKWF v-bind="args"/>',
});

export const Page = Template.bind({});

import PopupInfoKWF from "./example/PopupInfoKWF.vue";

export default {
  title: "Example/Popup Info",
  component: PopupInfoKWF,
};

const Template = (args: never) => ({
  components: { PopupInfoKWF },
  setup() {
    return { args };
  },
  template: '<PopupInfoKWF v-bind="args"/>',
});

export const PopupInfo = Template.bind({});

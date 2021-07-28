import PictureKWF from "../components/PictureKWF.vue";

export default {
  title: "Components/PictureKWF",
  component: PictureKWF,
  argTypes: {
    pictureSource: {
      control: "select",
      options: [
        "skrynia/empty",
        "skrynia/dirty",
        "skrynia/water",
        "skrynia/fire",
      ],
      description: "Sets the picture",
    },
  },
};

const Template = (args) => ({
  components: { PictureKWF },
  setup() {
    return { args };
  },
  template: '<PictureKWF v-bind="args"/>',
});

export const Empty = Template.bind({});
Empty.args = {
  pictureSource: "skrynia/empty",
};

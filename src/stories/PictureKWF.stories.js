import PictureKWF from "../components/PictureKWF";

export default {
  title: "Components/PictureKWF",
  component: PictureKWF,
  argTypes: {
    pictureSource: {
      control: "select",
      options: [
        "skrynia/unknown",
        "skrynia/dirty",
        "skrynia/water",
        "skrynia/fire",
      ],
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

export const Unknown = Template.bind({});
Unknown.args = {
  pictureSource: "skrynia/unknown",
};

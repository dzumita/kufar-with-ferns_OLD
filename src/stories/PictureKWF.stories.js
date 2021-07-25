import PictureKWF from "../components/PictureKWF";

export default {
  title: "Components/PictureKWF",
  component: PictureKWF,
  argTypes: {
    pictureSource: {
      control: "select",
      options: [
        "skladniks/unknown",
        "skladniks/dirty",
        "skladniks/water",
        "skladniks/fire",
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
  pictureSource: "skladniks/unknown",
};

import Picture from "../components/PictureKWF.vue";

export default {
  title: "Components/Picture KWF",
  component: Picture,
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

interface template {
  pictureSource: string;
}

const Template = (args: template) => ({
  components: { Picture },
  setup() {
    return { args };
  },
  template: '<Picture v-bind="args"/>',
});

export const PictureKWF = Template.bind({});
// @ts-ignore
PictureKWF.args = {
  pictureSource: "skrynia/empty",
};

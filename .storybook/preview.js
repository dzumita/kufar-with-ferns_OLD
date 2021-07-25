export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  backgrounds: {
    default: 'Flesh',
    values: [
      {
        name: 'Flesh',
        value: '#fcecd1',
      },
    ],
  },
}

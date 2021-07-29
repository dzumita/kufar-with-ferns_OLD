export const parameters = {
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

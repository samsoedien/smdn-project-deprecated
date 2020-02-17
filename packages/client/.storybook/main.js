module.exports = {
  stories: ['../src/**/*.stories.(ts|tsx|js|jsx|mdx)'],
  addons: [
    {
      name: '@storybook/preset-create-react-app',
      options: {
        tsDocgenLoaderOptions: {},
      },
    },
    '@storybook/addon-actions',
    '@storybook/addon-links',
    '@storybook/addon-knobs',
    '@storybook/addon-storysource',
    '@storybook/addon-a11y',
    '@storybook/addon-jest',
    {
      name: '@storybook/addon-docs',
      options: {
        configureJSX: true,
      },
    },
  ],
}

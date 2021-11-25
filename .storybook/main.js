const { propSatisfies, test } = require('ramda')
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin')

module.exports = {
  addons: [
    '@storybook/addon-a11y',
    '@storybook/addon-links',
    'storybook-addon-pseudo-states',
    '@storybook/addon-essentials',
  ],
  stories: ['../components/**/*.story.tsx'],
  webpackFinal: (config) => {
    // Options for using CSS modules
    const cssFileRule = propSatisfies(test(/css/i), 'test')
    const cssLoader = propSatisfies(test(/css-loader/i), 'loader')
    const loader = config.module.rules.find(cssFileRule).use.find(cssLoader)
    loader.options.modules = {
      auto: true,
      localIdentName: '[name]_[local]__[hash:base64:5]',
    }

    // Options for using __dirname as the story title
    config.node = {
      __dirname: true,
    }

    // Options for using TS path alias
    config.resolve.plugins = [...config.resolve.plugins, new TsconfigPathsPlugin()]

    return config
  },
}

// eslint-disable-next-line @typescript-eslint/no-var-requires
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')

const moduleExports = {
  webpack: (config, { isServer }) => {
    if (process.env.ANALYZE) {
      config.plugins.push(
        new BundleAnalyzerPlugin({
          analyzerMode: 'server',
          analyzerPort: isServer ? 8888 : 8889,
          openAnalyzer: true,
        }),
      )
    }
    return config
  },
  i18n: {
    locales: ['en-US'],
    defaultLocale: 'en-US',
  },
}

module.exports = moduleExports

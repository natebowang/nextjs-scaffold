// eslint-disable-next-line @typescript-eslint/no-var-requires
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')

const headers = [
  {
    key: 'Content-Security-Policy',
    value: "frame-ancestors 'self'; " + 'report-uri https://ava.report-uri.com/r/d/csp/enforce; ',
  },
  {
    key: 'Permissions-Policy',
    value: "camera='none', microphone='none', geolocation='none'",
  },
  {
    key: 'Referrer-Policy',
    value: 'strict-origin-when-cross-origin',
  },
  {
    // Only allow HTTPS
    key: 'Strict-Transport-Security',
    value: 'max-age=31536000; includeSubDomains; preload',
  },
  {
    // Content-Type headers should be followed and not be changed. Avoid MIME type sniffing.
    key: 'X-Content-Type-Options',
    value: 'nosniff',
  },
  {
    key: 'X-DNS-Prefetch-Control',
    value: 'on',
  },
  {
    // The page cannot be displayed in a frame, regardless of the site attempting to do so.
    key: 'X-Frame-Options',
    value: 'SAMEORIGIN',
  },
  {
    // Protect from XSS attacks when using an old browsers that don't yet support CSP
    key: 'X-XSS-Protection',
    value: '1',
  },
]

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
  async headers() {
    return [
      {
        source: '/',
        headers,
      },
    ]
  },
}

module.exports = moduleExports

module.exports = {
  collectCoverageFrom: ['./components/**/*.{ts,tsx}', '!**/*.story.tsx'],
  moduleNameMapper: {
    '^@/components/(.*)$': './components/$1',
    '^@/pages/(.*)$': './pages/$1',
    '\\.(css)$': 'identity-obj-proxy',
  },
  setupFilesAfterEnv: ['./jest.setup.js'],
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['./node_modules/', './.next/', './e2eTests/'],
  transform: {
    /* Use babel-jest to transpile tests with the next/babel preset
    https://jestjs.io/docs/configuration#transform-objectstring-pathtotransformer--pathtotransformer-object */
    '^.+\\.(js|jsx|ts|tsx)$': ['babel-jest', { presets: ['next/babel'] }],
  },
  transformIgnorePatterns: ['/node_modules/', '^.+\\.module\\.(css|sass|scss)$'],
}

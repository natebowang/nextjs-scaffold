module.exports = {
  collectCoverageFrom: ['./components/**/*.{ts,tsx}', '!**/*.story.tsx', '!**/*.mock.{ts,tsx}'],
  moduleNameMapper: {
    '^@/components/_features/(.*)$': './components/_features/$1',
    '^@/components/_pages/(.*)$': './components/_pages/$1',
    '^@/components/_uis/(.*)$': './components/_uis/$1',
    '^@/pages/(.*)$': './pages/$1',
    '\\.(css|sass|scss)$': 'identity-obj-proxy',
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

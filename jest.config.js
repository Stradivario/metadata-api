module.exports = {
  testEnvironment: 'node',
  testPathIgnorePatterns: ['/node_modules/'],
  coverageReporters: ['lcov', 'html'],
  rootDir: './',
  moduleDirectories: ['node_modules', 'src'],
  transform: {
    '\\.(ts|tsx)$': 'ts-jest',
  },
  testRegex: '/src/.*\\.spec.(ts)$',
  verbose: true,
  collectCoverage: true,
};

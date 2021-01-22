const base = require('@design-systems/test/jest.config.base');

module.exports = {
  ...base,
  roots: ['<rootDir>/components/', '<rootDir>/packages/'],
  projects: [
    '<rootDir>/components/*/jest.config.js',
    '<rootDir>/packages/*/jest.config.js'
  ],
  coverageDirectory: '<rootDir>/coverage/',
  collectCoverageFrom: [...base.collectCoverageFrom, '!./src/icons/*.ts*']
};

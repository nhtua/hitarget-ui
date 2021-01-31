module.exports = {
  "preset": '@vue/cli-plugin-unit-jest',
  "transform": {
    '^.+\\.vue$': 'vue-jest'
  },
  "moduleNameMapper": {
    "/^@\/(.*)$/": "<rootDir>/src/$1"
  },
  "resolver": null,
  "collectCoverage": true,
  "collectCoverageFrom": ["**/*.{js,vue}", "!**/node_modules/**",  "!**/dist/**"],
  "coverageReporters": ["json", "html"],
}

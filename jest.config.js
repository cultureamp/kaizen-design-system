/* eslint-disable no-console */
module.exports = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  testMatch: ["**/*.spec.ts?(x)"],
  setupFilesAfterEnv: ["jest-canvas-mock", "<rootDir>/setupTests.ts"],
  moduleNameMapper: {
    "\\.(jpe?g|png|webm|mp4)$": "jest-static-stubs/$1",
    "\\.s?css$": "identity-obj-proxy",
    "~types/(.*)$": "<rootDir>/packages/components/src/types/$1",
    "~utils/(.*)$": "<rootDir>/packages/components/src/utils/$1",
    "~components/(.*)$": "<rootDir>/packages/components/src/$1",
    "~icons/(.*)$": "<rootDir>/packages/components/src/SVG/icons/$1",
    "^__@cultureamp/i18n-react-intl/locales/(.*)": "<rootDir>/packages/components/locales/$1",
    // Force module uuid to resolve with the CJS entry point, because Jest does not support package.json.exports. See https://github.com/uuidjs/uuid/issues/451
    // Should be resolved in v9, but @storybook/test-runner has deps which use and bring in v8
    uuid: require.resolve("uuid"),
  },
  transformIgnorePatterns: ["[/\\\\]node_modules[/\\\\].+\\.(js|jsx|mjs)$"],
}

process.env.TZ = "UTC"

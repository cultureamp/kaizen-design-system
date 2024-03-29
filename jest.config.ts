import { JestConfigWithTsJest } from "ts-jest"

const jestConfig: JestConfigWithTsJest = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  testMatch: ["**/*.spec.ts?(x)"],
  setupFilesAfterEnv: ["jest-canvas-mock", "<rootDir>/jest.setup.ts"],
  moduleNameMapper: {
    "\\.(jpe?g|png|webm|mp4)$": "jest-static-stubs/$1",
    "\\.s?css$": "identity-obj-proxy",
    // Force module uuid to resolve with the CJS entry point, because Jest does not support package.json.exports. See https://github.com/uuidjs/uuid/issues/451
    // Should be resolved in v9, but @storybook/test-runner has deps which use and bring in v8
    uuid: require.resolve("uuid"),
  },
  transformIgnorePatterns: ["[/\\\\]node_modules[/\\\\].+\\.(js|jsx|mjs)$"],
}

export default jestConfig

process.env.TZ = "UTC"

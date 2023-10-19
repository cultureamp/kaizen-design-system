/* eslint-disable no-console */
module.exports = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  testMatch: ["**/*.spec.ts?(x)"],
  setupFilesAfterEnv: ["jest-canvas-mock", "<rootDir>/setupTests.ts"],
  moduleNameMapper: {
    "\\.(jpe?g|png|webm|mp4)$": "jest-static-stubs/$1",
    "\\.s?css$": "identity-obj-proxy",
  },
  transformIgnorePatterns: ["[/\\\\]node_modules[/\\\\].+\\.(js|jsx|mjs)$"],
  modulePathIgnorePatterns: ["<rootDir>/packages/components"],
}

process.env.TZ = "UTC"

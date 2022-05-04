module.exports = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  testRunner: "jest-circus/runner",
  testMatch: ["**/*.spec.ts?(x)"],
  setupFilesAfterEnv: ["jest-canvas-mock", "<rootDir>/setupTests.ts"],
  moduleNameMapper: {
    "\\.(jpe?g|png|webm|mp4)$": "jest-static-stubs/$1",
    "\\.s?css$": "identity-obj-proxy",
    "\\.svg$": require.resolve("@kaizen/component-library/mocks/svgMock"),
  },
  transformIgnorePatterns: ["[/\\\\]node_modules[/\\\\].+\\.(js|jsx|mjs)$"],
}

process.env.TZ = "UTC"

if (process.env.USE_REACT_17 === "true") {
  module.exports.cacheDirectory = ".cache/jest-cache-react-17"
  module.exports.moduleNameMapper = {
    ...module.exports.moduleNameMapper,
    "^react-dom((\\/.*)?)$": "react-dom-17$1",
    "^react((\\/.*)?)$": "react-17$1",
  }
}

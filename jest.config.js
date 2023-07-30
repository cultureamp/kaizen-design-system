/* eslint-disable no-console */
module.exports = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  testMatch: ["**/*.spec.ts?(x)"],
  setupFilesAfterEnv: ["jest-canvas-mock", "<rootDir>/setupTests.ts"],
  moduleNameMapper: {
    "\\.(jpe?g|png|webm|mp4)$": "jest-static-stubs/$1",
    "\\.s?css$": "identity-obj-proxy",
    "\\.svg$": require.resolve("@kaizen/component-library/mocks/svgMock"),
  },
  transformIgnorePatterns: ["[/\\\\]node_modules[/\\\\].+\\.(js|jsx|mjs)$"],
  modulePathIgnorePatterns: ["<rootDir>/packages/components"],
}

process.env.TZ = "UTC"

if (process.env.USE_REACT_16 === "true") {
  console.log("=== React 16 tests ===")
  module.exports.cacheDirectory = ".cache/jest-cache-react-16"
  module.exports.moduleNameMapper = {
    ...module.exports.moduleNameMapper,
    "^react-dom((\\/.*)?)$": "react-dom-16$1",
    "^react((\\/.*)?)$": "react-16$1",
    "^@testing-library/react((\\/.*)?)$": "@testing-library/react-12$1",
    "^react-test-renderer((\\/.*)?)$": "react-test-renderer-17$1",
  }
} else if (process.env.USE_REACT_17 === "true") {
  console.log("=== React 17 tests ===")
  module.exports.cacheDirectory = ".cache/jest-cache-react-17"
  module.exports.moduleNameMapper = {
    ...module.exports.moduleNameMapper,
    "^react-dom((\\/.*)?)$": "react-dom-17$1",
    "^react((\\/.*)?)$": "react-17$1",
    "^@testing-library/react((\\/.*)?)$": "@testing-library/react-12$1",
    "^react-test-renderer((\\/.*)?)$": "react-test-renderer-17$1",
  }
}

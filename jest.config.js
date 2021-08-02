module.exports = {
  preset: "ts-jest",
  testRunner: "jest-circus/runner",
  testMatch: ["**/*.spec.ts?(x)"],
  setupFilesAfterEnv: ["jest-canvas-mock"],
  moduleNameMapper: {
    "\\.(jpe?g|png)$": "jest-static-stubs/$1",
    "\\.s?css$": "identity-obj-proxy",
    "\\.svg$": require.resolve("@kaizen/component-library/mocks/svgMock"),
  },
}

if (process.env.USE_REACT_17 === "true") {
  module.exports.cacheDirectory = ".cache/jest-cache-react-17"
  module.exports.moduleNameMapper = {
    ...module.exports.moduleNameMapper,
    "^react-dom((\\/.*)?)$": "react-dom-17$1",
    "^react((\\/.*)?)$": "react-17$1",
  }
}

module.exports = {
  preset: "ts-jest",
  testRunner: "jest-circus/runner",
  testMatch: ["**/*.spec.ts?(x)"],
  moduleNameMapper: {
    "\\.(jpe?g|png)$": "jest-static-stubs/$1",
    "\\.s?css$": "identity-obj-proxy",
    "\\.svg$": require.resolve("@kaizen/component-library/mocks/svgMock"),
  },
}

module.exports = {
  preset: "ts-jest",
  testRunner: "jest-circus/runner",
  testMatch: ["**/*.spec.ts?(x)"],
  moduleNameMapper: {
    "\\.(jpe?g|png)$": "jest-static-stubs/$1",
    "\\.(sass|scss|css)$": "identity-obj-proxy",
  },
}

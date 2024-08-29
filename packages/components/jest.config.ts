import { JestConfigWithTsJest } from "ts-jest"

const jestConfig: JestConfigWithTsJest = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  testMatch: ["**/*.jest.spec.ts?(x)"],
  setupFilesAfterEnv: ["jest-canvas-mock", "<rootDir>/jest.setup.ts"],
  roots: ["<rootDir>"],
  moduleNameMapper: {
    "\\.(jpe?g|png|webm|mp4)$": "jest-static-stubs/$1",
    "\\.s?css$": "identity-obj-proxy",
    "~tests": "<rootDir>/__tests__/index",
    "~tests/(.*)$": "<rootDir>/__tests__/$1",
    "~components/(.*)$": "<rootDir>/src/$1",
    "^__@cultureamp/i18n-react-intl/locales/(.*)": "<rootDir>/locales/$1",
  },
  transformIgnorePatterns: ["[/\\\\]node_modules[/\\\\].+\\.(js|jsx|mjs)$"],
}

export default jestConfig

process.env.TZ = "UTC"

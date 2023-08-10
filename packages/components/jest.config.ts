/* eslint-disable no-console */
import { JestConfigWithTsJest } from "ts-jest"
// @ts-ignore
import sharedConfig from "../../jest.config.js"

const jestConfig: JestConfigWithTsJest = {
  ...sharedConfig,
  roots: ["<rootDir>"],
  modulePathIgnorePatterns: [],
  moduleNameMapper: {
    ...sharedConfig.moduleNameMapper,
    "~types/(.*)$": "<rootDir>/src/types/$1",
    "~utils/(.*)$": "<rootDir>/src/utils/$1",
    "~components/(.*)$": "<rootDir>/src/$1",
    "~icons/(.*)$": "<rootDir>/src/Icons/$1",
    "^__@cultureamp/i18n-react-intl/locales/(.*)": "<rootDir>/locales/$1",
  },
}

export default jestConfig

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

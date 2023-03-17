/* eslint-disable no-console */
/** @type {import('jest').Config} */

import { JestConfigWithTsJest } from "ts-jest"
import sharedConfig from "../../jest.config.js"

const jestConfig: JestConfigWithTsJest = {
  ...sharedConfig,
  roots: ["<rootDir>"],
  modulePathIgnorePatterns: [],
  moduleNameMapper: {
    ...sharedConfig.moduleNameMapper,
    "@components/(.*)$": "<rootDir>/src/$1",
    "@utils/(.*)$": "<rootDir>/utils/$1",
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

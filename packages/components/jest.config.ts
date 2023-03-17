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

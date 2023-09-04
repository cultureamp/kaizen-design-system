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

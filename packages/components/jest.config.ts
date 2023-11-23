import { JestConfigWithTsJest } from "ts-jest"
import sharedConfig from "../../jest.config"

const jestConfig: JestConfigWithTsJest = {
  ...sharedConfig,
  roots: ["<rootDir>"],
  moduleNameMapper: {
    ...sharedConfig.moduleNameMapper,
    "~types/(.*)$": "<rootDir>/src/types/$1",
    "~utils/(.*)$": "<rootDir>/src/utils/$1",
    "~components/(.*)$": "<rootDir>/src/$1",
    "^__@cultureamp/i18n-react-intl/locales/(.*)": "<rootDir>/locales/$1",
  },
}

export default jestConfig

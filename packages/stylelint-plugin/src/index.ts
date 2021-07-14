import { Configuration } from "stylelint"

const kaizenStylelintRules = {
  "kaizen/prefer-var-tokens": [
    true,
    { severity: "warning", disableFixing: false },
  ],
  "kaizen/no-invalid-use-of-var-tokens-in-functions": [
    true,
    { severity: "warning", disableFixing: false },
  ],
  "kaizen/no-invalid-use-of-var-tokens-in-equations": [
    true,
    { severity: "warning", disableFixing: false },
  ],
  "kaizen/all-token-imports-must-be-used": [
    true,
    { severity: "warning", disableFixing: false },
  ],
  "kaizen/all-used-tokens-must-be-imported": [
    true,
    { severity: "warning", disableFixing: false },
  ],
  "kaizen/rename-colors": [true, { severity: "warning", disableFixing: false }],
}

const kaizenStylelintConfig: Partial<Configuration> = {
  plugins: ["./stylelintPlugin"],
  rules: kaizenStylelintRules,
}

module.exports = kaizenStylelintConfig

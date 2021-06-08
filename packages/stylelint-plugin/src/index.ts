import { Configuration } from "stylelint"

export const kaizenStylelintRules = {
  "kaizen/no-deprecated-tokens": [
    true,
    { severity: "warning", disableFixing: false },
  ],
  "kaizen/no-invalid-functions": [
    true,
    { severity: "warning", disableFixing: false },
  ],
  "kaizen/no-invalid-equations": [
    true,
    { severity: "warning", disableFixing: false },
  ],
  "kaizen/imports-no-unused": [
    true,
    { severity: "warning", disableFixing: false },
  ],
  "kaizen/imports-no-extraneous": [
    true,
    { severity: "warning", disableFixing: false },
  ],
}

const kaizenStylelintConfig: Partial<Configuration> = {
  plugins: ["./stylelintPlugin"],
  rules: kaizenStylelintRules,
}

export default kaizenStylelintConfig

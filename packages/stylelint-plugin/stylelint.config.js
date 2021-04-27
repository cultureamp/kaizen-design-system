module.exports = {
  plugins: ["@kaizen/stylelint-plugin"],
  rules: {
    "kaizen/no-deprecated-tokens": [
      true,
      { severity: "warning", allowFixing: true },
    ],
    "kaizen/no-transitive-tokens": [
      true,
      { severity: "warning", allowFixing: true },
    ],
    "kaizen/no-invalid-functions": [
      true,
      { severity: "warning", allowFixing: true },
    ],
    "kaizen/no-invalid-equations": [
      true,
      { severity: "warning", allowFixing: true },
    ],
    "kaizen/imports-no-unused": [
      true,
      { severity: "warning", allowFixing: true },
    ],
    "kaizen/imports-no-extraneous": [
      true,
      { severity: "warning", allowFixing: true },
    ],
  },
}

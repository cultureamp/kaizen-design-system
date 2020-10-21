export default function isEnabled(
  settingName: string,
  value: string | undefined,
  defaultValue: boolean
): boolean {
  if (value === "1" || value === "true") {
    return true
  } else if (value === "0" || value === "false") {
    return false
  } else if (value === "" || value === undefined) {
    return defaultValue
  }
  throw new Error("Unrecognised " + settingName + ' value: "' + value + '"')
}

module.exports = isEnabled

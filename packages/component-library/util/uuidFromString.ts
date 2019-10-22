const getUniqueId = require("uuid/v5")

export const uuidFromString = (value: string): string => {
  // Random valid uuid namespace
  const NAMESPACE = "1b671a64-40d5-491e-99b0-da01ff1f3341"

  return getUniqueId(value, NAMESPACE)
}

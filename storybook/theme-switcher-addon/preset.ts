// eslint-disable-next-line prefer-arrow/prefer-arrow-functions
export function managerEntries(entry = []) {
  return [...entry, require.resolve("./register")]
}

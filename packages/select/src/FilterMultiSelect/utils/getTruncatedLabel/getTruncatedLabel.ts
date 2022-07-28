const LABELS_TRUNCATED_LIMIT = 3
const CONNECTOR = ", "

// TODO: update it to use character limits instead of the number of labels
export const getTruncatedLabels = (labels: string[]): string => {
  if (labels.length <= LABELS_TRUNCATED_LIMIT) {
    return labels.join(CONNECTOR)
  }

  return `${[...labels].splice(0, LABELS_TRUNCATED_LIMIT).join(CONNECTOR)} +${
    labels.length - LABELS_TRUNCATED_LIMIT
  } more`
}

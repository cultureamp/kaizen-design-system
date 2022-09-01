const CONNECTOR = ", "

const truncateByCharacterLimit = (
  labels: string[],
  limit: number,
  labelsTruncatedCount = 0
): string => {
  const moreIndicator =
    labelsTruncatedCount > 0 ? ` + ${labelsTruncatedCount} more` : ""
  if (labels.length === 1) {
    return `${labels.join(CONNECTOR)}${moreIndicator}`
  }
  if (labels.join("").length < limit) {
    return `${labels.join(CONNECTOR)}${moreIndicator}`
  }

  const newLabels = labels.slice(0, labels.length - 1)
  return truncateByCharacterLimit(newLabels, limit, labelsTruncatedCount + 1)
}

export const getTruncatedLabels = (labels: string[], limit: number): string =>
  truncateByCharacterLimit(labels, limit)

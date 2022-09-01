const CONNECTOR = ", "

export const truncateByCharacterLimit = (
  labels: string[],
  limit: number,
  i = 0
): string => {
  const moreIndicator = i > 0 ? ` + ${i} more` : ""
  if (labels.length === 1) {
    return `${labels.join(CONNECTOR)}${moreIndicator}`
  }
  if (labels.join("").length < limit) {
    return `${labels.join(CONNECTOR)}${moreIndicator}`
  }

  const newLabels = labels.slice(0, labels.length - 1)
  return truncateByCharacterLimit(newLabels, limit, i + 1)
}

export const getTruncatedLabels = (labels: string[], limit) =>
  truncateByCharacterLimit(labels, limit)

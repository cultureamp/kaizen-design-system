export const isValidRange = (
  startDate: Date | undefined,
  endDate: Date | undefined
): boolean => {
  if (startDate && endDate) return startDate <= endDate
  return false
}

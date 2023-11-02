export const calculatePercentage = ({
  value,
  max,
}: {
  value: number
  max: number
}): number => (value / max) * 100.0

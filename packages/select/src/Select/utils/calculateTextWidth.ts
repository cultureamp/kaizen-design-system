export const calculateTextWidth = (text: string): number | undefined => {
  const letterSpacedText = text.split("").join(String.fromCharCode(8202))
  const font = "400 16px Inter"
  const canvas = document.createElement("canvas")
  const context = canvas.getContext("2d")

  if (context !== null) {
    context.font = font
    const { width } = context.measureText(letterSpacedText)
    return Math.round(width) + 38 // Add extra width for the icon
  }
  return undefined // Fallback
}

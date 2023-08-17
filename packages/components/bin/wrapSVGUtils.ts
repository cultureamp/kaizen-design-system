const svgToComponentTitle = (fileName: string) => {
  const split = fileName.split("-")
  return split
    .map((word: string) => word.charAt(0).toUpperCase() + word.slice(1))
    .join("")
    .replace(".icon", "Icon")
}

module.exports = {
  svgToComponentTitle,
}

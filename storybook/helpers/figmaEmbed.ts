export const figmaEmbed = (url: string): Record<string, unknown> => ({
  design: {
    type: "figma",
    url,
  },
})

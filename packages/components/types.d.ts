declare module "*.css" {
  const classes: Record<string, string>
  export default classes
}

declare module "*.scss" {
  const classes: Record<string, string>
  export default classes
}

declare module "*.icon.svg" {
  const content: {
    id: string
    viewBox: string
  }
  export default content
}

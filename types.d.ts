declare module "*.icon.svg" {
  const content: {
    id: string
    viewBox: string
  }
  export default content
}

declare module "*.css" {
  const classes: { [key: string]: string }
  export default classes
}

declare module "*.scss" {
  const classes: { [key: string]: string }
  export default classes
}

declare module "*.module.scss" {
  const styles: { [className: string]: string }
  export default styles
}

declare module "*.scss" {
  const content: Record<string, string>
  export default content
}

declare module "*.icon.svg" {
  const content: {
    id: string
    viewBox: string
  }
  export default content
}

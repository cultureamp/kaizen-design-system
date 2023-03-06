declare module "*.module.scss" {
  const styles: { [className: string]: string }
  export default styles
}

declare module "*.scss" {
  const content: Record<string, string>
  export default content
}

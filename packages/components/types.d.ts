declare module '*.css' {
  const classes: { [key: string]: string }
  export default classes
}

declare module '*.scss' {
  const classes: { [key: string]: string }
  export default classes
}

declare module '*?raw' {
  const content: string
  export default content
}

declare module '*.png' {
  const content: string
  export default content
}

declare module '*.svg' {
  const Icon: import('react').FC<
    import('react').SVGProps<SVGSVGElement> & { color?: string; size?: number }
  >
  export default Icon
}

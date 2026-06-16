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
  const ReactComponent: import('react').FC<import('./src/Icon/types').Props>
  export { ReactComponent }
  export default ReactComponent
}

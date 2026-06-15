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
  import type { FC, SVGProps } from 'react'
  export interface Props extends SVGProps<SVGSVGElement> {
    color?: string
    size?: number
  }
  const SVGComponent: FC<Props>
  export default SVGComponent
}

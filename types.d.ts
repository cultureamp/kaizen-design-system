declare module "*.css" {
  const classes: { [key: string]: string }
  export default classes
}

declare module "*.scss" {
  const classes: { [key: string]: string }
  export default classes
}

declare module "*.icon.svg" {
  const content: {
    id: string
    viewBox: string
  }
  export default content
}

declare module "*?raw" {
  const content: string
  export default content
}

declare module "react-map-interaction" {
  type InteractionState = {
    scale: number
    translation: { x: number; y: number }
  }
  type Props = {
    showControls?: boolean
    minScale?: number
    maxScale?: number
    value?: InteractionState
    onChange?: (state: InteractionState) => void
  }
  export const MapInteractionCSS: import("react").ComponentType<Props>
  export const MapInteraction: import("react").ComponentType<
    Props & {
      children: (params: InteractionState) => React.ReactNode
    }
  >
}

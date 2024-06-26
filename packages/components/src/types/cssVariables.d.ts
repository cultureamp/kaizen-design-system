import "react"

declare module "react" {
  interface CSSProperties {
    [key: `--${string}`]: string | number
  }
}

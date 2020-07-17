import * as React from "react"
import colorTokens from "@kaizen/design-tokens/tokens/color.json"
import spacingTokens from "@kaizen/design-tokens/tokens/spacing.json"
const styles = require("./styles.module.scss")

type size = "md" | "xl"

export interface LoadingSpinnerProps {
  accessibilityLabel: string
  size: size
  children?: React.ReactNode
}

export const LoadingSpinner = ({
  accessibilityLabel = "Loading",
  size = "xl",
  children,
}: LoadingSpinnerProps) => (
  <div
    data-automation-id="loading-spinner"
    className={styles.wrapper}
    aria-label={accessibilityLabel}
    role="status"
  >
    <svg
      className={styles.spinner}
      aria-hidden="true"
      viewBox="0 0 48 48"
      width={size === "xl" ? 48 : 24} // Ideally we'd use spacing tokens converted to unitless values
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="24"
        cy="24"
        r="22.5"
        stroke={colorTokens.kz.color.wisteria[200]}
        strokeWidth="3"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        fill={colorTokens.kz.color.seedling[400]}
        /* eslint-disable max-len */
        d="M46.5 24c.8284 0 1.5049-.6734 1.4539-1.5002C47.21 10.44 37.5601.789989 25.5003.0461639 24.6734-.004835 24 .671607 24 1.50003c0 .82843.6738 1.49444 1.5002 1.55277 10.4023.73424 18.7128 9.0447 19.447 19.447C45.0056 23.3262 45.6716 24 46.5 24z"
      />
    </svg>
  </div>
)

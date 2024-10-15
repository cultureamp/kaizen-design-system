import React from "react"
import styles from "../LoadingSpinner.module.css"

const SmallSpinnerIcon = (): JSX.Element => (
  <svg
    className={styles.spinner}
    aria-hidden="true"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle
      cx="12"
      cy="12"
      r="9"
      stroke="currentColor"
      strokeWidth="2"
      strokeOpacity="0.3"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      fill="currentColor"
      d="M21.0564 13c.5076 0 .9377-.3851.9431-.8926.0004-.0358.0005-.0716.0005-.1074 0-5.52285-4.4771-10-10-10-.0359 0-.0718.00019-.1076.00057-.5076.00535-.8926.43552-.8926.94308v.11543C10.9998 3.59163 11.4675 4 12 4c4.4183 0 8 3.58172 8 8 0 .5324.4083 1 .9407 1h.1157z"
    />
  </svg>
)

const MediumSpinnerIcon = (): JSX.Element => (
  <svg
    className={styles.spinner}
    aria-hidden="true"
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle
      cx="24"
      cy="24"
      r="22.5"
      stroke="currentColor"
      strokeWidth="3"
      strokeOpacity="0.3"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      fill="currentColor"
      d="M46.5 24c.8284 0 1.5049-.6734 1.4539-1.5002C47.21 10.44 37.5601.789989 25.5003.0461639 24.6734-.004835 24 .671607 24 1.50003c0 .82843.6738 1.49444 1.5002 1.55277 10.4023.73424 18.7128 9.0447 19.447 19.447C45.0056 23.3262 45.6716 24 46.5 24z"
    />
  </svg>
)

const ExtraSmallSpinnerIcon = (): JSX.Element => (
  <svg
    className={styles.spinner}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle
      opacity="0.3"
      cx="8"
      cy="8"
      r="6"
      stroke="currentColor"
      strokeWidth="2"
    />
    <path
      d="M14 8C14 4.68629 11.3137 2 8 2"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

type SpinnerIconProps = {
  size: "xs" | "sm" | "md"
}

export const SpinnerIcon = ({ size }: SpinnerIconProps): JSX.Element => {
  if (size === "xs") return <ExtraSmallSpinnerIcon />
  if (size === "sm") return <SmallSpinnerIcon />
  return <MediumSpinnerIcon />
}

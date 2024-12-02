import React from "react"
import { Heading } from "~components/Heading"
import styles from "./ModalHeader.module.css"

export type ModalHeaderProps = {
  children: React.ReactNode
}

export const ModalHeader = (props: any) => (
  <div className={styles.header}>{props.children}</div>
)

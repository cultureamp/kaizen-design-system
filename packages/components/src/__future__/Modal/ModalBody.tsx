import React from "react"
import styles from "./ModalBody.module.css"

export type ModalBodyProps = {
  children: React.ReactNode
}

export const ModalBody = (props: any) => (
  <div className={styles.body}>{props.children}</div>
)

import React, { HTMLAttributes } from "react"
import classnames from "classnames"
import { motion } from "framer-motion"
import { OverrideClassName } from "@kaizen/component-base"
import styles from "./Backdrop.module.scss"

export const Backdrop: React.FC<
  OverrideClassName<HTMLAttributes<HTMLDivElement>>
> = ({ classNameOverride }) => (
  <motion.div
    className={classnames(styles.backdrop, classNameOverride)}
    initial={{ opacity: 0 }}
    animate={{ opacity: 0.5 }}
    exit={{ opacity: 0 }}
  />
)

Backdrop.displayName = "Backdrop"

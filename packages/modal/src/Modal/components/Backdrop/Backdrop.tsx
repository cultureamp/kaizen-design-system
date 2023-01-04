import React from "react"
import { motion } from "framer-motion"
import styles from "./Backdrop.scss"

export const Backdrop = () => (
  <motion.div
    className={styles.backdrop}
    initial={{ opacity: 0 }}
    animate={{ opacity: 0.5 }}
    exit={{ opacity: 0 }}
  />
)

import * as React from "react"
const styles = require("./deprecated-helpers.stories.scss")

export default {
  title: "@kaizen deprecated-component-library-helpers/styles/type.scss",
}

export const headingMixins = () => (
  <div>
    <div>
      <div className={styles.display0}>Display 0</div>
      <h1 className={styles.heading1}>Heading 1</h1>
      <h2 className={styles.heading2}>Heading 2</h2>
      <h3 className={styles.heading3}>Heading 3</h3>
      <h1 className={styles.heading1CustomSize48}>
        Heading 1 with custom size (48px)
      </h1>
    </div>
    <div className={styles.wrapper}>
      <div className={styles.display0}>Display 0</div>
      <h1 className={styles.heading1}>Heading 1</h1>
      <h2 className={styles.heading2}>Heading 2</h2>
      <h3 className={styles.heading3}>Heading 3</h3>
      <h1 className={styles.heading1CustomSize48}>
        Heading 1 with custom size (48px)
      </h1>
    </div>
  </div>
)

import * as React from "react"
import styles from "./styles.module.scss"

export const StorybookWrapper = ({ storyData, Component }) => (
  <div className={styles.storyWrapper} data-chromatic="ignore">
    {storyData.map(story => (
      <div className={styles.storyVariant} data-chromatic="ignore">
        <h2 className={styles.storyVariantHeader} data-chromatic="ignore">
          {story.title}
        </h2>
        <br />
        {story.stories.map(storyProps => (
          <>
            <Component {...storyProps} />
            <br />
          </>
        ))}
      </div>
    ))}
  </div>
)

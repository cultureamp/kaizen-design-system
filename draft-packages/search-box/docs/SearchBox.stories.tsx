import * as React from "react"
import { SearchBox } from "@kaizen/draft-search-box"
import { withDesign } from "storybook-addon-designs"
import { figmaEmbed } from "../../../storybook/helpers"
import styles from "./Searcbox.module.scss"

export default {
  title: "SearchBox (React)",
  component: SearchBox,
  parameters: {
    info: {
      text: `
        import { SearchBox } from "@kaizen/draft-SearchBox";
      `,
    },
    ...figmaEmbed(
      "https://www.figma.com/file/GMxm8rvDCbj0Xw3TQWBZ8b/UI-Kit-Zen?node-id=14473%3A87007"
    ),
  },
  decorators: [withDesign],
}

export const DefaultStory = () => {
  const [textVal, setTextVal] = React.useState("")

  const handleTextClear = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    setTextVal("")
  }

  const handleChange = val => {
    setTextVal(val.currentTarget.value)
  }

  return (
    <div className={styles.componentWrapper}>
      <SearchBox
        id="1"
        onChange={handleChange}
        onClearText={handleTextClear}
        inputValue={textVal}
      />
    </div>
  )
}

DefaultStory.storyName = "Default (Kaizen Site Demo)"

export const WorkingSearchBox = () => {
  const [working, setWorking] = React.useState(false)
  const [textVal, setTextVal] = React.useState("")

  const handleTextClear = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    setTextVal("")
    setWorking(false)
  }

  const handleChange = val => {
    setTextVal(val.currentTarget.value)
    setWorking(val.currentTarget.value !== "")
  }

  return (
    <div className={styles.componentWrapper}>
      <SearchBox
        id="1"
        working={working}
        inputValue={textVal}
        onChange={handleChange}
        onClearText={handleTextClear}
      ></SearchBox>
    </div>
  )
}

WorkingSearchBox.storyName = "Search box (Working state)"

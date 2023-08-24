import React from "react"
import { Meta, StoryObj } from "@storybook/react"
import { Checkbox } from "../subcomponents"
// import styles from "./Checkbox.stories.module.scss"

const meta = {
  title: "Components/MultiSelect/Checkbox",
  component: Checkbox,
  args: {
    checkedStatus: "checked",
  },
} satisfies Meta<typeof Checkbox>

export default meta

/**
 * @todo: Main Description goes here
 */
export const Playground: StoryObj<typeof meta> = {
  parameters: {
    docs: {
      canvas: {
        sourceState: "shown",
      },
    },
  },
}

export const Interactive: StoryObj<typeof meta> = {
  render: args => {
    const [status, setStatus] = React.useState(args.checkedStatus)

    const handleClick = (e): void => {
      if (status === "unchecked") {
        setStatus("indeterminate")
      } else if (status === "indeterminate") {
        setStatus("checked")
      } else if (status === "checked") {
        setStatus("unchecked")
      }
      args.onClick?.(e)
    }

    return (
      <Checkbox
        {...args}
        onClick={handleClick}
        checkedStatus={status}
        // classNameOverride={styles.test}
      />
    )
  },
}

// export const OveriddenFocus: StoryObj<typeof meta> = {
//   ...Interactive,
//   args: {
//     classNameOverride: styles.test,
//   },
//   // render: args => {
//   //   const [status, setStatus] = React.useState(args.checkedStatus)

//   //   const handleClick = (e): void => {
//   //     if (status === "unchecked") {
//   //       setStatus("indeterminate")
//   //     } else if (status === "indeterminate") {
//   //       setStatus("checked")
//   //     } else if (status === "checked") {
//   //       setStatus("unchecked")
//   //     }
//   //     args.onClick?.(e)
//   //   }

//   //   return (
//   //     <div>
//   //       <Checkbox
//   //         {...args}
//   //         onClick={handleClick}
//   //         checkedStatus={status}
//   //         classNameOverride={styles.test}
//   //         id="id--checkbox"
//   //       />
//   //       <Label htmlFor="id--checkbox">Checkbox test label</Label>
//   //     </div>
//   //   )
//   // },
// }

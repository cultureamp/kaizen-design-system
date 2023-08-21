import React from "react"
<<<<<<< HEAD
import { Meta } from "@storybook/react"
import { AddIcon } from "~components/SVG/icons/AddIcon"
import {
  StickerSheet,
  StickerSheetStory,
} from "~storybook/components/StickerSheet"
import { Button, ButtonProps } from "../index"
=======
import { Meta, StoryFn } from "@storybook/react"
import { Button, ButtonProps } from "@kaizen/button"
import { CheckIcon } from "~components/Icons/CheckIcon"
import { StickerSheet } from "../../../../../storybook/components/StickerSheet"
>>>>>>> da81a9bc1 (Restructure directories)

export default {
  title: "Components/Button",
  parameters: {
    chromatic: { disable: false },
    controls: { disable: true },
    a11y: {
      // Fade-in animation has colour contrast issues.
      timeout: 1000,
    },
  },
} satisfies Meta

const StickerSheetTemplate: StickerSheetStory = {
  render: ({ isReversed }) => {
    const REVERSED__VARIANT_PROPS: Array<{
      title: string
      props: ButtonProps
    }> = [
      {
        title: "Default",
        props: {
          label: "Label",
        },
      },
      {
        title: "Primary",
        props: {
          label: "Label",
          primary: true,
        },
      },
      {
        title: "Destructive",
        props: {
          label: "Label",
          destructive: true,
        },
      },
      {
        title: "Secondary",
        props: {
          label: "Label",
          secondary: true,
        },
      },
    ]

    const VARIANTS_PROPS: Array<{
      title: string
      props: ButtonProps
    }> = isReversed
      ? REVERSED__VARIANT_PROPS
      : [
          ...REVERSED__VARIANT_PROPS,
          {
            title: "Secondary Destructive",
            props: {
              label: "Label",
              secondary: true,
              destructive: true,
            },
          },
        ]

    const WORKING_PROPS: ButtonProps = {
      label: "Label",
      working: true,
      workingLabel: "Submitting",
      workingLabelHidden: true,
    }

    const ICON_LEFT_PROPS: ButtonProps = {
      label: "Label",
      icon: <AddIcon role="presentation" />,
    }

    const ICON_RIGHT_PROPS: ButtonProps = {
      label: "Label",
      icon: <AddIcon role="presentation" />,
      iconPosition: "end",
    }

    const BADGE_PROPS: ButtonProps = {
      label: "Label",
      badge: { text: "4" },
    }
    const BADGE_LEFT_PROPS: ButtonProps = {
      ...BADGE_PROPS,
      icon: <AddIcon role="presentation" />,
    }

    const BADGE_RIGHT_PROPS: ButtonProps = {
      ...BADGE_PROPS,
      icon: <AddIcon role="presentation" />,
      iconPosition: "end",
    }

    return (
      <>
        <StickerSheet heading="Button" isReversed={isReversed}>
          <StickerSheet.Header
            headings={[
              "Base",
              "Hover",
              "Active",
              "Focus",
              "Disabled",
              "Working",
              "Working (Focus)",
            ]}
            headingsWidth="10rem"
            hasVerticalHeadings
            verticalHeadingsWidth="12rem"
          />
          <StickerSheet.Body>
            {VARIANTS_PROPS.map(({ title, props }) => (
              <StickerSheet.Row key={title} rowTitle={title}>
                <Button reversed={isReversed} {...props} />
                <Button
                  reversed={isReversed}
                  classNameOverride="story__button-hover"
                  {...props}
                />
                <Button
                  reversed={isReversed}
                  classNameOverride="story__button-active"
                  {...props}
                />
                <Button
                  reversed={isReversed}
                  classNameOverride="story__button-focus"
                  {...props}
                />
                <Button reversed={isReversed} {...props} disabled />
                <Button reversed={isReversed} {...props} {...WORKING_PROPS} />
                <Button
                  reversed={isReversed}
                  classNameOverride="story__button-focus"
                  {...props}
                  {...WORKING_PROPS}
                />
              </StickerSheet.Row>
            ))}
          </StickerSheet.Body>
        </StickerSheet>

        <StickerSheet
          isReversed={isReversed}
          heading="Size small (formerly form)"
        >
          <StickerSheet.Header
            headings={[
              "Base",
              "Hover",
              "Active",
              "Focus",
              "Disabled",
              "Working",
              "Working Focus",
            ]}
            hasVerticalHeadings
          />
          <StickerSheet.Body>
            {VARIANTS_PROPS.map(({ title, props }) => (
              <StickerSheet.Row key={title} rowTitle={title}>
                <Button reversed={isReversed} {...props} size="small" />
                <Button
                  reversed={isReversed}
                  classNameOverride="story__button-hover"
                  {...props}
                  size="small"
                />
                <Button
                  reversed={isReversed}
                  classNameOverride="story__button-active"
                  {...props}
                  size="small"
                />
                <Button
                  reversed={isReversed}
                  classNameOverride="story__button-focus"
                  {...props}
                  size="small"
                />
                <Button
                  reversed={isReversed}
                  {...props}
                  disabled
                  size="small"
                />
                <Button
                  reversed={isReversed}
                  {...props}
                  size="small"
                  {...WORKING_PROPS}
                />
                <Button
                  reversed={isReversed}
                  {...props}
                  size="small"
                  classNameOverride="story__button-focus"
                  {...WORKING_PROPS}
                />
              </StickerSheet.Row>
            ))}
          </StickerSheet.Body>
        </StickerSheet>

        <StickerSheet isReversed={isReversed} heading="With Icon / Badge">
          <StickerSheet.Header
            headings={[
              "Icon Left",
              "Icon Right",
              "Icon Left with Badge",
              "Icon Right with Badge",
              "Badge Only",
            ]}
            headingsWidth="10rem"
            hasVerticalHeadings
            verticalHeadingsWidth="12rem"
          />
          <StickerSheet.Body>
            {VARIANTS_PROPS.map(({ title, props }) => (
              <StickerSheet.Row key={title} rowTitle={title}>
                <Button reversed={isReversed} {...props} {...ICON_LEFT_PROPS} />
                <Button
                  reversed={isReversed}
                  {...props}
                  {...ICON_RIGHT_PROPS}
                />
                <Button
                  reversed={isReversed}
                  {...props}
                  {...BADGE_LEFT_PROPS}
                />
                <Button
                  reversed={isReversed}
                  {...props}
                  {...BADGE_RIGHT_PROPS}
                />
                <Button reversed={isReversed} {...props} {...BADGE_PROPS} />
              </StickerSheet.Row>
            ))}
          </StickerSheet.Body>
        </StickerSheet>
      </>
    )
  },
}

export const StickerSheetDefault: StickerSheetStory = {
  ...StickerSheetTemplate,
  name: "Sticker Sheet (Default)",
}

export const StickerSheetReversed: StickerSheetStory = {
  ...StickerSheetTemplate,
  name: "Sticker Sheet (Reversed)",
  parameters: { backgrounds: { default: "Purple 700" } },
  args: { isReversed: true },
}

export const StickerSheetRTL: StickerSheetStory = {
  ...StickerSheetTemplate,
  name: "Sticker Sheet (RTL)",
  parameters: { textDirection: "rtl" },
}

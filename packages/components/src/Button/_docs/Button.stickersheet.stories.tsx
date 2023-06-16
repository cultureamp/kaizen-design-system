import React from "react"
import { Meta, StoryFn } from "@storybook/react"
import { CheckIcon } from "~components/SVG/icons/CheckIcon"
import { StickerSheet } from "../../../../../storybook/components/StickerSheet"
import { Button, ButtonProps } from "../index"

export default {
  title: "KAIO/Button",
  parameters: {
    chromatic: { disable: false },
    controls: { disable: true },
  },
} satisfies Meta<typeof Button>

const StickerSheetTemplate: StoryFn<{ isReversed: boolean }> = ({
  isReversed,
}) => {
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
    icon: <CheckIcon />,
  }

  const ICON_RIGHT_PROPS: ButtonProps = {
    label: "Label",
    icon: <CheckIcon />,
    iconPosition: "end",
  }

  const BADGE_PROPS: ButtonProps = {
    label: "Label",
    badge: { text: "4" },
  }
  const BADGE_LEFT_PROPS: ButtonProps = {
    ...BADGE_PROPS,
    icon: <CheckIcon />,
  }

  const BADGE_RIGHT_PROPS: ButtonProps = {
    ...BADGE_PROPS,
    icon: <CheckIcon />,
    iconPosition: "end",
  }

  return (
    <>
      <StickerSheet heading="Button" isReversed={isReversed}>
        <StickerSheet.Header
          headings={["Base", "Hover", "Active", "Focus", "Disabled"]}
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
              <Button reversed={isReversed} {...props} disabled size="small" />
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

      <StickerSheet
        isReversed={isReversed}
        heading="Working / With Icon / With Badge"
      >
        <StickerSheet.Header
          headings={[
            "Working",
            "Working (Focus)",
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
              <Button reversed={isReversed} {...props} {...WORKING_PROPS} />
              <Button
                reversed={isReversed}
                classNameOverride="story__button-focus"
                {...props}
                {...WORKING_PROPS}
              />
              <Button reversed={isReversed} {...props} {...ICON_LEFT_PROPS} />
              <Button reversed={isReversed} {...props} {...ICON_RIGHT_PROPS} />
              <Button reversed={isReversed} {...props} {...BADGE_LEFT_PROPS} />
              <Button reversed={isReversed} {...props} {...BADGE_RIGHT_PROPS} />
              <Button reversed={isReversed} {...props} {...BADGE_PROPS} />
            </StickerSheet.Row>
          ))}
        </StickerSheet.Body>
      </StickerSheet>
    </>
  )
}

export const StickerSheetDefault = StickerSheetTemplate.bind({})
StickerSheetDefault.storyName = "Sticker Sheet (Default)"

export const StickerSheetReversed = StickerSheetTemplate.bind({})
StickerSheetReversed.storyName = "Sticker Sheet (Reversed)"
StickerSheetReversed.args = { isReversed: true }
StickerSheetReversed.parameters = {
  backgrounds: { default: "Purple 700" },
}

import React from "react"
import { Meta } from "@storybook/react"
import { AddIcon } from "~components/Icon"
import {
  StickerSheet,
  StickerSheetStory,
} from "~storybook/components/StickerSheet"
import { Button, ButtonProps } from "../index"

export default {
  title: "Components/Buttons/Button",
  parameters: {
    chromatic: { disable: false },
    controls: { disable: true },
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
                  data-sb-pseudo-styles="hover"
                  {...props}
                />
                <Button
                  reversed={isReversed}
                  data-sb-pseudo-styles="active"
                  {...props}
                />
                <Button
                  reversed={isReversed}
                  data-sb-pseudo-styles="focus"
                  {...props}
                />
                <Button reversed={isReversed} {...props} disabled />
                <Button reversed={isReversed} {...props} {...WORKING_PROPS} />
                <Button
                  reversed={isReversed}
                  data-sb-pseudo-styles="focus"
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
                  data-sb-pseudo-styles="hover"
                  {...props}
                  size="small"
                />
                <Button
                  reversed={isReversed}
                  data-sb-pseudo-styles="active"
                  {...props}
                  size="small"
                />
                <Button
                  reversed={isReversed}
                  data-sb-pseudo-styles="focus"
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
                  data-sb-pseudo-styles="focus"
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
  parameters: {
    pseudo: {
      hover: '[data-sb-pseudo-styles="hover"]',
      active: '[data-sb-pseudo-styles="active"]',
      focus: '[data-sb-pseudo-styles="focus"]',
      focusVisible: '[data-sb-pseudo-styles="focus"]',
    },
  },
}

export const StickerSheetDefault: StickerSheetStory = {
  ...StickerSheetTemplate,
  name: "Sticker Sheet (Default)",
}

export const StickerSheetReversed: StickerSheetStory = {
  ...StickerSheetTemplate,
  name: "Sticker Sheet (Reversed)",
  parameters: {
    ...StickerSheetTemplate.parameters,
    backgrounds: { default: "Purple 700" },
  },
  args: { isReversed: true },
}

export const StickerSheetRTL: StickerSheetStory = {
  ...StickerSheetTemplate,
  name: "Sticker Sheet (RTL)",
  parameters: {
    ...StickerSheetTemplate.parameters,
    textDirection: "rtl",
  },
}

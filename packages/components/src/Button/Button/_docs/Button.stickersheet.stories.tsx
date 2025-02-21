import React from 'react'
import { type Meta } from '@storybook/react'
import { Icon } from '~components/__next__/Icon'
import { StickerSheet, type StickerSheetStory } from '~storybook/components/StickerSheet'
import { Button, type ButtonProps } from '../index'

export default {
  title: 'Components/Button/Button (deprecated)',
  parameters: {
    chromatic: { disable: false },
    controls: { disable: true },
  },
} satisfies Meta

const StickerSheetTemplate: StickerSheetStory = {
  render: ({ isReversed }) => {
    const REVERSED__VARIANT_PROPS: {
      title: string
      props: ButtonProps
    }[] = [
      {
        title: 'Default',
        props: {
          label: 'Label',
        },
      },
      {
        title: 'Primary',
        props: {
          label: 'Label',
          primary: true,
        },
      },
      {
        title: 'Destructive',
        props: {
          label: 'Label',
          destructive: true,
        },
      },
      {
        title: 'Secondary',
        props: {
          label: 'Label',
          secondary: true,
        },
      },
    ]

    const VARIANTS_PROPS: {
      title: string
      props: ButtonProps
    }[] = isReversed
      ? REVERSED__VARIANT_PROPS
      : [
          ...REVERSED__VARIANT_PROPS,
          {
            title: 'Secondary Destructive',
            props: {
              label: 'Label',
              secondary: true,
              destructive: true,
            },
          },
        ]

    const ICON_LEFT_PROPS: ButtonProps = {
      label: 'Label',
      icon: <Icon name="add" isPresentational />,
    }

    const ICON_RIGHT_PROPS: ButtonProps = {
      label: 'Label',
      icon: <Icon name="arrow_forward" isPresentational shouldMirrorInRTL />,
      iconPosition: 'end',
    }

    const BADGE_PROPS: ButtonProps = {
      label: 'Label',
      badge: { text: '4' },
    }
    const BADGE_LEFT_PROPS: ButtonProps = {
      ...BADGE_PROPS,
      icon: <Icon name="add" isPresentational />,
    }

    const BADGE_RIGHT_PROPS: ButtonProps = {
      ...BADGE_PROPS,
      icon: <Icon name="arrow_forward" isPresentational shouldMirrorInRTL />,
      iconPosition: 'end',
    }

    return (
      <>
        <StickerSheet
          isReversed={isReversed}
          title="Button"
          headers={['Base', 'Hover', 'Active', 'Focus', 'Disabled']}
        >
          {VARIANTS_PROPS.map(({ title, props }) => (
            <StickerSheet.Row key={title} header={title}>
              <Button reversed={isReversed} {...props} />
              <Button reversed={isReversed} data-sb-pseudo-styles="hover" {...props} />
              <Button reversed={isReversed} data-sb-pseudo-styles="active" {...props} />
              <Button reversed={isReversed} data-sb-pseudo-styles="focus" {...props} />
              <Button reversed={isReversed} {...props} disabled />
            </StickerSheet.Row>
          ))}
        </StickerSheet>

        <StickerSheet
          isReversed={isReversed}
          title="Size small (formerly form)"
          headers={['Base', 'Hover', 'Active', 'Focus', 'Disabled']}
        >
          {VARIANTS_PROPS.map(({ title, props }) => (
            <StickerSheet.Row key={title} header={title}>
              <Button reversed={isReversed} {...props} size="small" />
              <Button reversed={isReversed} data-sb-pseudo-styles="hover" {...props} size="small" />
              <Button
                reversed={isReversed}
                data-sb-pseudo-styles="active"
                {...props}
                size="small"
              />
              <Button reversed={isReversed} data-sb-pseudo-styles="focus" {...props} size="small" />
              <Button reversed={isReversed} {...props} disabled size="small" />
            </StickerSheet.Row>
          ))}
        </StickerSheet>

        <StickerSheet
          isReversed={isReversed}
          title="With Icon / Badge"
          headers={[
            'Icon Left',
            'Icon Right',
            'Icon Left with Badge',
            'Icon Right with Badge',
            'Badge Only',
          ]}
        >
          {VARIANTS_PROPS.map(({ title, props }) => (
            <StickerSheet.Row key={title} header={title}>
              <Button reversed={isReversed} {...props} {...ICON_LEFT_PROPS} />
              <Button reversed={isReversed} {...props} {...ICON_RIGHT_PROPS} />
              <Button reversed={isReversed} {...props} {...BADGE_LEFT_PROPS} />
              <Button reversed={isReversed} {...props} {...BADGE_RIGHT_PROPS} />
              <Button reversed={isReversed} {...props} {...BADGE_PROPS} />
            </StickerSheet.Row>
          ))}
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

const WorkingStickerSheetTemplate: StickerSheetStory = {
  render: ({ isReversed }) => {
    const REVERSED__VARIANT_PROPS: {
      title: string
      props: ButtonProps
    }[] = [
      {
        title: 'Default',
        props: {
          label: 'Label',
        },
      },
      {
        title: 'Primary',
        props: {
          label: 'Label',
          primary: true,
        },
      },
      {
        title: 'Destructive',
        props: {
          label: 'Label',
          destructive: true,
        },
      },
      {
        title: 'Secondary',
        props: {
          label: 'Label',
          secondary: true,
        },
      },
    ]

    const VARIANTS_PROPS: {
      title: string
      props: ButtonProps
    }[] = isReversed
      ? REVERSED__VARIANT_PROPS
      : [
          ...REVERSED__VARIANT_PROPS,
          {
            title: 'Secondary Destructive',
            props: {
              label: 'Label',
              secondary: true,
              destructive: true,
            },
          },
        ]

    const WORKING_PROPS: ButtonProps = {
      label: 'Label',
      working: true,
      workingLabel: 'Submitting',
      workingLabelHidden: true,
    }

    return (
      <>
        <StickerSheet
          isReversed={isReversed}
          title="Button"
          headers={['Working', 'Working (Focus)']}
        >
          {VARIANTS_PROPS.map(({ title, props }) => (
            <StickerSheet.Row key={title} header={title}>
              <Button reversed={isReversed} {...props} {...WORKING_PROPS} />
              <Button
                reversed={isReversed}
                data-sb-pseudo-styles="focus"
                {...props}
                {...WORKING_PROPS}
              />
            </StickerSheet.Row>
          ))}
        </StickerSheet>

        <StickerSheet
          isReversed={isReversed}
          title="Size small (formerly form)"
          headers={['Working', 'Working Focus']}
        >
          {VARIANTS_PROPS.map(({ title, props }) => (
            <StickerSheet.Row key={title} header={title}>
              <Button reversed={isReversed} {...props} size="small" {...WORKING_PROPS} />
              <Button
                reversed={isReversed}
                {...props}
                size="small"
                data-sb-pseudo-styles="focus"
                {...WORKING_PROPS}
              />
            </StickerSheet.Row>
          ))}
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
  name: 'Sticker Sheet (Default)',
}

export const StickerSheetReversed: StickerSheetStory = {
  ...StickerSheetTemplate,
  name: 'Sticker Sheet (Reversed)',
  parameters: {
    ...StickerSheetTemplate.parameters,
    backgrounds: { default: 'Purple 700' },
  },
  args: { isReversed: true },
}

export const StickerSheetRTL: StickerSheetStory = {
  ...StickerSheetTemplate,
  name: 'Sticker Sheet (RTL)',
  parameters: {
    chromatic: {
      delay: 1200,
    },
    ...StickerSheetTemplate.parameters,
    textDirection: 'rtl',
  },
}

export const StickerSheetWorkingDefault: StickerSheetStory = {
  ...WorkingStickerSheetTemplate,
  name: 'Sticker Sheet Working (Default)',
}

export const StickerSheetWorkingReversed: StickerSheetStory = {
  ...WorkingStickerSheetTemplate,
  name: 'Sticker Sheet Working (Reversed)',
  parameters: {
    ...WorkingStickerSheetTemplate.parameters,
    backgrounds: { default: 'Purple 700' },
  },
  args: { isReversed: true },
}

export const StickerSheetWorkingRTL: StickerSheetStory = {
  ...WorkingStickerSheetTemplate,
  name: 'Sticker Sheet Working (RTL)',
  parameters: {
    chromatic: {
      delay: 1200,
    },
    ...WorkingStickerSheetTemplate.parameters,
    textDirection: 'rtl',
  },
}

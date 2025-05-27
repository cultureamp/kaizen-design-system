import React from 'react'
import { type Meta } from '@storybook/react'
import { Text } from '~components/Text'
import { StickerSheet, type StickerSheetStory } from '~storybook/components/StickerSheet'
import { Well, type WellProps } from '../index'
import { borderStyleTypes, variantTypes, wellColors } from '../types'

export default {
  title: 'Components/Well',
  parameters: {
    chromatic: { disable: false },
    controls: { disable: true },
  },
} satisfies Meta

const WellWrapped = (props: WellProps): JSX.Element => (
  <Well {...props}>
    <Text variant="body">
      Bacon ipsum dolor amet andouille buffalo beef boudin kielbasa drumstick fatback cow tongue
      ground round chicken. Jowl cow short ribs, ham tongue turducken spare ribs pig drumstick chuck
      meatball. Buffalo turducken pancetta tail salami chicken. Bresaola venison pastrami beef.
    </Text>
  </Well>
)

const StickerSheetTemplate: StickerSheetStory = {
  render: () => (
    <>
      <StickerSheet headers={['Solid Border', 'Dashed Border', 'None']}>
        {variantTypes.map((variant) => (
          <StickerSheet.Row key={variant} header={variant}>
            {borderStyleTypes.map((border) => (
              <WellWrapped key={border} variant={variant} borderStyle={border} />
            ))}
          </StickerSheet.Row>
        ))}
        {wellColors.map((color) => (
          <StickerSheet.Row key={color} header={color}>
            {borderStyleTypes.map((border) => (
              <WellWrapped key={border} color={color} borderStyle={border} />
            ))}
          </StickerSheet.Row>
        ))}
      </StickerSheet>
      <StickerSheet headers={['AI is loaded', 'AI is loading', 'AI is undefined']}>
        <StickerSheet.Row>
          <StickerSheet.Cell>
            <WellWrapped isAiLoading={false} />
          </StickerSheet.Cell>
          <StickerSheet.Cell>
            <WellWrapped isAiLoading />
          </StickerSheet.Cell>
          <StickerSheet.Cell>
            <WellWrapped isAiLoading={undefined} />
          </StickerSheet.Cell>
        </StickerSheet.Row>
      </StickerSheet>
      <StickerSheet headers={['Margin', 'No Margin']}>
        <StickerSheet.Row>
          <StickerSheet.Cell>
            <WellWrapped />
            <WellWrapped />
          </StickerSheet.Cell>
          <StickerSheet.Cell>
            <WellWrapped noMargin />
            <WellWrapped />
          </StickerSheet.Cell>
        </StickerSheet.Row>
      </StickerSheet>
    </>
  ),
}

export const StickerSheetDefault: StickerSheetStory = {
  ...StickerSheetTemplate,
  name: 'Sticker Sheet (Default)',
}

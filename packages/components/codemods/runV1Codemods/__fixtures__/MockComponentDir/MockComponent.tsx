// @ts-nocheck this is a mock file - we can ignore this
import React from 'react'
import {
  BrandMoment,
  Card,
  GlobalNotification,
  GuidanceBlock,
  Informative,
  ProgressBar,
  Well,
} from '@kaizen/components'
import { MockSubcomponent } from './subcomponents/MockSubcomponent'

export const MockComponent = (): JSX.Element => {
  return (
    <div>
      <GuidanceBlock
        illustration={<Informative alt="" />}
        text={{
          title: 'This is the call to action title',
          description:
            'Mussum Ipsum, cacilds vidis litro abertis. Suco de cevadiss, é um leite divinis.',
        }}
        actions={{
          primary: { label: 'Action!', onClick: () => undefined },
          secondary: { label: 'Cancel', href: '/cancel' },
        }}
      />
      <BrandMoment mood="positive">
        <div>Success message</div>
      </BrandMoment>
      <Card variant="informative">
        <div>Card content</div>
      </Card>
      <ProgressBar mood="positive" value={75} />
      <Well variant="default">
        <div>Well content</div>
      </Well>
      <GlobalNotification type="success">Global notification content</GlobalNotification>
      <div className="additional-content">
        This is some additional content that is not part of the GuidanceBlock.
        <MockSubcomponent />
      </div>
    </div>
  )
}

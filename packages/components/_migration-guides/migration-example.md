## Component Documentation Migration - Before/After Example

### BEFORE (Original Format)

```mdx
import { Canvas, Controls, Meta } from '@storybook/blocks'
import { ResourceLinks, KAIOInstallation, DocHeading } from '~storybook/components'
import * as ComponentStories from './Component.stories'

<Meta of={ComponentStories} />

<DocHeading title="Component" docTags={['dev docs']} />

<ResourceLinks
  sourceCode="https://github.com/cultureamp/kaizen-design-system/tree/main/packages/components/src/Component"
  designGuidelines="https://example.com/guidelines"
/>

<KAIOInstallation exportNames="Component" />

## Overview

Component description here.

<Canvas of={ComponentStories.Playground} />
<Controls of={ComponentStories.Playground} />

## API

### Feature 1

Content about feature 1.

<Canvas of={ComponentStories.Feature1} />

### Feature 2

Content about feature 2.

<Canvas of={ComponentStories.Feature2} />
```

### AFTER (Migrated Format)

```mdx
import { Canvas, Controls, Meta } from '@storybook/blocks'
import { ResourceLinks, KAIOInstallation, DocHeading } from '~storybook/components'
import * as ComponentStories from './Component.stories'

<Meta title="Components/Component/Component/API Specification" tags={['dev docs']} />

<DocHeading title="Component" docTags={['dev docs']} />

<ResourceLinks
  sourceCode="https://github.com/cultureamp/kaizen-design-system/tree/main/packages/components/src/Component"
  designGuidelines="https://example.com/guidelines"
/>

<KAIOInstallation exportNames="Component" />

## Overview

Component description here.

<Canvas of={ComponentStories.Playground} />

## Props

<Controls of={ComponentStories.Playground} />

## Examples

### Feature 1

Content about feature 1.

<Canvas of={ComponentStories.Feature1} />

### Feature 2

Content about feature 2.

<Canvas of={ComponentStories.Feature2} />
```

### KEY CHANGES SUMMARY

1. **Meta Component**: Changed from `<Meta of={ComponentStories} />` to standardized API Specification format
2. **Props Section**: Added `## Props` heading above the `<Controls>` component
3. **Examples Section**: Changed `## API` to `## Examples`
4. **Structure**: Moved Controls under Props, kept all other content under Examples as subsections

### AGENT INSTRUCTIONS

To migrate any component documentation:

1. **Extract component name** from file path or existing content
2. **Replace {ComponentName}** placeholders with actual component name
3. **Apply the 4 key transformations** shown above
4. **Preserve all existing content** - only restructure, don't remove
5. **Create output file** with `-updated` suffix
6. **Validate structure** matches the AFTER example format

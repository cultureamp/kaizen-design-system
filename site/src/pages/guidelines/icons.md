---
title: Icons
navTitle: Icons
summaryParagraph: |
  Icons are a helpful and familiar visual aid to guide and inform users. Not just for aesthetics, they provide humanity by defining hierarchy for information and shaping a page’s composition, helping to make our product more approachable and usable.

  See our <Link to="/components/Icon">Icon Component</Link> for information about how to use these components.
---

<!-- ---
imports:
  IntroParagraph: components/IntroParagraph.js
  IconGrid: ./_IconGrid.js
  InteractionStates: ./_InteractionStates.js
  IconSizeSpaceTouch: ./_IconSizeSpaceTouch.js
  "{TipContainer,TipCard}": components/tip-card
  Link: components/Link.js
--- -->

## Interaction states

<InteractionStates dark={false} />

<InteractionStates dark={true} />

## Size, spacing and touch targets

<IconSizeSpaceTouch />

<IconGrid category="Actions" />

<IconGrid category="Informational" />

<IconGrid category="Directional" />

<IconGrid category="Users" />

<IconGrid category="Views" />

<IconGrid category="Surveys" />

<IconGrid category="Sentiment" />

<IconGrid category="Navigational/Effectiveness" />

<IconGrid category="Navigational/Engagement" />

<IconGrid category="Navigational/Global" />

## Best practices

<TipContainer>
<TipCard title="Icons should…" type="tip">

* by default, by 20px in size (minimum) and can be scaled to larger sizes if it contextually makes sense.

* have a minimum touch zone of 48px

* be accompanied by a label to support the visual. Try avoid using icons in isolation of labels, unless they are being used for a clear visual convention (e.g. Search, Home, Close, etc.)

</TipCard>
<TipCard title="Icons should not…" type="warning">

* be overused. Avoid using icons for the sake of it.

* need to align to the baseline grid.

</TipCard>
</TipContainer>

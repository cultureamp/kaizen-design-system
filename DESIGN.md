---
version: alpha
name: Kaizen Design System
description: Culture Amp's design system for building consistent, accessible, and delightful user experiences with React and TypeScript.

colors:
  # Primary Brand Colors
  purple-100: "#f4edf8"
  purple-200: "#dfc9ea"
  purple-300: "#c9a5dd"
  purple-400: "#ae67b1"
  purple-500: "#844587"
  purple-600: "#5f3361"
  purple-700: "#4a234d"
  purple-800: "#2f2438"
  
  # Blue
  blue-100: "#e6f6ff"
  blue-200: "#bde2f5"
  blue-300: "#73c0e8"
  blue-400: "#008bd6"
  blue-500: "#0168b3"
  blue-600: "#004970"
  blue-700: "#003157"
  
  # Green
  green-100: "#e8f8f4"
  green-200: "#c4ede2"
  green-300: "#8fdbc7"
  green-400: "#5dcaad"
  green-500: "#3f9a86"
  green-600: "#2c7d67"
  green-700: "#22594a"
  
  # Yellow
  yellow-100: "#fff9e4"
  yellow-200: "#ffeeb3"
  yellow-300: "#ffe36e"
  yellow-400: "#ffca4d"
  yellow-500: "#ffb600"
  yellow-600: "#c68600"
  yellow-700: "#876400"
  
  # Red
  red-100: "#fdeaee"
  red-200: "#f9c2cb"
  red-300: "#f597a8"
  red-400: "#e0707d"
  red-500: "#c93b55"
  red-600: "#a82433"
  red-700: "#6c1e20"
  
  # Orange
  orange-100: "#fff0e8"
  orange-200: "#ffd1b9"
  orange-300: "#ffb08a"
  orange-400: "#ff9461"
  orange-500: "#e96c2f"
  orange-600: "#b74302"
  orange-700: "#903c00"
  
  # Neutral Grays
  gray-100: "#f9f9f9"
  gray-200: "#f4f4f5"
  gray-300: "#eaeaec"
  gray-400: "#cdcdd0"
  gray-500: "#878792"
  gray-600: "#524e56"
  
  # Base
  white: "#ffffff"
  black: "#000000"
  
  # Data Visualization
  data-viz-favorable: "#7dd5bd"
  data-viz-unfavorable: "#e68d97"
  
  # Semantic Colors
  primary: "{colors.purple-500}"
  primary-hover: "{colors.purple-600}"
  primary-active: "{colors.purple-700}"
  
  success: "{colors.green-500}"
  success-light: "{colors.green-100}"
  
  warning: "{colors.yellow-500}"
  warning-light: "{colors.yellow-100}"
  
  danger: "{colors.red-500}"
  danger-light: "{colors.red-100}"
  
  info: "{colors.blue-500}"
  info-light: "{colors.blue-100}"
  
  neutral: "{colors.gray-500}"
  
  # Surface Colors
  surface-primary: "{colors.white}"
  surface-secondary: "{colors.gray-100}"
  surface-tertiary: "{colors.gray-200}"
  
  # Text Colors
  text-primary: "{colors.gray-600}"
  text-secondary: "{colors.gray-500}"
  text-inverse: "{colors.white}"
  
  # Border Colors
  border-default: "#e1e2ea"
  border-focus: "{colors.blue-500}"

typography:
  # Display Typography (Tiempos Headline)
  display-0:
    fontFamily: '"Tiempos Headline", Georgia, serif'
    fontSize: 72
    fontWeight: 800
    lineHeight: 84
    letterSpacing: 0
  
  # Headings (Inter)
  heading-1:
    fontFamily: '"Inter", "Noto Sans", Helvetica, Arial, sans-serif'
    fontSize: 34
    fontWeight: 500
    lineHeight: 42
  
  heading-2:
    fontFamily: '"Inter", "Noto Sans", Helvetica, Arial, sans-serif'
    fontSize: 28
    fontWeight: 600
    lineHeight: 36
  
  heading-3:
    fontFamily: '"Inter", "Noto Sans", Helvetica, Arial, sans-serif'
    fontSize: 22
    fontWeight: 600
    lineHeight: 30
  
  heading-4:
    fontFamily: '"Inter", "Noto Sans", Helvetica, Arial, sans-serif'
    fontSize: 18
    fontWeight: 600
    lineHeight: 24
  
  heading-5:
    fontFamily: '"Inter", "Noto Sans", Helvetica, Arial, sans-serif'
    fontSize: 16
    fontWeight: 600
    lineHeight: 24
  
  heading-6:
    fontFamily: '"Inter", "Noto Sans", Helvetica, Arial, sans-serif'
    fontSize: 14
    fontWeight: 600
    lineHeight: 24
  
  # Body Text
  body-large:
    fontFamily: '"Inter", "Noto Sans", Helvetica, Arial, sans-serif'
    fontSize: 20
    fontWeight: 400
    lineHeight: 30
  
  body:
    fontFamily: '"Inter", "Noto Sans", Helvetica, Arial, sans-serif'
    fontSize: 16
    fontWeight: 400
    lineHeight: 24
  
  body-small:
    fontFamily: '"Inter", "Noto Sans", Helvetica, Arial, sans-serif'
    fontSize: 14
    fontWeight: 400
    lineHeight: 18
  
  body-extra-small:
    fontFamily: '"Inter", "Noto Sans", Helvetica, Arial, sans-serif'
    fontSize: 12
    fontWeight: 400
    lineHeight: 18
  
  body-bold:
    fontFamily: '"Inter", "Noto Sans", Helvetica, Arial, sans-serif'
    fontSize: 16
    fontWeight: 600
    lineHeight: 24
  
  # UI Elements
  button-primary:
    fontFamily: '"Inter", "Noto Sans", Helvetica, Arial, sans-serif'
    fontSize: 18
    fontWeight: 500
    lineHeight: 24
  
  button-secondary:
    fontFamily: '"Inter", "Noto Sans", Helvetica, Arial, sans-serif'
    fontSize: 16
    fontWeight: 500
    lineHeight: 24
  
  label:
    fontFamily: '"Inter", "Noto Sans", Helvetica, Arial, sans-serif'
    fontSize: 14
    fontWeight: 600
    lineHeight: 24

rounded:
  none: 0
  sm: 4
  md: 7
  lg: 10
  xl: 16
  full: 9999

spacing:
  0: 0
  1: 1
  2: 2
  4: 4
  6: 6
  8: 8
  12: 12
  16: 16
  20: 20
  24: 24
  32: 32
  40: 40
  48: 48
  56: 56
  64: 64
  72: 72
  80: 80
  96: 96
  112: 112
  128: 128
  160: 160
  200: 200
  240: 240
  280: 280
  320: 320
  # Semantic Spacing
  xs: 6
  sm: 12
  md: 24
  lg: 36
  xl: 48
  xxl: 60
  xxxl: 72
  xxxxl: 84
  xxxxxl: 96

components:
  # Buttons
  button-primary:
    backgroundColor: "{colors.primary}"
    color: "{colors.text-inverse}"
    padding: "{spacing.12} {spacing.24}"
    borderRadius: "{rounded.md}"
    typography: "{typography.button-primary}"
    border: none
    cursor: pointer
  
  button-primary-hover:
    backgroundColor: "{colors.primary-hover}"
  
  button-primary-active:
    backgroundColor: "{colors.primary-active}"
  
  button-primary-disabled:
    backgroundColor: "{colors.gray-300}"
    cursor: not-allowed
  
  button-secondary:
    backgroundColor: "{colors.surface-primary}"
    color: "{colors.text-primary}"
    padding: "{spacing.12} {spacing.24}"
    borderRadius: "{rounded.md}"
    typography: "{typography.button-secondary}"
    border: 2px solid {colors.border-default}
    cursor: pointer
  
  button-secondary-hover:
    borderColor: "{colors.primary}"
    color: "{colors.primary}"
  
  button-secondary-active:
    backgroundColor: "{colors.purple-100}"
  
  button-secondary-disabled:
    color: "{colors.gray-400}"
    borderColor: "{colors.gray-300}"
    cursor: not-allowed
  
  # Form Inputs
  text-field:
    backgroundColor: "{colors.surface-primary}"
    color: "{colors.text-primary}"
    padding: "{spacing.12} {spacing.16}"
    borderRadius: "{rounded.md}"
    typography: "{typography.body}"
    border: 2px solid {colors.border-default}
  
  text-field-focus:
    borderColor: "{colors.border-focus}"
    outline: none
  
  text-field-error:
    borderColor: "{colors.danger}"
  
  text-field-disabled:
    backgroundColor: "{colors.surface-tertiary}"
    color: "{colors.gray-400}"
    cursor: not-allowed
  
  # Cards
  card:
    backgroundColor: "{colors.surface-primary}"
    borderRadius: "{rounded.md}"
    padding: "{spacing.24}"
    border: 2px solid {colors.border-default}
  
  card-hover:
    borderColor: "{colors.gray-400}"
  
  # Tables
  table:
    backgroundColor: "{colors.surface-primary}"
    borderRadius: "{rounded.md}"
    border: 2px solid {colors.border-default}
  
  table-header:
    backgroundColor: "{colors.surface-secondary}"
    typography: "{typography.label}"
    padding: "{spacing.12} {spacing.16}"
  
  table-cell:
    padding: "{spacing.16}"
    borderBottom: 1px solid {colors.border-default}
  
  table-row-hover:
    backgroundColor: "{colors.surface-secondary}"
  
  # Modals
  modal-overlay:
    backgroundColor: "rgba(0, 0, 0, 0.5)"
  
  modal-container:
    backgroundColor: "{colors.surface-primary}"
    borderRadius: "{rounded.lg}"
    padding: "{spacing.32}"
    maxWidth: 600
  
  # Notifications
  notification-success:
    backgroundColor: "{colors.success-light}"
    color: "{colors.success}"
    borderRadius: "{rounded.md}"
    padding: "{spacing.16}"
    border: 2px solid {colors.success}
  
  notification-error:
    backgroundColor: "{colors.danger-light}"
    color: "{colors.danger}"
    borderRadius: "{rounded.md}"
    padding: "{spacing.16}"
    border: 2px solid {colors.danger}
  
  notification-warning:
    backgroundColor: "{colors.warning-light}"
    color: "{colors.warning}"
    borderRadius: "{rounded.md}"
    padding: "{spacing.16}"
    border: 2px solid {colors.warning}
  
  notification-info:
    backgroundColor: "{colors.info-light}"
    color: "{colors.info}"
    borderRadius: "{rounded.md}"
    padding: "{spacing.16}"
    border: 2px solid {colors.info}
  
  # Navigation
  tab:
    padding: "{spacing.12} {spacing.16}"
    typography: "{typography.button-secondary}"
    color: "{colors.text-secondary}"
    borderBottom: 2px solid transparent
  
  tab-hover:
    color: "{colors.text-primary}"
  
  tab-active:
    color: "{colors.primary}"
    borderBottomColor: "{colors.primary}"
  
  # Badges
  badge:
    backgroundColor: "{colors.primary}"
    color: "{colors.text-inverse}"
    borderRadius: "{rounded.full}"
    padding: "{spacing.2} {spacing.8}"
    typography: "{typography.body-small}"
  
  # Wells
  well:
    backgroundColor: "{colors.surface-secondary}"
    borderRadius: "{rounded.md}"
    padding: "{spacing.24}"
    border: 2px solid {colors.border-default}
  
  # Dividers
  divider:
    backgroundColor: "{colors.border-default}"
    height: 1
  
  # Tooltips
  tooltip:
    backgroundColor: "{colors.gray-600}"
    color: "{colors.text-inverse}"
    borderRadius: "{rounded.sm}"
    padding: "{spacing.8} {spacing.12}"
    typography: "{typography.body-small}"
---

## Overview

Kaizen is Culture Amp's design system, created to build products that are consistent, accessible, and delightful. The name "Kaizen" comes from the Japanese philosophy of continuous improvement, reflecting our commitment to evolving and refining our design practices.

### Brand Personality

Kaizen embodies Culture Amp's core values:

- **Purposeful**: Every design decision serves a clear function
- **Inclusive**: Accessible to all users, regardless of ability
- **Trustworthy**: Reliable, predictable interactions
- **Human**: Warm and approachable, never cold or robotic
- **Progressive**: Modern without being trendy

### Emotional Response

Users should feel:
- **Confident** in taking actions
- **Supported** through clear guidance
- **Empowered** to accomplish their goals
- **Respected** through inclusive design

### Technology

Built with:
- **React** for component composition
- **TypeScript** for type safety
- **React Aria** for robust accessibility
- **CSS Variables** for themeable tokens

All components follow WCAG 2.1 AA standards and are tested with keyboard navigation and screen readers.

---

## Colors

Kaizen's color system is designed to be vibrant yet professional, with careful attention to accessibility and semantic meaning.

### Primary Colors

**Purple** is our primary brand color, representing creativity and innovation. Use purple for primary actions, active states, and brand moments.

- Light tints ({colors.purple-100} to {colors.purple-300}) for backgrounds and subtle UI
- Mid tones ({colors.purple-400} to {colors.purple-500}) for primary actions
- Dark shades ({colors.purple-600} to {colors.purple-800}) for text and emphasis

### Secondary Colors

**Blue** represents trust and reliability. Use for informational states and secondary actions.

**Green** signals success and positive outcomes. Reserve for confirmation messages and favorable data.

**Yellow** indicates caution and alerts. Use sparingly for warnings that don't require immediate action.

**Red** communicates errors and destructive actions. Use only when user attention is critical.

**Orange** provides warmth and can highlight important but non-critical information.

### Neutral Colors

**Gray scale** provides the foundation for text, borders, and surfaces. Use {colors.gray-600} for primary text, {colors.gray-500} for secondary text, and lighter grays for backgrounds and dividers.

### Semantic Colors

Semantic colors map to specific UI states:

- **Primary**: {colors.primary} for main actions and interactive elements
- **Success**: {colors.success} for positive feedback
- **Warning**: {colors.warning} for cautionary messages
- **Danger**: {colors.danger} for errors and destructive actions
- **Info**: {colors.info} for informational content

Always pair semantic colors with appropriate icons and text for users who cannot distinguish colors.

### Data Visualization

Use {colors.data-viz-favorable} for positive metrics and {colors.data-viz-unfavorable} for negative metrics. These colors are optimized for color-blind users and maintain sufficient contrast.

### Contrast & Accessibility

All color combinations meet WCAG AA standards:
- Normal text: minimum 4.5:1 contrast ratio
- Large text (18px+): minimum 3:1 contrast ratio
- UI components: minimum 3:1 contrast ratio

Test color combinations before using them in production.

---

## Typography

Kaizen uses a dual-typeface system optimized for digital interfaces.

### Font Families

**Inter** is our primary typeface for UI elements and body text. It provides excellent legibility at small sizes and loads efficiently as a system font.

**Tiempos Headline** is our display typeface, used sparingly for large headings and brand moments. Its serif styling adds warmth and personality.

### Type Scale

Our type scale follows a modular approach based on a 1.25 ratio, ensuring visual harmony while providing sufficient differentiation between levels.

#### Display

Use {typography.display-0} for large brand moments and hero sections. Tiempos Headline brings gravitas and personality at this scale.

#### Headings

Heading levels {typography.heading-1} through {typography.heading-6} create clear content hierarchy. Always use semantic HTML tags (h1-h6) matching the visual hierarchy.

**Important accessibility rule**: Use only one h1 per page, and never skip heading levels. If visual styling doesn't match semantic meaning, use the component's `tag` prop to correct it.

#### Body Text

- **{typography.body-large}**: Intro paragraphs and lead text (max-width: 975px)
- **{typography.body}**: Default paragraph text (max-width: 780px)
- **{typography.body-small}**: Supporting text and metadata (max-width: 680px)
- **{typography.body-extra-small}**: Captions and fine print (max-width: 600px)

Max-width constraints improve readability by preventing overly long line lengths.

#### UI Elements

- **{typography.button-primary}**: Large buttons and primary actions
- **{typography.button-secondary}**: Standard buttons and links
- **{typography.label}**: Form labels and UI labels

### Typography Best Practices

1. **Line length**: Keep body text between 50-75 characters per line
2. **Line height**: Use 1.5 for body text, 1.2-1.3 for headings
3. **Contrast**: Maintain sufficient contrast between text and background
4. **Emphasis**: Use `<strong>` for semantic emphasis, CSS classes for visual styling
5. **Hierarchy**: Let size and weight create hierarchy, not color alone

---

## Layout

Kaizen uses a flexible grid system based on consistent spacing values.

### Grid Model

The layout system is built on:
- **Base unit**: 8px (0.5rem)
- **Column grid**: 12 columns with flexible gutters
- **Responsive breakpoints**: Mobile-first approach

### Spacing Strategy

Use the {spacing} scale consistently for all margins, padding, and gaps. The scale follows a base-8 system for visual rhythm:

**Small spaces** (0-16): Tight groupings, component internals
**Medium spaces** (20-48): Component padding, section spacing
**Large spaces** (56-128): Major sections, page-level layout
**Extra large spaces** (160-320): Hero sections, marketing pages

### Responsive Design

Design mobile-first and enhance for larger screens:

```
Mobile: < 48em (768px)
Tablet: 48em - 64em (768px - 1024px)
Desktop: > 64em (1024px+)
```

Components should:
- Stack vertically on mobile
- Use available width efficiently
- Scale padding and spacing appropriately
- Reflow to prevent horizontal scrolling

### Container Widths

Use the Container component to constrain content width:
- **Narrow**: 640px - forms, focused content
- **Default**: 1024px - standard pages
- **Wide**: 1280px - data-heavy pages
- **Full**: 100% - application layouts

---

## Elevation & Depth

Kaizen uses subtle elevation to establish hierarchy without heavy shadows.

### Shadow System

Shadows are applied sparingly:

**Level 0**: No shadow (default state)
**Level 1**: Subtle shadow for cards and containers at rest
**Level 2**: Elevated shadow for dropdowns and popovers
**Level 3**: Prominent shadow for modals and overlays

### Z-Index Scale

Z-index values are standardized:

- `1`: Elevated cards and sticky elements
- `10`: Dropdowns and popovers
- `100`: Navigation and fixed headers
- `1000`: Modals and overlays
- `10000`: Tooltips and critical overlays

### Hierarchy Through Other Means

Beyond shadows, create hierarchy with:
- **Color**: Lighter backgrounds for secondary surfaces
- **Borders**: 2px borders distinguish containers
- **Spacing**: Increased padding elevates importance
- **Typography**: Size and weight establish prominence

---

## Shapes

Kaizen uses rounded corners to create a friendly, approachable aesthetic.

### Border Radius

The {rounded} scale provides consistent corner treatments:

- **{rounded.none}**: Sharp corners for strict, data-focused UI
- **{rounded.sm}**: Subtle rounding for small elements
- **{rounded.md}**: Default rounding for most components (7px)
- **{rounded.lg}**: Prominent rounding for focus rings and modals (10px)
- **{rounded.xl}**: Large rounding for cards and containers (16px)
- **{rounded.full}**: Fully rounded for pills and avatars

### Application

**Default choice**: Use {rounded.md} for most interactive elements (buttons, inputs, cards).

**Exceptions**:
- Use {rounded.full} for badges, avatars, and pill-shaped elements
- Use {rounded.lg} for focus indicators to ensure visibility
- Use {rounded.none} sparingly, when rectangular shapes improve data scanning

**Consistency**: Keep border radius consistent within a component. Don't mix rounded and sharp corners on the same element.

---

## Components

Kaizen components are the building blocks of our interfaces. All components are built with React, TypeScript, and React Aria for accessibility.

### Buttons

Buttons are the primary way users take action.

#### Primary Button ({components.button-primary})

Use for the main action on a page. Limit to one primary button per section.

**Visual treatment**: {colors.primary} background with {colors.text-inverse} text, {rounded.md} corners, and {typography.button-primary} text style.

**States**:
- **Hover**: {components.button-primary-hover} - Darkens to {colors.primary-hover}
- **Active**: {components.button-primary-active} - Further darkens to {colors.primary-active}
- **Disabled**: {components.button-primary-disabled} - Gray background, no interaction

#### Secondary Button ({components.button-secondary})

Use for secondary actions or when multiple actions have equal weight.

**Visual treatment**: {colors.surface-primary} background with 2px {colors.border-default} border, {colors.text-primary} text.

**States**:
- **Hover**: {components.button-secondary-hover} - Border becomes {colors.primary}
- **Active**: {components.button-secondary-active} - Background tints to {colors.purple-100}
- **Disabled**: {components.button-secondary-disabled} - Muted colors, no interaction

#### Size Variants

- **Small**: Reduced padding, {typography.button-secondary}
- **Medium**: Default size
- **Large**: Increased padding, {typography.button-primary}

#### Icon Buttons

For icon-only buttons, always provide accessible text using `hasHiddenLabel` prop.

### Form Inputs

#### Text Field ({components.text-field})

Standard text input with label, description, and validation.

**Visual treatment**: {colors.surface-primary} background, 2px {colors.border-default} border, {rounded.md} corners, {spacing.12} x {spacing.16} padding.

**States**:
- **Focus**: {components.text-field-focus} - {colors.border-focus} border with no outline
- **Error**: {components.text-field-error} - {colors.danger} border with validation message
- **Disabled**: {components.text-field-disabled} - {colors.surface-tertiary} background, muted text

**Accessibility**: Always pair with visible label. Use description for hints, validationMessage for errors.

#### Select & Dropdowns

Built on React Aria for keyboard navigation and screen reader support.

Use SingleSelect for simple dropdowns, MultiSelect for multiple selections.

#### Checkboxes & Radios

Use Checkbox for independent binary choices, Radio for mutually exclusive options.

Always wrap Radio components in RadioGroup with a group label.

### Cards ({components.card})

Cards group related content and actions.

**Visual treatment**: {colors.surface-primary} background, 2px {colors.border-default} border, {rounded.md} corners, {spacing.24} padding.

**States**:
- **Hover**: {components.card-hover} - Border darkens for interactive cards
- **Active**: Border becomes {colors.primary} for selected state

### Tables ({components.table})

Tables present structured data.

**Structure**:
- **Container**: {components.table} - Rounded border wrapper
- **Header**: {components.table-header} - {colors.surface-secondary} background
- **Rows**: Interactive rows with {components.table-row-hover} state
- **Cells**: {components.table-cell} - Consistent padding and bottom borders

**Variants**:
- **Default**: Standard spacing
- **Compact**: Reduced padding for dense data
- **Data**: Optimized for numerical data with right-aligned columns

### Modals ({components.modal-container})

Modals focus attention on a specific task.

**Structure**:
- **Overlay**: {components.modal-overlay} - Semi-transparent backdrop
- **Container**: {components.modal-container} - Centered, rounded container with {spacing.32} padding

**Types**:
- **Generic**: Flexible content
- **Confirmation**: Confirm destructive actions
- **Input/Edit**: Form-focused interactions

**Accessibility**: Modals trap focus, allow Escape to dismiss, and restore focus on close.

### Notifications

Notifications provide feedback on user actions or system events.

**Variants**:
- **Success**: {components.notification-success} - Green theming
- **Error**: {components.notification-error} - Red theming
- **Warning**: {components.notification-warning} - Yellow theming
- **Info**: {components.notification-info} - Blue theming

**Best practices**:
- Auto-dismiss success/info after 5 seconds
- Keep error/warning visible until dismissed
- Always provide dismiss action
- Pair colors with icons for accessibility

### Navigation

#### Tabs ({components.tab})

Tabs organize content into related sections.

**States**:
- **Default**: {components.tab} - Neutral color, transparent border
- **Hover**: {components.tab-hover} - Darkened text
- **Active**: {components.tab-active} - {colors.primary} text and bottom border

#### Links

Use Link component for navigation, LinkButton for link-styled buttons.

Always open external links in new tab with appropriate ARIA label.

### Badges ({components.badge})

Badges show counts or status indicators.

**Visual treatment**: {colors.primary} background, {colors.text-inverse} text, {rounded.full} for pill shape, minimal padding.

Use sparingly - they draw significant attention.

### Content Containers

#### Well ({components.well})

Wells group related content with distinct background.

Use for callouts, promotional content, or grouped form sections.

#### Divider ({components.divider})

Thin line separating content sections. Use 1px height with {colors.border-default}.

### Tooltips ({components.tooltip})

Tooltips provide contextual help on hover/focus.

**Visual treatment**: {colors.gray-600} background, {colors.text-inverse} text, {rounded.sm} corners, tight padding.

**Accessibility limitation**: Limited screen reader support. Use sparingly and never for critical information.

---

## Do's and Don'ts

### Colors

**Do:**
- Use semantic colors for consistent meaning
- Test color combinations for sufficient contrast
- Provide non-color indicators (icons, text) alongside color
- Use purple for primary brand moments

**Don't:**
- Use red and green as the only differentiators
- Mix too many vibrant colors in one interface
- Use colors outside the defined palette
- Rely on color alone to convey information

### Typography

**Do:**
- Maintain heading hierarchy (h1 → h2 → h3)
- Use one h1 per page
- Keep line lengths between 50-75 characters
- Use semantic HTML tags matching content structure
- Load only the font weights you need

**Don't:**
- Skip heading levels for visual preference
- Use tiny font sizes (< 12px)
- Set fixed line heights that cut off descenders
- Use all caps for long text passages
- Mix too many font weights on one page

### Spacing

**Do:**
- Use spacing scale values consistently
- Group related elements with less space
- Separate unrelated elements with more space
- Scale spacing responsively
- Use semantic spacing names (xs, sm, md) for reusable patterns

**Don't:**
- Use arbitrary values outside the scale
- Space elements too tightly on mobile
- Create unbalanced whitespace
- Mix different spacing systems

### Layout

**Do:**
- Design mobile-first
- Test at multiple breakpoints
- Ensure content reflows without horizontal scroll
- Use Container for readable line lengths
- Provide touch-friendly targets (minimum 44x44px)

**Don't:**
- Design only for desktop
- Use fixed pixel widths
- Overlap interactive elements
- Create layouts that require horizontal scrolling
- Assume specific screen sizes

### Components

**Do:**
- Use one primary button per section
- Provide visible focus indicators
- Include accessible labels for all inputs
- Use appropriate component variants
- Test keyboard navigation

**Don't:**
- Create custom components when system components exist
- Disable focus indicators
- Use placeholder text as labels
- Mix component variants inconsistently
- Forget to test with assistive technology

### Accessibility

**Do:**
- Provide text alternatives for images and icons
- Ensure sufficient color contrast (4.5:1 minimum)
- Support keyboard navigation
- Use semantic HTML
- Test with screen readers
- Provide skip navigation links
- Write descriptive link text

**Don't:**
- Use color as the only indicator
- Disable zoom or viewport scaling
- Use tiny click targets (< 44x44px)
- Auto-play audio or video
- Use images of text
- Remove focus indicators
- Use vague link text like "click here"

### Forms

**Do:**
- Provide visible labels for all inputs
- Show validation errors near the relevant field
- Use appropriate input types (email, tel, date)
- Indicate required fields clearly
- Group related fields logically

**Don't:**
- Use placeholder text as labels
- Hide error messages
- Use complex CAPTCHA without alternative
- Reset forms on error
- Make forms unnecessarily long

### Buttons & Actions

**Do:**
- Use clear, action-oriented labels ("Save changes" not "OK")
- Place primary action on the right in button groups
- Show loading states during async actions
- Disable buttons during processing
- Provide confirmation for destructive actions

**Don't:**
- Use generic labels ("Submit", "OK", "Cancel")
- Use too many primary buttons
- Create buttons that look like links or vice versa
- Forget to show feedback after actions complete

---

*Design system maintained by Culture Amp Design Systems team. For questions or contributions, see repository documentation.*

# Component Documentation Migration Template

## Agent Instructions

Use this template to migrate any component MDX documentation file to the standardized API specification format.

## Step-by-Step Transformation Process

### 1. Identify Component Name

Extract the component name from the file path or existing content (e.g., "MultiSelect", "Heading", "GuidanceBlock").

### 2. Apply These Exact Transformations

**Meta Component:**

```
FROM: <Meta of={ComponentStories} />
TO:   <Meta title="Components/{ComponentName}/{ComponentName}/API Specification" tags={['dev docs']} />
```

**H1 Titles:**

```
FROM: # ComponentName
TO:   <DocHeading title="{ComponentName}" docTags={['dev docs']} />
```

**Props Section:**

```
Find: <Controls of={ComponentStories.Playground} />
Add above it: ## Props
```

**Examples Section:**

```
FROM: ## API
TO:   ## Examples
```

### 3. Required File Structure

The migrated file must follow this exact structure:

```
[Imports]
<Meta title="Components/{ComponentName}/{ComponentName}/API Specification" tags={['dev docs']} />
<DocHeading title="{ComponentName}" docTags={['dev docs']} />
<ResourceLinks ... />
<KAIOInstallation ... />

## Overview
[Content with Canvas]

## Props
<Controls ... />

## Examples
### ExampleName1
### ExampleName2
[All other sections as H3 subsections]
```

### 4. Output File Name

Create: `{ComponentName}-updated.mdx`

## Agent Execution Checklist

- [ ] Replace Meta component with API Specification format
- [ ] Ensure DocHeading is used instead of H1
- [ ] Add Props section before Controls component
- [ ] Change API section to Examples
- [ ] Move all subsections under Examples as H3
- [ ] Preserve all existing Canvas and story references
- [ ] Maintain all ResourceLinks and KAIOInstallation content
- [ ] Create file with -updated suffix

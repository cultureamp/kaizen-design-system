---
"@kaizen/components": minor
---

Update FilterMultiSelect ListBoxSection to avoid duplicate reading of sectionName as the accessible title.

- Update sectionName to be optional if sectionHeader is provided
  - This will solve the issue of sectionName and sectionHeader being read twice when they are the same
- Minor style change to ensure hide bullet lists as filtering 
- Minor style changes to allow for default text styles for section headings with just text
- Add conditional check to render the sectionName only if provided
- Add tests to validate type accessible names are constructed as expected
---
"@kaizen/tailwind": patch
---

Update filter method for tailwind spacing tokens to allow default tailwind width values
 - This fixes the !Nan filtered our tailwind percentile and string values
 - Updated stories that use w-100 to w-full since the original intention was to be compile to width: 100%
 

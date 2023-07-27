// Target is a valid Browserlist value: https://github.com/browserslist/browserslist
// See our browser support: https://academy.cultureamp.com/hc/en-us/articles/204539569-Supported-browsers-for-Participants
export const browsersList = [
  // Browsers that we explicitly support (officially we cover last 2 versions, but we're covering all releases in the past 2 years)
  "chrome >1 and last 2 years",
  "safari >1 and last 2 years",
  "firefox >1 and last 2 years",
  "edge >1 and last 2 years",
  "opera >1 and last 2 years",
  "ios_saf >1 and last 2 years",
  "and_chr >1 and last 2 years",

  // Android browsers we should probably also support
  // I'm only including browsers here that are updated regularly ()
  "android >1 and last 2 years",
  "and_ff >1 and last 2 years",
  "samsung >1 and last 2 years",

  // Edge legacy
  "edge 16-18",
].join(", ")

// This file is based closely on react-syntax-highlighter/dist/styles/prism/prism.js
// The only major changes have been using Culture Amp branded colors and fonts.
const ink = '#3E4543';
const white = '#FFFFFF';
const oceanTint70 = '#BBD6DB';
const yuzuTint70 = '#FFF0BB';
const coralTint70 = '#FAC8CE';
const selection = {
  textShadow: 'none',
  background: '#b3d4fc',
};
const fonts =
  "'Operator Mono A', 'Operator Mono B', 'Consolas', 'monaco', 'Andale Mono', 'Ubuntu Mono', monospace";

export default {
  'code[class*="language-"]': {
    color: white,
    background: 'none',
    fontFamily: fonts,
    fontWeight: 300,
    textAlign: 'left',
    whiteSpace: 'pre',
    wordSpacing: 'normal',
    wordBreak: 'normal',
    wordWrap: 'normal',
    lineHeight: '1.5',
    MozTabSize: '4',
    OTabSize: '4',
    tabSize: '4',
    WebkitHyphens: 'none',
    MozHyphens: 'none',
    msHyphens: 'none',
    hyphens: 'none',
  },
  'pre[class*="language-"]': {
    color: white,
    background: ink,
    fontFamily: fonts,
    fontWeight: 300,
    textAlign: 'left',
    whiteSpace: 'pre',
    wordSpacing: 'normal',
    wordBreak: 'normal',
    wordWrap: 'normal',
    lineHeight: '1.5',
    MozTabSize: '4',
    OTabSize: '4',
    tabSize: '4',
    WebkitHyphens: 'none',
    MozHyphens: 'none',
    msHyphens: 'none',
    hyphens: 'none',
    padding: '1.5rem',
    margin: '.75rem 0',
    overflow: 'auto',
  },
  'pre[class*="language-"]::-moz-selection': selection,
  'pre[class*="language-"] ::-moz-selection': selection,
  'code[class*="language-"]::-moz-selection': selection,
  'code[class*="language-"] ::-moz-selection': selection,
  'pre[class*="language-"]::selection': selection,
  'pre[class*="language-"] ::selection': selection,
  'code[class*="language-"]::selection': selection,
  'code[class*="language-"] ::selection': selection,
  ':not(pre) > code[class*="language-"]': {
    background: ink,
    padding: '.1em',
    borderRadius: '.3em',
    whiteSpace: 'normal',
  },
  comment: {
    color: 'slategray',
  },
  prolog: {
    color: 'slategray',
  },
  doctype: {
    color: 'slategray',
  },
  cdata: {
    color: 'slategray',
  },
  punctuation: {
    color: '#999',
  },
  '.namespace': {
    Opacity: '.7',
  },
  property: {
    color: oceanTint70,
  },
  tag: {
    color: oceanTint70,
  },
  boolean: {
    color: oceanTint70,
  },
  number: {
    color: oceanTint70,
  },
  constant: {
    color: oceanTint70,
  },
  symbol: {
    color: oceanTint70,
  },
  deleted: {
    color: oceanTint70,
  },
  selector: {
    color: coralTint70,
  },
  'attr-name': {
    color: coralTint70,
  },
  string: {
    color: yuzuTint70,
  },
  char: {
    color: yuzuTint70,
  },
  builtin: {
    color: yuzuTint70,
  },
  inserted: {
    color: yuzuTint70,
  },
  operator: {
    color: coralTint70,
  },
  entity: {
    color: coralTint70,
    cursor: 'help',
  },
  url: {
    color: coralTint70,
  },
  '.language-css .token.string': {
    color: coralTint70,
  },
  '.style .token.string': {
    color: coralTint70,
  },
  atrule: {
    color: yuzuTint70,
  },
  'attr-value': {
    color: yuzuTint70,
  },
  keyword: {
    color: yuzuTint70,
  },
  function: {
    color: coralTint70,
  },
  'class-name': {
    color: coralTint70,
  },
  regex: {
    color: yuzuTint70,
  },
  important: {
    color: yuzuTint70,
    fontWeight: 500,
  },
  variable: {
    color: yuzuTint70,
  },
  bold: {
    fontWeight: 500,
  },
  italic: {
    fontStyle: 'italic',
  },
};

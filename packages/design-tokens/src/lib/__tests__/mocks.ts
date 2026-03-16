export const themeForTesting = {
  border: {
    dashed: {
      borderWidth: '2px',
      red: 'oklch(52.52% 0.1745 15.36)',
    },
  },
  color: {
    purple: { 100: 'oklch(93.30% 0.0210 313.83)', 200: 'oklch(86.85% 0.0524 314.91)' },
    blue: { 100: 'oklch(93.11% 0.0253 249.96)', 200: 'oklch(86.19% 0.0533 250.19)' },
    red: { 100: 'oklch(93.36% 0.0271 3.41)', 200: 'oklch(86.98% 0.0544 6.81)' },
    yellow: { 100: 'oklch(91.96% 0.1314 95.60)', 200: 'oklch(86.45% 0.1651 88.30)' },
    orange: { 100: 'oklch(93.31% 0.0366 45.67)', 200: 'oklch(86.91% 0.0749 44.43)' },
    green: { 100: 'oklch(92.69% 0.0393 178.60)', 200: 'oklch(85.16% 0.0852 175.92)' },
    'grey-cool': { 100: 'oklch(92.97% 0.0026 228.79)', 200: 'oklch(86.17% 0.0036 219.54)' },
    'grey-warm': { 100: 'oklch(93.23% 0.0128 63.91)', 200: 'oklch(86.21% 0.0095 52.08)' },
  },
} as const

export const heartColorNamePattern = /purple|blue|orange|yellow|red|green|grey-cool|grey-warm|cyan|lime|pink/

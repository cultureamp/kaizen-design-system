export const singleMockItems = [
  { label: 'Short black', value: 'short-black' },
  { label: 'Long black', value: 'long-black' },
  { label: 'Batch brew', value: 'batch-brew' },
  { label: 'Latte', value: 'latte' },
  { label: 'Flat white', value: 'flat-white' },
  { label: 'Mocha', value: 'mocha' },
  { label: 'Cappuccino', value: 'cappuccino' },
  { label: 'Magic', value: 'magic' },
  {
    label: 'A very special coffee with a long name',
    value: 'a-very-special-coffee-with-a-long-name',
  },
]

export const groupedMockItems = [
  {
    label: 'Colours',
    options: [
      { label: 'Blue', value: 'blue' },
      { label: 'Red', value: 'red' },
      { label: 'Green', value: 'green' },
    ],
  },
  {
    label: 'Flavours',
    options: [
      { label: 'Vanilla', value: 'vanilla' },
      { label: 'Chocolate', value: 'chocolate' },
      { label: 'Strawberry', value: 'strawberry' },
    ],
  },
]

export const mixedMockItemsDisabled = [
  { label: 'Short black', value: 'short-black', disabled: true },
  { label: 'Long black', value: 'long-black' },
  { label: 'Batch brew', value: 'batch-brew', disabled: true },
  {
    label: 'Size',
    options: [
      { label: 'Regular', value: 'regular' },
      { label: 'Large', value: 'large', disabled: true },
    ],
  },
  {
    label: 'Syrup',
    options: [
      { label: 'Vanilla', value: 'vanilla', disabled: true },
      { label: 'Caramel', value: 'caramel' },
      { label: 'Hazelnut', value: 'hazelnut' },
    ],
  },
]

export const mixedMockItemsUngroupedFirst = [
  { label: 'Batch brew', value: 'batch-brew' },
  { label: 'Latte', value: 'latte' },
  { label: 'Magic', value: 'magic' },
  {
    label: 'Size',
    options: [
      { label: 'Regular', value: 'regular' },
      { label: 'Large', value: 'large' },
    ],
  },
  {
    label: 'Syrup',
    options: [
      { label: 'Vanilla', value: 'vanilla' },
      { label: 'Caramel', value: 'caramel' },
      { label: 'Hazelnut', value: 'hazelnut' },
    ],
  },
]

export const mixedMockItemsUnordered = [
  {
    label: 'Size',
    options: [
      { label: 'Regular', value: 'regular' },
      { label: 'Large', value: 'large' },
    ],
  },
  { label: 'Batch brew', value: 'batch-brew' },
  { label: 'Latte', value: 'latte' },
  { label: 'Magic', value: 'magic' },
  {
    label: 'Syrup',
    options: [
      { label: 'Vanilla', value: 'vanilla' },
      { label: 'Caramel', value: 'caramel' },
      { label: 'Hazelnut', value: 'hazelnut' },
    ],
  },
]

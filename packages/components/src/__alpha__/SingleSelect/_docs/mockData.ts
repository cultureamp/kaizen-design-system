export const singleMockItems = [
  {
    key: 'short-black',
    label: 'Short black',
    value: 'short-black',
  },
  { key: 'long-black', label: 'Long black', value: 'long-black' },
  { key: 'batch-brew', label: 'Batch brew', value: 'batch-brew' },
  { key: 'latte', label: 'Latte', value: 'latte' },
  { key: 'flat-white', label: 'Flat white', value: 'flat-white' },
  { key: 'mocha', label: 'Mocha', value: 'mocha' },
  { key: 'cappuccino', label: 'Cappuccino', value: 'cappuccino' },
  { key: 'magic', label: 'Magic', value: 'magic' },
]

export const groupedMockItems = [
  {
    type: 'section',
    label: 'Colours',
    options: [
      { key: 'blue', label: 'Blue', value: 'blue' },
      { key: 'red', label: 'Red', value: 'red' },
      { key: 'green', label: 'Green', value: 'green' },
    ],
  },
  {
    type: 'section',
    label: 'Flavours',
    options: [
      { key: 'vanilla', label: 'Vanilla', value: 'vanilla' },
      { key: 'chocolate', label: 'Chocolate', value: 'chocolate' },
      { key: 'strawberry', label: 'Strawberry', value: 'strawberry' },
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

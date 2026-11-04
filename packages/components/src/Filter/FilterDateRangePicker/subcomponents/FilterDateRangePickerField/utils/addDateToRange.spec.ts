import { addDateToRange } from './addDateToRange'

describe('addDateToRange()', () => {
  it('starts a range when there is none', () => {
    const date = new Date('2022-05-15')

    expect(addDateToRange(undefined, date)).toEqual({ from: date, to: undefined })
  })

  it('starts a new range when the range is complete, even after the current start', () => {
    const date = new Date('2022-05-20')
    const range = { from: new Date('2022-05-15'), to: new Date('2022-06-15') }

    expect(addDateToRange(range, date)).toEqual({ from: date, to: undefined })
  })

  it('ends the range on a later date', () => {
    const from = new Date('2022-05-15')
    const date = new Date('2022-05-20')

    expect(addDateToRange({ from, to: undefined }, date)).toEqual({ from, to: date })
  })

  it('swaps the dates when the end is before the start', () => {
    const from = new Date('2022-05-15')
    const date = new Date('2022-05-10')

    expect(addDateToRange({ from, to: undefined }, date)).toEqual({ from: date, to: from })
  })

  it('selects a single day when the start is clicked again', () => {
    const from = new Date('2022-05-15')

    expect(addDateToRange({ from, to: undefined }, new Date('2022-05-15'))).toEqual({
      from,
      to: new Date('2022-05-15'),
    })
  })

  it('starts a new range when the start is invalid', () => {
    const date = new Date('2022-05-15')

    expect(addDateToRange({ from: new Date('potato'), to: undefined }, date)).toEqual({
      from: date,
      to: undefined,
    })
  })
})

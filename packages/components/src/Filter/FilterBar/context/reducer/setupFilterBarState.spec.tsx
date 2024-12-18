import React from 'react'
import { type Filters } from '../../types'
import { setupFilterBarState } from './setupFilterBarState'

type Values = {
  flavour: string
  sugarLevel: number
}

const filters = [
  { id: 'flavour', name: 'Flavour', Component: <div /> },
  {
    id: 'sugarLevel',
    name: 'Sugar Level',
    Component: <div />,
    isRemovable: true,
  },
] satisfies Filters<Values>

const filtersNoRemovable = [
  { id: 'flavour', name: 'Flavour', Component: <div /> },
  {
    id: 'sugarLevel',
    name: 'Sugar Level',
    Component: <div />,
    isRemovable: false,
  },
] satisfies Filters<Values>

describe('setupFilterBarState()', () => {
  it('sets up the base state correctly', () => {
    const values = { flavour: 'jasmine', sugarLevel: 50 }
    expect(setupFilterBarState<Values>(filters, values)).toEqual({
      filters: {
        flavour: {
          id: 'flavour',
          name: 'Flavour',
          isRemovable: false,
          isOpen: false,
          isUsable: true,
        },
        sugarLevel: {
          id: 'sugarLevel',
          name: 'Sugar Level',
          isRemovable: true,
          isOpen: false,
          isUsable: true,
        },
      },
      activeFilterIds: new Set(['flavour', 'sugarLevel']),
      values,
      dependentFilterIds: new Set<keyof Values>(),
      hasUpdatedValues: false,
      hasRemovableFilter: true,
    })
  })

  describe('Dependent filters', () => {
    const filtersDependent = [
      { id: 'flavour', name: 'Flavour', Component: <div /> },
      {
        id: 'sugarLevel',
        name: 'Sugar Level',
        Component: <div />,
        isUsableWhen: (state) => state.flavour.value !== undefined,
      },
    ] satisfies Filters<Values>

    it('correctly sets up base for dependent filters', () => {
      const values = { sugarLevel: 50 }
      const state = setupFilterBarState<Values>(filtersDependent, values)
      expect(state.activeFilterIds).toEqual(new Set(['flavour']))
      expect(state.dependentFilterIds).toEqual(new Set(['sugarLevel']))
      expect(state.filters.sugarLevel.isUsable).toBe(false)
      expect(state.values).toEqual({})
      expect(state.hasUpdatedValues).toBe(true)
    })
  })

  describe('Removable filters', () => {
    it("hasRemovableFilter as false when there's no removable filters", () => {
      const values = {}
      expect(setupFilterBarState<Values>(filtersNoRemovable, values)).toEqual({
        filters: {
          flavour: {
            id: 'flavour',
            name: 'Flavour',
            isRemovable: false,
            isOpen: false,
            isUsable: true,
          },
          sugarLevel: {
            id: 'sugarLevel',
            name: 'Sugar Level',
            isRemovable: false,
            isOpen: false,
            isUsable: true,
          },
        },
        activeFilterIds: new Set(['flavour', 'sugarLevel']),
        values,
        dependentFilterIds: new Set<keyof Values>(),
        hasUpdatedValues: false,
        hasRemovableFilter: false,
      })
    })
  })
})

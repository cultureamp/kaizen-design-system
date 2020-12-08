/* eslint import/no-extraneous-dependencies: 0 */

import { Hierarchy } from "@kaizen/draft-hierarchical-menu"

export enum ResponseTime {
  INSTANT = 0,
  FAST = 500,
  MEDIUM = 1500,
  SLOW = 2500,
}

export const levelZero: Hierarchy = {
  parent: null,
  current: {
    value: "id_didier",
    label: "Didier Elzinga",
    level: 0,
    numberOfChildren: 12,
    name: "Didier Elzinga",
  },
  children: [
    {
      value: "id_rich",
      label: "Rich Anstett",
      level: 1,
      numberOfChildren: 0,
      name: "Rich Anstett",
    },
    {
      value: "id_josh",
      label: "Josh Berman",
      level: 1,
      numberOfChildren: 0,
      name: "Josh Berman",
    },
    {
      value: "id_aubrey",
      label: "Aubrey Blanche",
      level: 1,
      numberOfChildren: 0,
      name: "Aubrey Blanche",
    },
    {
      value: "id_doug",
      label: "Doug English",
      level: 1,
      numberOfChildren: 0,
      name: "Doug English",
    },
    {
      value: "id_peter",
      label: "Peter Haasz",
      level: 1,
      numberOfChildren: 0,
      name: "Peter Haasz",
    },
    {
      value: "id_rod",
      label: "Rod Hamilton",
      level: 1,
      numberOfChildren: 2,
      name: "Rod Hamilton",
    },
    {
      value: "id_adin",
      label: "Adin Martin",
      level: 1,
      numberOfChildren: 0,
      name: "Adin Martin",
    },
    {
      value: "id_jd",
      label: "JD Peterson",
      level: 1,
      numberOfChildren: 0,
      name: "JD Peterson",
    },
    {
      value: "id_kath",
      label: "Kath Rau",
      level: 1,
      numberOfChildren: 0,
      name: "Kath Rau",
    },
    {
      value: "id_cathy",
      label: "Cathy Stansen",
      level: 1,
      numberOfChildren: 0,
      name: "Cathy Stansen",
    },
    {
      value: "id_sarah",
      label: "Sarah Tinsley",
      level: 1,
      numberOfChildren: 0,
      name: "Sarah Tinsley",
    },
    {
      value: "id_jack",
      label: "Jack Van Wyk",
      level: 1,
      numberOfChildren: 0,
      name: "Jack Van Wyk",
    },
    {
      value: "id_long_example_1",
      label: "Example of a long name to show truncation with ellipses",
      level: 1,
      numberOfChildren: 0,
      name: "Long Name",
    },
    {
      value: "id_long_example_2",
      label: "Example of a long name to show truncation with ellipses",
      level: 1,
      numberOfChildren: null,
      name: "Long Name",
    },
  ],
}

export const levelOne: Hierarchy = {
  parent: {
    value: "id_didier",
    label: "Didier Elzinga",
    level: 0,
    numberOfChildren: 12,
    name: "Didier Elzinga",
  },
  current: {
    value: "id_rod",
    label: "Rod Hamilton",
    level: 1,
    numberOfChildren: 2,
    name: "Rod Hamilton",
  },
  children: [
    {
      value: "id_virginia",
      label: "Virginia Murdoch",
      level: 2,
      numberOfChildren: 4,
      name: "Virginia Murdoch",
    },
    {
      value: "id_dan",
      label: "Dan Johnston",
      level: 2,
      numberOfChildren: 0,
      name: "Dan Johnson",
    },
  ],
}

export const levelTwo: Hierarchy = {
  parent: {
    value: "id_rod",
    label: "Rod Hamilton",
    level: 1,
    numberOfChildren: 2,
    name: "Rod HamiltonjA",
  },
  current: {
    value: "id_virginia",
    label: "Virginia Murdoch",
    level: 2,
    numberOfChildren: 4,
    name: "Virginia Murdoch",
  },
  children: [
    {
      value: "id_jordan",
      label: "Jordan Lewis",
      level: 3,
      numberOfChildren: 0,
      name: "Jordan Lewis",
    },
    {
      value: "id_kavi",
      label: "Kavi Lal",
      level: 3,
      numberOfChildren: 1,
      name: "Kavi Lal",
    },
    {
      value: "id_olga",
      label: "Olga Semeyko",
      level: 3,
      numberOfChildren: 0,
      name: "Olga Semeyko",
    },
    {
      value: "id_ronja",
      label: "Ronja Jagusch",
      level: 3,
      numberOfChildren: 0,
      name: "Ronja Jagusch",
    },
  ],
}

export const levelThree: Hierarchy = {
  parent: {
    value: "id_virginia",
    label: "Virginia Murdoch",
    level: 2,
    numberOfChildren: 4,
    name: "Virginia Murdoch",
  },
  current: {
    value: "id_kavi",
    label: "Kavi Lal",
    level: 3,
    numberOfChildren: 1,
    name: "Kavi Lal",
  },
  children: [
    {
      value: "id_dean",
      label: "Dean Wan",
      level: 4,
      numberOfChildren: 0,
      name: "Dean Wan",
    },
  ],
}

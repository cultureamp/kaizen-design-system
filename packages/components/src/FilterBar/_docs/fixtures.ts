/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { Factory, faker } from "@cultureamp/frontend-testing"
import { FilterOption } from "../types"

const userFactory = Factory.Sync.makeFactory<FilterOption>({
  value: Factory.each(i => faker.datatype.uuid()),
  label: Factory.each(
    () => `${faker.name.firstName()} ${faker.name.lastName()}`
  ),
})

const departmentFactory = Factory.Sync.makeFactory<FilterOption>({
  value: Factory.each(i => faker.datatype.uuid()),
  label: Factory.each(() => faker.commerce.department()),
})

const ascSort = (a: FilterOption, b: FilterOption) =>
  a.label.toLocaleLowerCase() > b.label.toLocaleLowerCase() ? 1 : -1

export const users = userFactory.buildList(30).sort(ascSort)
export const departments = departmentFactory.buildList(8).sort(ascSort)

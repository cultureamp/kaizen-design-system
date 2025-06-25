import React from 'react'
import { type Item, type ItemGroup } from '../../SingleSelect'
import { List } from '../List'
import { ListItem } from '../ListItem'
import { ListSection } from '../ListSection'

type Items = {
  items: ItemGroup[] | Item[]
}

export const PopoverContent = ({ items }: Items): React.ReactElement => {
  return (
    <List>
      {items.map((item) => {
        if ('options' in item) {
          return (
            <ListSection key={item.label} name={item.label}>
              {item.options.map((option) => (
                <ListItem key={option.value} textValue={option.label} isDisabled={option.disabled}>
                  {option.label}
                </ListItem>
              ))}
            </ListSection>
          )
        }
        return (
          <ListItem key={item.value} textValue={item.label} isDisabled={item?.disabled}>
            {item.label}
          </ListItem>
        )
      })}
    </List>
  )
}

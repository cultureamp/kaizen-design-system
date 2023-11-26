// @ts-nocheck
import React, { useState, useEffect, Fragment } from "react"
import { Combobox } from "@headlessui/react"
import classnames from "classnames"
import { CheckIcon } from "~components/Icon"
import {
  Popover,
  useFloating,
} from "~components/MultiSelect/subcomponents/Popover"
import { RemovableTag } from "~components/__future__/Tag"

import styles from "./Autocomplete.module.scss"

export const Autocomplete = (): JSX.Element => {
  const [inputValue, setInputValue] = useState("")
  const [queryResults, setQueryResults] = useState([])
  const [loading, setLoading] = useState(false)
  const [selectedPeople, setSelectedPeople] = useState([])
  const { refs } = useFloating()

  useEffect(() => {
    // Function to fetch data from the network
    const fetchData = async (): void => {
      setLoading(true)

      try {
        // Make your network request here, for example using fetch or Axios
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/users?name_like=${inputValue}`
        )
        const data = await response.json()

        // Update options with the fetched data
        setQueryResults(data)
      } catch (error) {
        // console.error("Error fetching data:", error)
      } finally {
        setLoading(false)
      }
    }

    // Fetch data when inputValue changes
    if (inputValue.trim() !== "") {
      fetchData()
    } else {
      setQueryResults([])
    }
  }, [inputValue])

  // console.log("selectedpeople", selectedPeople)

  return (
    <Combobox
      as="div"
      value={selectedPeople}
      onChange={setSelectedPeople}
      multiple
    >
      {selectedPeople.length > 0 && (
        <ul className={styles.selectedList}>
          {selectedPeople.map(value => (
            <li className={styles.selectedItem} key={value.id}>
              <RemovableTag
                removeButtonProps={{
                  ariaLabel: `Remove option: ${value.name}`,
                  onClick: () =>
                    setSelectedPeople([
                      ...selectedPeople.filter(
                        person => person.id !== value.id
                      ),
                    ]),
                }}
              >
                {value.name}
              </RemovableTag>
            </li>
          ))}
        </ul>
      )}
      <div ref={refs.setReference}>
        <Combobox.Input
          value={inputValue}
          onChange={event => setInputValue(event.target.value)}
          placeholder="Search..."
          disabled={loading}
          className={styles.input}
          // displayValue={asd => {
          //   console.log("asd", asd)
          // }}
          // queryResults.map(person => person.name).join(", ")
        />
      </div>
      <Popover refs={refs}>
        {loading && <p>Loading...</p>}
        {!loading && (
          <Combobox.Options className={styles.listBox}>
            {queryResults.map((option, index) => (
              <Combobox.Option key={index} value={option} as={Fragment}>
                {({ active, selected }) => (
                  <li
                    className={classnames(styles.option, {
                      [styles.isFocusVisible]: active,
                      [styles.isSelected]: selected,
                    })}
                  >
                    {option.name}
                    <span
                      className={classnames(
                        styles.icon,
                        selected && styles.isSelected
                      )}
                    >
                      {selected && (
                        <CheckIcon inheritSize role="presentation" />
                      )}
                    </span>
                  </li>
                )}
              </Combobox.Option>
            ))}
          </Combobox.Options>
        )}
      </Popover>
    </Combobox>
  )
}

Autocomplete.displayName = "Autocomplete"

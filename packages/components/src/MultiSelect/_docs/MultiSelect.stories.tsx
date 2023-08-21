import React from "react"
import { VisuallyHidden } from "@kaizen/a11y"
import { Button, IconButton } from "@kaizen/button"
import { TextField, CheckboxField } from "@kaizen/draft-form"

const meta = {
  title: "Components/Multi Select POC",
}

export default meta

// TODO: We need an aria live region for this
const Options = (): JSX.Element => (
  <>
    {/* we will always fieldset wrapping the options */}
    <fieldset
      id="id--all-options"
      data-section="options container"
      aria-describedby="id--live-region"
    >
      <span id="id--live-region" aria-live="polite">
        3 options total
      </span>
      <div className=" flex focus-within:bg-blue-200">
        <label className="flex w-full gap-6 items-start">
          <input id="id--option-1" type="checkbox" />
          <div className="flex flex-col">
            <span className=" font-weight-paragraph-bold">Option 1</span>
            <span className=" ">lorem ipsum</span>
          </div>
        </label>
      </div>
      <div className=" flex focus-within:bg-blue-200">
        <label className="flex w-full gap-6 items-start">
          <input id="id--option-2" type="checkbox" />
          <div className="flex flex-col">
            <span className=" font-weight-paragraph-bold">Option 2</span>
            <span className=" ">lorem ipsum</span>
          </div>
        </label>
      </div>
      <div className=" flex focus-within:bg-blue-200">
        <label className="flex w-full gap-6 items-start">
          <input id="id--option-3" type="checkbox" />
          <div className="flex flex-col">
            <span className=" font-weight-paragraph-bold">Option 3</span>
            <span className=" ">lorem ipsum</span>
          </div>
        </label>
      </div>
    </fieldset>
  </>
)

const GroupOptions = (): JSX.Element => (
  <fieldset aria-describedby="id--live-region">
    <span id="id--live-region" aria-live="assertive">
      9 options available
    </span>
    <fieldset
      data-section="options container"
      aria-describedby="id--options-desc"
    >
      <legend>Coffee</legend>
      <span id="id--options-desc" aria-hidden="true">
        3 Coffee total
      </span>
      <div className=" flex focus-within:bg-blue-200" data-section="option">
        <label className="flex w-full gap-6 items-start">
          <input type="checkbox" />
          <div className="flex flex-col">
            <span className=" font-weight-paragraph-bold">Mocha</span>
            <span className=" ">lorem ipsum</span>
          </div>
        </label>
      </div>
      <div className=" flex focus-within:bg-blue-200" data-section="option">
        <label className="flex w-full gap-6 items-start">
          <input type="checkbox" />
          <div className="flex flex-col">
            <span className=" font-weight-paragraph-bold">Long black</span>
            <span className=" ">lorem ipsum</span>
          </div>
        </label>
      </div>
      <div className=" flex focus-within:bg-blue-200" data-section="option">
        <label className="flex w-full gap-6 items-start">
          <input type="checkbox" />
          <div className="flex flex-col">
            <span className=" font-weight-paragraph-bold">Magic</span>
            <span className=" ">lorem ipsum</span>
          </div>
        </label>
      </div>
    </fieldset>
    <fieldset
      data-section="options container"
      aria-describedby="id--ploptions-desc"
    >
      <legend>Colors</legend>
      <span id="id--ploptions-desc" aria-hidden="true">
        2 Colors total
      </span>
      <div className=" flex focus-within:bg-blue-200" data-section="option">
        <label className="flex w-full gap-6 items-start">
          <input type="checkbox" />
          <div className="flex flex-col">
            <span className=" font-weight-paragraph-bold">Red</span>
            <span className=" ">lorem ipsum</span>
          </div>
        </label>
      </div>
      <div className=" flex focus-within:bg-blue-200" data-section="option">
        <label className="flex w-full gap-6 items-start">
          <input type="checkbox" />
          <div className="flex flex-col">
            <span className=" font-weight-paragraph-bold">Purple</span>
            <span className=" ">lorem ipsum</span>
          </div>
        </label>
      </div>
    </fieldset>
    <fieldset
      data-section="options container"
      aria-describedby="id--moptions-desc"
    >
      <legend>Flavours</legend>
      <span id="id--moptions-desc" aria-hidden="true">
        4 Flavours items
      </span>
      <div className=" flex focus-within:bg-blue-200" data-section="option">
        <label className="flex w-full gap-6 items-start">
          <input type="checkbox" />
          <div className="flex flex-col">
            <span className=" font-weight-paragraph-bold">Salty</span>
            <span className=" ">lorem ipsum</span>
          </div>
        </label>
      </div>
      <div className=" flex focus-within:bg-blue-200" data-section="option">
        <label className="flex w-full gap-6 items-start">
          <input type="checkbox" />
          <div className="flex flex-col">
            <span className=" font-weight-paragraph-bold">Sweet</span>
            <span className=" ">lorem ipsum</span>
          </div>
        </label>
      </div>
      <div className=" flex focus-within:bg-blue-200" data-section="option">
        <label className="flex w-full gap-6 items-start">
          <input type="checkbox" />
          <div className="flex flex-col">
            <span className=" font-weight-paragraph-bold">Bitter</span>
            <span className=" ">lorem ipsum</span>
          </div>
        </label>
      </div>
      <div className=" flex focus-within:bg-blue-200" data-section="option">
        <label className="flex w-full gap-6 items-start">
          <input type="checkbox" />
          <div className="flex flex-col">
            <span className=" font-weight-paragraph-bold">Sour</span>
            <span className=" ">lorem ipsum</span>
          </div>
        </label>
      </div>
    </fieldset>
  </fieldset>
)

const Tag = ({ tagLabel }: { tagLabel: string }): JSX.Element => (
  <li
    id={`id--tag-${tagLabel}`}
    className=" inline-flex border-solid border-green-300"
  >
    {tagLabel}
    <button
      type="button"
      onClick={() => {
        const thisTag = document.getElementById(`id--tag-${tagLabel}`)
        if (thisTag) {
          thisTag.remove()
        }
      }}
    >
      <VisuallyHidden>{tagLabel} - Remove option</VisuallyHidden>
      <span aria-hidden="true">X</span>
    </button>
  </li>
)

const TagList = (): JSX.Element => (
  // role=list" gets around safari jank
  // eslint-disable-next-line
  <ul
    className=" flex gap-6 list-none p-0 m-0"
    data-section="TagList"
    id="id--selected-options"
    aria-relevant="additions removals"
    role="list"
    aria-label="Pancake - selected options: Tag 1, Tag 2, Tag 3"
    aria-atomic={true}
  >
    <Tag tagLabel="Tag 1" />
    <Tag tagLabel="Tag 2" />
    <Tag tagLabel="Tag 3" />
  </ul>
)

// TODO: do we need to pass the label into the dialogue
const Label = ({ htmlFor }: { htmlFor: string }): JSX.Element => (
  <label htmlFor={htmlFor} id="id--field-label">
    Pancakes
  </label>
)

const ClearButton = (): JSX.Element => (
  <button aria-label="Clear all selected options for: Label" type="button">
    clear
  </button>
)

const ClearSearchInputButton = (): JSX.Element => (
  <button aria-label="Clear search" type="button">
    X
  </button>
)

const ToggleButton = (props: any): JSX.Element => (
  <button
    {...props}
    aria-label={`${props["aria-expanded"] ? "Close" : "Open"} menu: Pancakes`}
    aria-controls="id--popper"
    aria-expanded={props["aria-expanded"]}
    aria-haspopup="dialog"
    type="button"
  >
    {props["aria-expanded"] ? "^" : "v"}
  </button>
)

const Combobox = (props: any): JSX.Element => (
  <input
    {...props}
    aria-autocomplete="list"
    aria-controls="id--popper"
    aria-expanded={props["aria-expanded"]}
    aria-haspopup="dialog"
    aria-describedby="id--error-message id--selected-options id--combo-desc"
    aria-labelledby="id--field-label"
    role="combobox"
    placeholder="🔍"
    id="id--combo-1"
    data-section="search input / combobox"
    // TODO: tie the TagList to the a11y label
    type="text"
  />
)

const Popover = (props: any): JSX.Element => (
  <div
    id="id--popper"
    role="dialog"
    aria-modal="true"
    className=" border-solid border-blue-300"
    aria-label="Pancake options"
  >
    {props.children}
  </div>
)

export const SearchOutside = (): JSX.Element => (
  <>
    <div>
      <Label htmlFor="id--combo-1" />
      <div
        className=" flex border-solid border-red-300"
        data-section="combobox container"
      >
        <TagList />
        <Combobox aria-expanded={true} />
        <ClearButton />
        <ToggleButton aria-expanded={true} />
      </div>
      <div id="id--combo-desc">I am a descriptions!</div>
      <div id="id--error-message" data-section="error">
        I am an erar! RAWR!
      </div>
      <Popover>
        <Options />
        {/* <Options /> */}
      </Popover>
    </div>
    <button
      type="button"
      onClick={() => {
        const liveRegion = document.getElementById("id--live-region")
        if (liveRegion) {
          liveRegion.innerText = "2 options available"
        }
      }}
    >
      Update options count live region
    </button>
    <button
      type="button"
      onClick={() => {
        const taglist = document.getElementById("id--selected-options")
        if (taglist) {
          taglist.childNodes[0].remove()
        }
      }}
    >
      Remove tag from live region
    </button>
    <button
      type="button"
      onClick={() => {
        const taglist = document.getElementById("id--selected-options")
        if (taglist) {
          taglist.insertAdjacentHTML(
            "afterbegin",
            `<li
          class="border-solid border-green-300"
          aria-label="Mocha"
        >
          Mocha
          <button aria-label="Remove option - Mocha" type="button" >
            X
          </button>
        </li>`
          )
        }
      }}
    >
      Add tag to live region
    </button>
  </>
)

export const SearchAndTagListOutside = (): JSX.Element => (
  <div>
    <Label htmlFor="id--combo-1" />
    <TagList />
    <div
      data-section="combobox container"
      className=" border-solid border-red-300"
    >
      <Combobox aria-expanded={true} />
      <ClearButton />
      <ToggleButton aria-expanded={true} />
    </div>
    <div id="id--combo-desc">I am a descriptions!</div>
    <div id="id--error-message" data-section="error">
      I am an erar! RAWR!
    </div>
    <Popover>
      <Options />
    </Popover>
  </div>
)

export const SearchInside = (): JSX.Element => {
  const [isOpen, setIsOpen] = React.useState<boolean>(false)
  const [activeIndex, setActiveIndex] = React.useState<number>(1)
  return (
    <div>
      <Label htmlFor="id--inline-tag-search" />
      {/* Disabling these a11y linting errors because there is an IconButton that mitigates these concerns. The onClick here is just an additional layer. */}
      {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,
    jsx-a11y/no-static-element-interactions */}
      <div className=" flex rounded-default border-solid gap-6 border-red-300">
        <div className="grow">
          <TagList />
        </div>
        <ClearButton />
        <ToggleButton
          aria-expanded={true}
          onClick={() => {
            setIsOpen(!isOpen)
          }}
        />
      </div>
      <div id="id--combo-desc">I am a descriptions!</div>
      <div className="bg-red-100" id="id--error-message" data-section="error">
        I am an erar! RAWR!
      </div>
      <Popover data-section="popover" className=" border-solid border-blue-300">
        {isOpen && (
          <>
            <div className="flex w-full">
              <input
                id="id--inline-tag-search"
                className="grow m-2"
                type="search"
                aria-controls="id--all-options"
                placeholder="🔍"
              />
              <ClearSearchInputButton />
            </div>
            <Options />
          </>
        )}
      </Popover>
    </div>
  )
}

export const SearchInsideWithActiveDesc = (): JSX.Element => {
  const [isOpen, setIsOpen] = React.useState<boolean>(false)
  const [activeIndex, setActiveIndex] = React.useState<number>(1)
  return (
    <div>
      <Label htmlFor="id--inline-tag-search" />
      {/* Disabling these a11y linting errors because there is an IconButton that mitigates these concerns. The onClick here is just an additional layer. */}
      {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,
    jsx-a11y/no-static-element-interactions */}
      <div className=" flex rounded-default border-solid gap-6 border-red-300">
        <div className="grow">
          <TagList />
        </div>
        <ClearButton />
        <ToggleButton
          aria-expanded={true}
          onClick={() => {
            setIsOpen(!isOpen)
          }}
        />
      </div>
      <div id="id--combo-desc">I am a descriptions!</div>
      <div className="bg-red-100" id="id--error-message" data-section="error">
        I am an erar! RAWR!
      </div>
      <Popover data-section="popover" className=" border-solid border-blue-300">
        {isOpen && (
          <>
            <div className="flex w-full">
              <input
                id="id--inline-tag-search"
                className="grow m-2"
                // type="search"
                aria-controls="id--all-options"
                placeholder="🔍"
                aria-activedescendant={`id--option-${activeIndex}`}
                onKeyDown={e => {
                  if (e.key === "ArrowDown") {
                    e.preventDefault()
                    setActiveIndex(activeIndex + 1)
                  }
                  if (e.key === "ArrowUp") {
                    e.preventDefault()
                    setActiveIndex(activeIndex - 1)
                  }
                  if (e.key === "Enter") {
                    const activeDesc = document.getElementById(
                      `id--option-${activeIndex}`
                    ) as HTMLFormElement

                    if (activeDesc) {
                      activeDesc.checked = !activeDesc.checked
                    }
                  }
                }}
                aria-owns="id--all-options"
              />
              <ClearSearchInputButton />
            </div>
            <Options />
          </>
        )}
      </Popover>
    </div>
  )
}

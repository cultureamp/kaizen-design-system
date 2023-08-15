import React from "react"
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
      data-section="options container"
      aria-describedby="id--options-desc"
    >
      <span id="id--options-desc" aria-hidden="true">
        3 options total
      </span>
      <div className=" flex focus-within:bg-blue-200" data-section="option">
        <label className="flex w-full gap-6 items-start">
          <input type="checkbox" />
          <div className="flex flex-col">
            <span className=" font-weight-paragraph-bold">Option 1</span>
            <span className=" ">lorem ipsum</span>
          </div>
        </label>
      </div>
      <div className=" flex focus-within:bg-blue-200" data-section="option">
        <label className="flex w-full gap-6 items-start">
          <input type="checkbox" />
          <div className="flex flex-col">
            <span className=" font-weight-paragraph-bold">Option 2</span>
            <span className=" ">lorem ipsum</span>
          </div>
        </label>
      </div>
      <div className=" flex focus-within:bg-blue-200" data-section="option">
        <label className="flex w-full gap-6 items-start">
          <input type="checkbox" />
          <div className="flex flex-col">
            <span className=" font-weight-paragraph-bold">Option 3</span>
            <span className=" ">lorem ipsum</span>
          </div>
        </label>
      </div>
    </fieldset>
  </>
)

{
  /* TODO: validate if the label can be separate as htmlFor  */
}
const GroupOptions = (): JSX.Element => (
  <fieldset>
    <span id="id--group-desc" aria-live="assertive">
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

const Tags = (): JSX.Element => (
  // role=list" gets around safari jank
  // eslint-disable-next-line
  <ul
    className=" flex gap-6 list-none p-0 m-0"
    data-section="tags"
    id="id--selected-options"
    aria-relevant="additions removals"
    role="list"
    // TODO: aria-label would be constructed from its children
    aria-label="Selected options: Tag 1, Tag 2, Tag 3"
    aria-live="assertive"
  >
    <li data-section="tag" className="border-solid border-green-300">
      Tag 1{/* would be constructed by map */}
      <button aria-label="Remove option - Tag 1" type="button">
        X
      </button>
    </li>
    <li data-section="tag" className="border-solid border-green-300">
      Tag 2
      <button type="button" aria-label="Remove option - Tag 2">
        X
      </button>
    </li>
    <li data-section="tag" className="border-solid border-green-300">
      Tag 3
      <button type="button" aria-label="Remove option - Tag 3">
        X
      </button>
    </li>
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

const ToggleButton = (props: any): JSX.Element => (
  <button
    {...props}
    aria-label={`${props["aria-expanded"] ? "Close" : "Open"} menu: Coffee"`}
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
    // TODO: tie the tags to the a11y label
    type="text"
  />
)

const Popover = (props: any): JSX.Element => (
  <div
    id="id--popper"
    role="dialog"
    aria-modal="true"
    className=" border-solid border-blue-300"
  >
    {props.children}
  </div>
)

export const SearchOutside = (): JSX.Element => (
  <div>
    <Label htmlFor="id--combo-1" />
    <div
      className=" flex border-solid border-red-300"
      data-section="combobox container"
    >
      <Tags />
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
)

export const SearchAndTagsOutside = (): JSX.Element => (
  <div>
    <Label htmlFor="id--combo-1" />
    <Tags />
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

export const SearchInside = (): JSX.Element => (
  <div>
    <div
      data-section="combobox container"
      className=" flex border-solid border-red-300"
    >
      <Tags />
      <ClearButton />
      <ToggleButton aria-expanded={true} />
    </div>
    <div id="id--combo-desc">I am a descriptions!</div>
    <div id="id--error-message" data-section="error">
      I am an erar! RAWR!
    </div>
    <Popover data-section="popover" className=" border-solid border-blue-300">
      <input data-section="search input / combobox" type="text" />
      <Options />
    </Popover>
  </div>
)

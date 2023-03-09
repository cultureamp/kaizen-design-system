import React, { useState } from "react"
import { ComponentMeta, ComponentStory } from "@storybook/react"
import { Button } from "@kaizen/button"
import { Dropzone } from "../Dropzone"
import { DEFAULT_MAX_FILE_SIZE_40KB } from "../constants"

export default {
  title: "Components/Dropzone",
  component: Dropzone,
  parameters: {
    controls: { expanded: true },
  },
} as ComponentMeta<typeof Dropzone>

export const DefaultStory: ComponentStory<typeof Dropzone> = () => {
  const [enableFileUpload, setEnableFileUpload] = useState<boolean>(false)
  return <Dropzone setEnableFileUpload={setEnableFileUpload} />
}
DefaultStory.storyName = "Dropzone"

export const ModifiedMaxFileSize: ComponentStory<typeof Dropzone> = ({ maxFileSize }) => {
  const [enableFileUpload, setEnableFileUpload] = useState<boolean>(false)
  return <Dropzone maxFileSize={maxFileSize} setEnableFileUpload={setEnableFileUpload} />
}

ModifiedMaxFileSize.parameters = {
  docs: {
    description: {
      story: "By default the `Dropzone` component has a `maxFileSize` of `40kb`. This value can be altered and the error messages will related the updated `maxFileSize`",
    },
  },
}
ModifiedMaxFileSize.args = {
  maxFileSize: 100000
}

export const ParentContainer: ComponentStory<typeof Dropzone> = () => {
  const [enableFileUpload, setEnableFileUpload] = useState<boolean>(false)
  return (
    <div>
      <Dropzone maxFileSize={DEFAULT_MAX_FILE_SIZE_40KB} setEnableFileUpload={setEnableFileUpload} />
      <Button
        label="Submit"
        disabled={!enableFileUpload}
        primary
      />
      <code className="bg-gray-300 mt-8 py-6 px-12 block rounded-default">
        <small>{`Parent prop enableFileUpload: ${enableFileUpload}`}</small>
      </code>
    </div>
  )
}

ParentContainer.parameters = {
  docs: {
    description: {
      story: "It is required that a piece of state is passed down into the component to allow for the `Dropzone` component determine whether the upload can proceed.",
    },
  },
}

export const DropzoneContainerStyles: ComponentStory<typeof Dropzone> = ({ className }) => {
  const [enableFileUpload, setEnableFileUpload] = useState<boolean>(false)
  return (
    <div>
      <Dropzone maxFileSize={DEFAULT_MAX_FILE_SIZE_40KB} setEnableFileUpload={setEnableFileUpload} className={className} />
      <div className="flex">
        <Button
          label="Cancel"
          secondary
          classNameOverride="!mr-8"
        />
        <Button
          label="Upload"
          disabled={!enableFileUpload}
          primary
        />
      </div>
    </div>
  )
}

DropzoneContainerStyles.parameters = {
  docs: {
    description: {
      story: "Tailwind classes can be applied to the `Dropzone` component container for additional styling.",
    },
  },
}
DropzoneContainerStyles.args = {
  className: "border-solid border-grey-800 rounded-default mt-48 mb-8 p-24",
}

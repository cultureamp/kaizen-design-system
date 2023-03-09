/* eslint-disable no-console */
import React, { Dispatch, SetStateAction, useEffect, useState } from "react"
import classNames from "classnames"
import { useDropzone, FileRejection, DropzoneOptions } from "react-dropzone"
import { ACCEPTED_FILE_TYPES, DEFAULT_MAX_FILE_SIZE_40KB } from "./constants"
import { DefaultMessage } from "./sub-components/DefaultMessage/DefaultMessage"
import { DropzoneErrors } from "./sub-components/DropzoneError/DropzoneError"
import { DropzoneIcon } from "./sub-components/DropzoneIcon/DropzoneIcon"
import { OnDragMessage } from "./sub-components/OnDragMessage/OnDragMessage"
import { SelectedFileMessage } from "./sub-components/SelectedFileMessage/SelectedFileMessage"

type DropzoneProps = {
  /**
   * The setter function that allows a piece of state to be sent back up to the parent component.
   * This will be useful for disabling buttons within a [workflow](https://cultureamp.design/guidelines/workflow/) or a submit button within a form.
   */
  setEnableFileUpload: Dispatch<SetStateAction<boolean>>;

  /** this unit is in bytes: defaults to `40000` = `40kb` */
  maxFileSize?: number;

  /** Apply tailwind classnames which will be applied to the container */
  className?: string;
}

export const Dropzone = ({ setEnableFileUpload, maxFileSize, className }: DropzoneProps): JSX.Element => {
  const [selectedFileName, setSelectedFileName] = useState<string>("")
  const [dropzoneErrors, setDropzoneErrors] = useState<FileRejection[]>()

  const defaultConfigurationOptions: DropzoneOptions = {
    noClick: true,
    noKeyboard: true,
    multiple: false,
    maxFiles: 1,
    accept: {
      "application/type": ACCEPTED_FILE_TYPES,
    },
    onDragEnter: () => {
      setSelectedFileName("")
    },
    onDropAccepted(files, event) {
      setSelectedFileName(files[0].name || "")
      setDropzoneErrors(undefined)
    },
    onError(err) {
      console.error("onError", err);
    },
    onDrop(acceptedFiles, fileRejections, event) {
      console.log("onDrop", acceptedFiles, fileRejections, event);
    },
    onDropRejected(fileRejections, event) {
      console.warn("onDropRejected", fileRejections, event);
      setDropzoneErrors(fileRejections)
    },
  }

  /**
   * Merge default config options with user config options
   * in the future we can add more config options
   */
  const maxSize = maxFileSize ? maxFileSize : DEFAULT_MAX_FILE_SIZE_40KB
  /** prevent an empty file from being uploaded */
  const minSize = 1000
  const options: DropzoneOptions = {
    ...defaultConfigurationOptions,
    maxSize,
    minSize
  }

  /** initialise the dropzone hook */
  const { open, isDragActive, acceptedFiles, getRootProps, getInputProps, } = useDropzone(options)

  /**
   * Set the parent `enableFileUpload` state to allow the parent component to update its UI
   * Note: this logic will change when we allow multiple files in the future
   */
  useEffect(() => {
    const hasAcceptedFile = acceptedFiles.length >= 1
    if (hasAcceptedFile) {
      setEnableFileUpload(true)
    } else {
      setEnableFileUpload(false)
    }
  }, [acceptedFiles])

  return (
    <div className={classNames(className)}>
      <div
        className={classNames(
          {
            "rounded-default": true,
            "border-w-default border-dashed border-gray-400": true,
            "transition-colors": true,
            "text-body text-center text-purple-800 transition-colors": true,
            "w-100 mb-4": true,
            "!border-solid !border-blue-500 !bg-blue-100": isDragActive,
          }
        )}
        {...getRootProps()}
      >
        <div className="flex items-center justify-center h-[120px] px-24 py-32">
          <input type="file" {...getInputProps()} />
          <div>
            <DropzoneIcon fileName={selectedFileName} isDragActive={isDragActive} />
            {isDragActive && <OnDragMessage />}
            {selectedFileName && <SelectedFileMessage fileName={selectedFileName} handleOpenDialog={open} />}
            {!isDragActive && !selectedFileName && <DefaultMessage handleOpenDialog={open} />}
          </div>
        </div>
      </div>
      {dropzoneErrors && <DropzoneErrors dropzoneErrors={dropzoneErrors} acceptedFileTypes={ACCEPTED_FILE_TYPES} maxFileSize={maxSize} minFileSize={minSize} />}
    </div>
  )
}

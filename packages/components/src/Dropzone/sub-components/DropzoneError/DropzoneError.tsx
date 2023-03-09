import React from "react"
import { ErrorCode, FileError, FileRejection } from "react-dropzone";
import { InlineNotification } from "@kaizen/notification";
import { getKaizenDropzoneError, prettifyErrorCode } from "../../utils";

export const DropzoneError = ({ code, message }: FileError): JSX.Element => {
  /**  updating this specific error code because the language is awkward. Default code from react-dropzone is 'file-invalid-type'. The other error codes are fine. */
  const errorCode = code === ErrorCode.FileInvalidType ? "incorrect-file-type" : code
  const notificationTitle = prettifyErrorCode(errorCode)

  return (
    <InlineNotification
      type="negative"
      title={notificationTitle}
      persistent
      noBottomMargin={true}
    >
      <span
        tabIndex={0}
        role="alert"
        aria-live="polite"
        data-automation-id={""}
      >
        {message}
      </span>
    </InlineNotification>
  )
}

export interface DropzoneErrorsProps {
  acceptedFileTypes: string | string[],
  maxFileSize: number,
  /** May implement this in the future. Adding now to cover all four error code provided from react-dropzone library */
  minFileSize: number,
  dropzoneErrors: FileRejection[]
}

export const DropzoneErrors = ({
  acceptedFileTypes,
  maxFileSize,
  minFileSize,
  dropzoneErrors
}: DropzoneErrorsProps): JSX.Element => (
  <span>
    {dropzoneErrors.map(dropzoneError => {
      const { errors } = dropzoneError
      return errors.map((error: FileError) => {
        const errorMessage = getKaizenDropzoneError({
          errorCode: error.code as ErrorCode,
          acceptedFileTypes,
          maxFileSize,
          minFileSize
        })
        return (
          <span key={`dropzone-error-${error.code}`} className={"block mb-4"}>
            <DropzoneError code={errorMessage.code} message={errorMessage.message} />
          </span>)
      })
    })}
  </span>
)

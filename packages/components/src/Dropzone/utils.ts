import { ErrorCode, FileError } from "react-dropzone"
import { DropzoneErrorsProps } from "./sub-components/DropzoneError/DropzoneError"

export const trunicateFilename = (
  filename: string,
  maxCharacterLimit: number = 50
): string => {
  const fileNameArray = filename.split(".")
  const fileExtension = fileNameArray[fileNameArray.length - 1]
  const name = filename.slice(0, -fileExtension.length)
  const shortenedFileName = name
    .slice(0, maxCharacterLimit)
    /**
     * using brackets here to prevent user confusion with the file extension '.'
     * this: filename[...].xlsx
     * instead of: filename....xlxs
     */
    .padEnd(maxCharacterLimit + 5, "[...]")

  return `${shortenedFileName}.${fileExtension}`
}

export const prettifyErrorCode = (errorCode: ErrorCode | string): string => {
  let title: string = ""
  /** Capitalise first letter */
  title = errorCode.charAt(0).toUpperCase() + errorCode.slice(1)
  /** Replace all hyphens with spaces */
  title = title.replace(/-/g, " ")
  return title
}

export const printAcceptedFileTypes = (
  fileTypes: string | string[]
): string => {
  const isArrayOfStrings = Array.isArray(fileTypes)
  const hasMultipleFileTypes = fileTypes.length > 1
  return isArrayOfStrings
    ? hasMultipleFileTypes
      ? fileTypes.join(", ")
      : fileTypes[0]
    : fileTypes
}

/** from this resource: https://web.archive.org/web/20120507054320/http://codeaid.net/javascript/convert-size-in-bytes-to-human-readable-format-(javascript) */
const prettifyBytes = (bytes: number, decimals: number = 2): string => {
  if (!+bytes) return "0 Bytes"

  const k = 1000
  const dm = decimals < 0 ? 0 : decimals
  const sizes = ["Bytes", "kb", "mb", "gb"]

  const i = Math.floor(Math.log(bytes) / Math.log(k))

  return `${parseFloat((bytes / Math.pow(k, i)).toFixed(dm))}${sizes[i]}`
}

interface GetKaizenDropzoneError
  extends Omit<DropzoneErrorsProps, "dropzoneErrors"> {
  errorCode: ErrorCode
}
export const getKaizenDropzoneError = ({
  acceptedFileTypes,
  maxFileSize,
  minFileSize,
  errorCode,
}: GetKaizenDropzoneError): FileError => {
  switch (errorCode) {
    case ErrorCode.FileInvalidType:
      return {
        code: "incorrect-file-type",
        message: `File type must be ${printAcceptedFileTypes(
          acceptedFileTypes
        )}`,
      }
    case ErrorCode.FileTooLarge:
      return {
        code: "file-size-too-large",
        message: `File size is too large. Please select a file that's less than ${prettifyBytes(
          maxFileSize
        )}`,
      }
    case ErrorCode.FileTooSmall:
      return {
        code: "file-size-too-small",
        message: `File size is too small. Please select a file that's greater than ${prettifyBytes(
          minFileSize
        )}`,
      }
    case ErrorCode.TooManyFiles:
      return {
        code: "too-many-files",
        /** Open to change error message when the component accepts multiple files */
        message: "Too many files have been selected. Please select one.",
      }
    default:
      return {
        code: "unknown-error",
        message: "Unknown error",
      }
  }
}

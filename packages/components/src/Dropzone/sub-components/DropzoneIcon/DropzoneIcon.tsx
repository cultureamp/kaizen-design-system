import React from "react"
import classNames from "classnames"
import { Icon } from "@kaizen/component-library"
import uploadFileSvgIcon from "@kaizen/component-library/icons/import.icon.svg"
import { AcceptedFileIcon } from "../SelectedFileMessage/SelectedFileMessage"

const UploadFileIcon = ({ isHover = false }: { isHover?: boolean }): JSX.Element => (
  <span className={classNames({
    "inline-block text-purple-800/70 mb-8 transition-transform -translate-y-0": true,
    "!text-blue-500 !-translate-y-6": isHover
  })}>
    <Icon
      height={20}
      width={20}
      icon={uploadFileSvgIcon}
      title="Upload File"
      role="presentation"
      inheritSize={true}
    />
  </span>
)

export const DropzoneIcon = ({ isDragActive, fileName }: { isDragActive: boolean, fileName: string | null }): JSX.Element => {
  if (fileName) return <AcceptedFileIcon />
  return <UploadFileIcon isHover={isDragActive} />
}

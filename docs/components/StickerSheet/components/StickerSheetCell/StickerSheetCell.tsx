import React, { HTMLAttributes } from 'react'

export type StickerSheetCellProps = {
  children: React.ReactNode
} & HTMLAttributes<HTMLDivElement>

export const StickerSheetCell = ({
  children,
  ...restProps
}: StickerSheetCellProps): JSX.Element => <div {...restProps}>{children}</div>

StickerSheetCell.displayName = 'StickerSheet.Cell'

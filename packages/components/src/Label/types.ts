export const InlineLabelTypes = ["checkbox", "radio", "toggle"] as const
export const BlockLabelTypes = ["text"] as const
export const LabelTypes = [...InlineLabelTypes, ...BlockLabelTypes] as const

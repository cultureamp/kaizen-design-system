// Since we can't add a deprecation flag on a * export
import { Tooltip as TooltipV1, TooltipProps as TooltipPropsV1 } from './Tooltip'

/** * @deprecated upgrade to Future version */
export const Tooltip = TooltipV1
/** * @deprecated upgrade to Future version */
export type TooltipProps = TooltipPropsV1

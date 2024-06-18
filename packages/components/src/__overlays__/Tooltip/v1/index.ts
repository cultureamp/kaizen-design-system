// Since we can't add a deprecation flag on a * export
import { Tooltip as TooltipV1, TooltipProps as TooltipPropsV1 } from "./Tooltip"

/** * @deprecated use v2 or upgrade to v3 for the latest release */
export const Tooltip = TooltipV1
/** * @deprecated use v2 or upgrade to v3 for the latest release */
export type TooltipProps = TooltipPropsV1

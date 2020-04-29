import * as React from "react";
interface Props {
    readonly animated?: boolean;
    readonly centred?: boolean;
    readonly reversedDefault?: boolean;
    readonly reversedOcean?: boolean;
    readonly tall?: boolean;
    readonly inheritBaseline?: boolean;
    readonly inline?: boolean;
    readonly noBottomMargin?: boolean;
    readonly width?: number;
}
declare type LoadingPlaceholder = React.FunctionComponent<Props>;
declare const LoadingPlaceholder: LoadingPlaceholder;
export default LoadingPlaceholder;

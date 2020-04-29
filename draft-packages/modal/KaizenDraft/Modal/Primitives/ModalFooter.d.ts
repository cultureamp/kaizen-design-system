import * as React from "react";
interface Props {
    readonly unpadded?: boolean;
    readonly actions: Array<{
        label: string;
        action: (event: MouseEvent) => any;
        icon?: React.SVGAttributes<SVGSymbolElement>;
        disabled?: boolean;
    }>;
    readonly appearance?: "primary" | "destructive";
}
declare type ModalFooter = React.FunctionComponent<Props>;
declare const ModalFooter: ModalFooter;
export default ModalFooter;

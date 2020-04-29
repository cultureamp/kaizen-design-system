import * as React from "react";
interface Props {
    readonly leftContent?: React.ReactNode;
    readonly children: React.ReactNode;
    readonly title?: React.ReactNode;
    readonly image?: React.ReactNode;
    readonly badge?: React.ReactNode;
    readonly fullWidth?: boolean;
    readonly minHeight?: string;
}
declare type HeroCard = React.FunctionComponent<Props>;
declare const HeroCard: HeroCard;
export default HeroCard;

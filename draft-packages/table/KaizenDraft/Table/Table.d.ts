import * as React from "react";
import { CheckedStatus } from "../Form";
declare type TableContainer = React.FunctionComponent;
export declare const TableContainer: TableContainer;
declare type TableHeader = React.FunctionComponent;
export declare const TableHeader: TableHeader;
declare type TableHeaderRow = React.FunctionComponent;
export declare const TableHeaderRow: TableHeaderRow;
/**
 * @param width value between 1 and 0, to be calculated as a percentage
 * @param flex CSS flex shorthand as a string. Be sure to specify the flex grow,
 *        shrink, and basis, due to IE11 compatibility. eg. use "1 1 auto"
 *        instead of just "1".
 */
declare type TableHeaderRowCell = React.FunctionComponent<{
    labelText: string;
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => any;
    width?: number;
    flex?: string;
    icon?: React.SVGAttributes<SVGSymbolElement>;
    checkable?: boolean;
    checkedStatus?: CheckedStatus;
    onCheck?: (event: React.ChangeEvent<HTMLInputElement>) => any;
    active?: boolean;
}>;
export declare const TableHeaderRowCell: TableHeaderRowCell;
declare type ButtonClickEvent = (e: React.MouseEvent<HTMLButtonElement>) => void;
declare type AnchorClickEvent = (e: React.MouseEvent<HTMLAnchorElement>) => void;
/**
 * As the Card examples in Storybook take a TableRow,
 * I opted to give the child the role="row" tag. That being
 * said, while TableHeader has a role="rowgroup" as given
 * in an example on the accessibility docs, I couldn't justify
 * adding the same here as all rows look to be wrapped in the
 * TableCard.
 *
 * It may mean that the consumer needs to add their own container
 * around with the role="row". We could also just add it as a
 * very simple component similar to TableHeader.
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/Table_Role
 */
declare type TableCard = React.FunctionComponent<{
    onClick?: ButtonClickEvent | AnchorClickEvent;
    expanded?: boolean;
    expandedStyle?: "well" | "popout";
    href?: string;
    forceHoverState?: boolean;
}>;
export declare const TableCard: TableCard;
/**
 * Aria roles like aria-rowindex can be added from
 * the component consumer.
 *
 * @param {*} { children, ...otherProps }
 */
declare type TableRow = React.FunctionComponent;
export declare const TableRow: TableRow;
/**
 * @param width value between 1 and 0, to be calculated as a percentage
 * @param flex CSS flex shorthand as a string. Be sure to specify the flex grow,
 *        shrink, and basis, due to IE11 compatibility. eg. use "1 1 auto"
 *        instead of just "1".
 */
declare type TableRowCell = React.FunctionComponent<{
    width?: number;
    flex?: string;
    href?: string;
}>;
export declare const TableRowCell: TableRowCell;
export {};

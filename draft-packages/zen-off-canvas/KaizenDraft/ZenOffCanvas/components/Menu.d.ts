/// <reference types="react" />
import { MenuProps } from "@kaizen/component-library/draft/Kaizen/ZenNavigationBar/types";
declare type Props = {
    section: string;
    link: MenuProps;
};
declare const Menu: ({ link, section }: Props) => JSX.Element;
export default Menu;

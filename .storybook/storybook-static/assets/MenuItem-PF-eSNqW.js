import{r as l,R as t}from"./index-CTjT7uj6.js";import{R}from"./index-9r8iugjR.js";import{c as q}from"./index-CCQ3W5xA.js";import{u as L}from"./usePopper-D4ykrdaR.js";import{F as N}from"./Combination-DFaMps7A.js";const C="_menuContainer_qxo3c_5",D="_defaultWidth_qxo3c_21",T={menuContainer:C,defaultWidth:D},b=({children:d,referenceElement:e,id:p,hideMenuDropdown:n,autoHide:a="on",align:m="left",width:i="default"})=>{const[o,r]=l.useState(null),{styles:s,attributes:u}=L(e,o,{modifiers:[{name:"offset",options:{offset:[0,6]}},{name:"preventOverflow",options:{padding:8}}],placement:m==="left"?"bottom-start":"bottom-end"}),f=l.useCallback(c=>{o&&c.target instanceof Node&&!o.contains(c.target)&&e!==c.target&&!(e!=null&&e.contains(c.target))&&n()},[o,e,n]),y=l.useCallback(()=>{n()},[n]),g=()=>{a==="on"&&n()};return l.useEffect(()=>(window.addEventListener("resize",y,!1),()=>{window.removeEventListener("resize",y,!1)}),[y]),l.useEffect(()=>(a!=="off"&&document.addEventListener("click",f,!0),()=>{a!=="off"&&document.removeEventListener("click",f,!0)}),[a,f]),t.createElement(N,{enabled:!!e,scrollLock:!1,noIsolation:!0,shards:e?[e]:void 0,onEscapeKey:n,returnFocus:()=>(e==null||e.focus(),!1)},t.createElement("div",{id:p,ref:r,...u.popper,style:s.popper,className:q(T.menuContainer,i=="default"&&T.defaultWidth),onClick:g},d))};b.displayName="MenuDropdown";b.__docgenInfo={description:"",methods:[],displayName:"MenuDropdown",props:{id:{required:!1,tsType:{name:"string"},description:""},hideMenuDropdown:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},position:{required:!1,tsType:{name:"union",raw:`{
  top: number
  bottom: number
  left: number
  right: number
} | null`,elements:[{name:"signature",type:"object",raw:`{
  top: number
  bottom: number
  left: number
  right: number
}`,signature:{properties:[{key:"top",value:{name:"number",required:!0}},{key:"bottom",value:{name:"number",required:!0}},{key:"left",value:{name:"number",required:!0}},{key:"right",value:{name:"number",required:!0}}]}},{name:"null"}]},description:""},align:{required:!1,tsType:{name:"union",raw:'"left" | "right"',elements:[{name:"literal",value:'"left"'},{name:"literal",value:'"right"'}]},description:"",defaultValue:{value:'"left"',computed:!1}},width:{required:!1,tsType:{name:"union",raw:'"default" | "contain"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"contain"'}]},description:"",defaultValue:{value:'"default"',computed:!1}},autoHide:{required:!1,tsType:{name:"union",raw:'"on" | "outside-click-only" | "off"',elements:[{name:"literal",value:'"on"'},{name:"literal",value:'"outside-click-only"'},{name:"literal",value:'"off"'}]},description:"",defaultValue:{value:'"on"',computed:!1}},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},referenceElement:{required:!0,tsType:{name:"union",raw:"HTMLElement | null",elements:[{name:"HTMLElement"},{name:"null"}]},description:""}}};const S="_buttonWrapper_1asak_1",x={buttonWrapper:S},w=({align:d="left",dropdownWidth:e="default",autoHide:p="on","data-testid":n,dropdownId:a,children:m,portalSelector:i,isMenuVisible:o,toggleMenuDropdown:r,hideMenuDropdown:s,renderButton:u,onClick:f})=>{const[y,g]=l.useState(null),c=l.useRef(null),k=u({onClick:v=>{v.preventDefault(),v.stopPropagation(),r()},onMouseDown:v=>v.preventDefault(),"aria-haspopup":!0,"aria-expanded":o});l.useEffect(()=>{c.current=i?document.querySelector(i):null},[i]),l.useEffect(()=>{i&&!c.current&&console.warn("The portal could not be created using the selector: "+i)},[c,i]);const _=o?t.createElement(b,{referenceElement:y,align:d,hideMenuDropdown:s,width:e,id:a,autoHide:p},m):null;return t.createElement("div",{"data-testid":n,onClick:f},t.createElement("div",{className:x.buttonWrapper,ref:g},k),i&&c.current?R.createPortal(_,c.current):_)};w.displayName="StatelessMenu";w.__docgenInfo={description:"",methods:[],displayName:"StatelessMenu",props:{align:{required:!1,tsType:{name:"union",raw:'"left" | "right"',elements:[{name:"literal",value:'"left"'},{name:"literal",value:'"right"'}]},description:`Whether the menu is to be used on the left or right
side of the viewport. If left, the left of the dropdown
is aligned to the left of the button (and vice versa)
@default "left"`,defaultValue:{value:'"left"',computed:!1}},dropdownWidth:{required:!1,tsType:{name:"union",raw:'"default" | "contain"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"contain"'}]},description:`The width of the dropdown.
"default": a fixed width of 248px
"contain": contain the children's width (will be same width as children)
@default "default"`,defaultValue:{value:'"default"',computed:!1}},automationId:{required:!1,tsType:{name:"string"},description:"@deprecated use data-testid instead"},"data-testid":{required:!1,tsType:{name:"string"},description:""},dropdownId:{required:!1,tsType:{name:"string"},description:""},autoHide:{required:!1,tsType:{name:"union",raw:'"on" | "outside-click-only" | "off"',elements:[{name:"literal",value:'"on"'},{name:"literal",value:'"outside-click-only"'},{name:"literal",value:'"off"'}]},description:`Determines when the menu should automatically hide.
@default: "on"`,defaultValue:{value:'"on"',computed:!1}},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"The content to appear inside the dropdown when it is open"},portalSelector:{required:!1,tsType:{name:"string"},description:"Render the tooltip inside a react portal, given the CSS selector.\nThis is typically used for instances where the menu is a descendant of an\n`overflow: scroll` or `overflow: hidden` element."},isMenuVisible:{required:!0,tsType:{name:"boolean"},description:""},toggleMenuDropdown:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},hideMenuDropdown:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},renderButton:{required:!0,tsType:{name:"signature",type:"function",raw:`(args: {
  onClick: (e: any) => void
  onMouseDown: (e: any) => void
  "aria-haspopup": boolean
  "aria-expanded": boolean
}) => React.ReactElement`,signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  onClick: (e: any) => void
  onMouseDown: (e: any) => void
  "aria-haspopup": boolean
  "aria-expanded": boolean
}`,signature:{properties:[{key:"onClick",value:{name:"signature",type:"function",raw:"(e: any) => void",signature:{arguments:[{type:{name:"any"},name:"e"}],return:{name:"void"}},required:!0}},{key:"onMouseDown",value:{name:"signature",type:"function",raw:"(e: any) => void",signature:{arguments:[{type:{name:"any"},name:"e"}],return:{name:"void"}},required:!0}},{key:"aria-haspopup",value:{name:"boolean",required:!0}},{key:"aria-expanded",value:{name:"boolean",required:!0}}]}},name:"args"}],return:{name:"ReactReactElement",raw:"React.ReactElement"}}},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: SyntheticEvent) => void",signature:{arguments:[{type:{name:"SyntheticEvent"},name:"event"}],return:{name:"void"}}},description:""}}};const I=({button:d,menuVisible:e=!1,...p})=>{const[n,a]=l.useState(e),m=()=>{a(!n)},i=()=>{a(!1)};return t.createElement(w,{...p,isMenuVisible:n,toggleMenuDropdown:m,hideMenuDropdown:i,renderButton:o=>t.cloneElement(d,{...o,onClick:r=>{var s,u;o.onClick(r),(u=(s=d.props).onClick)==null||u.call(s,r)},onMouseDown:r=>{var s,u;o.onMouseDown(r),(u=(s=d.props).onMouseDown)==null||u.call(s,r)}})})};I.displayName="Menu";I.__docgenInfo={description:`{@link https://cultureamp.atlassian.net/wiki/spaces/DesignSystem/pages/3082059782/Menu Guidance} |
{@link https://cultureamp.design/?path=/docs/components-menu--docs Storybook}`,methods:[],displayName:"Menu",props:{menuVisible:{required:!1,tsType:{name:"boolean"},description:`The initial state of the dropdown. Once initalised, further changes to this
prop will not have any affect, as the state is handled internally to the component.
@default: false`,defaultValue:{value:"false",computed:!1}},button:{required:!0,tsType:{name:"ReactReactElement",raw:"React.ReactElement<ButtonPropsWithOptionalAria>",elements:[{name:"intersection",raw:`ButtonProps & {
  "aria-haspopup"?: boolean
  "aria-expanded"?: boolean
}`,elements:[{name:"ButtonProps"},{name:"signature",type:"object",raw:`{
  "aria-haspopup"?: boolean
  "aria-expanded"?: boolean
}`,signature:{properties:[{key:"aria-haspopup",value:{name:"boolean",required:!1}},{key:"aria-expanded",value:{name:"boolean",required:!1}}]}}]}]},description:"Takes any ReactElement with button props but is most commonly used with a Kaizen `<Button>` or `<IconButton>` component."}}};const B="_menuSection_1nlpo_2",H={menuSection:B},E=d=>{const{heading:e,children:p,...n}=d,a=l.useId(),m=(e==null?void 0:e.props.id)??a;return t.createElement(t.Fragment,null,e&&l.cloneElement(e,{id:m}),t.createElement("ul",{className:H.menuSection,"aria-labelledby":e?m:void 0,...n},p))};E.displayName="MenuList";E.__docgenInfo={description:"",methods:[],displayName:"MenuList",props:{heading:{required:!1,tsType:{name:"JSX.Element"},description:""},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const W="_menuListItem_17j6a_4",j="_menuItem_17j6a_9",V="_menuItem__Icon_17j6a_36",P="_menuItem__Label_17j6a_82",h={menuListItem:W,menuItem:j,"menuItem--disabled":"_menuItem--disabled_17j6a_32",menuItem__Icon:V,"menuItem--destructive":"_menuItem--destructive_17j6a_39","menuItem--active":"_menuItem--active_17j6a_63",menuItem__Label:P},M=({label:d,icon:e,destructive:p,disabled:n,onClick:a,href:m,target:i,isActive:o,"data-testid":r,id:s})=>{const u=t.createElement("span",{className:h.menuItem__Label},d),f=e&&t.createElement("span",{className:h.menuItem__Icon},e),y=q(h.menuItem,p&&h["menuItem--destructive"],n&&h["menuItem--disabled"],o&&h["menuItem--active"]);return n?t.createElement("li",{className:h.menuListItem},t.createElement("button",{id:s,type:"button",disabled:!0,className:y,"data-testid":r},f,u)):m?t.createElement("li",{className:h.menuListItem},t.createElement("a",{id:s,href:m,onClick:a,className:y,target:i,"aria-current":o?"page":void 0,"data-testid":r},f,u)):t.createElement("li",{className:h.menuListItem},t.createElement("button",{id:s,type:"button",onClick:a,className:y,"data-testid":r},f,u))};M.displayName="MenuItem";M.__docgenInfo={description:"",methods:[],displayName:"MenuItem",props:{label:{required:!0,tsType:{name:"string"},description:""},href:{required:!1,tsType:{name:"string"},description:""},target:{required:!1,tsType:{name:"string"},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => void",signature:{arguments:[{type:{name:"ReactMouseEvent",raw:"React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>",elements:[{name:"union",raw:"HTMLButtonElement | HTMLAnchorElement",elements:[{name:"HTMLButtonElement"},{name:"HTMLAnchorElement"}]}]},name:"e"}],return:{name:"void"}}},description:""},icon:{required:!1,tsType:{name:"JSX.Element"},description:""},destructive:{required:!1,tsType:{name:"boolean"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},automationId:{required:!1,tsType:{name:"string"},description:"@deprecated use data-testid"},isActive:{required:!1,tsType:{name:"boolean"},description:`Not recommended - this was added for use in exceptional cases like the navigation bar, which needs
to highlight which page the user is currently on. By design, Menus don't have active items,
because they are supposed to be a bunch of links/actions.`},"data-testid":{required:!1,tsType:{name:"string"},description:""},id:{required:!1,tsType:{name:"string"},description:""}}};export{I as M,M as a,E as b};

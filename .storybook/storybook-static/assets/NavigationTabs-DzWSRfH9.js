import{R as t,r as I}from"./index-CTjT7uj6.js";import{c}from"./index-CCQ3W5xA.js";import{H as W}from"./Heading-Y5F8SWRW.js";import{H as pe,A as ge}from"./StarOnIcon-BgZ_JTEb.js";import{A as ve}from"./ArrowRightIcon-CtsqbiFB.js";import{u as be}from"./useMediaQueries-C_upvC1L.js";import{C as _}from"./ChevronDownIcon-prLLyjG_.js";import{M as U}from"./MeatballsIcon-w9tBPyZh.js";import{a as Z,M as E,b as w}from"./MenuItem-PF-eSNqW.js";import{B as T}from"./Button-DDkdQqLR.js";import{I as J}from"./IconButton-DH93ECWt.js";import{C as q}from"./ChevronUpIcon-D9pr3Qd6.js";import{F as ke}from"./Combination-DFaMps7A.js";import{M as ye}from"./MenuHeading-SHzvnKfl.js";import{S as G}from"./Select-MdlLELGr.js";import{T as Te}from"./Tag-B8l7-tRz.js";import{A as fe}from"./Avatar-BrPd9Rrx.js";const K="title-block-secondary-menu",$="title-block-other-actions",P=e=>"menuItems"in e,Q=["education","admin"],f=e=>e===void 0?!0:!Q.includes(e),Y=e=>e.reduce((n,a)=>{if("menuItems"in a)return[...n,...a.menuItems];if("component"in a)return[...n,a];const o={label:a.label,icon:a.icon,destructive:a.destructive,disabled:a.disabled};return"onClick"in a?[...n,{...o,onClick:a.onClick}]:"href"in a?[...n,{...o,href:a.href}]:n},new Array),we=(e,n)=>{let a;e?a=e?Y(e):[]:a=[];const o=n||[];return a.concat(o)},Be="_menuListItem_1kvjh_5",_e="_menuItem_1kvjh_9",Ee="_menuItem__Icon_1kvjh_36",Pe="_menuItem__Label_1kvjh_82",v={menuListItem:Be,menuItem:_e,"menuItem--disabled":"_menuItem--disabled_1kvjh_32",menuItem__Icon:Ee,"menuItem--destructive":"_menuItem--destructive_1kvjh_39","menuItem--active":"_menuItem--active_1kvjh_63",menuItem__Label:Pe},g=e=>{const n=c(v.menuItem,v.destructive&&v["menuItem--destructive"],v.disabled&&v["menuItem--disabled"],v.isActive&&v["menuItem--active"]);if("component"in e){const{component:a,label:o,icon:i,...m}=e,s=t.createElement("span",{className:v.menuItem__Label},o),u=i&&t.createElement("span",{className:v.menuItem__Icon},i);return t.createElement("li",{className:v.menuListItem},t.createElement(a,{...m,className:n},u,s))}return t.createElement(Z,{...e})};g.displayName="TitleBlockMenuItem";g.__docgenInfo={description:"",methods:[],displayName:"TitleBlockMenuItem"};const he="_toolbar_fgj5i_16",Ne="_toolbarItem_fgj5i_20",Ce="_noGap_fgj5i_28",S={toolbar:he,toolbarItem:Ne,noGap:Ce},h=({items:e,noGap:n=!1,automationId:a})=>!e||e&&e.length===0?t.createElement(t.Fragment,null):t.createElement("div",{className:S.toolbar,"data-automation-id":a,"data-testid":a},e.map(o=>t.createElement("div",{className:c(S.toolbarItem,n&&S.noGap),key:o.key},o.node)));h.displayName="Toolbar";h.__docgenInfo={description:"",methods:[],displayName:"Toolbar",props:{items:{required:!1,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  key: string
  node: React.ReactElement<ButtonProps> | React.ReactElement<MenuProps>
}`,signature:{properties:[{key:"key",value:{name:"string",required:!0}},{key:"node",value:{name:"union",raw:"React.ReactElement<ButtonProps> | React.ReactElement<MenuProps>",elements:[{name:"ReactReactElement",raw:"React.ReactElement<ButtonProps>",elements:[{name:"ButtonProps"}]},{name:"ReactReactElement",raw:"React.ReactElement<MenuProps>",elements:[{name:"MenuProps"}]}],required:!0}}]}}],raw:`Array<{
  key: string
  node: React.ReactElement<ButtonProps> | React.ReactElement<MenuProps>
}>`},description:""},noGap:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},automationId:{required:!1,tsType:{name:"string"},description:""}}};const Ie="_mainActionsContainer_1xwyu_16",qe={mainActionsContainer:Ie},X=({primaryAction:e,defaultAction:n,reversed:a=!1,overflowMenuItems:o,showOverflowMenu:i=!1})=>{let m;if(e&&P(e)){const s=e.menuItems.map((u,d)=>t.createElement(g,{...u,key:`main-action-primary-menu-item-${d}`,"data-automation-id":`main-action-primary-menu-item-${d}`,"data-testid":`main-action-primary-menu-item-${d}`}));m=[...n?[{key:"defaultAction",node:t.createElement(T,{...n,reversed:n.reversed!==void 0?n.reversed:a,"data-automation-id":"title-block-default-action-button","data-testid":"title-block-default-action-button"})}]:[],...e?[{key:"primaryAction",node:t.createElement(E,{align:"right",button:t.createElement(T,{label:e.label,primary:!0,reversed:a,icon:t.createElement(_,{role:"presentation"}),iconPosition:"end","data-automation-id":"title-block-primary-action-button","data-testid":"title-block-primary-action-button",badge:e.badge?{...e.badge,variant:"dark"}:void 0})},t.createElement(w,null,s))}]:[]]}else m=[...n?[{key:"defaultAction",node:t.createElement(T,{...n,reversed:n.reversed!==void 0?n.reversed:a,"data-automation-id":"title-block-default-action-button","data-testid":"title-block-default-action-button"})}]:[],...e?[{key:"primaryAction",node:t.createElement(T,{...e,primary:e.primary!==void 0?e.primary:!0,reversed:e.reversed!==void 0?e.reversed:a,"data-automation-id":"title-block-primary-action-button","data-testid":"title-block-primary-action-button",badge:e.badge?{...e.badge,variant:"dark"}:void 0})}]:[]];return o&&i&&o.length>0&&(m=[{key:"overflowMenu",node:t.createElement(E,{align:"right",button:t.createElement(J,{id:K,label:"Open secondary menu",reversed:a,icon:t.createElement(U,{role:"presentation"})})},t.createElement(w,null,o.map((s,u)=>t.createElement(g,{...s,key:`main-action-overflow-item-menu-item-${u}`}))))},...m]),t.createElement("div",{className:qe.mainActionsContainer},t.createElement(h,{items:m,automationId:"title-block-main-actions-toolbar","data-testid":"title-block-main-actions-toolbar"}))};X.displayName="MainActions";X.__docgenInfo={description:"",methods:[],displayName:"MainActions",props:{primaryAction:{required:!1,tsType:{name:"union",raw:`| (TitleBlockMenuGroup & { badge?: TitleBlockBadgeProps })
| ((TitleBlockButtonProps | TitleBlockCustomButtonProps) & {
    badge?: TitleBlockBadgeProps
  })`,elements:[{name:"unknown"},{name:"unknown"}]},description:""},defaultAction:{required:!1,tsType:{name:"union",raw:`| TitleBlockButtonProps
| TitleBlockCustomButtonProps`,elements:[{name:"intersection",raw:`TitleBlockDistributiveOmit<
  ButtonProps,
  "onClick" | "component"
> & {
  onClick?: (e: any) => void
}`,elements:[{name:"unknown"},{name:"signature",type:"object",raw:`{
  onClick?: (e: any) => void
}`,signature:{properties:[{key:"onClick",value:{name:"signature",type:"function",raw:"(e: any) => void",signature:{arguments:[{type:{name:"any"},name:"e"}],return:{name:"void"}},required:!1}}]}}]},{name:"intersection",raw:`TitleBlockDistributiveOmit<
  TitleBlockButtonProps,
  "component"
> & {
  className?: string
  component: (props: CustomButtonProps) => JSX.Element
}`,elements:[{name:"unknown"},{name:"signature",type:"object",raw:`{
  className?: string
  component: (props: CustomButtonProps) => JSX.Element
}`,signature:{properties:[{key:"className",value:{name:"string",required:!1}},{key:"component",value:{name:"signature",type:"function",raw:"(props: CustomButtonProps) => JSX.Element",signature:{arguments:[{type:{name:"CustomButtonProps"},name:"props"}],return:{name:"JSX.Element"}},required:!0}}]}}]}]},description:""},reversed:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},overflowMenuItems:{required:!1,tsType:{name:"Array",elements:[{name:"union",raw:`| MenuItemProps
| TitleBlockCustomButtonProps`,elements:[{name:"MenuItemProps"},{name:"intersection",raw:`TitleBlockDistributiveOmit<
  TitleBlockButtonProps,
  "component"
> & {
  className?: string
  component: (props: CustomButtonProps) => JSX.Element
}`,elements:[{name:"unknown"},{name:"signature",type:"object",raw:`{
  className?: string
  component: (props: CustomButtonProps) => JSX.Element
}`,signature:{properties:[{key:"className",value:{name:"string",required:!1}},{key:"component",value:{name:"signature",type:"function",raw:"(props: CustomButtonProps) => JSX.Element",signature:{arguments:[{type:{name:"CustomButtonProps"},name:"props"}],return:{name:"JSX.Element"}},required:!0}}]}}]}]}],raw:"TitleBlockMenuItemProps[]"},description:""},showOverflowMenu:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const Se="_mobileActionsContainer_1d0q4_22",Re="_isOpen_1d0q4_39",Ae="_mobileActionsMenuContainer_1d0q4_42",Me="_mobileActionsTopRow_1d0q4_51",Je="_mobileActionsTopRowSingleButton_1d0q4_58",Xe="_drawerHandleIcon_1d0q4_70",Oe="_drawerHandleLabelText_1d0q4_81",xe="_mobileActionsPrimaryLabel_1d0q4_90",Le="_mobileActionsPrimaryButton_1d0q4_107",ze="_mobileActionsExpandButton_1d0q4_108",je="_mobileActionsChevronSquare_1d0q4_189",l={mobileActionsContainer:Se,"slide-up":"_slide-up_1d0q4_1",isOpen:Re,mobileActionsMenuContainer:Ae,mobileActionsTopRow:Me,mobileActionsTopRowSingleButton:Je,drawerHandleIcon:Xe,drawerHandleLabelText:Oe,mobileActionsPrimaryLabel:xe,mobileActionsPrimaryButton:Le,mobileActionsExpandButton:ze,mobileActionsChevronSquare:je},M=e=>"href"in e,ee=e=>"href"in e,De=e=>!("href"in e)&&"onClick"in e||"component"in e,He=(e,n)=>e.filter(a=>n==="link"?M(a):!M(a)),F=(e,n)=>e&&P(e)?He(e.menuItems,n).map((o,i)=>{const m=M(o)?"link":"action";return t.createElement(g,{...o,key:`title-block-mobile-actions-primary-${m}-${i}`,"data-automation-id":`title-block-mobile-actions-primary-${m}-${i}`,"data-testid":`title-block-mobile-actions-primary-${m}-${i}`})}):null,Ve=e=>{if(ee(e))return"component"in e?t.createElement(g,{...e,key:"title-block-mobile-actions-default-link","data-automation-id":"title-block-mobile-actions-default-link","data-testid":"title-block-mobile-actions-default-link"}):t.createElement(Z,{href:e.href,label:e.label,icon:e.icon,disabled:e.disabled,key:"title-block-mobile-actions-default-link","data-automation-id":"title-block-mobile-actions-default-link","data-testid":"title-block-mobile-actions-default-link",id:e.id})},Ge=e=>ee(e)?null:t.createElement(g,{...e,key:"title-block-mobile-actions-default-action","data-automation-id":"title-block-mobile-actions-default-action","data-testid":"title-block-mobile-actions-default-action"}),$e=e=>e?Y(e).map((a,o)=>t.createElement(g,{...a,key:`title-block-mobile-actions-secondary-action-${o}`,"data-testid":"title-block-mobile-actions-secondary-action"})):null,Fe=e=>e.map((n,a)=>t.createElement(g,{...n,key:`title-block-mobile-actions-overflow-menu-item-${a}`,"data-testid":"title-block-mobile-actions-overflow-menu-item"})),We=({primaryAction:e,defaultAction:n,secondaryActions:a,secondaryOverflowMenuItems:o})=>{const i=n&&De(n)||a||o;return t.createElement(t.Fragment,null,t.createElement(w,null,e&&F(e,"link"),n&&Ve(n),e&&F(e,"action")),(n||a||o)&&t.createElement(w,{heading:i&&t.createElement(ye,null,"Other actions")},n&&Ge(n),a&&$e(a),o&&Fe(o)))},R=(e,n,a)=>a==="end"?t.createElement(t.Fragment,null,t.createElement("span",{className:l.drawerHandleLabelText,"data-testid":"drawer-handle-lable-text"},e),t.createElement(t.Fragment,null,n&&t.createElement("span",{className:l.drawerHandleIcon},n))):t.createElement(t.Fragment,null,t.createElement(t.Fragment,null,n&&t.createElement("span",{className:l.drawerHandleIcon},n)),t.createElement("span",{className:l.drawerHandleLabelText,"data-testid":"drawer-handle-lable-text"},e)),Ue=({action:e,children:n})=>typeof e=="object"&&"onClick"in e&&"href"in e?t.createElement("a",{onClick:e.onClick,href:e.href,className:c(l.mobileActionsPrimaryLabel,l.mobileActionsPrimaryButton),"data-testid":"title-block-mobile-actions-primary-button"},n):typeof e=="function"?t.createElement("button",{type:"button",onClick:e,className:c(l.mobileActionsPrimaryLabel,l.mobileActionsPrimaryButton),"data-testid":"title-block-mobile-actions-primary-button"},n):typeof e=="string"?t.createElement("a",{href:e,className:c(l.mobileActionsPrimaryLabel,l.mobileActionsPrimaryButton),"data-testid":"title-block-mobile-actions-primary-button"},n):t.createElement("button",{type:"button",className:c(l.mobileActionsPrimaryLabel,l.mobileActionsPrimaryButton),"data-testid":"title-block-mobile-actions-primary-button"},n),Ze=e=>{if(e&&!e.disabled){if(e.onClick&&e.href)return{href:e.href,onClick:e.onClick};if(e.onClick)return e.onClick;if(e.href)return e.href}},Ke=({primaryAction:e,secondaryActions:n,defaultAction:a,secondaryOverflowMenuItems:o,drawerHandleLabelIconPosition:i,toggleDisplay:m,isOpen:s})=>{const u=a||n||o;return e?P(e)?t.createElement("div",{className:c(l.mobileActionsTopRow,l.mobileActionsTopRowSingleButton),"data-testid":"title-block-mobile-actions-drawer-handle"},t.createElement("button",{type:"button",className:c(l.mobileActionsExpandButton,l.mobileActionsPrimaryLabel),onClick:m,"aria-expanded":s},e.label,t.createElement("span",{className:l.mobileActionsChevronSquare},s?t.createElement(_,{role:"presentation"}):t.createElement(q,{role:"presentation"})))):t.createElement("div",{className:c(l.mobileActionsTopRow,!u&&l.mobileActionsTopRowSingleButton),"data-testid":"title-block-mobile-actions-drawer-handle"},"component"in e?t.createElement(e.component,{className:c(l.mobileActionsPrimaryLabel,l.mobileActionsPrimaryButton),...e},e.label&&R(e.label,e.icon,i)):t.createElement(Ue,{action:Ze(e)},R(e.label,e.icon,i)),u&&t.createElement("button",{type:"button",className:l.mobileActionsExpandButton,onClick:m,"aria-expanded":s,id:$,"aria-label":"Other actions"},s?t.createElement(_,{role:"presentation"}):t.createElement(q,{role:"presentation"}))):u?t.createElement("div",{className:c(l.mobileActionsTopRow,l.mobileActionsTopRowSingleButton),"data-testid":"title-block-mobile-actions-drawer-handle"},t.createElement("button",{type:"button",className:c(l.mobileActionsExpandButton,l.mobileActionsPrimaryLabel),onClick:m,"aria-expanded":s,id:$},R("Other actions"),t.createElement("span",{className:l.mobileActionsChevronSquare},s?t.createElement(_,{role:"presentation"}):t.createElement(q,{role:"presentation"})))):null},O=({primaryAction:e,defaultAction:n,secondaryActions:a,secondaryOverflowMenuItems:o,drawerHandleLabelIconPosition:i,autoHide:m=!1})=>{const[s,u]=I.useState(!1),d=t.createRef(),b=()=>{u(!s)},p=I.useCallback(y=>{var k;s&&y.target instanceof Node&&((k=d.current)!=null&&k.contains(y.target))&&u(!1)},[d]);return I.useEffect(()=>(m&&document.addEventListener("click",p,!0),()=>{m&&document.removeEventListener("click",p,!0)}),[m,p]),t.createElement("div",{className:c(l.mobileActionsContainer,s&&l.isOpen)},t.createElement(ke,{enabled:s,scrollLock:!1},t.createElement(Ke,{primaryAction:e,secondaryActions:a,defaultAction:n,secondaryOverflowMenuItems:o,drawerHandleLabelIconPosition:i,toggleDisplay:b,isOpen:s}),(n||a||o||e&&P(e))&&t.createElement("div",{ref:d,className:l.mobileActionsMenuContainer},t.createElement(We,{primaryAction:e,defaultAction:n,secondaryActions:a,secondaryOverflowMenuItems:o}))))};O.displayName="MobileActions";O.__docgenInfo={description:"",methods:[],displayName:"MobileActions",props:{primaryAction:{required:!1,tsType:{name:"union",raw:`| (TitleBlockMenuGroup & { badge?: TitleBlockBadgeProps })
| ((TitleBlockButtonProps | TitleBlockCustomButtonProps) & {
    badge?: TitleBlockBadgeProps
  })`,elements:[{name:"unknown"},{name:"unknown"}]},description:""},defaultAction:{required:!1,tsType:{name:"union",raw:`| TitleBlockButtonProps
| TitleBlockCustomButtonProps`,elements:[{name:"intersection",raw:`TitleBlockDistributiveOmit<
  ButtonProps,
  "onClick" | "component"
> & {
  onClick?: (e: any) => void
}`,elements:[{name:"unknown"},{name:"signature",type:"object",raw:`{
  onClick?: (e: any) => void
}`,signature:{properties:[{key:"onClick",value:{name:"signature",type:"function",raw:"(e: any) => void",signature:{arguments:[{type:{name:"any"},name:"e"}],return:{name:"void"}},required:!1}}]}}]},{name:"intersection",raw:`TitleBlockDistributiveOmit<
  TitleBlockButtonProps,
  "component"
> & {
  className?: string
  component: (props: CustomButtonProps) => JSX.Element
}`,elements:[{name:"unknown"},{name:"signature",type:"object",raw:`{
  className?: string
  component: (props: CustomButtonProps) => JSX.Element
}`,signature:{properties:[{key:"className",value:{name:"string",required:!1}},{key:"component",value:{name:"signature",type:"function",raw:"(props: CustomButtonProps) => JSX.Element",signature:{arguments:[{type:{name:"CustomButtonProps"},name:"props"}],return:{name:"JSX.Element"}},required:!0}}]}}]}]},description:""},secondaryActions:{required:!1,tsType:{name:"Array",elements:[{name:"union",raw:`| TitleBlockMenuGroup
| (
    | ButtonWithHrefNotOnClick
    | ButtonWithOnClickNotHref
    | TitleBlockCustomButtonProps
  )`,elements:[{name:"signature",type:"object",raw:`{
  label: string
  menuItems: TitleBlockMenuItemProps[]
}`,signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"menuItems",value:{name:"Array",elements:[{name:"union",raw:`| MenuItemProps
| TitleBlockCustomButtonProps`,elements:[{name:"MenuItemProps"},{name:"intersection",raw:`TitleBlockDistributiveOmit<
  TitleBlockButtonProps,
  "component"
> & {
  className?: string
  component: (props: CustomButtonProps) => JSX.Element
}`,elements:[{name:"unknown"},{name:"signature",type:"object",raw:`{
  className?: string
  component: (props: CustomButtonProps) => JSX.Element
}`,signature:{properties:[{key:"className",value:{name:"string",required:!1}},{key:"component",value:{name:"signature",type:"function",raw:"(props: CustomButtonProps) => JSX.Element",signature:{arguments:[{type:{name:"CustomButtonProps"},name:"props"}],return:{name:"JSX.Element"}},required:!0}}]}}]}]}],raw:"TitleBlockMenuItemProps[]",required:!0}}]}},{name:"unknown"}]}],raw:"SecondaryActionItemProps[]"},description:""},secondaryOverflowMenuItems:{required:!1,tsType:{name:"Array",elements:[{name:"union",raw:`| MenuItemProps
| TitleBlockCustomButtonProps`,elements:[{name:"MenuItemProps"},{name:"intersection",raw:`TitleBlockDistributiveOmit<
  TitleBlockButtonProps,
  "component"
> & {
  className?: string
  component: (props: CustomButtonProps) => JSX.Element
}`,elements:[{name:"unknown"},{name:"signature",type:"object",raw:`{
  className?: string
  component: (props: CustomButtonProps) => JSX.Element
}`,signature:{properties:[{key:"className",value:{name:"string",required:!1}},{key:"component",value:{name:"signature",type:"function",raw:"(props: CustomButtonProps) => JSX.Element",signature:{arguments:[{type:{name:"CustomButtonProps"},name:"props"}],return:{name:"JSX.Element"}},required:!0}}]}}]}]}],raw:"TitleBlockMenuItemProps[]"},description:""},drawerHandleLabelIconPosition:{required:!1,tsType:{name:'ButtonProps["iconPosition"]',raw:'ButtonProps["iconPosition"]'},description:""},autoHide:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const Qe="_titleBlock_1lz92_22",Ye="_educationVariant_1lz92_32",et="_adminVariant_1lz92_35",tt="_titleRow_1lz92_44",nt="_rowBelowSeparator_1lz92_45",at="_rowBelowSeparatorInner_1lz92_55",rt="_titleRowInner_1lz92_55",ot="_titleRowInnerContent_1lz92_69",it="_collapseNavigationArea_1lz92_81",st="_title_1lz92_22",lt="_titleAndSubtitle_1lz92_101",mt="_hasSubtitle_1lz92_109",ut="_titleAndSubtitleInner_1lz92_114",ct="_hasLongTitle_1lz92_118",dt="_hasLongSubtitle_1lz92_118",pt="_hasPageSwitcherSelect_1lz92_127",gt="_titleTextOverride_1lz92_155",vt="_avatar_1lz92_183",bt="_withBorder_1lz92_204",kt="_hamburger_1lz92_212",yt="_subtitle_1lz92_228",Tt="_subtitleText_1lz92_259",ft="_sectionTitleContainer_1lz92_272",wt="_sectionTitleInner_1lz92_278",Bt="_sectionTitleOverride_1lz92_283",_t="_sectionTitle_1lz92_272",Et="_sectionTitleDescription_1lz92_320",Pt="_dark_1lz92_332",ht="_rowBelowSeparatorInnerContent_1lz92_336",Nt="_titleAndAdjacent_1lz92_343",Ct="_titleAndAdjacentNotBreadcrumb_1lz92_348",It="_breadcrumb_1lz92_354",qt="_breadcrumbTextLink_1lz92_354",St="_tag_1lz92_358",Rt="_pageSwitcherSelectNextToTitle_1lz92_373",At="_pageSwitcherSelectUnderneathTitle_1lz92_393",Mt="_navigationTabsContainer_1lz92_398",Jt="_navigationTabsContainerCollapsed_1lz92_407",Xt="_hasNavigationTabs_1lz92_417",Ot="_navigationTabScrollerContainer_1lz92_417",xt="_navigationTabsNav_1lz92_428",Lt="_navigationTabsList_1lz92_432",zt="_navigationTabEdgeShadowRight_1lz92_440",jt="_navigationTabEdgeShadowLeft_1lz92_440",Dt="_secondaryActionsContainer_1lz92_488",Ht="_breadcrumbText_1lz92_354",Vt="_circle_1lz92_649",r={titleBlock:Qe,educationVariant:Ye,adminVariant:et,titleRow:tt,rowBelowSeparator:nt,rowBelowSeparatorInner:at,titleRowInner:rt,titleRowInnerContent:ot,collapseNavigationArea:it,title:st,titleAndSubtitle:lt,hasSubtitle:mt,titleAndSubtitleInner:ut,hasLongTitle:ct,hasLongSubtitle:dt,hasPageSwitcherSelect:pt,titleTextOverride:gt,avatar:vt,withBorder:bt,hamburger:kt,subtitle:yt,subtitleText:Tt,sectionTitleContainer:ft,sectionTitleInner:wt,sectionTitleOverride:Bt,sectionTitle:_t,sectionTitleDescription:Et,dark:Pt,rowBelowSeparatorInnerContent:ht,titleAndAdjacent:Nt,titleAndAdjacentNotBreadcrumb:Ct,breadcrumb:It,breadcrumbTextLink:qt,tag:St,pageSwitcherSelectNextToTitle:Rt,pageSwitcherSelectUnderneathTitle:At,navigationTabsContainer:Mt,navigationTabsContainerCollapsed:Jt,hasNavigationTabs:Xt,navigationTabScrollerContainer:Ot,navigationTabsNav:xt,navigationTabsList:Lt,navigationTabEdgeShadowRight:zt,navigationTabEdgeShadowLeft:jt,secondaryActionsContainer:Dt,"slide-fade":"_slide-fade_1lz92_1","reverse-slide-fade":"_reverse-slide-fade_1lz92_1",breadcrumbText:Ht,circle:Vt},Gt=(e,n)=>{if(e)return t.createElement(E,{align:"right",button:t.createElement(J,{label:"Open secondary menu",reversed:n,icon:t.createElement(U,{role:"presentation"}),id:K})},t.createElement(w,null,e.map((a,o)=>t.createElement(g,{key:o,...a}))))},x=({secondaryActions:e,secondaryOverflowMenuItems:n,reversed:a=!1})=>{if(!e&&!n)return null;const o=e?e.map((s,u)=>"menuItems"in s?{key:`${u}`,node:t.createElement(E,{align:"right",button:t.createElement(T,{secondary:!0,label:s.label,reversed:a,icon:t.createElement(_,{role:"presentation"}),iconPosition:"end"})},t.createElement(w,null,s.menuItems.map((d,b)=>t.createElement(g,{key:b,...d}))))}:("onClick"in s&&"href"in s&&console.warn(`\x1B[33m 
TITLE BLOCK WARNING:
Secondary actions only support either an href or an onClick, not both simultaneously.
`),{key:`${u}`,node:t.createElement(T,{secondary:!0,reversed:a,...s,"data-automation-id":"title-block-secondary-actions-button","data-testid":"title-block-secondary-actions-button"})})):[],i=Gt(n,a),m=[...o,...i?[{key:"overflowMenu",node:i}]:[]];return t.createElement("div",{className:r.secondaryActionsContainer},t.createElement(h,{items:m,noGap:!0,automationId:"title-block-secondary-actions-toolbar"}))};x.displayName="SecondaryActions";x.__docgenInfo={description:"",methods:[],displayName:"SecondaryActions",props:{secondaryActions:{required:!1,tsType:{name:"Array",elements:[{name:"union",raw:`| TitleBlockMenuGroup
| (
    | ButtonWithHrefNotOnClick
    | ButtonWithOnClickNotHref
    | TitleBlockCustomButtonProps
  )`,elements:[{name:"signature",type:"object",raw:`{
  label: string
  menuItems: TitleBlockMenuItemProps[]
}`,signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"menuItems",value:{name:"Array",elements:[{name:"union",raw:`| MenuItemProps
| TitleBlockCustomButtonProps`,elements:[{name:"MenuItemProps"},{name:"intersection",raw:`TitleBlockDistributiveOmit<
  TitleBlockButtonProps,
  "component"
> & {
  className?: string
  component: (props: CustomButtonProps) => JSX.Element
}`,elements:[{name:"unknown"},{name:"signature",type:"object",raw:`{
  className?: string
  component: (props: CustomButtonProps) => JSX.Element
}`,signature:{properties:[{key:"className",value:{name:"string",required:!1}},{key:"component",value:{name:"signature",type:"function",raw:"(props: CustomButtonProps) => JSX.Element",signature:{arguments:[{type:{name:"CustomButtonProps"},name:"props"}],return:{name:"JSX.Element"}},required:!0}}]}}]}]}],raw:"TitleBlockMenuItemProps[]",required:!0}}]}},{name:"unknown"}]}],raw:"SecondaryActionItemProps[]"},description:""},secondaryOverflowMenuItems:{required:!1,tsType:{name:"Array",elements:[{name:"union",raw:`| MenuItemProps
| TitleBlockCustomButtonProps`,elements:[{name:"MenuItemProps"},{name:"intersection",raw:`TitleBlockDistributiveOmit<
  TitleBlockButtonProps,
  "component"
> & {
  className?: string
  component: (props: CustomButtonProps) => JSX.Element
}`,elements:[{name:"unknown"},{name:"signature",type:"object",raw:`{
  className?: string
  component: (props: CustomButtonProps) => JSX.Element
}`,signature:{properties:[{key:"className",value:{name:"string",required:!1}},{key:"component",value:{name:"signature",type:"function",raw:"(props: CustomButtonProps) => JSX.Element",signature:{arguments:[{type:{name:"CustomButtonProps"},name:"props"}],return:{name:"JSX.Element"}},required:!0}}]}}]}]}],raw:"TitleBlockMenuItemProps[]"},description:""},reversed:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const $t=e=>{let n;if(n!=="profile")return e.status==="draft"&&(n="statusDraft"),e.status==="scheduled"&&(n="statusClosed"),e.status==="live"&&(n="statusLive"),e.status==="closed"&&(n="statusClosed"),e.status==="sentimentPositive"&&(n="sentimentPositive"),e.status==="default"&&(n="default"),t.createElement("div",{"data-automation-id":"survey-status-tag","data-testid":"survey-status-tag",className:r.tag},t.createElement(Te,{variant:n,size:"small"},e.text))},Ft=e=>"props"in e,Wt=(e,n)=>Ft(e)?t.createElement("div",{"data-automation-id":n,"data-testid":n,className:c(r.avatar,r.withBorder)},e):t.createElement("div",{"data-automation-id":n,"data-testid":n,className:r.avatar},t.createElement(fe,{...e,size:"medium"})),Ut=(e,n)=>t.createElement("div",{className:r.subtitle},t.createElement("span",{"data-automation-id":n,"data-testid":n,className:r.subtitleText},e)),Zt=(e,n,a,o,i)=>t.createElement(t.Fragment,null,e&&t.createElement("div",{className:r.sectionTitle},t.createElement(W,{variant:"heading-2",color:f(a)?"white":"dark",classNameOverride:r.sectionTitleOverride,"data-automation-id":o,"data-testid":o},e)),n&&t.createElement("div",{"data-automation-id":i,"data-testid":i,className:c(r.sectionTitleDescription,!f(a)&&r.dark)},n)),Kt=({breadcrumb:e,automationId:n,textAutomationId:a,textDirection:o})=>{const{path:i,handleClick:m,text:s,render:u}=e,d=o==="rtl"?t.createElement(ve,{role:"presentation"}):t.createElement(ge,{role:"presentation"}),b=()=>t.createElement(t.Fragment,null,t.createElement("div",{className:r.circle},d),t.createElement("span",{className:r.breadcrumbTextLink,"data-automation-id":a,"data-testid":a},t.createElement("span",{className:r.breadcrumbText},s)));if(u){const y=u;return t.createElement(y,{breadcrumb:e,className:r.breadcrumb,automationId:n,textAutomationId:a,textDirection:o},t.createElement(b,null))}const p=i?"a":"button";return t.createElement(p,{...i&&{href:i},className:r.breadcrumb,"data-automation-id":n,"data-testid":n,onClick:m},t.createElement(b,null))},Qt=(e,n,a)=>t.createElement("div",{className:r.navigationTabScrollerContainer},t.createElement("div",{className:c(r.navigationTabsContainer,n&&r.navigationTabsContainerCollapsed)},!n&&e!==void 0&&t.createElement(t.Fragment,null,t.createElement("span",{className:r.navigationTabEdgeShadowLeft}),t.createElement("nav",{className:r.navigationTabsNav,"aria-label":a},t.createElement("ul",{className:r.navigationTabsList},e.map((o,i)=>t.createElement("li",{key:i},o)))),t.createElement("span",{className:r.navigationTabEdgeShadowRight})))),te=({title:e,variant:n,breadcrumb:a,avatar:o,subtitle:i,sectionTitle:m,sectionTitleDescription:s,renderSectionTitle:u,pageSwitcherSelect:d,handleHamburgerClick:b,primaryAction:p,defaultAction:y,secondaryActions:k,secondaryOverflowMenuItems:B,navigationTabs:N,collapseNavigationAreaWhenPossible:ae=!1,textDirection:re,surveyStatus:L,id:oe,titleAutomationId:z="TitleBlock__Title",avatarAutomationId:ie="TitleBlock__Avatar",subtitleAutomationId:se="TitleBlock__Subtitle",sectionTitleAutomationId:j="TitleBlock__SectionTitle",sectionTitleDescriptionAutomationId:D="TitleBlock__SectionTitleDescription",breadcrumbAutomationId:le="TitleBlock__Breadcrumb",breadcrumbTextAutomationId:me="TitleBlock__BreadcrumbText",autoHideMobileActionsMenu:ue=!1})=>{const H=N&&N.length>0,V=ae&&!H&&k===void 0,{queries:{isSmall:ce,isMedium:de}}=be(),C=de||ce;return t.createElement(t.Fragment,null,t.createElement("div",{id:oe,className:c(r.titleBlock,r[`${n}Variant`],!!i&&r.hasSubtitle,!!d&&r.hasPageSwitcherSelect,V&&!(m||s||u)&&r.collapseNavigationArea,e&&e.length>=30&&r.hasLongTitle,i&&typeof i=="string"&&i.length>=18&&r.hasLongSubtitle,H&&r.hasNavigationTabs)},t.createElement("div",{className:r.titleRow},t.createElement("div",{className:r.titleRowInner},t.createElement("div",{className:r.titleRowInnerContent},t.createElement("div",{className:r.titleAndAdjacent},a&&t.createElement(Kt,{breadcrumb:a,automationId:le,textAutomationId:me,textDirection:re}),t.createElement("div",{className:r.titleAndAdjacentNotBreadcrumb},t.createElement(t.Fragment,null,b&&t.createElement("div",{className:r.hamburger},t.createElement(J,{onClick:b,icon:t.createElement(pe,{role:"presentation"}),label:"Open menu",reversed:f(n)})),o&&Wt(o,ie),t.createElement("div",{className:r.titleAndSubtitle},t.createElement("div",{className:r.titleAndSubtitleInner},t.createElement("div",{className:r.title},t.createElement(W,{variant:"composable-header-title",color:f(n)?"white":"dark",classNameOverride:r.titleTextOverride,"data-automation-id":z,"data-testid":z},e)),C&&d&&t.createElement("div",{className:r.pageSwitcherSelectUnderneathTitle},t.createElement(G,{...d,variant:"secondary-small",reversed:!0})),i&&Ut(i,se))),L&&$t(L),!C&&d&&t.createElement("div",{className:r.pageSwitcherSelectNextToTitle},t.createElement(G,{...d,variant:"secondary",reversed:!0,fullWidth:!0}))))),(p||y||k||B)&&t.createElement(X,{primaryAction:p,defaultAction:y,reversed:f(n),overflowMenuItems:we(k,B),showOverflowMenu:C})))),t.createElement("div",{className:r.rowBelowSeparator},t.createElement("div",{className:r.rowBelowSeparatorInner},t.createElement("div",{className:r.rowBelowSeparatorInnerContent},(m||s||u)&&t.createElement("div",{className:r.sectionTitleContainer},t.createElement("div",{className:r.sectionTitleInner},u?u({sectionTitle:m,sectionTitleAutomationId:j,sectionTitleDescription:s,sectionTitleDescriptionAutomationId:D}):Zt(m,s,n,j,D))),Qt(N,V,e),(k||B)&&t.createElement(x,{secondaryActions:k,secondaryOverflowMenuItems:B,reversed:f(n)})))),t.createElement(O,{primaryAction:p,defaultAction:y,secondaryActions:k,secondaryOverflowMenuItems:B,drawerHandleLabelIconPosition:p&&"iconPosition"in p?p.iconPosition:void 0,autoHide:ue})))};te.displayName="TitleBlockZen";te.__docgenInfo={description:`{@link https://cultureamp.atlassian.net/wiki/spaces/DesignSystem/pages/3075605782/Title+Block Guidance} |
{@link https://cultureamp.design/?path=/story/components-titleblock--docs Storybook}`,methods:[],displayName:"TitleBlockZen",props:{children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},title:{required:!0,tsType:{name:"string"},description:""},variant:{required:!1,tsType:{name:"union",raw:'"admin" | "education"',elements:[{name:"literal",value:'"admin"'},{name:"literal",value:'"education"'}]},description:""},breadcrumb:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  text: string
  path?: string
  handleClick?: (event: React.MouseEvent) => void
  /**
   * Custom render for the breadcrumb. Commonly used to replace the parent link with a router link component.
   * Props given to the breadcrumb component will be passed back, along with a decorated className and children.
   * It is up to you to reapply them to your custom component.
   */
  render?: (props: CustomBreadcrumbProps) => JSX.Element
}`,signature:{properties:[{key:"text",value:{name:"string",required:!0}},{key:"path",value:{name:"string",required:!1}},{key:"handleClick",value:{name:"signature",type:"function",raw:"(event: React.MouseEvent) => void",signature:{arguments:[{type:{name:"ReactMouseEvent",raw:"React.MouseEvent"},name:"event"}],return:{name:"void"}},required:!1}},{key:"render",value:{name:"signature",type:"function",raw:"(props: CustomBreadcrumbProps) => JSX.Element",signature:{arguments:[{type:{name:"intersection",raw:`TitleBlockBreadcrumbProps & {
  className: string
  children: React.ReactNode
}`,elements:[{name:"signature",type:"object",raw:`{
  breadcrumb: TitleBlockBreadcrumbType
  automationId: string
  textAutomationId: string
  textDirection?: TextDirection
}`,signature:{properties:[{key:"breadcrumb",value:{name:"TitleBlockBreadcrumbType",required:!0}},{key:"automationId",value:{name:"string",required:!0}},{key:"textAutomationId",value:{name:"string",required:!0}},{key:"textDirection",value:{name:"union",raw:'"ltr" | "rtl"',elements:[{name:"literal",value:'"ltr"'},{name:"literal",value:'"rtl"'}],required:!1}}]}},{name:"signature",type:"object",raw:`{
  className: string
  children: React.ReactNode
}`,signature:{properties:[{key:"className",value:{name:"string",required:!0}},{key:"children",value:{name:"ReactReactNode",raw:"React.ReactNode",required:!0}}]}}]},name:"props"}],return:{name:"JSX.Element"}},required:!1},description:`Custom render for the breadcrumb. Commonly used to replace the parent link with a router link component.
Props given to the breadcrumb component will be passed back, along with a decorated className and children.
It is up to you to reapply them to your custom component.`}]}},description:""},avatar:{required:!1,tsType:{name:"union",raw:"JSX.Element | TitleBlockAvatarProps",elements:[{name:"JSX.Element"},{name:"union",raw:`| Omit<GenericAvatarProps, "size">
| Omit<CompanyAvatarProps, "size">`,elements:[{name:"Omit",elements:[{name:"GenericAvatarProps"},{name:"literal",value:'"size"'}],raw:'Omit<GenericAvatarProps, "size">'},{name:"Omit",elements:[{name:"CompanyAvatarProps"},{name:"literal",value:'"size"'}],raw:'Omit<CompanyAvatarProps, "size">'}]}]},description:""},subtitle:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},sectionTitle:{required:!1,tsType:{name:"string"},description:""},sectionTitleDescription:{required:!1,tsType:{name:"string"},description:""},renderSectionTitle:{required:!1,tsType:{name:"signature",type:"function",raw:"(renderProps: SectionTitleRenderProps) => React.ReactNode",signature:{arguments:[{type:{name:"Pick",elements:[{name:"signature",type:"object",raw:`{
  children?: React.ReactNode
  title: string
  variant?: TitleBlockVariant
  breadcrumb?: TitleBlockBreadcrumbType
  avatar?: JSX.Element | TitleBlockAvatarProps
  subtitle?: React.ReactNode
  sectionTitle?: string
  sectionTitleDescription?: string
  renderSectionTitle?: (renderProps: SectionTitleRenderProps) => React.ReactNode
  pageSwitcherSelect?: TitleBlockSelectProps
  handleHamburgerClick?: (event: React.MouseEvent) => void
  primaryAction?: PrimaryActionProps
  defaultAction?: DefaultActionProps
  secondaryActions?: SecondaryActionsProps
  secondaryOverflowMenuItems?: TitleBlockMenuItemProps[]
  navigationTabs?: NavigationTabs
  collapseNavigationAreaWhenPossible?: boolean
  textDirection?: TextDirection
  surveyStatus?: SurveyStatus
  id?: string
  titleAutomationId?: string
  breadcrumbAutomationId?: string
  breadcrumbTextAutomationId?: string
  avatarAutomationId?: string
  subtitleAutomationId?: string
  sectionTitleAutomationId?: string
  sectionTitleDescriptionAutomationId?: string
  autoHideMobileActionsMenu?: boolean
}`,signature:{properties:[{key:"children",value:{name:"ReactReactNode",raw:"React.ReactNode",required:!1}},{key:"title",value:{name:"string",required:!0}},{key:"variant",value:{name:"union",raw:'"admin" | "education"',elements:[{name:"literal",value:'"admin"'},{name:"literal",value:'"education"'}],required:!1}},{key:"breadcrumb",value:{name:"signature",type:"object",raw:`{
  text: string
  path?: string
  handleClick?: (event: React.MouseEvent) => void
  /**
   * Custom render for the breadcrumb. Commonly used to replace the parent link with a router link component.
   * Props given to the breadcrumb component will be passed back, along with a decorated className and children.
   * It is up to you to reapply them to your custom component.
   */
  render?: (props: CustomBreadcrumbProps) => JSX.Element
}`,signature:{properties:[{key:"text",value:{name:"string",required:!0}},{key:"path",value:{name:"string",required:!1}},{key:"handleClick",value:{name:"signature",type:"function",raw:"(event: React.MouseEvent) => void",signature:{arguments:[{type:{name:"ReactMouseEvent",raw:"React.MouseEvent"},name:"event"}],return:{name:"void"}},required:!1}},{key:"render",value:{name:"signature",type:"function",raw:"(props: CustomBreadcrumbProps) => JSX.Element",signature:{arguments:[{type:{name:"intersection",raw:`TitleBlockBreadcrumbProps & {
  className: string
  children: React.ReactNode
}`,elements:[{name:"signature",type:"object",raw:`{
  breadcrumb: TitleBlockBreadcrumbType
  automationId: string
  textAutomationId: string
  textDirection?: TextDirection
}`,signature:{properties:[{key:"breadcrumb",value:{name:"TitleBlockBreadcrumbType",required:!0}},{key:"automationId",value:{name:"string",required:!0}},{key:"textAutomationId",value:{name:"string",required:!0}},{key:"textDirection",value:{name:"union",raw:'"ltr" | "rtl"',elements:[{name:"literal",value:'"ltr"'},{name:"literal",value:'"rtl"'}],required:!1}}]}},{name:"signature",type:"object",raw:`{
  className: string
  children: React.ReactNode
}`,signature:{properties:[{key:"className",value:{name:"string",required:!0}},{key:"children",value:{name:"ReactReactNode",raw:"React.ReactNode",required:!0}}]}}]},name:"props"}],return:{name:"JSX.Element"}},required:!1},description:`Custom render for the breadcrumb. Commonly used to replace the parent link with a router link component.
Props given to the breadcrumb component will be passed back, along with a decorated className and children.
It is up to you to reapply them to your custom component.`}]},required:!1}},{key:"avatar",value:{name:"union",raw:"JSX.Element | TitleBlockAvatarProps",elements:[{name:"JSX.Element"},{name:"union",raw:`| Omit<GenericAvatarProps, "size">
| Omit<CompanyAvatarProps, "size">`,elements:[{name:"Omit",elements:[{name:"GenericAvatarProps"},{name:"literal",value:'"size"'}],raw:'Omit<GenericAvatarProps, "size">'},{name:"Omit",elements:[{name:"CompanyAvatarProps"},{name:"literal",value:'"size"'}],raw:'Omit<CompanyAvatarProps, "size">'}]}],required:!1}},{key:"subtitle",value:{name:"ReactReactNode",raw:"React.ReactNode",required:!1}},{key:"sectionTitle",value:{name:"string",required:!1}},{key:"sectionTitleDescription",value:{name:"string",required:!1}},{key:"renderSectionTitle",value:{name:"signature",type:"function",raw:"(renderProps: SectionTitleRenderProps) => React.ReactNode",signature:{arguments:[{type:{name:"SectionTitleRenderProps"},name:"renderProps"}],return:{name:"ReactReactNode",raw:"React.ReactNode"}},required:!1}},{key:"pageSwitcherSelect",value:{name:"ReactComponentProps",raw:"React.ComponentProps<typeof Select>",elements:[{name:"Select"}],required:!1}},{key:"handleHamburgerClick",value:{name:"signature",type:"function",raw:"(event: React.MouseEvent) => void",signature:{arguments:[{type:{name:"ReactMouseEvent",raw:"React.MouseEvent"},name:"event"}],return:{name:"void"}},required:!1}},{key:"primaryAction",value:{name:"union",raw:`| (TitleBlockMenuGroup & { badge?: TitleBlockBadgeProps })
| ((TitleBlockButtonProps | TitleBlockCustomButtonProps) & {
    badge?: TitleBlockBadgeProps
  })`,elements:[{name:"unknown"},{name:"unknown"}],required:!1}},{key:"defaultAction",value:{name:"union",raw:`| TitleBlockButtonProps
| TitleBlockCustomButtonProps`,elements:[{name:"intersection",raw:`TitleBlockDistributiveOmit<
  ButtonProps,
  "onClick" | "component"
> & {
  onClick?: (e: any) => void
}`,elements:[{name:"unknown"},{name:"signature",type:"object",raw:`{
  onClick?: (e: any) => void
}`,signature:{properties:[{key:"onClick",value:{name:"signature",type:"function",raw:"(e: any) => void",signature:{arguments:[{type:{name:"any"},name:"e"}],return:{name:"void"}},required:!1}}]}}]},{name:"intersection",raw:`TitleBlockDistributiveOmit<
  TitleBlockButtonProps,
  "component"
> & {
  className?: string
  component: (props: CustomButtonProps) => JSX.Element
}`,elements:[{name:"unknown"},{name:"signature",type:"object",raw:`{
  className?: string
  component: (props: CustomButtonProps) => JSX.Element
}`,signature:{properties:[{key:"className",value:{name:"string",required:!1}},{key:"component",value:{name:"signature",type:"function",raw:"(props: CustomButtonProps) => JSX.Element",signature:{arguments:[{type:{name:"CustomButtonProps"},name:"props"}],return:{name:"JSX.Element"}},required:!0}}]}}]}],required:!1}},{key:"secondaryActions",value:{name:"Array",elements:[{name:"union",raw:`| TitleBlockMenuGroup
| (
    | ButtonWithHrefNotOnClick
    | ButtonWithOnClickNotHref
    | TitleBlockCustomButtonProps
  )`,elements:[{name:"signature",type:"object",raw:`{
  label: string
  menuItems: TitleBlockMenuItemProps[]
}`,signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"menuItems",value:{name:"Array",elements:[{name:"union",raw:`| MenuItemProps
| TitleBlockCustomButtonProps`,elements:[{name:"MenuItemProps"},{name:"intersection",raw:`TitleBlockDistributiveOmit<
  TitleBlockButtonProps,
  "component"
> & {
  className?: string
  component: (props: CustomButtonProps) => JSX.Element
}`,elements:[{name:"unknown"},{name:"signature",type:"object",raw:`{
  className?: string
  component: (props: CustomButtonProps) => JSX.Element
}`,signature:{properties:[{key:"className",value:{name:"string",required:!1}},{key:"component",value:{name:"signature",type:"function",raw:"(props: CustomButtonProps) => JSX.Element",signature:{arguments:[{type:{name:"CustomButtonProps"},name:"props"}],return:{name:"JSX.Element"}},required:!0}}]}}]}]}],raw:"TitleBlockMenuItemProps[]",required:!0}}]}},{name:"unknown"}]}],raw:"SecondaryActionItemProps[]",required:!1}},{key:"secondaryOverflowMenuItems",value:{name:"Array",elements:[{name:"union",raw:`| MenuItemProps
| TitleBlockCustomButtonProps`,elements:[{name:"MenuItemProps"},{name:"intersection",raw:`TitleBlockDistributiveOmit<
  TitleBlockButtonProps,
  "component"
> & {
  className?: string
  component: (props: CustomButtonProps) => JSX.Element
}`,elements:[{name:"unknown"},{name:"signature",type:"object",raw:`{
  className?: string
  component: (props: CustomButtonProps) => JSX.Element
}`,signature:{properties:[{key:"className",value:{name:"string",required:!1}},{key:"component",value:{name:"signature",type:"function",raw:"(props: CustomButtonProps) => JSX.Element",signature:{arguments:[{type:{name:"CustomButtonProps"},name:"props"}],return:{name:"JSX.Element"}},required:!0}}]}}]}]}],raw:"TitleBlockMenuItemProps[]",required:!1}},{key:"navigationTabs",value:{name:"Array",elements:[{name:"ReactReactElement",raw:"React.ReactElement<NavigationTabProps>",elements:[{name:"signature",type:"object",raw:`{
  text: string
  href: string
  active?: boolean
  handleClick?: (event: React.MouseEvent) => void
  variant?: TitleBlockVariant
  id?: string
  automationId?: string
  /**
   * Custom render for the tab. Commonly used to replace the link with a router link component.
   * Props given to the NavigationTab component will be passed back, along with a decorated className.
   * It is up to you to reapply them to your custom component.
   */
  render?: (props: CustomNavigationTabProps) => JSX.Element
}`,signature:{properties:[{key:"text",value:{name:"string",required:!0}},{key:"href",value:{name:"string",required:!0}},{key:"active",value:{name:"boolean",required:!1}},{key:"handleClick",value:{name:"signature",type:"function",raw:"(event: React.MouseEvent) => void",signature:{arguments:[{type:{name:"ReactMouseEvent",raw:"React.MouseEvent"},name:"event"}],return:{name:"void"}},required:!1}},{key:"variant",value:{name:"union",raw:'"admin" | "education"',elements:[{name:"literal",value:'"admin"'},{name:"literal",value:'"education"'}],required:!1}},{key:"id",value:{name:"string",required:!1}},{key:"automationId",value:{name:"string",required:!1}},{key:"render",value:{name:"signature",type:"function",raw:"(props: CustomNavigationTabProps) => JSX.Element",signature:{arguments:[{type:{name:"intersection",raw:`Omit<NavigationTabProps, "render"> & {
  className: string
}`,elements:[{name:"Omit",elements:[{name:"NavigationTabProps"},{name:"literal",value:'"render"'}],raw:'Omit<NavigationTabProps, "render">'},{name:"signature",type:"object",raw:`{
  className: string
}`,signature:{properties:[{key:"className",value:{name:"string",required:!0}}]}}]},name:"props"}],return:{name:"JSX.Element"}},required:!1},description:`Custom render for the tab. Commonly used to replace the link with a router link component.
Props given to the NavigationTab component will be passed back, along with a decorated className.
It is up to you to reapply them to your custom component.`}]}}]}],raw:"Array<React.ReactElement<NavigationTabProps>>",required:!1}},{key:"collapseNavigationAreaWhenPossible",value:{name:"boolean",required:!1}},{key:"textDirection",value:{name:"union",raw:'"ltr" | "rtl"',elements:[{name:"literal",value:'"ltr"'},{name:"literal",value:'"rtl"'}],required:!1}},{key:"surveyStatus",value:{name:"signature",type:"object",raw:`{
  text: string
  status:
    | "draft"
    | "live"
    | "scheduled"
    | "closed"
    | "sentimentPositive"
    | "default"
}`,signature:{properties:[{key:"text",value:{name:"string",required:!0}},{key:"status",value:{name:"union",raw:`| "draft"
| "live"
| "scheduled"
| "closed"
| "sentimentPositive"
| "default"`,elements:[{name:"literal",value:'"draft"'},{name:"literal",value:'"live"'},{name:"literal",value:'"scheduled"'},{name:"literal",value:'"closed"'},{name:"literal",value:'"sentimentPositive"'},{name:"literal",value:'"default"'}],required:!0}}]},required:!1}},{key:"id",value:{name:"string",required:!1}},{key:"titleAutomationId",value:{name:"string",required:!1}},{key:"breadcrumbAutomationId",value:{name:"string",required:!1}},{key:"breadcrumbTextAutomationId",value:{name:"string",required:!1}},{key:"avatarAutomationId",value:{name:"string",required:!1}},{key:"subtitleAutomationId",value:{name:"string",required:!1}},{key:"sectionTitleAutomationId",value:{name:"string",required:!1}},{key:"sectionTitleDescriptionAutomationId",value:{name:"string",required:!1}},{key:"autoHideMobileActionsMenu",value:{name:"boolean",required:!1}}]}},{name:"union",raw:`| "sectionTitle"
| "sectionTitleAutomationId"
| "sectionTitleDescription"
| "sectionTitleDescriptionAutomationId"`,elements:[{name:"literal",value:'"sectionTitle"'},{name:"literal",value:'"sectionTitleAutomationId"'},{name:"literal",value:'"sectionTitleDescription"'},{name:"literal",value:'"sectionTitleDescriptionAutomationId"'}]}],raw:`Pick<
  TitleBlockProps,
  | "sectionTitle"
  | "sectionTitleAutomationId"
  | "sectionTitleDescription"
  | "sectionTitleDescriptionAutomationId"
>`},name:"renderProps"}],return:{name:"ReactReactNode",raw:"React.ReactNode"}}},description:""},pageSwitcherSelect:{required:!1,tsType:{name:"ReactComponentProps",raw:"React.ComponentProps<typeof Select>",elements:[{name:"Select"}]},description:""},handleHamburgerClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.MouseEvent) => void",signature:{arguments:[{type:{name:"ReactMouseEvent",raw:"React.MouseEvent"},name:"event"}],return:{name:"void"}}},description:""},primaryAction:{required:!1,tsType:{name:"union",raw:`| (TitleBlockMenuGroup & { badge?: TitleBlockBadgeProps })
| ((TitleBlockButtonProps | TitleBlockCustomButtonProps) & {
    badge?: TitleBlockBadgeProps
  })`,elements:[{name:"unknown"},{name:"unknown"}]},description:""},defaultAction:{required:!1,tsType:{name:"union",raw:`| TitleBlockButtonProps
| TitleBlockCustomButtonProps`,elements:[{name:"intersection",raw:`TitleBlockDistributiveOmit<
  ButtonProps,
  "onClick" | "component"
> & {
  onClick?: (e: any) => void
}`,elements:[{name:"unknown"},{name:"signature",type:"object",raw:`{
  onClick?: (e: any) => void
}`,signature:{properties:[{key:"onClick",value:{name:"signature",type:"function",raw:"(e: any) => void",signature:{arguments:[{type:{name:"any"},name:"e"}],return:{name:"void"}},required:!1}}]}}]},{name:"intersection",raw:`TitleBlockDistributiveOmit<
  TitleBlockButtonProps,
  "component"
> & {
  className?: string
  component: (props: CustomButtonProps) => JSX.Element
}`,elements:[{name:"unknown"},{name:"signature",type:"object",raw:`{
  className?: string
  component: (props: CustomButtonProps) => JSX.Element
}`,signature:{properties:[{key:"className",value:{name:"string",required:!1}},{key:"component",value:{name:"signature",type:"function",raw:"(props: CustomButtonProps) => JSX.Element",signature:{arguments:[{type:{name:"CustomButtonProps"},name:"props"}],return:{name:"JSX.Element"}},required:!0}}]}}]}]},description:""},secondaryActions:{required:!1,tsType:{name:"Array",elements:[{name:"union",raw:`| TitleBlockMenuGroup
| (
    | ButtonWithHrefNotOnClick
    | ButtonWithOnClickNotHref
    | TitleBlockCustomButtonProps
  )`,elements:[{name:"signature",type:"object",raw:`{
  label: string
  menuItems: TitleBlockMenuItemProps[]
}`,signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"menuItems",value:{name:"Array",elements:[{name:"union",raw:`| MenuItemProps
| TitleBlockCustomButtonProps`,elements:[{name:"MenuItemProps"},{name:"intersection",raw:`TitleBlockDistributiveOmit<
  TitleBlockButtonProps,
  "component"
> & {
  className?: string
  component: (props: CustomButtonProps) => JSX.Element
}`,elements:[{name:"unknown"},{name:"signature",type:"object",raw:`{
  className?: string
  component: (props: CustomButtonProps) => JSX.Element
}`,signature:{properties:[{key:"className",value:{name:"string",required:!1}},{key:"component",value:{name:"signature",type:"function",raw:"(props: CustomButtonProps) => JSX.Element",signature:{arguments:[{type:{name:"CustomButtonProps"},name:"props"}],return:{name:"JSX.Element"}},required:!0}}]}}]}]}],raw:"TitleBlockMenuItemProps[]",required:!0}}]}},{name:"unknown"}]}],raw:"SecondaryActionItemProps[]"},description:""},secondaryOverflowMenuItems:{required:!1,tsType:{name:"Array",elements:[{name:"union",raw:`| MenuItemProps
| TitleBlockCustomButtonProps`,elements:[{name:"MenuItemProps"},{name:"intersection",raw:`TitleBlockDistributiveOmit<
  TitleBlockButtonProps,
  "component"
> & {
  className?: string
  component: (props: CustomButtonProps) => JSX.Element
}`,elements:[{name:"unknown"},{name:"signature",type:"object",raw:`{
  className?: string
  component: (props: CustomButtonProps) => JSX.Element
}`,signature:{properties:[{key:"className",value:{name:"string",required:!1}},{key:"component",value:{name:"signature",type:"function",raw:"(props: CustomButtonProps) => JSX.Element",signature:{arguments:[{type:{name:"CustomButtonProps"},name:"props"}],return:{name:"JSX.Element"}},required:!0}}]}}]}]}],raw:"TitleBlockMenuItemProps[]"},description:""},navigationTabs:{required:!1,tsType:{name:"Array",elements:[{name:"ReactReactElement",raw:"React.ReactElement<NavigationTabProps>",elements:[{name:"signature",type:"object",raw:`{
  text: string
  href: string
  active?: boolean
  handleClick?: (event: React.MouseEvent) => void
  variant?: TitleBlockVariant
  id?: string
  automationId?: string
  /**
   * Custom render for the tab. Commonly used to replace the link with a router link component.
   * Props given to the NavigationTab component will be passed back, along with a decorated className.
   * It is up to you to reapply them to your custom component.
   */
  render?: (props: CustomNavigationTabProps) => JSX.Element
}`,signature:{properties:[{key:"text",value:{name:"string",required:!0}},{key:"href",value:{name:"string",required:!0}},{key:"active",value:{name:"boolean",required:!1}},{key:"handleClick",value:{name:"signature",type:"function",raw:"(event: React.MouseEvent) => void",signature:{arguments:[{type:{name:"ReactMouseEvent",raw:"React.MouseEvent"},name:"event"}],return:{name:"void"}},required:!1}},{key:"variant",value:{name:"union",raw:'"admin" | "education"',elements:[{name:"literal",value:'"admin"'},{name:"literal",value:'"education"'}],required:!1}},{key:"id",value:{name:"string",required:!1}},{key:"automationId",value:{name:"string",required:!1}},{key:"render",value:{name:"signature",type:"function",raw:"(props: CustomNavigationTabProps) => JSX.Element",signature:{arguments:[{type:{name:"intersection",raw:`Omit<NavigationTabProps, "render"> & {
  className: string
}`,elements:[{name:"Omit",elements:[{name:"NavigationTabProps"},{name:"literal",value:'"render"'}],raw:'Omit<NavigationTabProps, "render">'},{name:"signature",type:"object",raw:`{
  className: string
}`,signature:{properties:[{key:"className",value:{name:"string",required:!0}}]}}]},name:"props"}],return:{name:"JSX.Element"}},required:!1},description:`Custom render for the tab. Commonly used to replace the link with a router link component.
Props given to the NavigationTab component will be passed back, along with a decorated className.
It is up to you to reapply them to your custom component.`}]}}]}],raw:"Array<React.ReactElement<NavigationTabProps>>"},description:""},collapseNavigationAreaWhenPossible:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},textDirection:{required:!1,tsType:{name:"union",raw:'"ltr" | "rtl"',elements:[{name:"literal",value:'"ltr"'},{name:"literal",value:'"rtl"'}]},description:""},surveyStatus:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  text: string
  status:
    | "draft"
    | "live"
    | "scheduled"
    | "closed"
    | "sentimentPositive"
    | "default"
}`,signature:{properties:[{key:"text",value:{name:"string",required:!0}},{key:"status",value:{name:"union",raw:`| "draft"
| "live"
| "scheduled"
| "closed"
| "sentimentPositive"
| "default"`,elements:[{name:"literal",value:'"draft"'},{name:"literal",value:'"live"'},{name:"literal",value:'"scheduled"'},{name:"literal",value:'"closed"'},{name:"literal",value:'"sentimentPositive"'},{name:"literal",value:'"default"'}],required:!0}}]}},description:""},id:{required:!1,tsType:{name:"string"},description:""},titleAutomationId:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"TitleBlock__Title"',computed:!1}},breadcrumbAutomationId:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"TitleBlock__Breadcrumb"',computed:!1}},breadcrumbTextAutomationId:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"TitleBlock__BreadcrumbText"',computed:!1}},avatarAutomationId:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"TitleBlock__Avatar"',computed:!1}},subtitleAutomationId:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"TitleBlock__Subtitle"',computed:!1}},sectionTitleAutomationId:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"TitleBlock__SectionTitle"',computed:!1}},sectionTitleDescriptionAutomationId:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"TitleBlock__SectionTitleDescription"',computed:!1}},autoHideMobileActionsMenu:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const Yt="_container_tg9tk_6",en="_linkAnchor_tg9tk_12",tn="_active_tg9tk_59",nn="_lightBackground_tg9tk_111",A={container:Yt,linkAnchor:en,active:tn,lightBackground:nn},an=e=>e!==void 0&&Q.includes(e),ne=e=>{const n=c(A.linkAnchor,an(e.variant)&&A.lightBackground,e.active&&A.active);if(e.render){const{render:a,...o}=e;return t.createElement(a,{...o,className:n})}return t.createElement("a",{className:n,href:e.href,onClick:e.handleClick,id:e.id,"data-automation-id":e.automationId,"data-testid":e.automationId,"aria-current":e.active?"page":void 0},e.text)};ne.displayName="NavigationTab";ne.__docgenInfo={description:"",methods:[],displayName:"NavigationTab",props:{text:{required:!0,tsType:{name:"string"},description:""},href:{required:!0,tsType:{name:"string"},description:""},active:{required:!1,tsType:{name:"boolean"},description:""},handleClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.MouseEvent) => void",signature:{arguments:[{type:{name:"ReactMouseEvent",raw:"React.MouseEvent"},name:"event"}],return:{name:"void"}}},description:""},variant:{required:!1,tsType:{name:"union",raw:'"admin" | "education"',elements:[{name:"literal",value:'"admin"'},{name:"literal",value:'"education"'}]},description:""},id:{required:!1,tsType:{name:"string"},description:""},automationId:{required:!1,tsType:{name:"string"},description:""},render:{required:!1,tsType:{name:"signature",type:"function",raw:"(props: CustomNavigationTabProps) => JSX.Element",signature:{arguments:[{type:{name:"intersection",raw:`Omit<NavigationTabProps, "render"> & {
  className: string
}`,elements:[{name:"Omit",elements:[{name:"signature",type:"object",raw:`{
  text: string
  href: string
  active?: boolean
  handleClick?: (event: React.MouseEvent) => void
  variant?: TitleBlockVariant
  id?: string
  automationId?: string
  /**
   * Custom render for the tab. Commonly used to replace the link with a router link component.
   * Props given to the NavigationTab component will be passed back, along with a decorated className.
   * It is up to you to reapply them to your custom component.
   */
  render?: (props: CustomNavigationTabProps) => JSX.Element
}`,signature:{properties:[{key:"text",value:{name:"string",required:!0}},{key:"href",value:{name:"string",required:!0}},{key:"active",value:{name:"boolean",required:!1}},{key:"handleClick",value:{name:"signature",type:"function",raw:"(event: React.MouseEvent) => void",signature:{arguments:[{type:{name:"ReactMouseEvent",raw:"React.MouseEvent"},name:"event"}],return:{name:"void"}},required:!1}},{key:"variant",value:{name:"union",raw:'"admin" | "education"',elements:[{name:"literal",value:'"admin"'},{name:"literal",value:'"education"'}],required:!1}},{key:"id",value:{name:"string",required:!1}},{key:"automationId",value:{name:"string",required:!1}},{key:"render",value:{name:"signature",type:"function",raw:"(props: CustomNavigationTabProps) => JSX.Element",signature:{arguments:[{type:{name:"CustomNavigationTabProps"},name:"props"}],return:{name:"JSX.Element"}},required:!1},description:`Custom render for the tab. Commonly used to replace the link with a router link component.
Props given to the NavigationTab component will be passed back, along with a decorated className.
It is up to you to reapply them to your custom component.`}]}},{name:"literal",value:'"render"'}],raw:'Omit<NavigationTabProps, "render">'},{name:"signature",type:"object",raw:`{
  className: string
}`,signature:{properties:[{key:"className",value:{name:"string",required:!0}}]}}]},name:"props"}],return:{name:"JSX.Element"}}},description:`Custom render for the tab. Commonly used to replace the link with a router link component.
Props given to the NavigationTab component will be passed back, along with a decorated className.
It is up to you to reapply them to your custom component.`}}};export{ne as N,te as T};

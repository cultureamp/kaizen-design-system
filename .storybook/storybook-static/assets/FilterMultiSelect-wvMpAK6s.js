import{R as e,r as d}from"./index-CTjT7uj6.js";import{$ as re,a as ae}from"./useButton-CDp2hby9.js";import{g as ie,i as se,j as R}from"./SelectionManager-yuMfDyd5.js";import{$ as le}from"./useMenuTriggerState-D_-PdoOj.js";import{c as oe}from"./useCollator-DHdgfgeP.js";import{$ as ue,c as ce,a as me,b as de}from"./useListState-CBqvwiGH.js";import{V as N}from"./VisuallyHidden-CDYjeGzr.js";import{F as pe}from"./FilterButton-BGzpTfmP.js";import{F as ye}from"./FilterButtonRemovable-CDjh8qGF.js";import{I as ge}from"./InputSearch-DY9HBN0G.js";import{u as be}from"./useIntl-Ci3jBQGG.js";import{c as h}from"./index-CCQ3W5xA.js";import{D as fe}from"./Divider-B-j384PU.js";import{b as ve}from"./focusSafely-ByiDPXQJ.js";import{C as Se}from"./CheckIcon-BwUvLWmE.js";import{B as he}from"./Badge-D9GUNioS.js";import{L as E}from"./LoadingInput-X-emq8Sb.js";import{L as S}from"./LoadingParagraph-CXl7iitU.js";import{B as qe}from"./Button-DDkdQqLR.js";import{T as Te}from"./Text-D2gQH1xL.js";const B=e.createContext({});function U({isOpen:t,defaultOpen:n,onOpenChange:a,children:r}){const i=le({isOpen:t,defaultOpen:n,onOpenChange:a}),s=d.useRef(null),{menuTriggerProps:l,menuProps:u}=ie({},i,s),{buttonProps:o}=re(l,s);return e.createElement(B.Provider,{value:{menuTriggerProps:l,buttonProps:o,menuProps:u,menuTriggerState:i,buttonRef:s}},r)}const I=()=>d.useContext(B),z=({children:t})=>e.createElement(B.Consumer,null,t);U.__docgenInfo={description:"",methods:[],displayName:"MenuTriggerProvider",props:{isOpen:{required:!1,tsType:{name:"boolean"},description:""},defaultOpen:{required:!1,tsType:{name:"boolean"},description:""},onOpenChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(isOpen: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"isOpen"}],return:{name:"void"}}},description:""},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};z.__docgenInfo={description:"",methods:[],displayName:"MenuTriggerConsumer"};const P=e.createContext({}),G=t=>{const{onSearchInputChange:n,...a}=t,[r,i]=d.useState(""),{menuProps:s}=I();e.useEffect(()=>{n&&n(r)},[r,n]);const l=d.useCallback(c=>r?Array.from(c).filter(y=>y.textValue.toLowerCase().includes(r.toLowerCase())):c,[r]),u=ue({...a,children:c=>e.createElement(ce,{key:c.value},c.label),filter:n?void 0:l}),o=e.createRef(),{listBoxProps:g,labelProps:p}=me({...s,...a,disallowEmptySelection:!0},u,o);return e.createElement(P.Provider,{value:{listBoxProps:g,labelProps:p,selectionState:u,listRef:o,setSearchQuery:i,searchQuery:r}},e.createElement(N,{...p},a.label),a.children)},q=()=>d.useContext(P),Y=({children:t})=>e.createElement(P.Consumer,null,t);G.__docgenInfo={description:"",methods:[],displayName:"SelectionProvider",props:{selectionMode:{required:!0,tsType:{name:"SelectionMode"},description:""},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},items:{required:!1,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  label: string
  value: Key
  count?: string
  isDisabled?: boolean
}`,signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"value",value:{name:"Key",required:!0}},{key:"count",value:{name:"string",required:!1}},{key:"isDisabled",value:{name:"boolean",required:!1}}]}}],raw:"ItemType[]"},description:""},onSelectionChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(keys: Selection) => void",signature:{arguments:[{type:{name:"Selection"},name:"keys"}],return:{name:"void"}}},description:""},selectedKeys:{required:!1,tsType:{name:"Selection"},description:"The currently selected keys in the collection (controlled)."},defaultSelectedKeys:{required:!1,tsType:{name:"Selection"},description:"The initial selected keys in the collection (uncontrolled)."},label:{required:!0,tsType:{name:"string"},description:""},disabledKeys:{required:!1,tsType:{name:"Selection"},description:""},onSearchInputChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(searchInput: string) => void",signature:{arguments:[{type:{name:"string"},name:"searchInput"}],return:{name:"void"}}},description:""}}};Y.__docgenInfo={description:"",methods:[],displayName:"SelectionConsumer"};const Re="_listBox_ygerf_2",ke="_overflown_ygerf_11",Me="_hidden_ygerf_15",Ne="_noResultsWrapper_ygerf_19",k={listBox:Re,overflown:ke,hidden:Me,noResultsWrapper:Ne},V=(t,n)=>Array.from(n).reduce((r,i)=>{const s=t.getItem(i);return s?[...r,s]:r},[]),x=({children:t})=>{const{listBoxProps:n,listRef:a,selectionState:r}=q(),[i,s]=d.useState(!1);d.useEffect(()=>{const b=a.current;b&&s(b.scrollHeight>b.clientHeight)},[a]);const{collection:l,disabledKeys:u,selectionManager:{selectedKeys:o}}=r,g=V(l,u),p=V(l,o),c=Array.from(l).filter(b=>!u.has(b.key)&&!o.has(b.key)),y=Array.from(l),v=y.length===0,[T,_]=d.useState({selectedItems:p,unselectedItems:c,disabledItems:g,allItems:y,hasNoItems:v});return d.useEffect(()=>{_({selectedItems:p,disabledItems:g,unselectedItems:c,allItems:y,hasNoItems:v})},[r.collection.size]),v?e.createElement(e.Fragment,null,e.createElement("div",{className:k.noResultsWrapper},t(T)),e.createElement("ul",{ref:a,className:k.hidden})):e.createElement("ul",{...n,ref:a,className:h(k.listBox,i&&k.overflown)},t(T))};x.displayName="FilterMultiSelect.ListBox";x.__docgenInfo={description:"",methods:[],displayName:"FilterMultiSelect.ListBox",props:{children:{required:!0,tsType:{name:"signature",type:"function",raw:"(items: ListBoxItems) => React.ReactNode",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  selectedItems: MultiSelectItem[]
  unselectedItems: MultiSelectItem[]
  disabledItems: MultiSelectItem[]
  allItems: MultiSelectItem[]
  hasNoItems: boolean
}`,signature:{properties:[{key:"selectedItems",value:{name:"Array",elements:[{name:"Node",elements:[{name:"signature",type:"object",raw:`{
  label: string
  value: Key
  count?: string
  isDisabled?: boolean
}`,signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"value",value:{name:"Key",required:!0}},{key:"count",value:{name:"string",required:!1}},{key:"isDisabled",value:{name:"boolean",required:!1}}]}}],raw:"Node<ItemType>"}],raw:"MultiSelectItem[]",required:!0}},{key:"unselectedItems",value:{name:"Array",elements:[{name:"Node",elements:[{name:"signature",type:"object",raw:`{
  label: string
  value: Key
  count?: string
  isDisabled?: boolean
}`,signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"value",value:{name:"Key",required:!0}},{key:"count",value:{name:"string",required:!1}},{key:"isDisabled",value:{name:"boolean",required:!1}}]}}],raw:"Node<ItemType>"}],raw:"MultiSelectItem[]",required:!0}},{key:"disabledItems",value:{name:"Array",elements:[{name:"Node",elements:[{name:"signature",type:"object",raw:`{
  label: string
  value: Key
  count?: string
  isDisabled?: boolean
}`,signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"value",value:{name:"Key",required:!0}},{key:"count",value:{name:"string",required:!1}},{key:"isDisabled",value:{name:"boolean",required:!1}}]}}],raw:"Node<ItemType>"}],raw:"MultiSelectItem[]",required:!0}},{key:"allItems",value:{name:"Array",elements:[{name:"Node",elements:[{name:"signature",type:"object",raw:`{
  label: string
  value: Key
  count?: string
  isDisabled?: boolean
}`,signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"value",value:{name:"Key",required:!0}},{key:"count",value:{name:"string",required:!1}},{key:"isDisabled",value:{name:"boolean",required:!1}}]}}],raw:"Node<ItemType>"}],raw:"MultiSelectItem[]",required:!0}},{key:"hasNoItems",value:{name:"boolean",required:!0}}]}},name:"items"}],return:{name:"ReactReactNode",raw:"React.ReactNode"}}},description:""}}};const Ie="_listBoxSection_10g0x_4",we="_listBoxSectionHeader_10g0x_10",Q={listBoxSection:Ie,listBoxSectionHeader:we},C=({items:t,children:n,sectionName:a,...r})=>{const i=d.useId(),s="sectionHeader"in r;return e.createElement("li",{role:"presentation"},e.createElement("ul",{className:Q.listBoxSection,"aria-label":s?void 0:a,"aria-labelledby":s?i:void 0,role:"group"},s&&e.createElement("li",{className:Q.listBoxSectionHeader,id:i,role:"presentation"},a&&e.createElement(N,null,a,". "),r.sectionHeader),Array.from(t).map(l=>l!=null&&n(l))))};C.displayName="ListBoxSection";C.__docgenInfo={description:"",methods:[],displayName:"ListBoxSection",props:{items:{required:!0,tsType:{name:"Array",elements:[{name:"Node",elements:[{name:"signature",type:"object",raw:`{
  label: string
  value: Key
  count?: string
  isDisabled?: boolean
}`,signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"value",value:{name:"Key",required:!0}},{key:"count",value:{name:"string",required:!1}},{key:"isDisabled",value:{name:"boolean",required:!1}}]}}],raw:"Node<ItemType>"}],raw:"MultiSelectItem[]"},description:""},children:{required:!0,tsType:{name:"signature",type:"function",raw:"(item: MultiSelectItem) => React.ReactNode",signature:{arguments:[{type:{name:"Node",elements:[{name:"signature",type:"object",raw:`{
  label: string
  value: Key
  count?: string
  isDisabled?: boolean
}`,signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"value",value:{name:"Key",required:!0}},{key:"count",value:{name:"string",required:!1}},{key:"isDisabled",value:{name:"boolean",required:!1}}]}}],raw:"Node<ItemType>"},name:"item"}],return:{name:"ReactReactNode",raw:"React.ReactNode"}}},description:""}}};const _e="_container_5hpcc_2",Le={container:_e},D=t=>e.createElement("div",{className:Le.container},e.createElement(qe,{...t,fullWidth:!0}));D.displayName="FilterMultiSelect.LoadMoreButton";D.__docgenInfo={description:"",methods:[],displayName:"FilterMultiSelect.LoadMoreButton"};const Ee="_footer_1d1pm_3",Be={footer:Ee},w=({children:t})=>e.createElement("div",{className:Be.footer},t);w.displayName="FilterMultiSelect.MenuFooter";w.__docgenInfo={description:"",methods:[],displayName:"FilterMultiSelect.MenuFooter",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const Pe="_loadingInput_1q8c3_2",xe="_loadingContainer_1q8c3_6",W={loadingInput:Pe,loadingContainer:xe},O=({isAnimated:t=!1})=>e.createElement(e.Fragment,null,e.createElement("div",{className:W.loadingContainer},e.createElement(E,{classNameOverride:W.loadingInput,isAnimated:t}),e.createElement(S,{isAnimated:t}),e.createElement(S,{isAnimated:t}),e.createElement(S,{isAnimated:t}),e.createElement(S,{isAnimated:t}),e.createElement(S,{isAnimated:t})),e.createElement(w,null,e.createElement(E,{width:40,height:36,isAnimated:t}),e.createElement(E,{width:30,height:36,isAnimated:t})));O.displayName="FilterMultiSelect.MenuLoadingSkeleton";O.__docgenInfo={description:"",methods:[],displayName:"FilterMultiSelect.MenuLoadingSkeleton",props:{isAnimated:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const Ce="_menuPopup_1x6ai_5",De={menuPopup:Ce},F=({isLoading:t,loadingSkeleton:n,children:a})=>{const{menuTriggerState:r}=I(),i=()=>r.close(),s=e.createRef(),{overlayProps:l}=se({onClose:i,isOpen:r.isOpen,isDismissable:!0},s);return r.isOpen?e.createElement("div",{...l,ref:s,className:De.menuPopup},t&&n?e.createElement(e.Fragment,null,e.createElement(R,{onDismiss:i}),n,e.createElement(R,{onDismiss:i})):e.createElement(oe,{contain:!0,autoFocus:!0,restoreFocus:!0},e.createElement(R,{onDismiss:i}),a,e.createElement(R,{onDismiss:i}))):e.createElement(e.Fragment,null)};F.displayName="FilterMultiSelect.MenuPopup";F.__docgenInfo={description:"",methods:[],displayName:"FilterMultiSelect.MenuPopup",props:{isLoading:{required:!1,tsType:{name:"boolean"},description:""},loadingSkeleton:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const Oe="_icon_rbgjt_5",Fe="_option_rbgjt_17",Ae="_badge_rbgjt_38",$e="_isFocused_rbgjt_45",Ke="_isDisabled_rbgjt_61",He="_badgeContainer_rbgjt_72",je="_isSelected_rbgjt_78",f={icon:Oe,option:Fe,badge:Ae,isFocused:$e,isDisabled:Ke,badgeContainer:He,isSelected:je},A=({classNameOverride:t,item:n})=>{var p,c,y;const{selectionState:a}=q(),r=e.createRef(),{optionProps:i,isSelected:s,isDisabled:l}=de({key:n.key},a,r),{isFocusVisible:u,focusProps:o}=ae(),g=d.useId();return e.createElement("li",{...ve(i,o),ref:r,className:h(f.option,t,s&&f.isSelected,u&&f.isFocusVisible,l&&f.isDisabled),"aria-label":(p=n.value)==null?void 0:p.label,"aria-describedby":(c=n.value)!=null&&c.count?g:void 0},e.createElement("span",{className:h(f.icon,s&&f.isSelected)},s&&e.createElement(Se,{role:"presentation"})),n.rendered,((y=n.value)==null?void 0:y.count)&&e.createElement("span",{id:g,className:f.badgeContainer},e.createElement(he,{classNameOverride:f.badge},n.value.count),e.createElement(N,null," available")))};A.displayName="FilterMultiSelect.Option";A.__docgenInfo={description:"",methods:[],displayName:"FilterMultiSelect.Option",props:{classNameOverride:{required:!1,tsType:{name:"string"},description:""},item:{required:!0,tsType:{name:"Node",elements:[{name:"signature",type:"object",raw:`{
  label: string
  value: Key
  count?: string
  isDisabled?: boolean
}`,signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"value",value:{name:"Key",required:!0}},{key:"count",value:{name:"string",required:!1}},{key:"isDisabled",value:{name:"boolean",required:!1}}]}}],raw:"Node<ItemType>"},description:""}}};const Je="_container_txiik_1",Xe={container:Je},$=({children:t,...n})=>e.createElement("div",{className:Xe.container,...n},e.createElement(Te,{variant:"extra-small",color:"dark-reduced-opacity"},t));$.displayName="FilterMultiSelect.NoResults";$.__docgenInfo={description:"",methods:[],displayName:"FilterMultiSelect.NoResults",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const Ve="_inputSearchContainer_1p9k5_2",Qe={inputSearchContainer:Ve},K=({label:t,id:n,isLoading:a})=>{const{formatMessage:r}=be(),{setSearchQuery:i,searchQuery:s}=q(),l=y=>{i(y.target.value)},u=()=>i(""),o=d.useId(),g=n??o,p=r({id:"filterMultiSelectSearchInput.label",defaultMessage:"Filter options by search query",description:"Label for the search input"}),c=r({id:"filterMultiSelectSearchInput.placeholder",defaultMessage:"Search…",description:"Placeholder for the search input"});return e.createElement("div",{className:Qe.inputSearchContainer},e.createElement(ge,{id:g,"aria-label":t??p,secondary:!0,placeholder:c,value:s,onChange:l,onClear:u,loading:a}))};K.displayName="FilterMultiSelect.SearchInput";K.__docgenInfo={description:"",methods:[],displayName:"FilterMultiSelect.SearchInput",props:{label:{required:!1,tsType:{name:"string"},description:""},id:{required:!1,tsType:{name:"string"},description:""},isLoading:{required:!1,tsType:{name:"boolean"},description:""}}};const We="_divider_qnc3l_1",Ue={divider:We},Z=()=>e.createElement("li",{className:Ue.divider,"aria-hidden":"true"},e.createElement(fe,{variant:"canvas"}));Z.__docgenInfo={description:"",methods:[],displayName:"SectionDivider"};const ze="_button_cgf5d_5",Ge="_isDisabled_cgf5d_34",M={button:ze,isDisabled:Ge},H=()=>{const{selectionState:t}=q(),n=Array.from(t.collection.getKeys()),a=Array.from(t.selectionManager.selectedKeys),r=n.length===0||!n.find(i=>t.selectionManager.isSelected(i));return e.createElement("button",{type:"button",className:h(M.button,r&&M.isDisabled),"aria-disabled":r,onClick:()=>{!r&&t.selectionManager.setSelectedKeys(a.filter(i=>!n.includes(i)))}},"Clear",e.createElement(N,null," selections"))};H.displayName="FilterMultiSelect.ClearButton";H.__docgenInfo={description:"",methods:[],displayName:"FilterMultiSelect.ClearButton"};const j=()=>{const{selectionState:t}=q(),n=Array.from(t.selectionManager.selectedKeys),a=t.disabledKeys?Array.from(t.disabledKeys):[],r=Array.from(t.collection.getKeys()).filter(i=>!a.includes(i));return e.createElement("button",{type:"button",className:h(M.button,t.selectionManager.isSelectAll&&M.isDisabled),"aria-disabled":t.selectionManager.isSelectAll,onClick:()=>!t.selectionManager.isSelectAll&&t.selectionManager.setSelectedKeys([...n,...r])},"Select all")};j.displayName="FilterMultiSelect.SelectAllButton";j.__docgenInfo={description:"",methods:[],displayName:"FilterMultiSelect.SelectAllButton"};const Ye=", ",ee=(t,n,a=0)=>{if(t.length===1||t.join("").replace(/,/g,"").length<n){const i=a>0?` + ${a} more`:"";return`${t.join(Ye)}${i}`}const r=t.slice(0,t.length-1);return ee(r,n,a+1)},te=(t,n)=>ee(t,n),St=(t,n)=>!t||!n?[]:t==="all"?n.map(a=>a.label):Array.from(t).map(a=>{var r;return((r=n.find(i=>i.value===a))==null?void 0:r.label)??""}).filter(a=>a!==""),J=({selectedOptionLabels:t,label:n,classNameOverride:a,labelCharacterLimitBeforeTruncate:r=50})=>{const{buttonProps:i,buttonRef:s,menuTriggerState:l}=I(),u=d.useRef({triggerRef:s});return e.createElement(pe,{ref:u,...i,label:n,selectedValue:te(t,r),classNameOverride:a,isOpen:l.isOpen})};J.displayName="FilterMultiSelect.TriggerButton";J.__docgenInfo={description:"",methods:[],displayName:"FilterMultiSelect.TriggerButton",props:{label:{required:!0,tsType:{name:"string"},description:""},selectedOptionLabels:{required:!0,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""},labelCharacterLimitBeforeTruncate:{required:!1,tsType:{name:"number"},description:`Character limit of the button label.
It will always show the first selected label regardless if it exceeds the given character limit.`,defaultValue:{value:"50",computed:!1}},classNameOverride:{required:!1,tsType:{name:"string"},description:""}}};const X=({label:t,selectedOptionLabels:n,labelCharacterLimitBeforeTruncate:a=50,classNameOverride:r,onRemove:i})=>{const{buttonProps:s,buttonRef:l,menuTriggerState:u}=I(),o=d.useRef({triggerRef:l});return e.createElement(ye,{ref:o,classNameOverride:r,triggerButtonProps:{...s,label:t,selectedValue:te(n,a),isOpen:u.isOpen},removeButtonProps:{onClick:i}})};X.displayName="FilterMultiSelect.RemovableTrigger";X.__docgenInfo={description:"",methods:[],displayName:"FilterMultiSelect.RemovableTrigger",props:{label:{required:!0,tsType:{name:"string"},description:""},selectedOptionLabels:{required:!0,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""},labelCharacterLimitBeforeTruncate:{required:!1,tsType:{name:"number"},description:`Character limit of the button label.
It will always show the first selected label regardless if it exceeds the given character limit.`,defaultValue:{value:"50",computed:!1}},classNameOverride:{required:!1,tsType:{name:"string"},description:""},onRemove:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const m=({trigger:t,children:n,isOpen:a,defaultOpen:r,onOpenChange:i,isLoading:s,loadingSkeleton:l,label:u,items:o,selectedKeys:g,defaultSelectedKeys:p,onSelectionChange:c,selectionMode:y="multiple",onSearchInputChange:v})=>{const T={isOpen:a,defaultOpen:r,onOpenChange:i},_={isLoading:s,loadingSkeleton:l},b=new Set(o==null?void 0:o.filter(L=>L.isDisabled===!0).map(L=>L.value)),ne={label:u,items:o,selectedKeys:g,defaultSelectedKeys:p,onSelectionChange:c,selectionMode:y,disabledKeys:b,onSearchInputChange:v};return e.createElement(U,{...T},e.createElement("div",null,e.createElement(z,null,t),e.createElement(F,{..._},e.createElement(G,{...ne},e.createElement(Y,null,n)))))};m.displayName="FilterMultiSelect";m.TriggerButton=J;m.RemovableTrigger=X;m.SearchInput=K;m.ListBox=x;m.ListBoxSection=C;m.SectionDivider=Z;m.Option=A;m.SelectAllButton=j;m.ClearButton=H;m.MenuFooter=w;m.MenuLoadingSkeleton=O;m.LoadMoreButton=D;m.NoResults=$;m.__docgenInfo={description:"",methods:[{name:"TriggerButton",docblock:null,modifiers:["static"],params:[{name:`{
  selectedOptionLabels,
  label,
  classNameOverride,
  labelCharacterLimitBeforeTruncate = 50,
}: FilterTriggerButtonProps`,optional:!1,type:{name:"signature",type:"object",raw:`{
  label: string
  selectedOptionLabels: string[]
  /**
   * Character limit of the button label.
   * It will always show the first selected label regardless if it exceeds the given character limit.
   */
  labelCharacterLimitBeforeTruncate?: number
  classNameOverride?: string // TODO: migrate it to use OverrideClassName<T> and omit the props controlled by React-Aria
}`,signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"selectedOptionLabels",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"labelCharacterLimitBeforeTruncate",value:{name:"number",required:!1},description:`Character limit of the button label.
It will always show the first selected label regardless if it exceeds the given character limit.`},{key:"classNameOverride",value:{name:"string",required:!1}}]},alias:"FilterTriggerButtonProps"}}],returns:{type:{name:"JSX.Element"}}},{name:"RemovableTrigger",docblock:null,modifiers:["static"],params:[{name:`{
  label,
  selectedOptionLabels,
  labelCharacterLimitBeforeTruncate = 50,
  classNameOverride,
  onRemove,
}: RemovableFilterTriggerProps`,optional:!1,type:{name:"intersection",raw:`FilterTriggerButtonProps & {
  onRemove: () => void
}`,elements:[{name:"signature",type:"object",raw:`{
  label: string
  selectedOptionLabels: string[]
  /**
   * Character limit of the button label.
   * It will always show the first selected label regardless if it exceeds the given character limit.
   */
  labelCharacterLimitBeforeTruncate?: number
  classNameOverride?: string // TODO: migrate it to use OverrideClassName<T> and omit the props controlled by React-Aria
}`,signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"selectedOptionLabels",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"labelCharacterLimitBeforeTruncate",value:{name:"number",required:!1},description:`Character limit of the button label.
It will always show the first selected label regardless if it exceeds the given character limit.`},{key:"classNameOverride",value:{name:"string",required:!1}}]}},{name:"signature",type:"object",raw:`{
  onRemove: () => void
}`,signature:{properties:[{key:"onRemove",value:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}},required:!0}}]}}],alias:"RemovableFilterTriggerProps"}}],returns:{type:{name:"JSX.Element"}}},{name:"SearchInput",docblock:null,modifiers:["static"],params:[{name:`{
  label,
  id,
  isLoading,
}: SearchInputProps`,optional:!1,type:{name:"signature",type:"object",raw:`{
  label?: string
  id?: string
  isLoading?: boolean
}`,signature:{properties:[{key:"label",value:{name:"string",required:!1}},{key:"id",value:{name:"string",required:!1}},{key:"isLoading",value:{name:"boolean",required:!1}}]},alias:"SearchInputProps"}}],returns:{type:{name:"JSX.Element"}}},{name:"ListBox",docblock:null,modifiers:["static"],params:[{name:"{ children }: ListBoxProps",optional:!1,type:{name:"signature",type:"object",raw:`{
  children: (items: ListBoxItems) => React.ReactNode
}`,signature:{properties:[{key:"children",value:{name:"signature",type:"function",raw:"(items: ListBoxItems) => React.ReactNode",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  selectedItems: MultiSelectItem[]
  unselectedItems: MultiSelectItem[]
  disabledItems: MultiSelectItem[]
  allItems: MultiSelectItem[]
  hasNoItems: boolean
}`,signature:{properties:[{key:"selectedItems",value:{name:"Array",elements:[{name:"Node",elements:[{name:"signature",type:"object",raw:`{
  label: string
  value: Key
  count?: string
  isDisabled?: boolean
}`,signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"value",value:{name:"Key",required:!0}},{key:"count",value:{name:"string",required:!1}},{key:"isDisabled",value:{name:"boolean",required:!1}}]}}],raw:"Node<ItemType>"}],raw:"MultiSelectItem[]",required:!0}},{key:"unselectedItems",value:{name:"Array",elements:[{name:"Node",elements:[{name:"signature",type:"object",raw:`{
  label: string
  value: Key
  count?: string
  isDisabled?: boolean
}`,signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"value",value:{name:"Key",required:!0}},{key:"count",value:{name:"string",required:!1}},{key:"isDisabled",value:{name:"boolean",required:!1}}]}}],raw:"Node<ItemType>"}],raw:"MultiSelectItem[]",required:!0}},{key:"disabledItems",value:{name:"Array",elements:[{name:"Node",elements:[{name:"signature",type:"object",raw:`{
  label: string
  value: Key
  count?: string
  isDisabled?: boolean
}`,signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"value",value:{name:"Key",required:!0}},{key:"count",value:{name:"string",required:!1}},{key:"isDisabled",value:{name:"boolean",required:!1}}]}}],raw:"Node<ItemType>"}],raw:"MultiSelectItem[]",required:!0}},{key:"allItems",value:{name:"Array",elements:[{name:"Node",elements:[{name:"signature",type:"object",raw:`{
  label: string
  value: Key
  count?: string
  isDisabled?: boolean
}`,signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"value",value:{name:"Key",required:!0}},{key:"count",value:{name:"string",required:!1}},{key:"isDisabled",value:{name:"boolean",required:!1}}]}}],raw:"Node<ItemType>"}],raw:"MultiSelectItem[]",required:!0}},{key:"hasNoItems",value:{name:"boolean",required:!0}}]}},name:"items"}],return:{name:"ReactReactNode",raw:"React.ReactNode"}},required:!0}}]},alias:"ListBoxProps"}}],returns:{type:{name:"JSX.Element"}}},{name:"ListBoxSection",docblock:null,modifiers:["static"],params:[{name:`{
  items,
  children,
  sectionName,
  ...restProps
}: ListBoxSectionProps`,optional:!1,type:{name:"intersection",raw:`{
  items: MultiSelectItem[]
  children: (item: MultiSelectItem) => React.ReactNode
} & (SectionHeaderProps | SectionNameProps)`,elements:[{name:"signature",type:"object",raw:`{
  items: MultiSelectItem[]
  children: (item: MultiSelectItem) => React.ReactNode
}`,signature:{properties:[{key:"items",value:{name:"Array",elements:[{name:"Node",elements:[{name:"signature",type:"object",raw:`{
  label: string
  value: Key
  count?: string
  isDisabled?: boolean
}`,signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"value",value:{name:"Key",required:!0}},{key:"count",value:{name:"string",required:!1}},{key:"isDisabled",value:{name:"boolean",required:!1}}]}}],raw:"Node<ItemType>"}],raw:"MultiSelectItem[]",required:!0}},{key:"children",value:{name:"signature",type:"function",raw:"(item: MultiSelectItem) => React.ReactNode",signature:{arguments:[{type:{name:"Node",elements:[{name:"signature",type:"object",raw:`{
  label: string
  value: Key
  count?: string
  isDisabled?: boolean
}`,signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"value",value:{name:"Key",required:!0}},{key:"count",value:{name:"string",required:!1}},{key:"isDisabled",value:{name:"boolean",required:!1}}]}}],raw:"Node<ItemType>"},name:"item"}],return:{name:"ReactReactNode",raw:"React.ReactNode"}},required:!0}}]}},{name:"unknown"}],alias:"ListBoxSectionProps"}}],returns:{type:{name:"JSX.Element"}}},{name:"SectionDivider",docblock:null,modifiers:["static"],params:[],returns:{type:{name:"JSX.Element"}}},{name:"Option",docblock:null,modifiers:["static"],params:[{name:`{
  classNameOverride,
  item,
}: MultiSelectOptionProps`,optional:!1,type:{name:"MultiSelectOptionProps",alias:"MultiSelectOptionProps"}}],returns:{type:{name:"JSX.Element"}}},{name:"SelectAllButton",docblock:null,modifiers:["static"],params:[],returns:{type:{name:"JSX.Element"}}},{name:"ClearButton",docblock:null,modifiers:["static"],params:[],returns:{type:{name:"JSX.Element"}}},{name:"MenuFooter",docblock:null,modifiers:["static"],params:[{name:"{ children }: MenuFooterProps",optional:!1,type:{name:"signature",type:"object",raw:`{
  children: React.ReactNode
}`,signature:{properties:[{key:"children",value:{name:"ReactReactNode",raw:"React.ReactNode",required:!0}}]},alias:"MenuFooterProps"}}],returns:{type:{name:"JSX.Element"}}},{name:"MenuLoadingSkeleton",docblock:null,modifiers:["static"],params:[{name:`{
  isAnimated = false,
}: MenuLoadingSkeletonProps`,optional:!1,type:{name:"signature",type:"object",raw:`{
  isAnimated?: boolean
}`,signature:{properties:[{key:"isAnimated",value:{name:"boolean",required:!1}}]},alias:"MenuLoadingSkeletonProps"}}],returns:{type:{name:"JSX.Element"}}},{name:"LoadMoreButton",docblock:null,modifiers:["static"],params:[{name:"props",optional:!1,type:{name:"ButtonProps",alias:"LoadMoreButtonProps"}}],returns:{type:{name:"JSX.Element"}}},{name:"NoResults",docblock:null,modifiers:["static"],params:[{name:`{
  children,
  ...restProps
}: NoResultsProps`,optional:!1,type:{name:"intersection",raw:`{
  children: React.ReactNode
} & HTMLAttributes<HTMLDivElement>`,elements:[{name:"signature",type:"object",raw:`{
  children: React.ReactNode
}`,signature:{properties:[{key:"children",value:{name:"ReactReactNode",raw:"React.ReactNode",required:!0}}]}},{name:"HTMLAttributes",elements:[{name:"HTMLDivElement"}],raw:"HTMLAttributes<HTMLDivElement>"}],alias:"NoResultsProps"}}],returns:{type:{name:"JSX.Element"}}}],displayName:"FilterMultiSelect",props:{trigger:{required:!0,tsType:{name:"signature",type:"function",raw:"(value?: MenuTriggerProviderContextType) => React.ReactNode",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  menuTriggerProps: HTMLAttributes<HTMLElement>
  buttonProps: ButtonHTMLAttributes<HTMLButtonElement>
  menuProps: AriaMenuOptions<ItemType>
  menuTriggerState: MenuTriggerState
  buttonRef: React.RefObject<HTMLButtonElement>
}`,signature:{properties:[{key:"menuTriggerProps",value:{name:"HTMLAttributes",elements:[{name:"HTMLElement"}],raw:"HTMLAttributes<HTMLElement>",required:!0}},{key:"buttonProps",value:{name:"ButtonHTMLAttributes",elements:[{name:"HTMLButtonElement"}],raw:"ButtonHTMLAttributes<HTMLButtonElement>",required:!0}},{key:"menuProps",value:{name:"AriaMenuOptions",elements:[{name:"signature",type:"object",raw:`{
  label: string
  value: Key
  count?: string
  isDisabled?: boolean
}`,signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"value",value:{name:"Key",required:!0}},{key:"count",value:{name:"string",required:!1}},{key:"isDisabled",value:{name:"boolean",required:!1}}]}}],raw:"AriaMenuOptions<ItemType>",required:!0}},{key:"menuTriggerState",value:{name:"MenuTriggerState",required:!0}},{key:"buttonRef",value:{name:"ReactRefObject",raw:"React.RefObject<HTMLButtonElement>",elements:[{name:"HTMLButtonElement"}],required:!0}}]}},name:"value"}],return:{name:"ReactReactNode",raw:"React.ReactNode"}}},description:""},children:{required:!0,tsType:{name:"signature",type:"function",raw:"(value?: SelectionProviderContextType) => React.ReactNode",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  listBoxProps: HTMLAttributes<HTMLElement>
  labelProps: HTMLAttributes<HTMLElement>
  selectionState: ListState<ItemType>
  listRef: React.RefObject<HTMLUListElement>
  searchQuery?: string
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>
}`,signature:{properties:[{key:"listBoxProps",value:{name:"HTMLAttributes",elements:[{name:"HTMLElement"}],raw:"HTMLAttributes<HTMLElement>",required:!0}},{key:"labelProps",value:{name:"HTMLAttributes",elements:[{name:"HTMLElement"}],raw:"HTMLAttributes<HTMLElement>",required:!0}},{key:"selectionState",value:{name:"ListState",elements:[{name:"signature",type:"object",raw:`{
  label: string
  value: Key
  count?: string
  isDisabled?: boolean
}`,signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"value",value:{name:"Key",required:!0}},{key:"count",value:{name:"string",required:!1}},{key:"isDisabled",value:{name:"boolean",required:!1}}]}}],raw:"ListState<ItemType>",required:!0}},{key:"listRef",value:{name:"ReactRefObject",raw:"React.RefObject<HTMLUListElement>",elements:[{name:"HTMLUListElement"}],required:!0}},{key:"searchQuery",value:{name:"string",required:!1}},{key:"setSearchQuery",value:{name:"ReactDispatch",raw:"React.Dispatch<React.SetStateAction<string>>",elements:[{name:"ReactSetStateAction",raw:"React.SetStateAction<string>",elements:[{name:"string"}]}],required:!0}}]}},name:"value"}],return:{name:"ReactReactNode",raw:"React.ReactNode"}}},description:""},label:{required:!0,tsType:{name:"string"},description:""},items:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  label: string
  value: Key
  count?: string
  isDisabled?: boolean
}`,signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"value",value:{name:"Key",required:!0}},{key:"count",value:{name:"string",required:!1}},{key:"isDisabled",value:{name:"boolean",required:!1}}]}}],raw:"ItemType[]"},description:""},selectedKeys:{required:!1,tsType:{name:"Selection"},description:""},defaultSelectedKeys:{required:!1,tsType:{name:"Selection"},description:""},onSelectionChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(keys: Selection) => void",signature:{arguments:[{type:{name:"Selection"},name:"keys"}],return:{name:"void"}}},description:""},selectionMode:{required:!1,tsType:{name:"SelectionMode"},description:"",defaultValue:{value:'"multiple"',computed:!1}},onSearchInputChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(searchInput: string) => void",signature:{arguments:[{type:{name:"string"},name:"searchInput"}],return:{name:"void"}}},description:""}}};export{m as F,St as g};

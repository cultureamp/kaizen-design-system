import{R as e,r as S}from"./index-CTjT7uj6.js";import{$ as J}from"./useButton-CDp2hby9.js";import{g as V,t as X,$ as K,a as Q,b as Y,S as Z,c as ee,L as te,d as ae,O as ne,e as re,f as le}from"./transformSelectItemToCollectionElement-Nmt2Onfe.js";import{c as C}from"./index-CCQ3W5xA.js";import{u as oe}from"./floating-ui.react-dom-DficdbDq.js";import{C as se}from"./ChevronDownIcon-prLLyjG_.js";import{C as ie}from"./ChevronUpIcon-D9pr3Qd6.js";import{L as ue}from"./Label-DlmzItqQ.js";import{P as ce}from"./Popover-7U2x2z8g.js";import{F as P}from"./FieldMessage-D8OmrYjz.js";const pe="_iconWrapper_2cr38_5",de="_icon_2cr38_5",me="_selectToggle_2cr38_14",be="_placeholder_2cr38_68",ve="_error_2cr38_72",ge="_caution_2cr38_76",ye="_disabled_2cr38_80",he="_reversed_2cr38_87",fe="_value_2cr38_121",a={iconWrapper:pe,icon:de,selectToggle:me,placeholder:be,error:ve,caution:ge,disabled:ye,reversed:he,value:fe},b=e.forwardRef(({label:l,labelProps:u,value:o,valueProps:c,isOpen:v,placeholder:p="Select",status:s,isDisabled:r,isReversed:d,classNameOverride:g,...y},i)=>e.createElement("div",null,e.createElement(ue,{...u,reversed:d,disabled:r},l),e.createElement("button",{type:"button",role:"combobox",...y,ref:i,className:C(a.selectToggle,o==null&&a.placeholder,s==="error"&&a.error,s==="caution"&&a.caution,r&&a.disabled,d&&a.reversed,g)},e.createElement("span",{...c,className:a.value},o??p),v?e.createElement(ie,{role:"presentation",classNameOverride:a.icon}):e.createElement(se,{role:"presentation",classNameOverride:a.icon}))));b.displayName="SelectToggle";b.__docgenInfo={description:"",methods:[],displayName:"SelectToggle",props:{placeholder:{defaultValue:{value:'"Select"',computed:!1},required:!1}}};const Oe="_container_1loyy_5",Ne="_notFullWidth_1loyy_10",I={container:Oe,notFullWidth:Ne},n=({label:l,items:u,id:o,trigger:c,children:v,status:p,validationMessage:s,isReversed:r,isFullWidth:d,disabledValues:g,classNameOverride:y,selectedKey:i,description:h,placeholder:k="",isDisabled:A,portalContainerId:L,..._})=>{var M;const{refs:f}=oe(),O=f.reference,N=o??S.useId(),x=`${N}--description`,H=`${N}--popover`,U=V(u),T={label:l,items:u,children:X,disabledKeys:g??U,selectedKey:typeof i=="number"?i.toString():i,description:h,placeholder:k,isDisabled:A,..._},t=K(T),{labelProps:F,triggerProps:R,valueProps:B,menuProps:D,errorMessageProps:j,descriptionProps:$}=Q(T,t,O),m=R["aria-labelledby"],E={...R,"aria-labelledby":m==null?void 0:m.substring(m.indexOf(" ")+1)},{buttonProps:G}=J(E,O),w={...G,label:l,labelProps:F,value:(M=t==null?void 0:t.selectedItem)==null?void 0:M.rendered,valueProps:B,isOpen:t.isOpen,placeholder:k,status:p,isDisabled:E.isDisabled,isReversed:r,ref:f.setReference},[z,W]=S.useState();return S.useEffect(()=>{if(L){const q=document.getElementById(L);q&&W(q)}},[]),e.createElement("div",{className:C(!d&&I.notFullWidth,y)},e.createElement(Y,{label:l,name:N,state:t,triggerRef:O}),e.createElement("div",{className:I.container},c===void 0?e.createElement(b,{...w}):c(w,w.ref),t.isOpen&&e.createElement(ce,{id:H,portalContainer:z,refs:f,focusOnProps:{onEscapeKey:t.close,onClickOutside:t.close,noIsolation:!0}},e.createElement(Z,{state:t},e.createElement(ee,{menuProps:D},v)))),s&&e.createElement(P,{...j,message:s,status:p,reversed:r}),h&&e.createElement(P,{...$,id:x,message:h,reversed:r}))};n.displayName="Select";n.Section=te;n.SectionDivider=ae;n.Option=ne;n.ItemDefaultRender=re;n.TriggerButton=b;n.ListBox=le;n.__docgenInfo={description:`{@link https://cultureamp.atlassian.net/wiki/spaces/DesignSystem/pages/3081896474/Select Guidance} |
{@link https://cultureamp.design/?path=/docs/components-select--docs Storybook}`,methods:[{name:"Section",docblock:null,modifiers:["static"],params:[{name:`{
  section,
}: ListBoxSectionProps<Option>`,optional:!1,type:{name:"signature",type:"object",raw:`{
  section: SelectOptionGroupNode<Option>
}`,signature:{properties:[{key:"section",value:{name:"intersection",raw:`Omit<Node<SelectOptionGroup<Option>>, "childNodes"> & {
  type: "section"
  hasChildNodes: true
  childNodes: Array<SelectOptionNode<Option>>
}`,elements:[{name:"Omit",elements:[{name:"Node",elements:[{name:"signature",type:"object",raw:`{
  label: string
  options: Iterable<Option>
}`,signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"options",value:{name:"Iterable",elements:[{name:"unknown"}],raw:"Iterable<Option>",required:!0}}]}}],raw:"Node<SelectOptionGroup<Option>>"},{name:"literal",value:'"childNodes"'}],raw:'Omit<Node<SelectOptionGroup<Option>>, "childNodes">'},{name:"signature",type:"object",raw:`{
  type: "section"
  hasChildNodes: true
  childNodes: Array<SelectOptionNode<Option>>
}`,signature:{properties:[{key:"type",value:{name:"literal",value:'"section"',required:!0}},{key:"hasChildNodes",value:{name:"literal",value:"true",required:!0}},{key:"childNodes",value:{name:"Array",elements:[{name:"intersection",raw:`Node<Option> & {
  type: "item"
  hasChildNodes: false
}`,elements:[{name:"Node",elements:[{name:"unknown"}],raw:"Node<Option>"},{name:"signature",type:"object",raw:`{
  type: "item"
  hasChildNodes: false
}`,signature:{properties:[{key:"type",value:{name:"literal",value:'"item"',required:!0}},{key:"hasChildNodes",value:{name:"literal",value:"false",required:!0}}]}}]}],raw:"Array<SelectOptionNode<Option>>",required:!0}}]}}],required:!0}}]},alias:"ListBoxSectionProps"}}],returns:{type:{name:"JSX.Element"}}},{name:"SectionDivider",docblock:null,modifiers:["static"],params:[],returns:{type:{name:"JSX.Element"}}},{name:"Option",docblock:null,modifiers:["static"],params:[{name:`{
  item,
  classNameOverride,
  ...props
}: OptionProps<Option>`,optional:!1,type:{name:"intersection",raw:`{
  item: SelectOptionNode<Option>
} & OverrideClassName<Omit<HTMLAttributes<HTMLLIElement>, "children">>`,elements:[{name:"signature",type:"object",raw:`{
  item: SelectOptionNode<Option>
}`,signature:{properties:[{key:"item",value:{name:"intersection",raw:`Node<Option> & {
  type: "item"
  hasChildNodes: false
}`,elements:[{name:"Node",elements:[{name:"unknown"}],raw:"Node<Option>"},{name:"signature",type:"object",raw:`{
  type: "item"
  hasChildNodes: false
}`,signature:{properties:[{key:"type",value:{name:"literal",value:'"item"',required:!0}},{key:"hasChildNodes",value:{name:"literal",value:"false",required:!0}}]}}],required:!0}}]}},{name:"OverrideClassName",elements:[{name:"Omit",elements:[{name:"HTMLAttributes",elements:[{name:"HTMLLIElement"}],raw:"HTMLAttributes<HTMLLIElement>"},{name:"literal",value:'"children"'}],raw:'Omit<HTMLAttributes<HTMLLIElement>, "children">'}],raw:'OverrideClassName<Omit<HTMLAttributes<HTMLLIElement>, "children">>'}],alias:"OptionProps"}}],returns:{type:{name:"JSX.Element"}}},{name:"ItemDefaultRender",docblock:null,modifiers:["static"],params:[{name:`{
  item,
}: ListItemProps<Option>`,optional:!1,type:{name:"signature",type:"object",raw:`{
  item: SelectItemNode<Option>
}`,signature:{properties:[{key:"item",value:{name:"union",raw:`| SelectOptionNode<Option>
| SelectOptionGroupNode<Option>`,elements:[{name:"intersection",raw:`Node<Option> & {
  type: "item"
  hasChildNodes: false
}`,elements:[{name:"Node",elements:[{name:"unknown"}],raw:"Node<Option>"},{name:"signature",type:"object",raw:`{
  type: "item"
  hasChildNodes: false
}`,signature:{properties:[{key:"type",value:{name:"literal",value:'"item"',required:!0}},{key:"hasChildNodes",value:{name:"literal",value:"false",required:!0}}]}}]},{name:"intersection",raw:`Omit<Node<SelectOptionGroup<Option>>, "childNodes"> & {
  type: "section"
  hasChildNodes: true
  childNodes: Array<SelectOptionNode<Option>>
}`,elements:[{name:"Omit",elements:[{name:"Node",elements:[{name:"signature",type:"object",raw:`{
  label: string
  options: Iterable<Option>
}`,signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"options",value:{name:"Iterable",elements:[{name:"unknown"}],raw:"Iterable<Option>",required:!0}}]}}],raw:"Node<SelectOptionGroup<Option>>"},{name:"literal",value:'"childNodes"'}],raw:'Omit<Node<SelectOptionGroup<Option>>, "childNodes">'},{name:"signature",type:"object",raw:`{
  type: "section"
  hasChildNodes: true
  childNodes: Array<SelectOptionNode<Option>>
}`,signature:{properties:[{key:"type",value:{name:"literal",value:'"section"',required:!0}},{key:"hasChildNodes",value:{name:"literal",value:"true",required:!0}},{key:"childNodes",value:{name:"Array",elements:[{name:"intersection",raw:`Node<Option> & {
  type: "item"
  hasChildNodes: false
}`,elements:[{name:"Node",elements:[{name:"unknown"}],raw:"Node<Option>"},{name:"signature",type:"object",raw:`{
  type: "item"
  hasChildNodes: false
}`,signature:{properties:[{key:"type",value:{name:"literal",value:'"item"',required:!0}},{key:"hasChildNodes",value:{name:"literal",value:"false",required:!0}}]}}]}],raw:"Array<SelectOptionNode<Option>>",required:!0}}]}}]}],required:!0}}]},alias:"ListItemProps"}}],returns:{type:{name:"JSX.Element"}}},{name:"ListBox",docblock:null,modifiers:["static"],params:[{name:`{
  children,
  menuProps,
  classNameOverride,
  ...restProps
}: SingleListBoxProps<Option>`,optional:!1,type:{name:"intersection",raw:`OverrideClassName<
  HTMLAttributes<HTMLUListElement>
> & {
  children: React.ReactNode
  /** Props for the popup. */
  menuProps: AriaListBoxOptions<SelectItem<Option>>
}`,elements:[{name:"OverrideClassName",elements:[{name:"HTMLAttributes",elements:[{name:"HTMLUListElement"}],raw:"HTMLAttributes<HTMLUListElement>"}],raw:`OverrideClassName<
  HTMLAttributes<HTMLUListElement>
>`},{name:"signature",type:"object",raw:`{
  children: React.ReactNode
  /** Props for the popup. */
  menuProps: AriaListBoxOptions<SelectItem<Option>>
}`,signature:{properties:[{key:"children",value:{name:"ReactReactNode",raw:"React.ReactNode",required:!0}},{key:"menuProps",value:{name:"AriaListBoxOptions",elements:[{name:"union",raw:`| Option
| SelectOptionGroup<Option>`,elements:[{name:"Option"},{name:"signature",type:"object",raw:`{
  label: string
  options: Iterable<Option>
}`,signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"options",value:{name:"Iterable",elements:[{name:"Option"}],raw:"Iterable<Option>",required:!0}}]}}]}],raw:"AriaListBoxOptions<SelectItem<Option>>",required:!0},description:"Props for the popup."}]}}],alias:"SingleListBoxProps"}}],returns:{type:{name:"JSX.Element"}}}],displayName:"Select",props:{items:{required:!0,tsType:{name:"Array",elements:[{name:"union",raw:`| Option
| SelectOptionGroup<Option>`,elements:[{name:"unknown"},{name:"signature",type:"object",raw:`{
  label: string
  options: Iterable<Option>
}`,signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"options",value:{name:"Iterable",elements:[{name:"unknown"}],raw:"Iterable<Option>",required:!0}}]}}]}],raw:"Array<SelectItem<Option>>"},description:"Item objects in the collection."},id:{required:!1,tsType:{name:"string"},description:""},trigger:{required:!1,tsType:{name:"signature",type:"function",raw:`(
  selectToggleProps: SelectToggleProps & {
    ref: UseFloatingReturn<HTMLButtonElement>["refs"]["setReference"]
  },
  // @deprecated: This arg is unnecessary now, but provided for legacy usages
  ref: UseFloatingReturn<HTMLButtonElement>["refs"]["setReference"]
) => JSX.Element`,signature:{arguments:[{type:{name:"intersection",raw:`SelectToggleProps & {
  ref: UseFloatingReturn<HTMLButtonElement>["refs"]["setReference"]
}`,elements:[{name:"intersection",raw:`{
  label: React.ReactNode
  labelProps: DOMAttributes<FocusableElement>
  value: React.ReactNode
  /** Props for the element representing the selected value. */
  valueProps: DOMAttributes<FocusableElement>
  isOpen?: boolean
  /**
   * @deprecated Use of placeholder text goes against our a11y standards.
   * Use the \`labelText\` prop to provide a concise name, and the \`description\` prop for any help text.
   */
  placeholder?: string
  /** Updates the styling of the validation. */
  status?: "error" | "caution"
  isDisabled?: boolean
  /** Use the \`reversed\` styles. */
  isReversed?: boolean
} & OverrideClassName<HTMLAttributes<HTMLButtonElement>>`,elements:[{name:"signature",type:"object",raw:`{
  label: React.ReactNode
  labelProps: DOMAttributes<FocusableElement>
  value: React.ReactNode
  /** Props for the element representing the selected value. */
  valueProps: DOMAttributes<FocusableElement>
  isOpen?: boolean
  /**
   * @deprecated Use of placeholder text goes against our a11y standards.
   * Use the \`labelText\` prop to provide a concise name, and the \`description\` prop for any help text.
   */
  placeholder?: string
  /** Updates the styling of the validation. */
  status?: "error" | "caution"
  isDisabled?: boolean
  /** Use the \`reversed\` styles. */
  isReversed?: boolean
}`,signature:{properties:[{key:"label",value:{name:"ReactReactNode",raw:"React.ReactNode",required:!0}},{key:"labelProps",value:{name:"DOMAttributes",elements:[{name:"FocusableElement"}],raw:"DOMAttributes<FocusableElement>",required:!0}},{key:"value",value:{name:"ReactReactNode",raw:"React.ReactNode",required:!0}},{key:"valueProps",value:{name:"DOMAttributes",elements:[{name:"FocusableElement"}],raw:"DOMAttributes<FocusableElement>",required:!0},description:"Props for the element representing the selected value."},{key:"isOpen",value:{name:"boolean",required:!1}},{key:"placeholder",value:{name:"string",required:!1},description:"@deprecated Use of placeholder text goes against our a11y standards.\nUse the `labelText` prop to provide a concise name, and the `description` prop for any help text."},{key:"status",value:{name:"union",raw:'"error" | "caution"',elements:[{name:"literal",value:'"error"'},{name:"literal",value:'"caution"'}],required:!1},description:"Updates the styling of the validation."},{key:"isDisabled",value:{name:"boolean",required:!1}},{key:"isReversed",value:{name:"boolean",required:!1},description:"Use the `reversed` styles."}]}},{name:"OverrideClassName",elements:[{name:"HTMLAttributes",elements:[{name:"HTMLButtonElement"}],raw:"HTMLAttributes<HTMLButtonElement>"}],raw:"OverrideClassName<HTMLAttributes<HTMLButtonElement>>"}]},{name:"signature",type:"object",raw:`{
  ref: UseFloatingReturn<HTMLButtonElement>["refs"]["setReference"]
}`,signature:{properties:[{key:"ref",value:{name:'UseFloatingReturn["refs"]["setReference"]',raw:'UseFloatingReturn<HTMLButtonElement>["refs"]["setReference"]',required:!0}}]}}]},name:"selectToggleProps"},{type:{name:'UseFloatingReturn["refs"]["setReference"]',raw:'UseFloatingReturn<HTMLButtonElement>["refs"]["setReference"]'},name:"ref"}],return:{name:"JSX.Element"}}},description:""},children:{required:!1,tsType:{name:"signature",raw:'SelectPopoverContentsProps<Option>["children"]'},description:""},status:{required:!1,tsType:{name:"union",raw:'"error" | "caution"',elements:[{name:"literal",value:'"error"'},{name:"literal",value:'"caution"'}]},description:"Updates the styling of the validation FieldMessage."},validationMessage:{required:!1,tsType:{name:"union",raw:"React.ReactNode | undefined",elements:[{name:"ReactReactNode",raw:"React.ReactNode"},{name:"undefined"}]},description:"A descriptive message for the 'status' states."},isReversed:{required:!1,tsType:{name:"boolean"},description:"Use the `reversed` styles."},isFullWidth:{required:!1,tsType:{name:"boolean"},description:"Use the `fullWidth` styles."},disabledValues:{required:!1,tsType:{name:"Array",elements:[{name:"Key"}],raw:"Key[]"},description:"@deprecated: Either define `disabled` in your `Option` (in `items`), or use `disabledKeys`"},portalContainerId:{required:!1,tsType:{name:"string"},description:"Creates a portal for the Popover to the matching element id"},placeholder:{required:!1,tsType:{name:"string"},description:"@deprecated Use of placeholder text goes against our a11y standards.\nUse the `labelText` prop to provide a concise name, and the `description` prop for any help text.",defaultValue:{value:'""',computed:!1}}}};const Ie=[{label:"Short black",value:"short-black"},{label:"Long black",value:"long-black"},{label:"Batch brew",value:"batch-brew"},{label:"Latte",value:"latte"},{label:"Flat white",value:"flat-white"},{label:"Mocha",value:"mocha"},{label:"Cappuccino",value:"cappuccino"},{label:"Magic",value:"magic"}],Ce=[{label:"Colours",options:[{label:"Blue",value:"blue"},{label:"Red",value:"red"},{label:"Green",value:"green"}]},{label:"Flavours",options:[{label:"Vanilla",value:"vanilla"},{label:"Chocolate",value:"chocolate"},{label:"Strawberry",value:"strawberry"}]}],Ae=[{label:"Short black",value:"short-black",disabled:!0},{label:"Long black",value:"long-black"},{label:"Batch brew",value:"batch-brew",disabled:!0},{label:"Size",options:[{label:"Regular",value:"regular"},{label:"Large",value:"large",disabled:!0}]},{label:"Syrup",options:[{label:"Vanilla",value:"vanilla",disabled:!0},{label:"Caramel",value:"caramel"},{label:"Hazelnut",value:"hazelnut"}]}],_e=[{label:"Batch brew",value:"batch-brew"},{label:"Latte",value:"latte"},{label:"Magic",value:"magic"},{label:"Size",options:[{label:"Regular",value:"regular"},{label:"Large",value:"large"}]},{label:"Syrup",options:[{label:"Vanilla",value:"vanilla"},{label:"Caramel",value:"caramel"},{label:"Hazelnut",value:"hazelnut"}]}],xe=[{label:"Size",options:[{label:"Regular",value:"regular"},{label:"Large",value:"large"}]},{label:"Batch brew",value:"batch-brew"},{label:"Latte",value:"latte"},{label:"Magic",value:"magic"},{label:"Syrup",options:[{label:"Vanilla",value:"vanilla"},{label:"Caramel",value:"caramel"},{label:"Hazelnut",value:"hazelnut"}]}];export{n as S,_e as a,xe as b,Ce as g,Ae as m,Ie as s};

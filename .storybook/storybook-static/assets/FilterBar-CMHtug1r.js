import{R as s,r as d}from"./index-CTjT7uj6.js";import{c as C}from"./index-CCQ3W5xA.js";import{A as q}from"./AddIcon-C6V_KfCs.js";import{M as T,b as U,a as N}from"./MenuItem-PF-eSNqW.js";import{u as E}from"./useIntl-Ci3jBQGG.js";import{B as I}from"./Button-DDkdQqLR.js";import{F as j}from"./FilterDatePicker-Bh5QQ4BN.js";import{F as K}from"./FilterButtonRemovable-CDjh8qGF.js";import{F as x}from"./FilterButton-BGzpTfmP.js";import{F as J}from"./FilterDateRangePicker-IyXssijA.js";import{F as P,g as L}from"./FilterMultiSelect-wvMpAK6s.js";import{F as W}from"./FilterSelect-Cc_UChFF.js";const X=({filters:e,activeFilterIds:t,values:r})=>Object.values(e).reduce((a,{id:l,name:u})=>(a[l]={id:l,name:u,isActive:t.has(l),value:r[l]},a),{}),v=e=>{if(e.dependentFilterIds.size===0)return e;let t=!1;const r=X(e);return Array.from(e.dependentFilterIds).forEach(a=>{const l=e.filters[a].isUsableWhen(r);if(e.filters[a].isUsable!==l){if(t=!0,e.filters[a].isUsable=l,!l){e.activeFilterIds.delete(a),e.values[a]=void 0,e.hasUpdatedValues=!0;return}(!e.filters[a].isRemovable||e.values[a]!==void 0)&&e.activeFilterIds.add(a)}}),t&&v(e),e},H=(e,t,r)=>({...e.filters,[t]:{...e.filters[t],...r}}),$=(e,t)=>(Object.values(e.filters).forEach(({id:r,isRemovable:a,isUsable:l})=>{l&&(!a||t[r]!==void 0)&&e.activeFilterIds.add(r)}),v({...e,hasUpdatedValues:!0,values:t})),z=(e,t)=>{switch(t.type){case"update_values":return{...$(e,t.values)};case"complete_update_values":return{...e,hasUpdatedValues:!1};case"update_single_filter":return{...e,filters:H(e,t.id,t.data)};case"activate_filter":return e.activeFilterIds.add(t.id),{...v(e)};case"deactivate_filter":return e.activeFilterIds.delete(t.id),e.values[t.id]=void 0,{...v(e),hasUpdatedValues:!0};case"update_filter_labels":return{...e,filters:Object.values(e.filters).reduce((r,a)=>{var l;return r[a.id]={...a,name:((l=t.data.find(({id:u})=>u===a.id))==null?void 0:l.name)??a.name},r},{})}}},G=(e,t)=>{const r=e.reduce((a,{id:l,name:u,isRemovable:o,isUsableWhen:i})=>{const c=i!==void 0;return a.filters[l]={id:l,name:u,isRemovable:o??!1,isUsableWhen:i,isOpen:!1,isUsable:!0},c&&a.dependentFilterIds.add(l),(!o||t[l]!==void 0)&&a.activeFilterIds.add(l),a},{filters:{},activeFilterIds:new Set,values:t,dependentFilterIds:new Set,hasUpdatedValues:!1});return v(r)},Q=(e,t)=>e.length!==t.length?!1:e.every((r,a)=>r===t[a]),Y=(e,t)=>Object.values(e.filters).some(({id:r})=>{const a=e.values[r],l=t[r];return Array.isArray(a)&&Array.isArray(l)?!Q(a,l):a!==l});function D(e){return JSON.stringify(e.map(({id:t,name:r})=>({id:t,name:r})))}const Z=({filters:e,activeFilterIds:t})=>Object.values(e).filter(({id:r,isUsable:a})=>a&&!t.has(r)),ee=e=>e.reduce((t,r)=>({...t,[r.id]:r}),{}),te=e=>{if(!(typeof e=="object"&&JSON.stringify(e)==="{}")&&!(Array.isArray(e)&&e.length===0))return e},V=s.createContext(null),f=()=>{const e=d.useContext(V);if(!e)throw new Error("useFilterBarContext must be used within the FilterBarContext.Provider");return e},_=({children:e,filters:t,values:r,onValuesChange:a})=>{const l=d.useRef(D(t)),u=d.useMemo(()=>ee(t),[l.current]),[o,i]=d.useReducer(z,G(t,r)),c={getFilterState:n=>({...o.filters[n],isActive:o.activeFilterIds.has(n),value:r[n]}),getActiveFilterValues:()=>r,toggleOpenFilter:(n,p)=>{i({type:"update_single_filter",id:n,data:{isOpen:p}})},setFilterOpenState:(n,p)=>{i({type:"update_single_filter",id:n,data:{isOpen:p}})},openFilter:n=>{i({type:"update_single_filter",id:n,data:{isOpen:!0}})},updateValue:(n,p)=>{i({type:"update_values",values:{...r,[n]:te(p)}})},showFilter:n=>i({type:"activate_filter",id:n}),hideFilter:n=>{i({type:"deactivate_filter",id:n})},getInactiveFilters:()=>Z(o),clearAllFilters:()=>{o.activeFilterIds.forEach(n=>{u[n].isRemovable&&i({type:"deactivate_filter",id:n})}),i({type:"update_values",values:{}})}};d.useEffect(()=>{Y(o,r)&&i({type:"update_values",values:{...r}})},[r]),d.useEffect(()=>{o.hasUpdatedValues&&(a({...o.values}),i({type:"complete_update_values"}))},[o]),d.useEffect(()=>{const n=D(t);n!==l.current&&(l.current=n,i({type:"update_filter_labels",data:t}))},[t]);const m=Array.from(o.activeFilterIds,n=>u[n]);return s.createElement(V.Provider,{value:c},e(m))};_.__docgenInfo={description:"",methods:[],displayName:"FilterBarProvider",props:{children:{required:!0,tsType:{name:"signature",type:"function",raw:"(activeFilters: ActiveFiltersArray<ValuesMap>) => JSX.Element",signature:{arguments:[{type:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  id: Id
  name: string
  Component: React.ReactElement
  isRemovable?: boolean
  isUsableWhen?: FilterIsUsableWhen<ValuesMap>
}`,signature:{properties:[{key:"id",value:{name:"ValuesMap",required:!0}},{key:"name",value:{name:"string",required:!0}},{key:"Component",value:{name:"ReactReactElement",raw:"React.ReactElement",required:!0}},{key:"isRemovable",value:{name:"boolean",required:!1}},{key:"isUsableWhen",value:{name:"signature",type:"function",raw:`(
  state: SourceFiltersState<ValuesMap>
) => boolean`,signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  [K in keyof ValuesMap]: SourceFilterAttributes<K, ValuesMap[K]>
}`,signature:{properties:[{key:{name:"ValuesMap",required:!0},value:{name:"signature",type:"object",raw:`{
  id: Id
  name: string
  value?: Value
  isActive: boolean
}`,signature:{properties:[{key:"id",value:{name:"K",required:!0}},{key:"name",value:{name:"string",required:!0}},{key:"value",value:{name:"ValuesMap[K]",raw:"ValuesMap[K]",required:!1}},{key:"isActive",value:{name:"boolean",required:!0}}]}}}]}},name:"state"}],return:{name:"boolean"}},required:!1}}]}}],raw:`Array<
  FilterAttributes<ValuesMap>
>`},name:"activeFilters"}],return:{name:"JSX.Element"}}},description:""},filters:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  id: Id
  name: string
  Component: React.ReactElement
  isRemovable?: boolean
  isUsableWhen?: FilterIsUsableWhen<ValuesMap>
}`,signature:{properties:[{key:"id",value:{name:"ValuesMap",required:!0}},{key:"name",value:{name:"string",required:!0}},{key:"Component",value:{name:"ReactReactElement",raw:"React.ReactElement",required:!0}},{key:"isRemovable",value:{name:"boolean",required:!1}},{key:"isUsableWhen",value:{name:"signature",type:"function",raw:`(
  state: SourceFiltersState<ValuesMap>
) => boolean`,signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  [K in keyof ValuesMap]: SourceFilterAttributes<K, ValuesMap[K]>
}`,signature:{properties:[{key:{name:"ValuesMap",required:!0},value:{name:"signature",type:"object",raw:`{
  id: Id
  name: string
  value?: Value
  isActive: boolean
}`,signature:{properties:[{key:"id",value:{name:"K",required:!0}},{key:"name",value:{name:"string",required:!0}},{key:"value",value:{name:"ValuesMap[K]",raw:"ValuesMap[K]",required:!1}},{key:"isActive",value:{name:"boolean",required:!0}}]}}}]}},name:"state"}],return:{name:"boolean"}},required:!1}}]}}],raw:`Array<
  FilterAttributes<ValuesMap>
>`},description:""},values:{required:!0,tsType:{name:"Partial",elements:[{name:"ValuesMap"}],raw:"Partial<ValuesMap>"},description:""},onValuesChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(values: Partial<ValuesMap>) => void",signature:{arguments:[{type:{name:"Partial",elements:[{name:"ValuesMap"}],raw:"Partial<ValuesMap>"},name:"values"}],return:{name:"void"}}},description:""}}};const y=d.forwardRef(({filterId:e,isRemovable:t=!1,...r},a)=>{const{hideFilter:l}=f();return t?s.createElement(K,{ref:a,triggerButtonProps:r,removeButtonProps:{onClick:()=>l(e)}}):s.createElement(x,{ref:a,...r})});y.displayName="FilterBar.Button";y.__docgenInfo={description:"",methods:[],displayName:"FilterBar.Button",props:{isRemovable:{defaultValue:{value:"false",computed:!1},required:!1}}};const k=({id:e,onDateChange:t,locale:r="en-AU",...a})=>{const{getFilterState:l,setFilterOpenState:u,updateValue:o}=f();if(!e)throw Error("Missing `id` prop in FilterBarDatePicker");const i=l(e);return s.createElement(j,{...a,id:e,locale:r,selectedDate:i.value||void 0,label:i.name,renderTrigger:c=>s.createElement(y,{...c,filterId:e,isRemovable:i.isRemovable}),onDateChange:c=>{o(e,c),t==null||t(c)},isOpen:i.isOpen,setIsOpen:c=>u(e,c)})};k.displayName="FilterBar.DatePicker";k.__docgenInfo={description:"",methods:[],displayName:"FilterBar.DatePicker",props:{id:{required:!1,tsType:{name:"string"},description:""},locale:{required:!1,tsType:{name:'FilterDatePickerProps["locale"]',raw:'FilterDatePickerProps["locale"]'},description:"",defaultValue:{value:'"en-AU"',computed:!1}},onDateChange:{required:!1,tsType:{name:'FilterDatePickerProps["onDateChange"]',raw:'FilterDatePickerProps["onDateChange"]'},description:""}}};const R=({id:e,onRangeChange:t,locale:r="en-AU",...a})=>{const{getFilterState:l,setFilterOpenState:u,updateValue:o}=f();if(!e)throw Error("Missing `id` prop in FilterBarDateRangePicker");const i=l(e);return s.createElement(J,{...a,id:e,label:i.name,renderTrigger:c=>s.createElement(y,{...c,filterId:e,isRemovable:i.isRemovable}),isOpen:i.isOpen,setIsOpen:c=>u(e,c),selectedRange:i.value,onRangeChange:c=>{o(e,c),t==null||t(c)},locale:r})};R.displayName="FilterBar.DateRangePicker";R.__docgenInfo={description:"",methods:[],displayName:"FilterBar.DateRangePicker",props:{id:{required:!1,tsType:{name:"string"},description:""},onRangeChange:{required:!1,tsType:{name:'FilterDateRangePickerProps["onRangeChange"]',raw:'FilterDateRangePickerProps["onRangeChange"]'},description:""},locale:{required:!1,tsType:{name:'FilterDateRangePickerProps["locale"]',raw:'FilterDateRangePickerProps["locale"]'},description:"",defaultValue:{value:'"en-AU"',computed:!1}}}};const h=(e,t)=>e.length!==t.length?!1:e.every((r,a)=>r===t[a]),re=e=>e==="all"?"all":Array.from(e).length>0?Array.from(e):void 0,ae=e=>new Set(e),O=({id:e,items:t,children:r,onSelectionChange:a,...l})=>{const{getFilterState:u,setFilterOpenState:o,updateValue:i,hideFilter:c}=f(),[m,n]=d.useState(t);if(!e)throw Error("Missing `id` prop in FilterBarMultiSelect");const p=u(e);return d.useEffect(()=>{h(m,t)||n(t)},[t]),d.useEffect(()=>{if(Array.isArray(p.value)){const g=m.map(({value:b})=>b),w=p.value.filter(b=>g.includes(b));h(p.value,w)||i(e,w)}},[m]),s.createElement(P,{label:p.name,selectedKeys:new Set(p.value||null),onSelectionChange:g=>{i(e,re(g)),a==null||a(g)},items:m,isOpen:p.isOpen,onOpenChange:g=>o(e,g),trigger:()=>{const g={selectedOptionLabels:p.value?L(ae(p.value),m):[],label:p.name};return p.isRemovable?s.createElement(P.RemovableTrigger,{...g,onRemove:()=>c(e)}):s.createElement(P.TriggerButton,{...g})},...l},r)};O.displayName="FilterBar.MultiSelect";O.__docgenInfo={description:"",methods:[],displayName:"FilterBar.MultiSelect",props:{id:{required:!1,tsType:{name:"string"},description:""},label:{required:!1,tsType:{name:'FilterMultiSelectProps["label"]',raw:'FilterMultiSelectProps["label"]'},description:""},trigger:{required:!1,tsType:{name:'FilterMultiSelectProps["trigger"]',raw:'FilterMultiSelectProps["trigger"]'},description:""}}};const B=({id:e,items:t,onSelectionChange:r,...a})=>{const{getFilterState:l,setFilterOpenState:u,updateValue:o}=f(),[i,c]=d.useState(t);if(!e)throw Error("Missing `id` prop in FilterBarSelect");const m=l(e);return d.useEffect(()=>{h(i,t)||c(t)},[t]),d.useEffect(()=>{m.value&&(i.map(p=>p==null?void 0:p.value).includes(m.value)||o(e,void 0))},[i]),s.createElement(W,{...a,items:i,selectedKey:m.value||null,label:m.name,renderTrigger:n=>s.createElement(y,{...n,filterId:e,isRemovable:m.isRemovable}),onSelectionChange:n=>{o(e,n),r==null||r(n)},isOpen:m.isOpen,setIsOpen:n=>u(e,n)})};B.displayName="FilterBarSelect";B.__docgenInfo={description:"",methods:[],displayName:"FilterBarSelect",props:{id:{required:!1,tsType:{name:"string"},description:""}}};const S=()=>{const{formatMessage:e}=E(),t=e({id:"filterBar.addFiltersMenu.buttonLabel",defaultMessage:"Add Filters",description:"Menu button label to show additional available filter options"}),{getInactiveFilters:r,showFilter:a}=f(),l=r();return s.createElement(T,{button:s.createElement(I,{label:t,secondary:!0,disabled:l.length===0,icon:s.createElement(q,{role:"presentation"})})},s.createElement(U,null,l.map(({id:u,name:o})=>s.createElement(N,{key:u,label:o,onClick:()=>a(u)}))))};S.displayName="FilterBar.AddFiltersMenu";S.__docgenInfo={description:"",methods:[],displayName:"FilterBar.AddFiltersMenu"};const le="_clearAllButton_bg0nj_1",ne={clearAllButton:le},M=()=>{const{formatMessage:e}=E(),t=e({id:"filterBar.clearAllButton.label",defaultMessage:"Clear all",description:"Button label to clear all values within the filter bar"}),r=e({id:"filterBar.clearAllButton.ariaLabel",defaultMessage:"Clear all filters",description:"Button aria-label to clear all values within the filter bar"}),{clearAllFilters:a}=f();return s.createElement(I,{label:t,"aria-label":r,classNameOverride:ne.clearAllButton,secondary:!0,onClick:a})};M.displayName="FilterBar.ClearAllButton";M.__docgenInfo={description:"",methods:[],displayName:"FilterBar.ClearAllButton"};const ie="_filterBar_ke16k_5",se="_filtersContainer_ke16k_13",A={filterBar:ie,filtersContainer:se},F=({filters:e,classNameOverride:t,...r})=>s.createElement(_,{filters:e,...r},a=>s.createElement("div",{className:C(A.filterBar,t)},s.createElement("div",{className:A.filtersContainer},Object.values(a).map(({id:l,Component:u})=>s.createElement(s.Fragment,{key:l},s.cloneElement(u,{id:l}))),s.createElement(S,null)),s.createElement("div",null,s.createElement(M,null))));F.displayName="FilterBar";F.DatePicker=k;F.DateRangePicker=R;F.MultiSelect=O;F.Select=B;F.__docgenInfo={description:"",methods:[{name:"DatePicker",docblock:null,modifiers:["static"],params:[{name:`{
  id,
  onDateChange,
  locale = "en-AU",
  ...props
}: FilterBarDatePickerProps`,optional:!1,type:{name:"intersection",raw:`Omit<
  FilterDatePickerProps,
  | "id"
  | "label"
  | "renderTrigger"
  | "isOpen"
  | "setIsOpen"
  | "selectedDate"
  | "onDateChange"
  | "locale"
> & {
  id?: string
  locale?: FilterDatePickerProps["locale"]
  onDateChange?: FilterDatePickerProps["onDateChange"]
}`,elements:[{name:"Omit",elements:[{name:"FilterDatePickerProps"},{name:"union",raw:`| "id"
| "label"
| "renderTrigger"
| "isOpen"
| "setIsOpen"
| "selectedDate"
| "onDateChange"
| "locale"`,elements:[{name:"literal",value:'"id"'},{name:"literal",value:'"label"'},{name:"literal",value:'"renderTrigger"'},{name:"literal",value:'"isOpen"'},{name:"literal",value:'"setIsOpen"'},{name:"literal",value:'"selectedDate"'},{name:"literal",value:'"onDateChange"'},{name:"literal",value:'"locale"'}]}],raw:`Omit<
  FilterDatePickerProps,
  | "id"
  | "label"
  | "renderTrigger"
  | "isOpen"
  | "setIsOpen"
  | "selectedDate"
  | "onDateChange"
  | "locale"
>`},{name:"signature",type:"object",raw:`{
  id?: string
  locale?: FilterDatePickerProps["locale"]
  onDateChange?: FilterDatePickerProps["onDateChange"]
}`,signature:{properties:[{key:"id",value:{name:"string",required:!1}},{key:"locale",value:{name:'FilterDatePickerProps["locale"]',raw:'FilterDatePickerProps["locale"]',required:!1}},{key:"onDateChange",value:{name:'FilterDatePickerProps["onDateChange"]',raw:'FilterDatePickerProps["onDateChange"]',required:!1}}]}}],alias:"FilterBarDatePickerProps"}}],returns:{type:{name:"JSX.Element"}}},{name:"DateRangePicker",docblock:null,modifiers:["static"],params:[{name:`{
  id,
  onRangeChange,
  locale = "en-AU",
  ...props
}: FilterBarDateRangePickerProps`,optional:!1,type:{name:"intersection",raw:`Omit<
  FilterDateRangePickerProps,
  | "id"
  | "label"
  | "renderTrigger"
  | "isOpen"
  | "setIsOpen"
  | "selectedRange"
  | "onRangeChange"
  | "locale"
> & {
  id?: string
  onRangeChange?: FilterDateRangePickerProps["onRangeChange"]
  locale?: FilterDateRangePickerProps["locale"]
}`,elements:[{name:"Omit",elements:[{name:"FilterDateRangePickerProps"},{name:"union",raw:`| "id"
| "label"
| "renderTrigger"
| "isOpen"
| "setIsOpen"
| "selectedRange"
| "onRangeChange"
| "locale"`,elements:[{name:"literal",value:'"id"'},{name:"literal",value:'"label"'},{name:"literal",value:'"renderTrigger"'},{name:"literal",value:'"isOpen"'},{name:"literal",value:'"setIsOpen"'},{name:"literal",value:'"selectedRange"'},{name:"literal",value:'"onRangeChange"'},{name:"literal",value:'"locale"'}]}],raw:`Omit<
  FilterDateRangePickerProps,
  | "id"
  | "label"
  | "renderTrigger"
  | "isOpen"
  | "setIsOpen"
  | "selectedRange"
  | "onRangeChange"
  | "locale"
>`},{name:"signature",type:"object",raw:`{
  id?: string
  onRangeChange?: FilterDateRangePickerProps["onRangeChange"]
  locale?: FilterDateRangePickerProps["locale"]
}`,signature:{properties:[{key:"id",value:{name:"string",required:!1}},{key:"onRangeChange",value:{name:'FilterDateRangePickerProps["onRangeChange"]',raw:'FilterDateRangePickerProps["onRangeChange"]',required:!1}},{key:"locale",value:{name:'FilterDateRangePickerProps["locale"]',raw:'FilterDateRangePickerProps["locale"]',required:!1}}]}}],alias:"FilterBarDateRangePickerProps"}}],returns:{type:{name:"JSX.Element"}}},{name:"MultiSelect",docblock:null,modifiers:["static"],params:[{name:`{
  id,
  items: propsItems,
  children,
  onSelectionChange,
  ...props
}: FilterBarMultiSelectProps`,optional:!1,type:{name:"intersection",raw:`Omit<
  FilterMultiSelectProps,
  "label" | "trigger"
> & {
  id?: string
  label?: FilterMultiSelectProps["label"]
  trigger?: FilterMultiSelectProps["trigger"]
}`,elements:[{name:"Omit",elements:[{name:"FilterMultiSelectProps"},{name:"union",raw:'"label" | "trigger"',elements:[{name:"literal",value:'"label"'},{name:"literal",value:'"trigger"'}]}],raw:`Omit<
  FilterMultiSelectProps,
  "label" | "trigger"
>`},{name:"signature",type:"object",raw:`{
  id?: string
  label?: FilterMultiSelectProps["label"]
  trigger?: FilterMultiSelectProps["trigger"]
}`,signature:{properties:[{key:"id",value:{name:"string",required:!1}},{key:"label",value:{name:'FilterMultiSelectProps["label"]',raw:'FilterMultiSelectProps["label"]',required:!1}},{key:"trigger",value:{name:'FilterMultiSelectProps["trigger"]',raw:'FilterMultiSelectProps["trigger"]',required:!1}}]}}],alias:"FilterBarMultiSelectProps"}}],returns:{type:{name:"union",raw:"JSX.Element | null",elements:[{name:"JSX.Element"},{name:"null"}]}}},{name:"Select",docblock:null,modifiers:["static"],params:[{name:`{
  id,
  items: propsItems,
  onSelectionChange,
  ...props
}: FilterBarSelectProps<Option>`,optional:!1,type:{name:"intersection",raw:`Omit<
  FilterSelectProps<Option>,
  "isOpen" | "setIsOpen" | "renderTrigger" | "label" | "selectedKey"
> & {
  id?: string
}`,elements:[{name:"Omit",elements:[{name:"FilterSelectProps",elements:[{name:"Option"}],raw:"FilterSelectProps<Option>"},{name:"union",raw:'"isOpen" | "setIsOpen" | "renderTrigger" | "label" | "selectedKey"',elements:[{name:"literal",value:'"isOpen"'},{name:"literal",value:'"setIsOpen"'},{name:"literal",value:'"renderTrigger"'},{name:"literal",value:'"label"'},{name:"literal",value:'"selectedKey"'}]}],raw:`Omit<
  FilterSelectProps<Option>,
  "isOpen" | "setIsOpen" | "renderTrigger" | "label" | "selectedKey"
>`},{name:"signature",type:"object",raw:`{
  id?: string
}`,signature:{properties:[{key:"id",value:{name:"string",required:!1}}]}}],alias:"FilterBarSelectProps"}}],returns:{type:{name:"JSX.Element"}}}],displayName:"FilterBar"};export{F,f as u};

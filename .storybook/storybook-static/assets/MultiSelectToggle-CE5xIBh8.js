import{r as i,R as e}from"./index-CTjT7uj6.js";import{c as d}from"./index-CCQ3W5xA.js";import{C}from"./ChevronDownIcon-prLLyjG_.js";import{C as E}from"./ChevronUpIcon-D9pr3Qd6.js";import{R as S}from"./RemovableTag-BNVKm4bs.js";import{C as y}from"./ClearButton-K9bfbh4U.js";const B="_multiSelectToggle_1vdch_4",T="_error_1vdch_18",N="_caution_1vdch_21",R="_toggleButton_1vdch_25",A="_selectedItemsContainer_1vdch_55",k="_hasSelectedItems_1vdch_64",M="_selectedItems_1vdch_55",P="_clearAllButton_1vdch_78",l={multiSelectToggle:B,error:T,caution:N,toggleButton:R,selectedItemsContainer:A,hasSelectedItems:k,selectedItems:M,clearAllButton:P},g=i.forwardRef(({onClick:a,"aria-labelledby":r,"aria-describedby":u,"aria-controls":p,isOpen:c=!1,classNameOverride:_,selectedOptions:o,onRemoveOption:h,onRemoveAllOptions:v,status:s,...I},f)=>{const n=i.useId();return e.createElement(e.Fragment,null,e.createElement("div",{className:d(l.multiSelectToggle,_,s&&l[s]),onClick:a,...I},e.createElement("button",{ref:f,className:l.toggleButton,"aria-labelledby":r,"aria-describedby":u,"aria-controls":p,"aria-expanded":c,"aria-haspopup":"dialog",type:"button",onClick:t=>{t.stopPropagation(),a(t)}},c?e.createElement(E,{role:"presentation"}):e.createElement(C,{role:"presentation"})),e.createElement("div",{className:d(l.selectedItemsContainer,o.length&&l.hasSelectedItems)},o.length>0&&e.createElement(e.Fragment,null,e.createElement("ul",{role:"list",className:l.selectedItems},o.map(({label:t,value:m})=>e.createElement("li",{key:m,onClick:b=>b.stopPropagation()},e.createElement(S,{removeButtonProps:{ariaLabel:`Remove option: ${t}`,onClick:()=>h(m)}},t)))),e.createElement(y,{id:n,"aria-label":"Remove all options from ","aria-labelledby":`${n} ${r}`,classNameOverride:l.clearAllButton,onClick:t=>{t.stopPropagation(),v()}})))))});g.displayName="MultiSelectToggle";g.__docgenInfo={description:"",methods:[],displayName:"MultiSelectToggle",props:{isOpen:{defaultValue:{value:"false",computed:!1},required:!1}}};export{g as M};

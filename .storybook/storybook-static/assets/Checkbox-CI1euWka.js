import{r,R as t}from"./index-CTjT7uj6.js";import{c as s}from"./index-CCQ3W5xA.js";import{C as l}from"./CheckIcon-BwUvLWmE.js";import{M as m}from"./MinusIcon-3DH7qpb8.js";const d="_checkbox_18d3m_3",u="_selected_18d3m_33",h="_nativeCheckbox_18d3m_42",k="_iconContainer_18d3m_49",f="_icon_18d3m_49",c={checkbox:d,selected:u,nativeCheckbox:h,iconContainer:k,icon:f},p=e=>{switch(e){case"indeterminate":return t.createElement(m,{role:"presentation",classNameOverride:c.icon});case"checked":return t.createElement(l,{role:"presentation",classNameOverride:c.icon});default:return null}},a=({checkedStatus:e,classNameOverride:o,...i})=>{const n=r.useRef(null);return r.useEffect(()=>{n.current&&(e==="checked"?(n.current.checked=!0,n.current.indeterminate=!1):e==="unchecked"?(n.current.checked=!1,n.current.indeterminate=!1):e==="indeterminate"&&(n.current.checked=!1,n.current.indeterminate=!0))},[e]),t.createElement("span",{className:s(c.checkbox,e!=="unchecked"&&c.selected,o)},t.createElement("input",{ref:n,type:"checkbox",className:c.nativeCheckbox,...i}),t.createElement("span",{className:c.iconContainer},p(e)))};a.displayName="Checkbox";a.__docgenInfo={description:"",methods:[],displayName:"Checkbox",props:{checkedStatus:{required:!0,tsType:{name:"union",raw:'"checked" | "unchecked" | "indeterminate"',elements:[{name:"literal",value:'"checked"'},{name:"literal",value:'"unchecked"'},{name:"literal",value:'"indeterminate"'}]},description:""}}};export{a as C};

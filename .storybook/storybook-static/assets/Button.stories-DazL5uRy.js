import{R as e,r as i}from"./index-CTjT7uj6.js";import{A as l}from"./AddIcon-C6V_KfCs.js";import{A as s}from"./ArrowRightIcon-CtsqbiFB.js";import{T as m}from"./TextField-C70Pg5K2.js";import{B as r}from"./Button-DDkdQqLR.js";import{L as c}from"./LoadingInput-X-emq8Sb.js";import"./SVG-7WFwBCn9.js";import"./index-CCQ3W5xA.js";import"./SuccessIcon-BInyqVzG.js";import"./Label-DlmzItqQ.js";import"./FieldGroup-Dj6p3DL3.js";import"./Input-BFyrvMXQ.js";import"./FieldMessage-D8OmrYjz.js";import"./ExclamationWhiteIcon-dXgVQUA_.js";import"./Text-D2gQH1xL.js";import"./GenericButton-CnAyP-Wm.js";import"./utils-e-dMXvly.js";import"./focusSafely-ByiDPXQJ.js";import"./SSRProvider-C8o06Znb.js";import"./useFocusable-CuIK6Qs-.js";import"./index-9r8iugjR.js";import"./Link-DkKiEG74.js";import"./usePress-nudZ2Xgz.js";import"./Badge-D9GUNioS.js";import"./LoadingSpinner-DHfeGxpm.js";import"./VisuallyHidden-CDYjeGzr.js";const _={title:"Actions/Button/v1",component:r,args:{label:"Label"}},q={parameters:{docs:{canvas:{sourceState:"shown"}}}},a={render:({reversed:t})=>e.createElement(e.Fragment,null,e.createElement(r,{label:"Default",reversed:t}),e.createElement(r,{label:"Primary",primary:!0,reversed:t}),e.createElement(r,{label:"Destructive",destructive:!0,reversed:t}),e.createElement(r,{label:"Secondary",secondary:!0,reversed:t}),!t&&e.createElement(r,{label:"Secondary Destructive",secondary:!0,destructive:!0})),decorators:[t=>e.createElement("div",{style:{display:"flex",gap:"1rem"}},e.createElement(t,null))],parameters:{controls:{disable:!0}}},H={...a,args:{reversed:!0},parameters:{...a.parameters,backgrounds:{default:"Purple 700"}}},z={args:{disabled:!0}},d=`
import { Button, AddIcon } from "@kaizen/components"

<Button label="Label" icon={<AddIcon role="presentation" />} />
`,M={args:{icon:e.createElement(l,{role:"presentation"})},parameters:{docs:{source:{code:d}}}},O={args:{icon:e.createElement(s,{role:"presentation"}),iconPosition:"end"}},j={args:{badge:{text:"3",variant:"active"},secondary:!0}},G={args:{fullWidth:!0}},J={render:()=>e.createElement(e.Fragment,null,e.createElement(r,{label:"Label",working:!0,workingLabel:"Submitting"}),e.createElement(r,{label:"Label",working:!0,workingLabel:"Submitting",workingLabelHidden:!0})),decorators:[t=>e.createElement("div",{style:{display:"flex",gap:"1rem"}},e.createElement(t,null))],parameters:{controls:{disable:!0}}},K={render:()=>e.createElement(c,{isAnimated:!0,width:13}),parameters:{controls:{disable:!0}}},Q={render:()=>e.createElement(e.Fragment,null,e.createElement("form",{className:"mb-6",id:"unique-form-id"},e.createElement(m,{labelText:"Sample text field",defaultValue:"content"})),e.createElement(r,{label:"Submit",type:"submit",form:"unique-form-id",formTarget:"_blank",formAction:"/",formMethod:"get",formEncType:"text/plain",formNoValidate:!1})),parameters:{controls:{disable:!0}}},U={render:()=>{const[t,o]=i.useState("Ready"),n=()=>{t==="Ready"?(o("Working"),setTimeout(()=>o("Completed"),3e3)):o("Ready")};return e.createElement(r,{label:t,working:t==="Working",workingLabel:"Button is doing some work",workingLabelHidden:!0,onClick:n})}},X=["Playground","Variants","Reversed","Disabled","Icon","IconPosition","Badge","FullWidth","Working","Loading","NativeFormButton","ResolveWorking"];export{j as Badge,z as Disabled,G as FullWidth,M as Icon,O as IconPosition,K as Loading,Q as NativeFormButton,q as Playground,U as ResolveWorking,H as Reversed,a as Variants,J as Working,X as __namedExportsOrder,_ as default};

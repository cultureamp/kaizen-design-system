import{r as d}from"./index-CTjT7uj6.js";import{c as u}from"./index-CCQ3W5xA.js";const m="_text_1er2u_3",p="_body_1er2u_18",c="_small_1er2u_26",v="_dark_1er2u_42",_="_white_1er2u_52",h="_positive_1er2u_62",y="_negative_1er2u_66",e={text:m,"intro-lede":"_intro-lede_1er2u_10",body:p,small:c,"extra-small":"_extra-small_1er2u_34",dark:v,"dark-reduced-opacity":"_dark-reduced-opacity_1er2u_47",white:_,"white-reduced-opacity":"_white-reduced-opacity_1er2u_57",positive:h,negative:y},t=({children:l,tag:a,variant:r,color:n="dark",classNameOverride:i,...s})=>{const o=u(e.text,e[r],e[n],i);return d.createElement(a===void 0?"p":a,{...s,className:o},l)};t.displayName="Text";t.__docgenInfo={description:`{@link https://cultureamp.atlassian.net/wiki/spaces/DesignSystem/pages/3074885298/Typography#Paragraph Guidance}
{@link https://cultureamp.design/?path=/docs/components-typography-text--body Storybook}`,methods:[],displayName:"Text",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},tag:{required:!1,tsType:{name:"union",raw:`| "pre"
| "p"
| "div"
| "span"
| "h1"
| "h2"
| "h3"
| "h4"
| "h5"
| "h6"
| "label"`,elements:[{name:"literal",value:'"pre"'},{name:"literal",value:'"p"'},{name:"literal",value:'"div"'},{name:"literal",value:'"span"'},{name:"literal",value:'"h1"'},{name:"literal",value:'"h2"'},{name:"literal",value:'"h3"'},{name:"literal",value:'"h4"'},{name:"literal",value:'"h5"'},{name:"literal",value:'"h6"'},{name:"literal",value:'"label"'}]},description:`HTML elements that are allowed on Text
@default "p"`},variant:{required:!0,tsType:{name:"union",raw:'"intro-lede" | "body" | "small" | "extra-small"',elements:[{name:"literal",value:'"intro-lede"'},{name:"literal",value:'"body"'},{name:"literal",value:'"small"'},{name:"literal",value:'"extra-small"'}]},description:"Allowed text variants"},color:{required:!1,tsType:{name:"union",raw:`| "dark"
| "dark-reduced-opacity"
| "white"
| "white-reduced-opacity"
| "positive"
| "negative"`,elements:[{name:"literal",value:'"dark"'},{name:"literal",value:'"dark-reduced-opacity"'},{name:"literal",value:'"white"'},{name:"literal",value:'"white-reduced-opacity"'},{name:"literal",value:'"positive"'},{name:"literal",value:'"negative"'}]},description:"",defaultValue:{value:'"dark"',computed:!1}}},composes:["OverrideClassName"]};export{t as T};

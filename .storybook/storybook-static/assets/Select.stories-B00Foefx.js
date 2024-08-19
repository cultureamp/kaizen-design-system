import{R as t}from"./index-CTjT7uj6.js";import{L as N}from"./Label-DlmzItqQ.js";import{S as _,A}from"./Select-MdlLELGr.js";const L=[{value:"Mindy",label:"Mindy"},{value:"Jaime",label:"Jaime"},{value:"Rafa",label:"Rafa"}],I=[{value:"Mindy",label:"Mindy"},{value:"Jaime",label:"Jaime",isDisabled:!0},{value:"Rafa",label:"Rafa"}],E=[{label:"Colours",options:[{value:"blue",label:"blue"},{value:"red",label:"red"},{value:"green",label:"green"}]},{label:"Flavours",options:[{value:"vanilla",label:"Vanilla"},{value:"chocolate",label:"Chocolate"},{value:"strawberry",label:"Strawberry"}]}],R={title:"Components/Select",component:_,args:{options:L,label:"Select"}},e={parameters:{docs:{canvas:{sourceState:"shown"}}}},a={args:{isMulti:!0}},s={args:{options:E}},r={args:{options:I}},o={render:w=>{const D=l=>L.filter(({label:n})=>n.toLowerCase().includes(l.toLowerCase())),M=l=>new Promise(n=>{setTimeout(()=>{n(D(l))},1e3)});return t.createElement(t.Fragment,null,t.createElement(N,{id:"asyncSelectLabel",labelText:"Type to see options"}),t.createElement(A,{"aria-labelledby":"asyncSelectLabel",loadOptions:M,...w}))}};var c,i,u;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:`{
  parameters: {
    docs: {
      canvas: {
        sourceState: "shown"
      }
    }
  }
}`,...(u=(i=e.parameters)==null?void 0:i.docs)==null?void 0:u.source}}};var p,m,d;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    isMulti: true
  }
}`,...(d=(m=a.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};var b,S,g;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    options: GROUPED_OPTIONS
  }
}`,...(g=(S=s.parameters)==null?void 0:S.docs)==null?void 0:g.source}}};var y,O,v;r.parameters={...r.parameters,docs:{...(y=r.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    options: DISABLED_OPTIONS
  }
}`,...(v=(O=r.parameters)==null?void 0:O.docs)==null?void 0:v.source}}};var f,P,T;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: args => {
    const filterNames = (inputValue: string): typeof OPTIONS => OPTIONS.filter(({
      label
    }) => label.toLowerCase().includes(inputValue.toLowerCase()));
    const promiseOptions = (inputValue: string): Promise<Array<{
      value: string;
      label: string;
    }>> => new Promise(resolve => {
      setTimeout(() => {
        resolve(filterNames(inputValue));
      }, 1000);
    });
    return <>
        <Label id="asyncSelectLabel" labelText="Type to see options" />
        <AsyncSelect aria-labelledby="asyncSelectLabel" loadOptions={promiseOptions} {...args} />
      </>;
  }
}`,...(T=(P=o.parameters)==null?void 0:P.docs)==null?void 0:T.source}}};const C=["Playground","MultiSelect","Grouped","Disabled","Async"],x=Object.freeze(Object.defineProperty({__proto__:null,Async:o,Disabled:r,Grouped:s,MultiSelect:a,Playground:e,__namedExportsOrder:C,default:R},Symbol.toStringTag,{value:"Module"}));export{o as A,r as D,s as G,a as M,e as P,x as S};

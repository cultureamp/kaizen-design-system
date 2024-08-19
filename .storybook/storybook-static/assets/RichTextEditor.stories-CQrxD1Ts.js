import{r as H,R as d}from"./index-CTjT7uj6.js";import{f as K}from"./index-BySiBzEG.js";import{d as Q}from"./dummyContent-Bkmcuhf2.js";import{R as j}from"./RichTextEditor-Cch1l_4N.js";const X={title:"Components/RichTextEditor/RichTextEditor",component:j,parameters:{chromatic:{disable:!1}},args:{labelText:"Rich Text",defaultValue:[],onChange:()=>{},controls:[{name:"bold",group:"inline"},{name:"italic",group:"inline"},{name:"underline",group:"inline"}]}},e={render:B=>{const[W,z]=H.useState([]),q=G=>z(G.toJSON().doc.content);return d.createElement(j,{...B,defaultValue:W,onChange:q})},parameters:{chromatic:{disable:!0},docs:{source:{code:`
const MyEditor = () => {
  const [rteData, setRTEData] = useState<EditorContentArray>([])
  const handleOnChange: RichTextEditorProps["onChange"] = editorState =>
    setRTEData(editorState.toJSON().doc.content)

  return (
    <RichTextEditor
      labelText="Rich text"
      defaultValue={rteData}
      onChange={handleOnChange}
      controls: [
        { name: "bold", group: "inline" },
        { name: "italic", group: "inline" },
        { name: "underline", group: "inline" },
      ],
    />
  )
}
`},canvas:{sourceState:"shown"}}}},n={args:{controls:[{name:"bold",group:"inline"},{name:"italic",group:"inline"},{name:"underline",group:"inline"}]}},t={args:{controls:[{name:"italic",group:"inline"},{name:"underline",group:"inline"}],defaultValue:[{type:"paragraph",content:[{type:"text",text:"This user text cannot be bolded"}]}]}},r={args:{defaultValue:[{type:"paragraph",content:[{type:"text",text:"User text goes here"}]}]}},a={args:{defaultValue:Q,controls:[{name:"bold",group:"inline"},{name:"italic",group:"inline"},{name:"underline",group:"inline"},{name:"orderedList",group:"list"},{name:"bulletList",group:"list"},{name:"link",group:"link"}]}},o={args:{labelText:"1 Row",rows:1}},s={args:{description:"Description text"}},i={args:{validationMessage:"Error message",status:"error"}},l={args:{defaultValue:[{type:"plaragraph",content:[{type:"text",marks:[{type:"strong"}],text:"User text goes here in bold text"}]}]}},c={args:{defaultValue:[{type:"paragraph",content:[{type:"text",marks:[{type:"strong"}],text:"User text goes here in bold text"}]}],controls:[{name:"italic",group:"inline"}],dataError:d.createElement(d.Fragment,null,"Cannot bold text without a bold control"),onDataError:()=>K()}};var u,p,m;e.parameters={...e.parameters,docs:{...(u=e.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: args => {
    const [rteData, setRTEData] = useState<EditorContentArray>([]);
    const handleOnChange: RichTextEditorProps["onChange"] = editorState => setRTEData(editorState.toJSON().doc.content);
    return <RichTextEditor {...args} defaultValue={rteData} onChange={handleOnChange} />;
  },
  parameters: {
    chromatic: {
      disable: true
    },
    docs: {
      source: {
        code: \`
const MyEditor = () => {
  const [rteData, setRTEData] = useState<EditorContentArray>([])
  const handleOnChange: RichTextEditorProps["onChange"] = editorState =>
    setRTEData(editorState.toJSON().doc.content)

  return (
    <RichTextEditor
      labelText="Rich text"
      defaultValue={rteData}
      onChange={handleOnChange}
      controls: [
        { name: "bold", group: "inline" },
        { name: "italic", group: "inline" },
        { name: "underline", group: "inline" },
      ],
    />
  )
}
\`
      },
      canvas: {
        sourceState: "shown"
      }
    }
  }
}`,...(m=(p=e.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var g,h,x;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    controls: [{
      name: "bold",
      group: "inline"
    }, {
      name: "italic",
      group: "inline"
    }, {
      name: "underline",
      group: "inline"
    }]
  }
}`,...(x=(h=n.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};var b,C,E;t.parameters={...t.parameters,docs:{...(b=t.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    controls: [{
      name: "italic",
      group: "inline"
    }, {
      name: "underline",
      group: "inline"
    }],
    defaultValue: [{
      type: "paragraph",
      content: [{
        type: "text",
        text: "This user text cannot be bolded"
      }]
    }]
  }
}`,...(E=(C=t.parameters)==null?void 0:C.docs)==null?void 0:E.source}}};var y,f,S;r.parameters={...r.parameters,docs:{...(y=r.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    defaultValue: [{
      type: "paragraph",
      content: [{
        type: "text",
        text: "User text goes here"
      }]
    }]
  }
}`,...(S=(f=r.parameters)==null?void 0:f.docs)==null?void 0:S.source}}};var R,T,D;a.parameters={...a.parameters,docs:{...(R=a.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    defaultValue: dummyContent,
    controls: [{
      name: "bold",
      group: "inline"
    }, {
      name: "italic",
      group: "inline"
    }, {
      name: "underline",
      group: "inline"
    }, {
      name: "orderedList",
      group: "list"
    }, {
      name: "bulletList",
      group: "list"
    }, {
      name: "link",
      group: "link"
    }]
  }
}`,...(D=(T=a.parameters)==null?void 0:T.docs)==null?void 0:D.source}}};var V,O,w;o.parameters={...o.parameters,docs:{...(V=o.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    labelText: "1 Row",
    rows: 1
  }
}`,...(w=(O=o.parameters)==null?void 0:O.docs)==null?void 0:w.source}}};var k,v,A;s.parameters={...s.parameters,docs:{...(k=s.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    description: "Description text"
  }
}`,...(A=(v=s.parameters)==null?void 0:v.docs)==null?void 0:A.source}}};var M,P,U;i.parameters={...i.parameters,docs:{...(M=i.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    validationMessage: "Error message",
    status: "error"
  }
}`,...(U=(P=i.parameters)==null?void 0:P.docs)==null?void 0:U.source}}};var _,J,L;l.parameters={...l.parameters,docs:{...(_=l.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    defaultValue: [{
      type: "plaragraph",
      content: [{
        type: "text",
        marks: [{
          type: "strong"
        }],
        text: "User text goes here in bold text"
      }]
    }]
  }
}`,...(L=(J=l.parameters)==null?void 0:J.docs)==null?void 0:L.source}}};var N,F,I;c.parameters={...c.parameters,docs:{...(N=c.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    defaultValue: [{
      type: "paragraph",
      content: [{
        type: "text",
        marks: [{
          type: "strong"
        }],
        text: "User text goes here in bold text"
      }]
    }],
    controls: [{
      name: "italic",
      group: "inline"
    }],
    dataError: <>Cannot bold text without a bold control</>,
    onDataError: () => fn()
  }
}`,...(I=(F=c.parameters)==null?void 0:F.docs)==null?void 0:I.source}}};const Y=["Playground","Controls","ControlsWithoutBold","DefaultValue","AllAvailableContent","Rows","Description","Validation","MalformedContent","IncorrectDataForControls"],te=Object.freeze(Object.defineProperty({__proto__:null,AllAvailableContent:a,Controls:n,ControlsWithoutBold:t,DefaultValue:r,Description:s,IncorrectDataForControls:c,MalformedContent:l,Playground:e,Rows:o,Validation:i,__namedExportsOrder:Y,default:X},Symbol.toStringTag,{value:"Module"}));export{a as A,n as C,r as D,c as I,l as M,e as P,te as R,i as V,t as a,o as b,s as c};

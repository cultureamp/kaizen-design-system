import{R as e}from"./index-CTjT7uj6.js";import{T as m}from"./Text-D2gQH1xL.js";import{R as l}from"./RichTextContent-CcpROJRz.js";const p={title:"Components/RichTextEditor/RichTextContent",component:l,args:{content:[{type:"paragraph",content:[{type:"text",text:"User text goes here"}]}]},argTypes:{content:{control:!1}}},t={parameters:{chromatic:{disable:!1}}},a={parameters:{chromatic:{disable:!1}},args:{content:[{type:"paragraph",content:[{type:"text",text:"User text goes here"}]}]},render:d=>e.createElement(e.Fragment,null,e.createElement(m,{variant:"small",tag:"div",classNameOverride:"block mb-6 leading-paragraph font-weight-heading"},"Read only state"),e.createElement("div",{className:"p-12 bg-gray-200 rounded-default"},e.createElement(l,{...d})))};var r,n,s;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
  parameters: {
    chromatic: {
      disable: false
    }
  }
}`,...(s=(n=t.parameters)==null?void 0:n.docs)==null?void 0:s.source}}};var o,c,i;a.parameters={...a.parameters,docs:{...(o=a.parameters)==null?void 0:o.docs,source:{originalSource:`{
  parameters: {
    chromatic: {
      disable: false
    }
  },
  args: {
    content: [{
      type: "paragraph",
      content: [{
        type: "text",
        text: "User text goes here"
      }]
    }]
  },
  render: args => <>
      {/* Note that since RichTextContent is not content editable, it is essentially just a div. This is why we haven't used the Label component */}
      <Text variant="small" tag="div" classNameOverride="block mb-6 leading-paragraph font-weight-heading">
        Read only state
      </Text>
      <div className="p-12 bg-gray-200 rounded-default">
        <RichTextContent {...args} />
      </div>
    </>
}`,...(i=(c=a.parameters)==null?void 0:c.docs)==null?void 0:i.source}}};const g=["Playground","ReadOnly"],y=Object.freeze(Object.defineProperty({__proto__:null,Playground:t,ReadOnly:a,__namedExportsOrder:g,default:p},Symbol.toStringTag,{value:"Module"}));export{t as P,y as R,a};

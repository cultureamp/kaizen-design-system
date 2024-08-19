import{R as e}from"./index-CTjT7uj6.js";import{t as f}from"./tokens-R-QqTfm-.js";import{B as s}from"./Button-DDkdQqLR.js";const p={title:"Guides/Layout and spacing"},a=()=>{const u=Object.entries(f.spacing);return e.createElement("div",{className:"flex justify-center"},e.createElement("table",null,e.createElement("thead",null,e.createElement("tr",null,e.createElement("th",{className:"font-family-heading text-left pr-16"},"Token name"),e.createElement("th",{className:"font-family-heading text-left pr-16"},"Token value"),e.createElement("th",{className:"font-family-heading text-left"},"Visual example"))),e.createElement("tbody",null,u.map(([n,l])=>e.createElement("tr",{className:"even:bg-gray-100",key:n},e.createElement("td",{className:"font-family-data"},n),e.createElement("td",{className:"font-family-data"},l),e.createElement("td",{className:"font-family-data"},e.createElement("div",{className:"h-[20px] bg-blue-400",style:{width:l}})))))))},y=`
<div className="flex">
  <div className="mr-12">   // This will become margin-right: 0.75rem
    <Button label="Button 1" />
  </div>
  <Button label="Button 2" />
</div>
`,t={render:()=>e.createElement("div",{className:"flex"},e.createElement("div",{className:"mr-12"},e.createElement(s,{label:"Button 1"})),e.createElement(s,{label:"Button 2"})),parameters:{docs:{source:{code:y},canvas:{sourceState:"shown"}}}};a.__docgenInfo={description:"",methods:[],displayName:"SpacingTokens"};var r,m,o;a.parameters={...a.parameters,docs:{...(r=a.parameters)==null?void 0:r.docs,source:{originalSource:`() => {
  const keyValuePairs = Object.entries(tokens.spacing);
  return <div className="flex justify-center">
      <table>
        <thead>
          <tr>
            <th className="font-family-heading text-left pr-16">Token name</th>
            <th className="font-family-heading text-left pr-16">Token value</th>
            <th className="font-family-heading text-left">Visual example</th>
          </tr>
        </thead>
        <tbody>
          {keyValuePairs.map(([tokenName, tokenValue]) => <tr className="even:bg-gray-100" key={tokenName}>
              <td className="font-family-data">{tokenName}</td>
              <td className="font-family-data">{tokenValue}</td>
              <td className="font-family-data">
                <div className="h-[20px] bg-blue-400" style={{
              width: tokenValue
            }} />
              </td>
            </tr>)}
        </tbody>
      </table>
    </div>;
}`,...(o=(m=a.parameters)==null?void 0:m.docs)==null?void 0:o.source}}};var c,i,d;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: () => <div className="flex">
      <div className="mr-12">
        <Button label="Button 1" />
      </div>
      <Button label="Button 2" />
    </div>,
  parameters: {
    docs: {
      source: {
        code: marginExampleSource
      },
      canvas: {
        sourceState: "shown"
      }
    }
  }
}`,...(d=(i=t.parameters)==null?void 0:i.docs)==null?void 0:d.source}}};const g=["SpacingTokens","MarginExample"],E=Object.freeze(Object.defineProperty({__proto__:null,MarginExample:t,SpacingTokens:a,__namedExportsOrder:g,default:p},Symbol.toStringTag,{value:"Module"}));export{E,t as M,a as S};

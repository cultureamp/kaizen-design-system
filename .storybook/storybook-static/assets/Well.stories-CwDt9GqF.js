import{R as e}from"./index-CTjT7uj6.js";import{H as n}from"./Heading-Y5F8SWRW.js";import{T as H}from"./Text-D2gQH1xL.js";import{W as r,b as N}from"./types-CyvVmpNk.js";const O={title:"Components/Well",component:r,args:{children:e.createElement(H,{variant:"body"},"Bacon ipsum dolor amet andouille buffalo beef boudin kielbasa drumstick fatback cow tongue ground round chicken. Jowl cow short ribs, ham tongue turducken spare ribs pig drumstick chuck meatball. Buffalo turducken pancetta tail salami chicken. Bresaola venison pastrami beef.")},argTypes:{children:{control:!1},variant:{control:!1}}},t={parameters:{docs:{canvas:{sourceState:"shown"}}}},l={render:a=>e.createElement(e.Fragment,null,e.createElement(n,{tag:"h4",variant:"heading-6",classNameOverride:"mb-12"},"`white` is the new default when no color/variant is defined"),e.createElement(r,{...a}),e.createElement(n,{tag:"h4",variant:"heading-6",classNameOverride:"mb-12"},"`gray` is the accessible version of the former `default` variant"),e.createElement(r,{...a,color:"gray"}),e.createElement(n,{tag:"h4",variant:"heading-6",classNameOverride:"mb-12"},"`blue` replaces the `informative` variant"),e.createElement(r,{...a,color:"blue"}),e.createElement(n,{tag:"h4",variant:"heading-6",classNameOverride:"mb-12"},"`yellow` replaces the `cautionary` variant"),e.createElement(r,{...a,color:"yellow"}),e.createElement(n,{tag:"h4",variant:"heading-6",classNameOverride:"mb-12"},"`orange` replaces the `assertive` variant"),e.createElement(r,{...a,color:"orange"}),e.createElement(n,{tag:"h4",variant:"heading-6",classNameOverride:"mb-12"},"`red` replaces the `negative` variant"),e.createElement(r,{...a,color:"red"}),e.createElement(n,{tag:"h4",variant:"heading-6",classNameOverride:"mb-12"},"`green` replaces the `positive` variant"),e.createElement(r,{...a,color:"green"}),e.createElement(n,{tag:"h4",variant:"heading-6",classNameOverride:"mb-12"},"`purple` replaces the `prominent` variant"),e.createElement(r,{...a,color:"purple"}))},i={render:a=>e.createElement(e.Fragment,null,N.map(s=>e.createElement(e.Fragment,null,e.createElement(n,{tag:"h4",variant:"heading-6"},s),e.createElement(r,{...a,borderStyle:s}))))},o={render:a=>e.createElement("div",{className:"flex gap-16"},e.createElement("div",null,e.createElement(n,{tag:"h4",variant:"heading-6"},"Margin (default)"),e.createElement(r,{...a}),e.createElement(r,{...a})),e.createElement("div",null,e.createElement(n,{tag:"h4",variant:"heading-6"},"noMargin"),e.createElement(r,{...a,noMargin:!0}),e.createElement(r,{...a})))};var c,d,m;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
  parameters: {
    docs: {
      canvas: {
        sourceState: "shown"
      }
    }
  }
}`,...(m=(d=t.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};var g,v,h;l.parameters={...l.parameters,docs:{...(g=l.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: args => <>
      <Heading tag="h4" variant="heading-6" classNameOverride="mb-12">
        \`white\` is the new default when no color/variant is defined
      </Heading>
      <Well {...args} />
      <Heading tag="h4" variant="heading-6" classNameOverride="mb-12">
        \`gray\` is the accessible version of the former \`default\` variant
      </Heading>
      <Well {...args} color="gray" />
      <Heading tag="h4" variant="heading-6" classNameOverride="mb-12">
        \`blue\` replaces the \`informative\` variant
      </Heading>
      <Well {...args} color="blue" />
      <Heading tag="h4" variant="heading-6" classNameOverride="mb-12">
        \`yellow\` replaces the \`cautionary\` variant
      </Heading>
      <Well {...args} color="yellow" />
      <Heading tag="h4" variant="heading-6" classNameOverride="mb-12">
        \`orange\` replaces the \`assertive\` variant
      </Heading>
      <Well {...args} color="orange" />
      <Heading tag="h4" variant="heading-6" classNameOverride="mb-12">
        \`red\` replaces the \`negative\` variant
      </Heading>
      <Well {...args} color="red" />
      <Heading tag="h4" variant="heading-6" classNameOverride="mb-12">
        \`green\` replaces the \`positive\` variant
      </Heading>
      <Well {...args} color="green" />
      <Heading tag="h4" variant="heading-6" classNameOverride="mb-12">
        \`purple\` replaces the \`prominent\` variant
      </Heading>
      <Well {...args} color="purple" />
    </>
}`,...(h=(v=l.parameters)==null?void 0:v.docs)==null?void 0:h.source}}};var p,u,b;i.parameters={...i.parameters,docs:{...(p=i.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: args => <>
      {borderStyleTypes.map(border => <>
          <Heading tag="h4" variant="heading-6">
            {border}
          </Heading>
          <Well {...args} borderStyle={border} />
        </>)}
    </>
}`,...(b=(u=i.parameters)==null?void 0:u.docs)==null?void 0:b.source}}};var f,E,y;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: args => <div className="flex gap-16">
      <div>
        <Heading tag="h4" variant="heading-6">
          Margin (default)
        </Heading>
        <Well {...args} />
        <Well {...args} />
      </div>
      <div>
        <Heading tag="h4" variant="heading-6">
          noMargin
        </Heading>
        <Well {...args} noMargin />
        <Well {...args} />
      </div>
    </div>
}`,...(y=(E=o.parameters)==null?void 0:E.docs)==null?void 0:y.source}}};const W=["Playground","Colors","BorderStyles","NoMargin"],B=Object.freeze(Object.defineProperty({__proto__:null,BorderStyles:i,Colors:l,NoMargin:o,Playground:t,__namedExportsOrder:W,default:O},Symbol.toStringTag,{value:"Module"}));export{i as B,l as C,o as N,t as P,B as W};

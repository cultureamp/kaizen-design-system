import{R as e,r as N}from"./index-CTjT7uj6.js";import{H as _}from"./Heading-Y5F8SWRW.js";import{A as q}from"./AddIcon-C6V_KfCs.js";import{T as d}from"./Text-D2gQH1xL.js";import{C as t}from"./Collapsible-BsCEp2-G.js";const w={title:"Components/Collapsibles/Collapsible",component:t,args:{children:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
    ac scelerisque sem, vel ultricies justo. Donec eu porttitor ante,
    nec gravida orci. Nulla facilisi. Cras varius erat id fermentum
    mattis. Mauris bibendum vestibulum erat, quis blandit metus viverra
    sit amet. Vivamus pretium vitae turpis ut condimentum. Sed vulputate
    magna nisl, in cursus urna hendrerit et. Aenean semper, est non
    feugiat sodales, nisl ligula aliquet lorem, sit amet scelerisque
    arcu quam a sapien. Donec in viverra urna.`},parameters:{backgrounds:{default:"Gray 100"}}},r={args:{title:"Single Collapsible"},parameters:{backgrounds:{default:"Gray 100"},docs:{canvas:{sourceState:"shown"}}}},n={args:{title:"No padding"},render:({title:a})=>e.createElement(t,{open:!0,noSectionPadding:!0,title:a},e.createElement(d,{variant:"body"},"In that case you should use the 'noSectionPadding' prop."))},s={args:{title:"Clear"},render:({title:a})=>e.createElement(t,{open:!0,variant:"clear",title:a},e.createElement(d,{variant:"body"},"The header becomes clear"))},o={args:{title:"Custom header"},render:({title:a})=>e.createElement(t,{open:!0,title:a,renderHeader:c=>e.createElement(_,{variant:"heading-4",tag:"span"},e.createElement("span",{className:"flex gap-8 items-center"},e.createElement(q,{role:"presentation"})," ",c))},e.createElement(d,{variant:"body"},"You can create a custom header using the renderHeader prop."))},l={args:{title:"Sticky header"},render:({title:a})=>e.createElement(t,{open:!0,title:a,sticky:{top:"-1px"}},"This does not work in Storybook docs, so use this as a code example only.")},A=`
const [isOpen, setIsOpen] = useState<boolean>(false)
return (<Collapsible {...args} open={isOpen} onToggle={setIsOpen} />)
`,i={args:{title:"Controlled",controlled:!0},render:a=>{const[c,I]=N.useState(!1);return e.createElement(t,{...a,open:c,onToggle:I})},parameters:{docs:{source:{code:A}}}};var p,u,m;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    title: "Single Collapsible"
  },
  parameters: {
    backgrounds: {
      default: "Gray 100"
    },
    docs: {
      canvas: {
        sourceState: "shown"
      }
    }
  }
}`,...(m=(u=r.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};var g,b,C;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    title: "No padding"
  },
  render: ({
    title
  }) => <Collapsible open noSectionPadding title={title}>
      <Text variant="body">
        In that case you should use the &apos;noSectionPadding&apos; prop.
      </Text>
    </Collapsible>
}`,...(C=(b=n.parameters)==null?void 0:b.docs)==null?void 0:C.source}}};var S,h,y;s.parameters={...s.parameters,docs:{...(S=s.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    title: "Clear"
  },
  render: ({
    title
  }) => <Collapsible open variant="clear" title={title}>
      <Text variant="body">The header becomes clear</Text>
    </Collapsible>
}`,...(y=(h=s.parameters)==null?void 0:h.docs)==null?void 0:y.source}}};var v,f,T;o.parameters={...o.parameters,docs:{...(v=o.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    title: "Custom header"
  },
  render: ({
    title: standardTitle
  }) => <Collapsible open title={standardTitle} renderHeader={title => <Heading variant="heading-4" tag="span">
          <span className="flex gap-8 items-center">
            <AddIcon role="presentation" /> {title}
          </span>
        </Heading>}>
      <Text variant="body">
        You can create a custom header using the renderHeader prop.
      </Text>
    </Collapsible>
}`,...(T=(f=o.parameters)==null?void 0:f.docs)==null?void 0:T.source}}};var x,k,E;l.parameters={...l.parameters,docs:{...(x=l.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    title: "Sticky header"
  },
  render: ({
    title
  }) => <Collapsible open title={title} sticky={{
    top: "-1px"
  }}>
      This does not work in Storybook docs, so use this as a code example only.
    </Collapsible>
}`,...(E=(k=l.parameters)==null?void 0:k.docs)==null?void 0:E.source}}};var O,P,H;i.parameters={...i.parameters,docs:{...(O=i.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    title: "Controlled",
    controlled: true
  },
  render: args => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    return <Collapsible {...args} open={isOpen} onToggle={setIsOpen} />;
  },
  parameters: {
    docs: {
      source: {
        code: controlledSourceCode
      }
    }
  }
}`,...(H=(P=i.parameters)==null?void 0:P.docs)==null?void 0:H.source}}};const j=["Playground","NoPadding","Clear","CustomHeader","Sticky","Controlled"],z=Object.freeze(Object.defineProperty({__proto__:null,Clear:s,Controlled:i,CustomHeader:o,NoPadding:n,Playground:r,Sticky:l,__namedExportsOrder:j,default:w},Symbol.toStringTag,{value:"Module"}));export{z as C,n as N,r as P,l as S,s as a,o as b,i as c};

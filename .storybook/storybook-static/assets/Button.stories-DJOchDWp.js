import{R as e,r as $}from"./index-CTjT7uj6.js";import{A as ee}from"./ArrowForwardIcon-BVPHqAvL.js";import{A as re}from"./ArrowRightIcon-CtsqbiFB.js";import{T as te}from"./TextField-C70Pg5K2.js";import{B as t}from"./Button-DDkdQqLR.js";import{L as ae}from"./LoadingInput-X-emq8Sb.js";const ne={title:"Actions/Button/v2",component:t,args:{label:"Label"}},n={parameters:{docs:{canvas:{sourceState:"shown"}}}},a={render:({reversed:r})=>e.createElement(e.Fragment,null,e.createElement(t,{label:"Default",reversed:r}),e.createElement(t,{label:"Primary",primary:!0,reversed:r}),e.createElement(t,{label:"Destructive",destructive:!0,reversed:r}),e.createElement(t,{label:"Secondary",secondary:!0,reversed:r}),!r&&e.createElement(t,{label:"Secondary Destructive",secondary:!0,destructive:!0})),decorators:[r=>e.createElement("div",{style:{display:"flex",gap:"1rem"}},e.createElement(r,null))],parameters:{controls:{disable:!0}}},o={...a,args:{reversed:!0},parameters:{...a.parameters,backgrounds:{default:"Purple 700"}}},s={args:{disabled:!0}},oe=`
import { Button, ArrowForwardIcon } from "@kaizen/components"

<Button label="Label" icon={<ArrowForwardIcon role="presentation" />} />
`,c={args:{icon:e.createElement(ee,{role:"presentation"})},parameters:{docs:{source:{code:oe}}}},l={args:{icon:e.createElement(re,{role:"presentation"}),iconPosition:"end"}},i={args:{badge:{text:"3",variant:"active"},secondary:!0}},d={args:{fullWidth:!0}},m={render:()=>e.createElement(e.Fragment,null,e.createElement(t,{label:"Label",working:!0,workingLabel:"Submitting"}),e.createElement(t,{label:"Label",working:!0,workingLabel:"Submitting",workingLabelHidden:!0})),decorators:[r=>e.createElement("div",{style:{display:"flex",gap:"1rem"}},e.createElement(r,null))],parameters:{controls:{disable:!0}}},u={render:()=>e.createElement(ae,{isAnimated:!0,width:13}),parameters:{controls:{disable:!0}}},p={render:()=>e.createElement(e.Fragment,null,e.createElement("form",{className:"mb-6",id:"unique-form-id"},e.createElement(te,{labelText:"Sample text field",defaultValue:"content"})),e.createElement(t,{label:"Submit",type:"submit",form:"unique-form-id",formTarget:"_blank",formAction:"/",formMethod:"get",formEncType:"text/plain",formNoValidate:!1})),parameters:{controls:{disable:!0}}},g={render:()=>{const[r,b]=$.useState("Ready"),Z=()=>{r==="Ready"?(b("Working"),setTimeout(()=>b("Completed"),3e3)):b("Ready")};return e.createElement(t,{label:r,working:r==="Working",workingLabel:"Button is doing some work",workingLabelHidden:!0,onClick:Z})}};var f,y,S;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
  parameters: {
    docs: {
      canvas: {
        sourceState: "shown"
      }
    }
  }
}`,...(S=(y=n.parameters)==null?void 0:y.docs)==null?void 0:S.source}}};var k,v,w;a.parameters={...a.parameters,docs:{...(k=a.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: ({
    reversed
  }) => <>
      <Button label="Default" reversed={reversed} />
      <Button label="Primary" primary reversed={reversed} />
      <Button label="Destructive" destructive reversed={reversed} />
      <Button label="Secondary" secondary reversed={reversed} />
      {!reversed && <Button label="Secondary Destructive" secondary destructive />}
    </>,
  decorators: [Story => <div style={{
    display: "flex",
    gap: "1rem"
  }}>
        <Story />
      </div>],
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(w=(v=a.parameters)==null?void 0:v.docs)==null?void 0:w.source}}};var E,B,L;o.parameters={...o.parameters,docs:{...(E=o.parameters)==null?void 0:E.docs,source:{originalSource:`{
  ...Variants,
  args: {
    reversed: true
  },
  parameters: {
    ...Variants.parameters,
    backgrounds: {
      default: "Purple 700"
    }
  }
}`,...(L=(B=o.parameters)==null?void 0:B.docs)==null?void 0:L.source}}};var x,R,h;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...(h=(R=s.parameters)==null?void 0:R.docs)==null?void 0:h.source}}};var I,F,W;c.parameters={...c.parameters,docs:{...(I=c.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    icon: <ArrowForwardIcon role="presentation" />
  },
  parameters: {
    docs: {
      source: {
        code: sourceCodeIcon
      }
    }
  }
}`,...(W=(F=c.parameters)==null?void 0:F.docs)==null?void 0:W.source}}};var A,P,T;l.parameters={...l.parameters,docs:{...(A=l.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    icon: <ArrowRightIcon role="presentation" />,
    iconPosition: "end"
  }
}`,...(T=(P=l.parameters)==null?void 0:P.docs)==null?void 0:T.source}}};var C,D,V;i.parameters={...i.parameters,docs:{...(C=i.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    badge: {
      text: "3",
      variant: "active"
    },
    secondary: true
  }
}`,...(V=(D=i.parameters)==null?void 0:D.docs)==null?void 0:V.source}}};var _,N,q;d.parameters={...d.parameters,docs:{...(_=d.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    fullWidth: true
  }
}`,...(q=(N=d.parameters)==null?void 0:N.docs)==null?void 0:q.source}}};var H,M,O;m.parameters={...m.parameters,docs:{...(H=m.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: () => <>
      <Button label="Label" working workingLabel="Submitting" />
      <Button label="Label" working workingLabel="Submitting" workingLabelHidden />
    </>,
  decorators: [Story => <div style={{
    display: "flex",
    gap: "1rem"
  }}>
        <Story />
      </div>],
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(O=(M=m.parameters)==null?void 0:M.docs)==null?void 0:O.source}}};var j,z,G;u.parameters={...u.parameters,docs:{...(j=u.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => <LoadingInput isAnimated width={13} />,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(G=(z=u.parameters)==null?void 0:z.docs)==null?void 0:G.source}}};var J,K,Q;p.parameters={...p.parameters,docs:{...(J=p.parameters)==null?void 0:J.docs,source:{originalSource:`{
  render: () => <>
      <form className="mb-6" id="unique-form-id">
        <TextField labelText="Sample text field" defaultValue="content" />
      </form>
      <Button label="Submit" type="submit" form="unique-form-id" formTarget="_blank" formAction="/" formMethod="get" formEncType="text/plain" formNoValidate={false} />
    </>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(Q=(K=p.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var U,X,Y;g.parameters={...g.parameters,docs:{...(U=g.parameters)==null?void 0:U.docs,source:{originalSource:`{
  render: () => {
    const [state, setState] = useState<"Ready" | "Working" | "Completed">("Ready");
    const handleClick = (): void => {
      if (state === "Ready") {
        setState("Working");
        setTimeout(() => setState("Completed"), 3000);
      } else {
        setState("Ready");
      }
    };
    return <Button label={state} working={state === "Working"} workingLabel="Button is doing some work" workingLabelHidden onClick={handleClick} />;
  }
}`,...(Y=(X=g.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};const se=["Playground","Variants","Reversed","Disabled","Icon","IconPosition","Badge","FullWidth","Working","Loading","NativeFormButton","ResolveWorking"],pe=Object.freeze(Object.defineProperty({__proto__:null,Badge:i,Disabled:s,FullWidth:d,Icon:c,IconPosition:l,Loading:u,NativeFormButton:p,Playground:n,ResolveWorking:g,Reversed:o,Variants:a,Working:m,__namedExportsOrder:se,default:ne},Symbol.toStringTag,{value:"Module"}));export{pe as B,s as D,d as F,c as I,u as L,p as N,n as P,o as R,a as V,m as W,l as a,i as b,g as c};

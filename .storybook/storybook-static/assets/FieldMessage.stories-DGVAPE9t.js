import{R as c}from"./index-CTjT7uj6.js";import{F as d}from"./FieldMessage-D8OmrYjz.js";const N={title:"Components/FieldMessage",component:d,args:{message:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullasemper odio vitae sem gravida rutrum."}},e={parameters:{docs:{canvas:{sourceState:"shown"}}}},s={args:{message:"Your email address will be used to send survey notifications and reports"}},a={args:{message:c.createElement("div",null,"Your email address will be used to send survey notifications and reports. Learn more about ",c.createElement("a",{href:"/"},"how your data will be used"))}},r={args:{status:"error",message:"Invalid email provided."}},o={args:{status:"caution",message:"Do not share your password or account details."}},t={args:{status:"success",message:"Your account has been created"}},n={args:{reversed:!0,status:"error"},parameters:{backgrounds:{default:"Purple 700"}},name:"reversed"},i={args:{position:"bottom"},render:u=>c.createElement("div",{className:"flex gap-6"},c.createElement(d,{...u,status:"caution",message:'Position "bottom" will apply margin to the top'}),c.createElement(d,{...u,status:"caution",position:"top",message:'Position "top" will apply margin to the bottom'}))};var m,l,p;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`{
  parameters: {
    docs: {
      canvas: {
        sourceState: "shown"
      }
    }
  }
}`,...(p=(l=e.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};var g,v,b;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    message: "Your email address will be used to send survey notifications and reports"
  }
}`,...(b=(v=s.parameters)==null?void 0:v.docs)==null?void 0:b.source}}};var y,w,S;a.parameters={...a.parameters,docs:{...(y=a.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    message: <div>
        Your email address will be used to send survey notifications and
        reports. Learn more about <a href="/">how your data will be used</a>
      </div>
  }
}`,...(S=(w=a.parameters)==null?void 0:w.docs)==null?void 0:S.source}}};var f,h,P;r.parameters={...r.parameters,docs:{...(f=r.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    status: "error",
    message: "Invalid email provided."
  }
}`,...(P=(h=r.parameters)==null?void 0:h.docs)==null?void 0:P.source}}};var E,x,F;o.parameters={...o.parameters,docs:{...(E=o.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    status: "caution",
    message: "Do not share your password or account details."
  }
}`,...(F=(x=o.parameters)==null?void 0:x.docs)==null?void 0:F.source}}};var M,Y,_;t.parameters={...t.parameters,docs:{...(M=t.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    status: "success",
    message: "Your account has been created"
  }
}`,...(_=(Y=t.parameters)==null?void 0:Y.docs)==null?void 0:_.source}}};var D,H,R;n.parameters={...n.parameters,docs:{...(D=n.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    reversed: true,
    status: "error"
  },
  parameters: {
    backgrounds: {
      default: "Purple 700"
    }
  },
  name: "reversed"
}`,...(R=(H=n.parameters)==null?void 0:H.docs)==null?void 0:R.source}}};var T,C,L;i.parameters={...i.parameters,docs:{...(T=i.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    position: "bottom"
  },
  render: args => <div className="flex gap-6">
      <FieldMessage {...args} status="caution" message='Position "bottom" will apply margin to the top' />
      <FieldMessage {...args} status="caution" position="top" message='Position "top" will apply margin to the bottom' />
    </div>
}`,...(L=(C=i.parameters)==null?void 0:C.docs)==null?void 0:L.source}}};const O=["Playground","HelperText","DetailedHelperText","Error","Cautionary","Success","Reversed","Position"],I=Object.freeze(Object.defineProperty({__proto__:null,Cautionary:o,DetailedHelperText:a,Error:r,HelperText:s,Playground:e,Position:i,Reversed:n,Success:t,__namedExportsOrder:O,default:N},Symbol.toStringTag,{value:"Module"}));export{o as C,a as D,r as E,I as F,s as H,e as P,n as R,t as S,i as a};

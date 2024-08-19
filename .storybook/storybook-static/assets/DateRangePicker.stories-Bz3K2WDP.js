import{R as a,r as s}from"./index-CTjT7uj6.js";import{f as H,w as l,u as m,e as p}from"./index-BySiBzEG.js";import{D as V,f as I}from"./formatDateRangeValue-CSGRIFzC.js";const F={title:"Components/Date controls/DateRangePicker",component:V,args:{labelText:"Label",onChange:H()}},c={render:e=>{var u,w;const[t,C]=s.useState({from:(u=e==null?void 0:e.selectedDateRange)==null?void 0:u.from,to:(w=e==null?void 0:e.selectedDateRange)==null?void 0:w.to}),[P,k]=s.useState(e.value),A=g=>{var v;C(g),(v=e.onChange)==null||v.call(e,g)};return s.useEffect(()=>{k(I(t))},[t]),a.createElement(a.Fragment,null,a.createElement(V,{...e,value:P,selectedDateRange:t,onChange:A}))}},n={...c,parameters:{docs:{canvas:{sourceState:"shown"}}}},d={from:new Date(2022,2,6),to:new Date(2022,2,15)},o={...c,name:"Limited viewport autoplacement above",args:{labelText:"Calendar with space above",selectedDateRange:d},parameters:{viewport:{viewports:{LimitedViewportAutoPlace:{name:"Limited vertical space",styles:{width:"1024px",height:"500px"}}},defaultViewport:"LimitedViewportAutoPlace"}},decorators:[e=>a.createElement("div",{className:"mt-[350px]"},a.createElement(e,null))],play:async({canvasElement:e})=>{const t=l(e);await m.click(t.getByRole("button",{name:/Change date:/})),await p(t.getByRole("dialog")).toBeInTheDocument()}},r={...c,name:"Limited viewport height",args:{labelText:"Calendar with reduced space below",selectedDateRange:d},parameters:{viewport:{viewports:{LimitedViewportHeight:{name:"Limited vertical space",styles:{width:"1024px",height:"300px"}}},defaultViewport:"LimitedViewportHeight"}},decorators:[e=>a.createElement("div",{className:"mb-[150px]"},a.createElement(e,null))],play:async({canvasElement:e})=>{const t=l(e);await m.click(t.getByRole("button",{name:/Change date:/})),await p(t.getByRole("dialog")).toBeInTheDocument()}},i={...c,name:"Full viewport height",args:{labelText:"Calendar with full space below",selectedDateRange:d},decorators:[e=>a.createElement("div",{className:"mb-[350px]"},a.createElement(e,null))],play:async({canvasElement:e})=>{const t=l(e);await m.click(t.getByRole("button",{name:/Change date:/})),await p(t.getByRole("dialog")).toBeInTheDocument()}};var h,y,b;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`{
  ...DateRangePickerTemplate,
  parameters: {
    docs: {
      canvas: {
        sourceState: "shown"
      }
    }
  }
}`,...(b=(y=n.parameters)==null?void 0:y.docs)==null?void 0:b.source}}};var R,D,x;o.parameters={...o.parameters,docs:{...(R=o.parameters)==null?void 0:R.docs,source:{originalSource:`{
  ...DateRangePickerTemplate,
  name: "Limited viewport autoplacement above",
  args: {
    labelText: "Calendar with space above",
    selectedDateRange
  },
  parameters: {
    viewport: {
      viewports: {
        LimitedViewportAutoPlace: {
          name: "Limited vertical space",
          styles: {
            width: "1024px",
            height: "500px"
          }
        }
      },
      defaultViewport: "LimitedViewportAutoPlace"
    }
  },
  decorators: [Story => <div className="mt-[350px]">
        <Story />
      </div>],
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByRole("button", {
      name: /Change date:/
    }));
    await expect(canvas.getByRole("dialog")).toBeInTheDocument();
  }
}`,...(x=(D=o.parameters)==null?void 0:D.docs)==null?void 0:x.source}}};var f,E,L;r.parameters={...r.parameters,docs:{...(f=r.parameters)==null?void 0:f.docs,source:{originalSource:`{
  ...DateRangePickerTemplate,
  name: "Limited viewport height",
  args: {
    labelText: "Calendar with reduced space below",
    selectedDateRange
  },
  parameters: {
    viewport: {
      viewports: {
        LimitedViewportHeight: {
          name: "Limited vertical space",
          styles: {
            width: "1024px",
            height: "300px"
          }
        }
      },
      defaultViewport: "LimitedViewportHeight"
    }
  },
  decorators: [Story => <div className="mb-[150px]">
        <Story />
      </div>],
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByRole("button", {
      name: /Change date:/
    }));
    await expect(canvas.getByRole("dialog")).toBeInTheDocument();
  }
}`,...(L=(E=r.parameters)==null?void 0:E.docs)==null?void 0:L.source}}};var T,B,S;i.parameters={...i.parameters,docs:{...(T=i.parameters)==null?void 0:T.docs,source:{originalSource:`{
  ...DateRangePickerTemplate,
  name: "Full viewport height",
  args: {
    labelText: "Calendar with full space below",
    selectedDateRange
  },
  decorators: [Story => <div className="mb-[350px]">
        <Story />
      </div>],
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByRole("button", {
      name: /Change date:/
    }));
    await expect(canvas.getByRole("dialog")).toBeInTheDocument();
  }
}`,...(S=(B=i.parameters)==null?void 0:B.docs)==null?void 0:S.source}}};const N=["Playground","AboveIfAvailable","LimitedViewportHeight","FullViewportHeight"],z=Object.freeze(Object.defineProperty({__proto__:null,AboveIfAvailable:o,FullViewportHeight:i,LimitedViewportHeight:r,Playground:n,__namedExportsOrder:N,default:F},Symbol.toStringTag,{value:"Module"}));export{o as A,z as D,i as F,r as L,n as P};

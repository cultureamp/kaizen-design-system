import{R as e}from"./index-CTjT7uj6.js";import{i as ie}from"./isChromatic-VqprqId_.js";import{A as y}from"./AddIcon-C6V_KfCs.js";import{Q as se}from"./QuestionIcon-Bxxn-ARD.js";import{L as ae}from"./Label-DlmzItqQ.js";import{T as E}from"./Text-D2gQH1xL.js";import{P as pe}from"./Tooltip.spec.stories-LQ4b0Ym3.js";import{a as t,T as n}from"./TooltipTrigger-WFlHsgfK.js";import{B as T}from"./Button-DDkdQqLR.js";import{I as v}from"./IconButton-DH93ECWt.js";import{I as oe}from"./Input-BFyrvMXQ.js";import{F as ce}from"./FieldMessage-D8OmrYjz.js";import{F as b}from"./Focusable-DOEBf_Rm.js";import"./SVG-7WFwBCn9.js";import"./index-CCQ3W5xA.js";import"./index-BySiBzEG.js";import"./index-DZLKizrv.js";import"./Tag-D-4sFjnu.js";import"./TabPanels-DLb-4Dql.js";import"./useFocusable-CuIK6Qs-.js";import"./focusSafely-ByiDPXQJ.js";import"./SSRProvider-C8o06Znb.js";import"./Badge-D9GUNioS.js";import"./utils-e-dMXvly.js";import"./index-9r8iugjR.js";import"./mergeClassNames-DEvgSslo.js";import"./OverlayArrow-5tjFEuMh.js";import"./useOverlayTriggerState-B1dSu2Ro.js";import"./useFocusWithin-C7oArVkD.js";import"./useControlledState-CEg4Rl-x.js";import"./context-AGV5_Mtb.js";import"./useHover-Bq751pFs.js";import"./usePress-nudZ2Xgz.js";import"./GenericButton-CnAyP-Wm.js";import"./Link-DkKiEG74.js";import"./LoadingSpinner-DHfeGxpm.js";import"./VisuallyHidden-CDYjeGzr.js";import"./ExclamationWhiteIcon-dXgVQUA_.js";const Je={title:"Overlays/Tooltip/v3/Docs Assets",component:t,parameters:{layout:"centered",a11y:{disable:!0}},args:{defaultOpen:ie()},argTypes:{UNSTABLE_portalContainer:{control:!1,table:{disable:!0}},triggerRef:{control:!1}}},r={render:({defaultOpen:h,isOpen:f,...le})=>e.createElement(n,{defaultOpen:!0,isOpen:f},e.createElement(T,{label:"Button"}),e.createElement(t,{...le},"Tooltip content"))},a={render:()=>e.createElement(n,null,e.createElement(v,{label:"Add something",icon:e.createElement(y,{role:"presentation"}),primary:!0,"aria-describedby":null}),e.createElement(t,null,"Add something"))},o={...pe},l={render:()=>e.createElement("div",null,e.createElement(ae,null,"Password"),e.createElement(oe,{type:"text"}),e.createElement(ce,{message:"Password must be at least 8 characters."}))},i={parameters:{docs:{source:{type:"dynamic"}}},render:()=>e.createElement("div",null,e.createElement(n,null,e.createElement(b,null,e.createElement(ae,null,"Password"," ",e.createElement("span",{className:"inline-flex align-middle"},e.createElement(se,{classNameOverride:"w-[15px] m-auto",role:"presentation"})))),e.createElement(t,null,"Password must be at least 8 characters")),e.createElement("div",{className:"flex gap-4"},e.createElement(oe,{type:"text"})))},s={parameters:{docs:{source:{type:"dynamic"}}},render:()=>e.createElement("div",null,e.createElement(n,null,e.createElement(v,{label:"Add topic",icon:e.createElement(y,{role:"presentation"}),primary:!0,"aria-describedby":null}),e.createElement(t,null,"Add topic to agenda")))},p={parameters:{docs:{source:{type:"dynamic"}}},render:()=>e.createElement("div",null,e.createElement(n,null,e.createElement(v,{label:"Add something",icon:e.createElement(y,{role:"presentation"}),primary:!0,"aria-describedby":null}),e.createElement(t,null,"Add Topic to agenda. This will create a new topic where you can discuss recent work with your manager."," ")))},c={play:void 0,render:()=>e.createElement("div",{className:"flex flex-col gap-8 pl-96 overflow-hidden max-w-[250px]"},e.createElement(n,null,e.createElement(T,{label:"Should flip"}),e.createElement(t,{placement:"end"},"Tooltip content")),e.createElement(n,null,e.createElement(T,{label:"Won't flip"}),e.createElement(t,{placement:"end",shouldFlip:!1},"Tooltip content"))),parameters:{viewport:{viewports:{small:{name:"small",styles:{width:"300px",height:"300px"}}},defaultViewport:"small"}}},d={play:void 0,args:{placement:"end",shouldFlip:!1},render:()=>{const[h,f]=e.useState(!1);return e.createElement("div",{className:"flex gap-12"},e.createElement("button",{type:"button",onClick:()=>f(!h)},"Toggle open"),e.createElement(n,{isOpen:h},e.createElement(T,{label:"Button"}),e.createElement(t,null,"Tooltip content")))}},m={play:void 0,args:{placement:"end",shouldFlip:!1},render:()=>e.createElement(E,{variant:"body",classNameOverride:"bg-white p-12 rounded"},"This is an example of an inline"," ",e.createElement(n,null,e.createElement(b,null,e.createElement("a",{href:"#inline-test",className:"text-inherit"},"tooltip")),e.createElement(t,null,"Tooltip label")))},u={play:void 0,args:{placement:"end",shouldFlip:!1},render:()=>e.createElement(E,{variant:"body",classNameOverride:"bg-white p-12 rounded"},"This is an example of an inline"," ",e.createElement(n,null,e.createElement(b,null,e.createElement("span",null,"tooltip")),e.createElement(t,null,"Tooltip label")))},g={play:void 0,args:{placement:"end",shouldFlip:!1},render:()=>e.createElement(E,{variant:"body",classNameOverride:"bg-white p-12 rounded"},"Use tooltips inline when you want to"," ",e.createElement(n,null,e.createElement(b,null,e.createElement("a",{href:"#describe-link",className:"text-inherit"},"describe a link")),e.createElement(t,null,"Tooltip label")),".")};var w,x,F;r.parameters={...r.parameters,docs:{...(w=r.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: ({
    defaultOpen: _,
    isOpen,
    ...args
  }) => <TooltipTrigger defaultOpen={true} isOpen={isOpen}>
      <Button label="Button" />
      <Tooltip {...args}>Tooltip content</Tooltip>
    </TooltipTrigger>
}`,...(F=(x=r.parameters)==null?void 0:x.docs)==null?void 0:F.source}}};var O,N,A;a.parameters={...a.parameters,docs:{...(O=a.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: () => <TooltipTrigger>
      <IconButton label="Add something" icon={<AddIcon role="presentation" />} primary
    // Negate the aria description (added by RAC) as it should be the
    // same as the accessible name, therefore no need to duplicate it
    aria-describedby={null} />
      <Tooltip>Add something</Tooltip>
    </TooltipTrigger>
}`,...(A=(N=a.parameters)==null?void 0:N.docs)==null?void 0:A.source}}};var S,I,P;o.parameters={...o.parameters,docs:{...(S=o.parameters)==null?void 0:S.docs,source:{originalSource:`{
  ...TestStories.Placement
}`,...(P=(I=o.parameters)==null?void 0:I.docs)==null?void 0:P.source}}};var B,D,C;l.parameters={...l.parameters,docs:{...(B=l.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: () => <div>
      <Label>Password</Label>
      <Input type="text" />
      <FieldMessage message="Password must be at least 8 characters." />
    </div>
}`,...(C=(D=l.parameters)==null?void 0:D.docs)==null?void 0:C.source}}};var k,L,R;i.parameters={...i.parameters,docs:{...(k=i.parameters)==null?void 0:k.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        type: "dynamic"
      }
    }
  },
  render: () => <div>
      <TooltipTrigger>
        <Focusable>
          <Label>
            Password{" "}
            <span className="inline-flex align-middle">
              <QuestionIcon classNameOverride="w-[15px] m-auto" role="presentation" />
            </span>
          </Label>
        </Focusable>
        <Tooltip>Password must be at least 8 characters</Tooltip>
      </TooltipTrigger>
      <div className="flex gap-4">
        <Input type="text" />
      </div>
    </div>
}`,...(R=(L=i.parameters)==null?void 0:L.docs)==null?void 0:R.source}}};var U,_,Q;s.parameters={...s.parameters,docs:{...(U=s.parameters)==null?void 0:U.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        type: "dynamic"
      }
    }
  },
  render: () => <div>
      <TooltipTrigger>
        <IconButton label="Add topic" icon={<AddIcon role="presentation" />} primary
      // Negate the aria description (added by RAC) as it should be the
      // same as the accessible name, therefore no need to duplicate it
      aria-describedby={null} />
        <Tooltip>Add topic to agenda</Tooltip>
      </TooltipTrigger>
    </div>
}`,...(Q=(_=s.parameters)==null?void 0:_.docs)==null?void 0:Q.source}}};var M,V,W;p.parameters={...p.parameters,docs:{...(M=p.parameters)==null?void 0:M.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        type: "dynamic"
      }
    }
  },
  render: () => <div>
      <TooltipTrigger>
        <IconButton label="Add something" icon={<AddIcon role="presentation" />} primary
      // Negate the aria description (added by RAC) as it should be the
      // same as the accessible name, therefore no need to duplicate it
      aria-describedby={null} />
        <Tooltip>
          Add Topic to agenda. This will create a new topic where you can
          discuss recent work with your manager.{" "}
        </Tooltip>
      </TooltipTrigger>
    </div>
}`,...(W=(V=p.parameters)==null?void 0:V.docs)==null?void 0:W.source}}};var $,j,q;c.parameters={...c.parameters,docs:{...($=c.parameters)==null?void 0:$.docs,source:{originalSource:`{
  play: undefined,
  render: () => <div className="flex flex-col gap-8 pl-96 overflow-hidden max-w-[250px]">
      <TooltipTrigger>
        <Button label="Should flip" />
        <Tooltip placement="end">Tooltip content</Tooltip>
      </TooltipTrigger>
      <TooltipTrigger>
        <Button label="Won't flip" />
        <Tooltip placement="end" shouldFlip={false}>
          Tooltip content
        </Tooltip>
      </TooltipTrigger>
    </div>,
  parameters: {
    viewport: {
      viewports: {
        small: {
          name: "small",
          styles: {
            width: "300px",
            height: "300px"
          }
        }
      },
      defaultViewport: "small"
    }
  }
}`,...(q=(j=c.parameters)==null?void 0:j.docs)==null?void 0:q.source}}};var z,G,H;d.parameters={...d.parameters,docs:{...(z=d.parameters)==null?void 0:z.docs,source:{originalSource:`{
  play: undefined,
  args: {
    placement: "end",
    shouldFlip: false
  },
  render: () => {
    const [isOpen, setIsOpen] = React.useState<boolean>(false);
    return <div className="flex gap-12">
        <button type="button" onClick={() => setIsOpen(!isOpen)}>
          Toggle open
        </button>
        <TooltipTrigger isOpen={isOpen}>
          <Button label="Button" />
          <Tooltip>Tooltip content</Tooltip>
        </TooltipTrigger>
      </div>;
  }
}`,...(H=(G=d.parameters)==null?void 0:G.docs)==null?void 0:H.source}}};var J,K,X;m.parameters={...m.parameters,docs:{...(J=m.parameters)==null?void 0:J.docs,source:{originalSource:`{
  play: undefined,
  args: {
    placement: "end",
    shouldFlip: false
  },
  render: () => <Text variant="body" classNameOverride="bg-white p-12 rounded">
      This is an example of an inline{" "}
      <TooltipTrigger>
        <Focusable>
          <a href="#inline-test" className="text-inherit">
            tooltip
          </a>
        </Focusable>
        <Tooltip>Tooltip label</Tooltip>
      </TooltipTrigger>
    </Text>
}`,...(X=(K=m.parameters)==null?void 0:K.docs)==null?void 0:X.source}}};var Y,Z,ee;u.parameters={...u.parameters,docs:{...(Y=u.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  play: undefined,
  args: {
    placement: "end",
    shouldFlip: false
  },
  render: () => <Text variant="body" classNameOverride="bg-white p-12 rounded">
      This is an example of an inline{" "}
      <TooltipTrigger>
        <Focusable>
          <span>tooltip</span>
        </Focusable>
        <Tooltip>Tooltip label</Tooltip>
      </TooltipTrigger>
    </Text>
}`,...(ee=(Z=u.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var te,ne,re;g.parameters={...g.parameters,docs:{...(te=g.parameters)==null?void 0:te.docs,source:{originalSource:`{
  play: undefined,
  args: {
    placement: "end",
    shouldFlip: false
  },
  render: () => <Text variant="body" classNameOverride="bg-white p-12 rounded">
      Use tooltips inline when you want to{" "}
      <TooltipTrigger>
        <Focusable>
          <a href="#describe-link" className="text-inherit">
            describe a link
          </a>
        </Focusable>
        <Tooltip>Tooltip label</Tooltip>
      </TooltipTrigger>
      .
    </Text>
}`,...(re=(ne=g.parameters)==null?void 0:ne.docs)==null?void 0:re.source}}};const Ke=["Playground","Primary","Placement","DoFieldTooltip","DontFieldTooltip","DoConcise","DontConcise","ShouldFlip","UncontrolledState","TriggerDo","TriggerDont","TriggerLinkDescription"];export{s as DoConcise,l as DoFieldTooltip,p as DontConcise,i as DontFieldTooltip,o as Placement,r as Playground,a as Primary,c as ShouldFlip,m as TriggerDo,u as TriggerDont,g as TriggerLinkDescription,d as UncontrolledState,Ke as __namedExportsOrder,Je as default};
